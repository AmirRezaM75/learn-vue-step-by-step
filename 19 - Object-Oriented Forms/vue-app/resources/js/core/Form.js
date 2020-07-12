import Errors from './Errors';

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

export default Form;
