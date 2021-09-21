// Initializing a variable called HTTP 
const http = new EasyHTTP;


// #1 Synchronous -> this will just return a promise
// To make it async, we remove the variable and use ".then"
const users = http.get('https://jsonplaceholder.typicode.com/users'); 



// #2 - Get Users Asynchronously
http.get('https://jsonplaceholder.typicode.com/users')
   .then(data => console.log(data))
   .catch(err => console.log(err));



// Create the data for the post method 
// User Data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
}
// Create User
http.post('https://jsonplaceholder.typicode.com/users', data)
   .then(data => console.log(data))
   .catch(err => console.log(err));





// Update User
http.put('https://jsonplaceholder.typicode.com/users/2', data)
   .then(data => console.log(data))
   .catch(err => console.log(err));



// Delete User
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err));





