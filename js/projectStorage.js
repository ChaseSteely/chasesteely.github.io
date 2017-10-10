let project = {
    "title": "Project",
    "author": "Chase Steely",
    "description": "Description of project",
    "content": "Content of project"
}

let projects = []

projects.push(project)

let Project = {
    "project": projects
}

const projectString = JSON.stringify(Project)
localStorage.setItem("storeProject", projectString)