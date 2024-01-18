# PROJECT: Blog Server

Backend of a blog application, utilizing Model View Controller architecture.

# Technologies:

* Node
* Express
* Dotenv

# Stories

## Create your project

`npm init -y` to create project.

`express`, `nodemon`, and `dotenv` dependencies installed.

`app.js` file with the entry points. `.gitignore` created and filled with node modules and environment variable.

`api` folder which holds `blog.json` file. data schematic:

```json
[
    {
        "post_id": 1,
        "title": "First Blog Post",
        "author": "Julia MJ",
        "body": "Today is a great day"
    }
]
```
`controllers` folder that stores `routes.js` file. endpoints to handle full CRUD functionality.

## System Design

- [ ] Endpoint that displays all comments from the database. In lieu of database, I use the `blog.json` file.
- [ ] Endpoint that displays one comment from the database selected by its `post_id`
- [ ] Endpoint that allows to create a new entry which will be appended to the `.json` file's outermost array.
- [ ] Endpoint that allows to update an existing entry once a match has been found. The search is done via a query parameter, whereas update information is enclosed within the body.
- [ ] Endpoint that allows to delete an entry from the `.json` file. This is done through the utilization of the parameter.
