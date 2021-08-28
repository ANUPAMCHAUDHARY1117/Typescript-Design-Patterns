import axios from 'axios';

interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

const config = {
	url: 'https://jsonplaceholder.typicode.com/todos/1',
	method: 'get',
};

axios.get(config['url']).then((response) => {
	const todo = response['data'] as Todo;
	console.log(`
		The todo with ${todo.id}
		has a title of ${todo.title}
		Is it finished? ${todo.completed}
	`);
});
