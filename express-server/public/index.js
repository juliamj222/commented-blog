let table = document.querySelector(".blog-post"); 

async function showComments(){

let urlDisp = "http://localhost:4000/Blog-Server/";
try{
    let response=await fetch(urlDisp)
    let data= await response.json()
    console.log(data)
    data.comments.forEach((comment)=>{

        let post_id = document.createElement("h6");
        post_id.textContent = `${comment.post_id}`;
        document.body.appendChild(post_id);

        let title = document.createElement("h3");
        title.textContent = `${comment.title}`;
        document.body.appendChild(title);

        let author = document.createElement("p");
        author.textContent = `${comment.author}`;
        document.body.appendChild(author);
  
        let body = document.createElement("p");
        body.textContent = `${comment.body}`;
        document.body.appendChild(body);

    })
    } catch (err){
        console.log(err)
    }
}

showComments()
/* fetch(urlDisp)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.results.forEach((allComments) => {
      let h5 = document.createElement("h5");
      h5.textContent = `${allComments.title}, ${allComments.author}, ${allComments.body}`;
      document.body.appendChild(h5);
    });
  })
  .catch((err) => console.error(err))
  .then(() => console.log("Some code that runs after .catch() error handling"));
 */