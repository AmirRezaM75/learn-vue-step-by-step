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
        let data = {};

        for (let property in this.originalData) {
            data[property] = this[property];
        }

        return data;
    }

    submit(requestType, url) {
        return new Promise((resolve, reject) => {
            axios[requestType](url, this.data())
                .then(response => {
                    this.onSuccess(response.data);

                    resolve(response.data);
                })
                .catch(error => {
                    this.onFail(error.response.data);

                    reject(error.response.data)
                });
        });
    }


    reset() {
        for (let field in this.originalData) {
            this[field] = '';
        }

        this.errors.clear();
    }

    onSuccess(data) {
        alert(data.message);

        this.reset();
    }

    onFail(errors) {
        this.errors.save(errors.errors)
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
            this.form.submit('post', '/projects')
                .then(data => console.log(data))
                .catch(errors => console.log(errors));
        }
    }
});
