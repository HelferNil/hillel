const ToDoController = require('./controllers/ToDoController');
test('Get All todos', async () => {
    const response = await ToDoController.getAllPosts();
    console.log(response.data);
    expect(response.status).toEqual(200);
    expect(response.data.length).toEqual(100);

});

test('Get one todo', async () => {
    const response = await ToDoController.getPost();
    console.log(response.data);
    expect(response.status).toEqual(200);
    expect(response.data.id).toEqual(1);
});


test('Post New todo', async () => {
    const response = await ToDoController.postNewPost();
    console.log(response.data);
    expect(response.status).toEqual(201);
});


test('Update post', async () => {
    const response = await ToDoController.updatePost();
console.log(await response.data),
expect(response.data.body).toEqual('Eat chicken'),
expect(response.status).toEqual(200)});


test('Delete post', async () => {
    const response = await ToDoController.deletePost();
console.log(await response.data),
expect(response.status).toEqual(200)});





