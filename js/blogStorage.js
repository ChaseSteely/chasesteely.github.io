let blog = {
    "title": "Project",
    "author": "Chase Steely",
    "description": "Description of project",
    "content": "Content of project"
}

let blogs = []

blogs.push(blog)

let Blog = {
    "blog": blogs
}

const blogString = JSON.stringify(Blog)
localStorage.setItem("blogStore", blogString)