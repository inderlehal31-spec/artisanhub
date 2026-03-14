let posts = [];


function createPost(){

let input = document.getElementById("postInput");

let text = input.value.trim();

if(text === ""){
alert("Write something first");
return;
}

let post = {
content: text,
likes: 0,
comments: []
};

posts.unshift(post);

input.value = "";

renderPosts();

}


function renderPosts(){

let feed = document.getElementById("feed");

feed.innerHTML = "<h2>News Feed</h2>";

posts.forEach((post,index)=>{

let postDiv = document.createElement("div");

postDiv.className = "post";

let html = `
<p>${post.content}</p>

<button class="like-btn" onclick="likePost(${index})">
👍 Like (${post.likes})
</button>

<div>

<input id="commentInput${index}" placeholder="Write comment">

<button class="comment-btn" onclick="addComment(${index})">
Comment
</button>

</div>

`;

post.comments.forEach(c=>{
html += `<p>💬 ${c}</p>`;
});

postDiv.innerHTML = html;

feed.appendChild(postDiv);

});

}


function likePost(index){

posts[index].likes++;

renderPosts();

}


function addComment(index){

let input = document.getElementById("commentInput"+index);

let text = input.value.trim();

if(text === "") return;

posts[index].comments.push(text);

input.value = "";

renderPosts();

}
let email = localStorage.getItem("loggedInUser")

if(email){

let user = JSON.parse(localStorage.getItem(email))

if(user){
document.getElementById("userName").innerText = "Welcome " + user.username
}

}

function logout(){

localStorage.removeItem("loggedInUser")

window.location.href = "/login.html"

}
