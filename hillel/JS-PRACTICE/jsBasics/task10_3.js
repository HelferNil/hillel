async function getTodo(id) {
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return await data.json();
}

async function getUser(id) {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return await data.json();
}

const todos = [getTodo("1"), getTodo("2"), getTodo("3")];
const users = [getUser("1"), getUser("2"), getUser("3")];

async function getPromises(promises) {
  try {
    let promise1 = Promise.all(promises);
    console.log(await promise1); //Вивід змінної
  } catch (error) {
    console.error("Error:", error);
  }
}

getPromises(todos);
getPromises(users);
