function getTodo(id) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => console.error(error));
}

function getUser(id) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => console.error(error));
}

const todos = [getTodo("1"), getTodo("2"), getTodo("3")];
const users = [getUser("1"), getUser("2"), getUser("3")];

Promise.all(todos)
  .then((results) => {
    let promise1 = results;
    console.log(promise1);
  })
  .catch((errors) => {
    console.log(errors);
  });

Promise.all(users)
  .then((results) => {
    let promise1 = results;
    console.log(promise1);
  })
  .catch((errors) => {
    console.log(errors);
  });
