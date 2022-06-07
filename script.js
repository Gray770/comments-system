var Form = document.getElementById('form')
var commentsList = document.getElementById('comments-list')
var commentTemplate = document.getElementById('comment-template')


Form.addEventListener("submit", addNewComment);

function addNewComment(e){
    e.preventDefault();
    var addNewComment = {
        "name": document.getElementById('username').value,
        "comment": document.getElementById('content').value
    } 
    console.log(addNewComment);

    var newCommentInfo = commentTemplate.innerHTML.replace('{{name}}',addNewComment.name);
    newCommentInfo = newCommentInfo.replace('{{comment}}',addNewComment.comment);

    var newComment = document.createElement('div');
    newComment.classList.add('user-comment'); // assigns 'user-comment' class to div previously created
    newComment.innerHTML = newCommentInfo; // changes placeholders to content from addNewComment variable
    
    if(addNewComment.name.length > 0 && addNewComment.comment.length > 0){ // checks if form provided name and content
        commentsList.appendChild(newComment); // creates new div on the end
    }
}