document.querySelector('#btn-1').addEventListener('click',getBlogs);
document.querySelector('#btn-2').addEventListener('click',getJson);
document.querySelector('#btn-3').addEventListener('click',getPosts);
document.querySelector('#addpost').addEventListener('submit',addPosts);

function getBlogs () {
    fetch('api-1.txt')
    .then((res)=>res.text())
    .then((data) => document.querySelector('#output').innerHTML = data )
    .catch((err) => console.log(err))
}

function getJson () {
    fetch('api-2.json')
    .then((res) => res.json())
    .then((data) => {
        let output ='<h1>Json users</h1>'
        data.forEach((user) => {
            output +=   `<h3>${user.name}</h3>
            <p> ${user.email} </p>
            `   
        })
        document.querySelector('#output').innerHTML = output
    })
}


function getPosts () {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((posts) => {
        let output = '<h1>Posts from the fake api</h1>'
        posts.forEach((data) => {
            output += `
            <h3> ${data.id} </h3>
            <p> ${data.title} </p>
            <textarea> ${data.body} </textarea>
            `
        })
        document.querySelector('#output').innerHTML = output ;
    })
}


function addPosts (e) {
 e.preventDefault();

 let title = document.querySelector('#title').value;
 let body = document.querySelector('#body').value;

 fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    body : JSON.stringify({
        title:title,
        body:body
    }),
    headers : {
       'Content-type' : 'application/json'
    }
 })
 .then((res) => res.json())
 .then((data) => console.log(data))
}