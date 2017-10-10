let Project = {
    "title": Project,
    "author": "Chase Steely",
    "description": "Description of project",
    "content": "Content of project"
}

const projectString = JSON.stringify(Project)
localStorage.setItem("project", projectString)