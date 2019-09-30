Vue.component('task-list', {
	// template: '<div><task v-for="task in tasks">{{task.description}}</task></div>',
	// ES6 (we can use template syntax)
	template: `
	<div>
		<task v-for="task in tasks">{{task.description}}</task>
	</div>
	`,
	// We must wrap it up; otherwise we get this error:
	// Cannot use v-for on stateful component root element because it renders multiple elements.
	data() {
		return {
			tasks: [
				{description: 'Buy Shoe', completed: true},
				{description: 'Buy Pencil', completed: false},
				{description: 'Go to Store', completed: true},
				{description: 'Visit Dr', completed: true},
			]
		}
	}
});

Vue.component('task', {
	template: '<li><slot></slot></li>'
});
// For regular vue instances we can set data equal to object;
// However for components, we can't do that because it's not linked to any single instance


new Vue({
	el: '#root'
});