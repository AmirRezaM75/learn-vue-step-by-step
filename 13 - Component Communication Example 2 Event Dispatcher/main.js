// window.Event = new Vue();

// Wrap $emit and $on API
window.Event = new class {
    constructor() {
        this.vue = new Vue();
    }

    fire(event, data = null) {
        this.vue.$emit(event, data);
    }

    listen(event, callback) {
        this.vue.$on(event, callback);
    }
}
/*
* Any vue instance has the ability to listen and emit using $on and $emit
* and has access to those basic event structures we can create a root vue instance:
* So on any other component, all we have to do is listening for an event on this particular instance
* and we are not limited to parent child communication alone. That's why we are using this shared event instance.
*/

Vue.component('coupon', {
    template: "<input type='text' placeholder='Enter your code here' @blur='couponApplied'>",
    methods: {
        couponApplied() { Event.fire('applied'); }
    }
});

new Vue({
    el: '#root',
    created() {
        Event.listen('applied', () => alert('Root: Coupon applied'));
    }
});
