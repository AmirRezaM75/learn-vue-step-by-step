import Vue from 'vue';
import axios from 'axios';
import Form from './core/Form';

// We probably wanna reference 'axios' & 'Form' all over our project
window.axios = axios;
window.Form = Form;

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
