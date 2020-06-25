Vue.component('progress-view', {
    /*
    If don't use 'inline-template' we get following error:
    Failed to mount component: template or render function not defined.
    */
    data() {
        return { completionRate: 30 }
    }

});

new Vue({
    el: '#root'
});
