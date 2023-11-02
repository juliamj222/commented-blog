// expected traffic: http://localhost:4000/Blog-Server
const router = require("express").Router(); // variable called router, and export it!
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const BLOG_PATH = "./API/blog.json";

/* Endpoint: http://localhost:4000/Blog-Server/
display all comments from the blog.json file. */
router.get("/", (req, res) => {
  let commentArray = readComments();
  res.json({ message: "Showing all comments", comments: commentArray });
});

// helper functions

// read function for reading a file!
function readComments() {
  const file = fs.readFileSync(BLOG_PATH);
  return JSON.parse(file);
}

// save function to save the comments
function save(data) {
  const file = fs.writeFileSync(BLOG_PATH, JSON.stringify(data));
  //return JSON.parse(file);
}

/* Endpoint: http://localhost:4000/Blog-Server/oneComment/:post_id
one comment from the database selected by its post_id */
router.get("/oneComment/:post_id", async (req, res) => {
  console.log(req.params);
  let commentArray = readComments();
  let commentToFind = commentArray.find(
    (commentObject) => commentObject.post_id == req.params.post_id
  );
  res.json({ message: "Showing this comment", commentToFind: commentToFind });
});

/* Endpoint: http://localhost:4000/Blog-Server/update/:post_id
create a new entry which will be appended to the .json file's outermost array. */
router.post("/newComment", (req, res) => {
  const { title, author, body } = req.body;
  let commentArray = readComments();
  let newComment = {
    post_id: uuidv4(),
    title: title,
    author: author,
    body: body,
  };
  commentArray.push(newComment);
  save(commentArray);
  res.json({
    message: "Comment added successfully",
    comments: commentArray,
  });
});

/* Endpoint: http://localhost:4000/Blog-Server/deleteComment
allow us to update an existing entry once a match has been found. The search should be done via a query parameter, whereas update information should be enclosed within the body. */

router.patch("/update/:post_id", async (req, res) => {
  try {
    let commentArray = readComments();
    const post_id = req.params.post_id;
    const data = req.body;
    // find the comment with the post_id
    const commentIndex = commentArray.findIndex(
      (commentObject) => commentObject.post_id === post_id
    );
    if (commentIndex === -1) {
      throw new Error("Comment not found");
    }
    // change the comment
    commentArray[commentIndex] = { ...commentArray[commentIndex], ...data };
    save(commentArray);
    res.json({
      message: "Success from Update",
      commentObject: commentArray[commentIndex],
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

/* Endpoint: http://localhost:4000/Blog-Server/deleteComment
allow us to delete an entry from our .json file. This should be done thru the utilization of the parameter. */

router.delete("/deleteComment/:post_id", (req, res) => {
  try {
    commentToDelete = req.params.post_id;
    let commentArray = readComments();
    let filteredCommentArray = commentArray.filter(
      (commentObject) => commentObject.post_id !== commentToDelete
    );
    res.json({ message: "Comment deleted", comments: commentArray });
    save(filteredCommentArray);
  } catch (error) {
    res.status(500).json({ message: "error", errorMessage: error.message });
  }
});

module.exports = router;
