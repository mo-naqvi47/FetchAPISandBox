document.getElementById('button1').addEventListener('click', getText); 

document.getElementById('button2').addEventListener('click', getJson); 

document.getElementById('button3').addEventListener('click', getExternal); 


function getText() {
    fetch('test.txt') 
        .then(res => console.log(res))
        .then(res => res.text())
        .then(data => {
            console.log(data);
            document.getElementById('output').innerHTML = data; 
        })
        .catch(err => console.log(err));
} 


function getJson() {
    fetch('posts.json') 
        .then(res => res.json())

        .then(data => {
            console.log(data);
            //document.getElementById('output').innerHTML = data; 
            let output = ''; 
            data.forEach(function(post){
                output += `<li>${post.title}</li>`
            });
            document.getElementById('output').innerHTML = output;

        })
        .catch(err => console.log(err));
} 


function getExternal() {
    fetch('https://api.github.com/users') 
        .then(res => res.json())
        .then(data => {
            console.log(data);

            document.getElementById('output').innerHTML = data; 

            let output = ''; 
            data.forEach(function(user){
                output += `<li>${user.url}</li>`
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => console.log(err));
} 



// NOTE: FETCH DOES NOT AUTOMATICALLY THROW AN ERROR 
// HTTP erros are not caught by .catch() automatically
// You need to check the response and throw an error yourself
fetch('https://devcamper.io/api/v1/bootcamps/34343')
  .then(res => res.json())
  .then(res => {
    if (!res.ok) {
       throw new Error(res.error);
    }
    return res;
  })
  .catch(err => console.log(err));

// You should create a seperate function for error handling
function handleErrors(res) {
    if (!res.ok) throw new Error(res.error);
    return res;
}
   
fetch('https://devcamper.io/api/v1/bootcamps/34343')
    .then(res => res.json())
    .then(handleErrors)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
