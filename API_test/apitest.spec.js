const axios = require('axios');

describe('GET', () => {
	test('Receive post status is 200', async () => {
		const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
		console.log(await response.data);
		expect(response.status).toEqual(200);
	});

	test('Correct id is returned', async () => {
		const response = await axios.get('https://jsonplaceholder.typicode.com/posts/5');
		console.log(await response.data);
		expect(response.data.id).toEqual(5);
	});
});

describe('POST', () => {
	test('Correct id is returned', async () => {
		const response = await axios.post(
			'https://jsonplaceholder.typicode.com/posts',
			{
				title: 'New ToDo',
				body: 'Feed chickens',
				userId: 1,
			},
			{
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			},
		);
		console.log(await response.data);
		expect(response.data.title).toEqual('New ToDo');
	});
});

describe('UPDATE', () => {
	test('Update todo', async () => {
		const response = await axios.put(
			'https://jsonplaceholder.typicode.com/posts/1',
			{
				id: 1,
				title: 'Edited ToDo',
				body: 'Eat chicken',
				userId: 1,
			},
			{
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			},
		);
		console.log(await response.data);
		expect(response.data.body).toEqual('Eat chicken');
	});
});

describe('DELETE', () => {
	test('Delete todo', async () => {
		const response = await axios.put(
			'https://jsonplaceholder.typicode.com/posts/1');
		console.log(await response.data);
		expect(response.status).toEqual(201);//200 is OK, просто щоб впало
	});
});