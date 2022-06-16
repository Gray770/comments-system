var Form = document.getElementById('form')
var commentsList = document.getElementById('comments-list')
var commentTemplate = document.getElementById('comment-template')


Form.addEventListener("submit", addNewComment);

function addNewComment(e){
    e.preventDefault();
    var addNewComment = {
        username: document.getElementById('username').value,
        content: document.getElementById('content').value
    }
    console.log(addNewComment)

    var date = new Date()
    var dateTime = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear() + " " + date.getHours() + ":" + (date.getMinutes()<10?'0':'') + date.getMinutes(); // ? = if...else

    var newCommentInfo = commentTemplate.innerHTML.replace('{{name}}',addNewComment.username);
    newCommentInfo = newCommentInfo.replace('{{dateTime}}',dateTime);
    newCommentInfo = newCommentInfo.replace('{{content}}',addNewComment.content);
    console.log(newCommentInfo)

    var newComment = document.createElement('div');
    newComment.classList.add('user-comment'); // assigns 'user-comment' class to div previously created
    newComment.textContent = newCommentInfo; // changes placeholders to content from addNewComment variable
    
    if(addNewComment.username.length > 0 && addNewComment.content.length > 0){ // checks if form provided name and content
        commentsList.appendChild(newComment); // creates new div on the end
    }
}

// use textContent instead of innerHTML because it's less exploitable for xss attacks
// example: post <img src="x" onerror='alert("xd")'/> in comment content when there's innerHTML used