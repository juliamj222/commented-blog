let table = document.querySelector(".blog-post");
let commentsData; // the data from all the comments

async function showComments() {
  let urlDisp = "http://localhost:4000/Blog-Server/";
  try {
    let response = await fetch(urlDisp);
    commentsData = await response.json(); 
    console.log(commentsData);

    commentsData.comments.forEach((comment) => {
// the comment information, displayed
      const commentText = `Title: ${comment.title} Author: ${comment.author} Comment: ${comment.body}`;

      // displaying the comment text

      const commentElement = document.createElement("table");
      commentElement.textContent = commentText;

      // Attach a click event listener to the comment element
      commentElement.addEventListener("click", () => {
        passToEdit(comment.post_id); // Pass the ID to passToEdit
      });

      // Append the comment element to the table or the desired container
      table.appendChild(commentElement);
    });
  } catch (err) {
    console.log(err);
  }
}

showComments();

function passToEdit(postId) {
  // Log the clicked comment's ID
  console.log("Clicked ID: " + postId);
}