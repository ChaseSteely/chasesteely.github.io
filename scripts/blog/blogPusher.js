//Purpose: To store blogs from the blogFactory into the database
const firebaseURL = "https://chasesteelysite.firebaseio.com/blogs"
const paginate = require("./paginate")
const factory = require("./blogFactory")
const component = require("./blogComponent")
const filter = require("./blogFilter")
const blogController = require("./blogController")
const showAdmin = require("./showAdmin")

let editMode = {
    "enabled": false,
    "productId": null
}

/**
 * Add event listener for when a delete button is clicked for a product
 */
// $(document).on("click", e => {

/**
 * Handle edit
 */
// if (e.target.id && e.target.id.includes("edit!")) {
//     const pid = e.target.id.split("!")[1]

//     const currentProduct = Catalog.products[pid]

//     $("input[name='productName']").val(currentProduct.name)
//     $("select[name='productCategory']select").val(currentProduct.category_id)
//     $("input[name='productPrice']").val(currentProduct.price)

//     editMode.enabled = true
//     editMode.productId = pid
// }

/**
 * Handle delete
 */
//     if (e.target.id && e.target.id.includes("delete!")) {
//         // Get product id
//         const pid = e.target.id.split("!")[1]

//         // Submit DELETE request to Firebase
//         $.ajax({
//             url: `https://personal-site-5cb0d.firebaseio.com/products/${pid}/.json`,
//             method: "DELETE"
//         }).then(result => {
//             Catalog.refreshData()
//         })
//     }
// })





function blogAdmin() {
    $("#blogForm__saveButton").on("click", e => {
        // Create new product object
        const newProduct = {
            name: $("input[name='productName']").val(),
            category_id: parseInt($("select[name='productCategory']").find(":selected").val()),
            price: parseFloat(parseFloat($("input[name='productPrice']").val()).toFixed(2))
        }

        if (editMode.enabled === false) {
            // Submit POST request to Firebase
            $.ajax({
                url: `https://personal-site-5cb0d.firebaseio.com/products/.json`,
                method: "POST",
                data: JSON.stringify(newProduct)
            }).then(r => {
                Catalog.refreshData()
            })
        } else {
            // Submit PUT request to Firebase
            $.ajax({
                url: `https://personal-site-5cb0d.firebaseio.com/products/${editMode.productId}/.json`,
                method: "PUT",
                data: JSON.stringify(newProduct)
            }).then(r => {
                Catalog.refreshData()
            })

        }
    })

    //find 'blogs' id <article> in the html
    const blogEntry = document.getElementById("blogs");

    function blogPush() {
        // const Database = db.load()
        // Database.tasks = Database.tasks || [];
        // Add click event listener to the save button
        if (event.target.id === "blogForm__saveButton") {
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

}
    module.exports = blogAdmin 