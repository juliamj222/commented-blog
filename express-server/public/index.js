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
      commentElement.addEventListener("click", (event) => {
        event.preventDefault();
        passToEdit(comment.post_id);
     // Pass the ID to passToEdit
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

const entryForm = document.getElementById("entry-form");
      entryForm.addEventListener("submit", (event)=> {
        event.preventDefault();
        addComment();
        showComments();
      })

      async function addComment() {
        let urlDisp1 = "http://localhost:4000/Blog-Server/newComment";
          let titleElement=document.getElementById("title");
          let authorElement=document.getElementById("author");
          let bodyElement=document.getElementById("body");
          let body={title:titleElement.value, author:authorElement.value, body:bodyElement.value};
          let myHeaders=new Headers();
          myHeaders.append("Content-Type", "application/json")
          const requestOptions={method:"POST",body:JSON.stringify(body), headers:myHeaders};
          let response = await fetch(urlDisp1+requestOptions);
          //let commentToPublish = await response.json(); 
          //console.log(commentToPublish)
        }
