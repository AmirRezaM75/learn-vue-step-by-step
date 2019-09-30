Vue.component('task', {
	template: '<li>task <slot></slot></li>'
});

new Vue({
	el: '#root'
});