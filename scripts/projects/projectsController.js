const db = require("../databaseJson")


function projectsWriter() {

    db.load(writeProjects)

    function writeProjects(db) {
        const projectEl = $("#projects");
        const pData = db.projects
        projectHTML = ""
        pData.forEach(p => {
            projectHTML += `
            <article class="project_article">
                <picture>${p.image}</picture>
                    <h2>${p.title}</h2>
                    <h3>${p.teammates}</h3>
                    <h4><a href="http://${p.website}" target="_blank">${p.website}</a></h4>
                    <h5>${p.techniques} </h5>
                    <h6>${p.published}</h6>
                    <p>${p.body}</p>
            </article>
            `
        })
        projectEl.html(projectHTML)
    }
}
module.exports = projectsWriter
