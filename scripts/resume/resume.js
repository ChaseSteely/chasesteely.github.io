const db = require("../databaseJson")

function resumeWriter() {

    db.load(writeResume)

    function writeResume(db) {
        const resEl = $("#jobs");
        const edEl = $("#edu");
        const jobData = db.jobs
        const edData = db.education
        jobHTML = ""
        jobData.forEach(job => {
            jobHTML += `
            <article class="job">
                <h2>${job.title}</h2>
                <h5>${job.date}</h5>
                <h4>${job.position1}</h4>
                <p>${job.position1Des}</p>
                <h4>${job.position2}</h4>
                <p>${job.position2Des}</p>
                <h4>${job.position3}</h4>
                <p>${job.position3Des}</p>
            </article>
        `
        })
        resEl.html(jobHTML)
        edHTML = ""
        edData.forEach(s => {
            edHTML += `
                <article class="school">
                    <h2>${s.school}</h2>
                    <h5>${s.date}</h5>
                    <h4>${s.major}</h4>
                    <p>${s.description}</p>   
                </article>
            `
        })
        edEl.html(edHTML)
    }
}
module.exports = resumeWriter