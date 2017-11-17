//Purpose: To create blogs as they are entered into the Database
const idGenerator = require("./idGenerator")
// const db = require("../Database")

// Factory function for new articles
const articleFactory = function (photo, title, body, date) {
    // Get the database from local storage, or empty object if null
    // const Database = db.load();//use load method of database object to get local storage
    const BlogDatabase = JSON.parse(
        localStorage.getItem("BlogDatabase")
    ) || {};
    // Create `articles` key if it doesn't exist
    BlogDatabase.articles = BlogDatabase.articles || [];
    // Sort the articles by their `id` property, descending
    BlogDatabase.articles.sort((p, n) => n.id - p.id);
    const lastId = BlogDatabase.articles[0] || { id: 0, };
    const blogUUIDGen = idGenerator(lastId.id);
    return Object.create(null, {
        "id": {
            value: blogUUIDGen.next().value,
            enumerable: true
        },
        "photo": {
            value: photo,
            enumerable: true
        },
        "title": {
            value: title,
            enumerable: true
        },
        "body": {
            value: body,
            enumerable: true,
            writable: true
        },
        "date": {
            value: date,
            enumerable: true
        },
    });
};

module.exports = articleFactory