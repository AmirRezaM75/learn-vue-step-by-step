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
        delete this.errors[field];
    }

    has(field) {
        return this.errors.hasOwnProperty(field)
    }

    any() {
        return Object.keys(this.errors).length > 0;
    }
}

new Vue({
    el: '#root',
    data: {
        name: '',
        description: '',
        errors: new Errors()
    },
    methods: {
        onSubmit() {
            /*axios.post('/projects', {
                name: this.name,
                description: this.description
            });*/

            axios.post('/projects', this.$data)
                .then(response => alert(response.data.message))
                .catch(error => this.errors.save(error.response.data.errors));
            /* The problem is when the console.log tries to output the error,
            the string representation is printed, not the object structure, so you do not see the .response property*/
        }
    }
});
