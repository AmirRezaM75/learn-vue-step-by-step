class Errors {
    constructor() {
        this.errors = {};
    }

    save(errors) {
        this.errors = errors;
    }

    get(field) {
        if (this.errors[field])
            return this.errors[field][0]
    }

    clear(field) {
        if (field)
            return delete this.errors[field];

        this.errors = {};
    }

    has(field) {
        return this.errors.hasOwnProperty(field)
    }

    any() {
        return Object.keys(this.errors).length > 0;
    }
}

class Form {
    constructor(data) {
        this.originalData = data;

        for (let field in data) {
            this[field] = data[field]
            // this['name'] ~= this.name
            // axios['post']() ~= axios.post()
        }

        this.errors = new Errors()
    }


    data() {
        let data = Object.assign({}, this);

        delete data.originalData;
        delete data.errors;

        return data;

    }

    submit(requestType, url) {
        axios[requestType](url, this.data())
            .then(this.onSuccess.bind(this))
            .catch(this.onFail.bind(this)); // error automatically will be passed to function
    }


    reset() {
        for (let field in this.originalData) {
            this[field] = '';
        }
    }

    onSuccess(response) {
        alert(response.data.message);
        this.errors.clear();
        this.reset();
    }

    onFail(error) {
        this.errors.save(error.response.data.errors)
    }

}

new Vue({
    el: '#root',
    data: {
        form: new Form({
            name: '',
            description: '',
        })
    },
    methods: {
        onSubmit() {
            this.form.submit('post', '/projects');
        }
    }
});
