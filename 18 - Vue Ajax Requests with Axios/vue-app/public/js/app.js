Vue.prototype.$http = axios;
new Vue({
    el: '#root',
    data: {
        skills: []
    },
    mounted() {
        /* Make an Ajax request:
        1) fetch(): You would need polyfill that for older browsers and it's lower level.
        2) $.ajax(), $.getJson()
        3) Vue resource (not recommended) https://github.com/pagekit/vue-resource
        4) axios
        */

        axios.get('/skills').then(response => this.skills = response.data);
        this.$http.get('/skills').then(response => this.skills = response.data);
    }
});
