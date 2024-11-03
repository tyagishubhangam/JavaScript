const API_URL = "https://jsonplaceholder.typicode.com/posts";
document.addEventListener("DOMContentLoaded", fetchPosts)
//fetchPosts()
async function fetchPosts(params) {
    try {
        const response = await fetch(API_URL);
        if(!response.ok){
            throw new Error("Error Occured When fetching data");
            
        }
        const posts = await response.json();
        displayPosts(posts);
        
    } catch (error) {
        console.log(error);
        
    }
}


//displayPosts()
function displayPosts(posts) {
    let postList = document.getElementById("postList");
    postList.innerHtml = "";
    posts.forEach(post => {
        const li = document.createElement("li");
        li.textContent = `${post.title} : ${post.body}`;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";
        deleteButton.onclick = () => deletePost(post.id, li);
        li.appendChild(deleteButton);
        postList.appendChild(li);
    });
}


//createPosts()
document.getElementById("createPost").onclick = async function () {
    const title = document.getElementById("postTitle").value;
    const body = document.getElementById("postBody").value;
    console.log(title, body);
    const newPost = {
        title,
        body,
        userId: 1
    };
    try {
        const response = await fetch(API_URL, {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(newPost)
        });
        if(!response.ok){
            throw new Error("Error while posting");
        }
        const post = await response.json();
        alert("Post created successfully");
        document.getElementById("postTitle").value ="";
        document.getElementById("postBody").value = "";
        fetchPosts();
    } catch (error) {
        console.error(error);
        
    }
    
    
};


//deletePost()
async function deletePost(postId, liElement) {
    try {
        const response = await fetch(`${API_URL}/${postId}`, {
            method : "DELETE"
        });
        if(!response.ok){
            throw new Error("Error when deleteing post");
        }
        liElement.remove();
        alert("post deleted successfully");

    } catch (error) {
        console.error(error);
        
        
    }
}