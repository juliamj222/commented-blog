# Commented - Blog Server

Backend of a blog application, utilizing Model View Controller architecture.

# Technologies:

* Node
* Express
* Dotenv

# Stories

· Display All Comments:
Given the need to display all comments.
When accessing the endpoint that displays all comments from the database (using blog.json).
Then all comments are displayed.

· Display Single Comment:
Given the need to display a single comment.
When accessing the endpoint that displays one comment selected by its post_id.
Then the specified comment is displayed.

· Create New Entry:
Given the need to create a new entry.
When accessing the endpoint to create a new entry, appended to the .json file's outermost array.
Then a new entry is successfully created.

· Update Existing Entry:
Given the need to update an existing entry.
When accessing the endpoint to update an entry with a specified post_id.
Then the selected entry is successfully updated.

· Delete Entry:
Given the need to delete an entry.
When accessing the endpoint to delete an entry using a specified parameter.
Then the selected entry is successfully deleted.
