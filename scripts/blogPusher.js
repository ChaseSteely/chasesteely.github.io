//Purpose: To store blogs from the blogFactory into the database
// const db = require("../Database")
// const blogFactory = require("./bolgFactory")
// const blogDom = require("./blogDom")

//find 'blogs' id <article> in the html
const blogEntry = document.getElementById("blogs");

function blogPush() {
    // const Database = db.load()
    // Database.tasks = Database.tasks || [];
    // Add click event listener to the save button
    if (event.target.id === "blogForm__saveButton"){
            // Get the values from the Blog Admin form
            const newBlog = blogFactory(
                document.querySelector("input[name='blogForm__photo']").value,
                document.querySelector("input[name='blogForm__title']").value,
                document.querySelector("textarea[name='blogForm__body']").value
            );
            // Add new article to array
            BlogDatabase.articles.push(newBlog);

            // Sort the articles by their `id` property, descending
            BlogDatabase.articles.sort((p, n) => n.id - p.id);

            // Serialize and store database
            // db.save(Database, "tasks");
            localStorage.setItem("BlogDatabase", JSON.stringify(BlogDatabase));
            document.forms["blogForm"].reset();
            // blogDom()
        }
}
//run the blog button save event above that saves to the Database (blogPush) when anything is clicked in the task div element
blogEntry.addEventListener("click", blogPush)