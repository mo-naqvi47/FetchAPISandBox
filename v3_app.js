/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 * Fetch, promises, arrow functions
 * Next up is async await - a ES7 feature . so instead of returning a new promise, we use async functions with await 
 * 
 * 
 * 
 * 2 things happening:
 *  1) Understand who, what, when, where, why
 *  2) Memorize syntax 
 * 
 * how do you memorize both? 
 * how do you understand both 
 **/

// #1 - Creating a ES6 class
// Dont need a constructor because were not using an XHR object to assign to "this.http"
class EasyHTTP {
    // #2 GET method - make HTTP GET request that takes in a URL 
    get(url) {

        // #7 - Return a promise to make this async
        // Promise takes in resolve and reject 
        // resolve = send a response 
        // reject = send a error 
        return new Promise((resolve, reject) => {

            // #3 Fetch . Remember that fetch returns a promise 
            fetch(url)
            
            // #4 - map it to JSON
            .then(res => res.json())
            
            // #5 - get the data and console log it 
            //.then(data => console.log(data))

            // #8 - Instead of just calling the data, we want to call resolve, then the data 
            .then(data => resolve(data))
            
            // #6 - if there is an error, we catch it 
            //.catch(err => console.log(err)); 

            // #9 - Call reject instead of console.log
            .catch(err => reject(err)); 
        })
    }

    // #10 - POST REQUEST 
    // Post takes in data, so we pass that in
    post(url, data){
        return new Promise((resolve, reject) => {
            // When you make the post request, you need to add in an object with some stuff 
            // Headers need the content type
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                // Need to send the body
                // Send the dat that is passed in, but it needs to be wrapped in JSON.stringify
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));


        });
    }




    // #11 - PUT / update 
    put(url, data){
        return new Promise((resolve, reject) => {
            // When you make the post request, you need to add in an object with some stuff 
            // Headers need the content type
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                // Need to send the body
                // Send the dat that is passed in, but it needs to be wrapped in JSON.stringify
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));


        });
    }



    // #12 - Delete 
    delete(url){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(res => res.json())
            // For resolve, we dont need to send back data, so instead lets just send back an empty string 
            // We also dont need to keep "data" as the parameter. We can delete 
            .then(() => resolve('Resource Deleted...'))
            .catch(err => reject(err));


        });
    }
    



}






