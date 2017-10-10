let Blog = {
    "title": Project,
    "author": "Chase Steely",
    "description": "Description of project",
    "content": "Content of project"
}

const blogString = JSON.stringify(Blog)
localStorage.setItem("blog", blogString)