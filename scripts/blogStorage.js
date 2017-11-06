// const BlogData = [
//     {
//         "photo": "img/packages.jpg",
//         "title": "Group Project Part Deux",
//         "description": "FairyBnB Website",
//         "author": "Chase Steely",
//         "date": "10/18/17",
//         "content": "Today our groups presented our company website built over a two-day sprint. After an excellent planning phase, we settled on a company name - <a href='http://fairybnb.chasesteely.com' target='_blank'><nobr>FairyBnB</nobr></a> - and what service our company would provide - tours to mythical lands. Our group, the Distracted Llamas, went to the whiteboard to lay out our vision for the site. Each of us was responsible for creating a database, using JSON.stringify() and localStorage.setItem() to store the data in local storage. We would control and display our databases through JSON.parse(localStorage.getItem()), looping through our data, and writing all the HTML with innerHTML +=.",
//     },

//     {
//         "photo": "img/book.jpg",
//         "title": "Group Project",
//         "description": "bækur",
//         "author": "Chase Steely",
//         "date": "10/18/17",
//         "content": "Last week we started our first sprint of Nashville Software School Cohort 22. We were split into groups of 4-5 and tasked to build a company website using Javascript to populate our HTML, utilizing a database we created that we stored in local storage.  I was tasked to design and code the index.html and a page that used a database of blog articles; very similar to what I am doing on this page.",
//         "photoCode": ""
//     }
// ]

// const blogString = JSON.stringify(BlogData)
// localStorage.setItem("blogStore", blogString)

// const BlogDatabase = JSON.parse(localStorage.getItem("blogStore"));

{
    // Get the database from local storage, or empty object if null
    const BlogDatabase = JSON.parse(
        localStorage.getItem("BlogDatabase")
    ) || {};

    // Create `articles` key if it doesn't exist
    BlogDatabase.articles = BlogDatabase.articles || [];

    // Sort the articles by their `id` property, descending
    BlogDatabase.articles.sort((p, n) => n.id - p.id);

    // Generator function definition
    const idGenerator = function* (from) {
        let id = 1;
        while (true) {
            yield from + id;
            id++;
        }
    };

    const lastId = BlogDatabase.articles[0] || { id: 0, };
    const blogUUIDGen = idGenerator(lastId.id);

    // Factory function for new articles
    const articleFactory = function (photo, title, body, date) {
        return Object.create(null, {
            "id": {
                value: blogUUIDGen.next().value,
                enumerable: true,
            },
            "photo": {
                value: photo,
                enumerable: true,
            },
            "title": {
                value: title,
                enumerable: true,
            },
            "body": {
                value: body,
                enumerable: true,
            },
            "date": {
                value: date,
                enumerable: true,
            },
        });
    };

    // Add click event listener to the save button
    const saveButtonEl = document.getElementById("blogForm__saveButton").
        addEventListener("click", event => {

            // Create a new article object
            const newArticle = articleFactory(
                document.querySelector("input[name='blogForm__photo']").value,
                document.querySelector("input[name='blogForm__title']").value,
                document.querySelector("textarea[name='blogForm__body']").value,
                document.querySelector("input[name='blogForm__date']").value
            );



            // Add new article to array
            BlogDatabase.articles.push(newArticle);

            // Sort the articles by their `id` property, descending
            BlogDatabase.articles.sort((p, n) => n.id - p.id);

            // Serialize and store database
            localStorage.setItem("BlogDatabase", JSON.stringify(BlogDatabase));
        });

}