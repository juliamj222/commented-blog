//grab the id from the query string
let queryParams=new URLSearchParams(window.location.search);
let id=queryParams.get("post_id");
console.log(post_id)

edit.use(express.static(`${__dirname}/public`)); // Serve static files from the server.