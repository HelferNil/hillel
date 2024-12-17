const BaseController = require('./BaseController');

class ToDoController extends BaseController {
	async getAllPosts() {
		return await this.axiosInstance('/posts');
	}

	async getPost() {
		return await this.axiosInstance('/posts/1');
	}

	async postNewPost() {
		return await this.axiosInstance.post('/posts', {
			title: 'New ToDo',
			body: 'Feed chickens',
			userId: 1,
		});
	}

	async updatePost() {
		return await this.axiosInstance.put(
			'/posts/1',
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
	}

	async deletePost() {
		return await this.axiosInstance.delete('/posts/1');
	}
}
module.exports = new ToDoController();
