
const writeResume = () => {
    const job = {
        "title": "US ARMY",
        "date": "09/15/2009 - 08/21/2015",
        "position1": "Infantry Team Leader",
        "position1Des": "Led, mentored, and supervised diverse teams of three to nine personnel. Devised and conducted detailed and technical training and classes for groups of up to twenty-five personnel. Implemented a climate of dignity, equality, and respect.",
        "position2": "Assistant Machine Gunner",
        "position2Des": "Operated and maintained sophisticated equipment designed for tactical operations. Observed, assessed, and communicated technical Information horizontally and vertically to make Complex decisions in hostile situations.",
        "position3": "Radio/Telephone Operator (RTO)",
        "position3Des": "Received, processed, disseminated, and tracked critical and technical intelligence information in a timely and accurate manner. Filtered multiple minute details and information in real time, high-stress situations to paint the big picture to maintain the critical link between personnel on the ground and leadership in tactical operations.",
    };

    const trident = {
        "school": "TRIDENT TECHNICAL COLLEGE",
        "date": "August 2015 - August 2017",
        "major": "Associate of Science in Computer Programming",
        "description": "The Computer Programming degree track provides technical competencies required to be productive in an entry-level programming position. This degree track provides skills in a variety of programming languages such as JavaScript, Java, JQuery, PHP, CSS, HTML5 and SQL. Graduates will be equipped with programming skills to find employment as business-application programmers, database managers, and system analysts. They also will plan, design and develop programming applications, as well as create and host web applications. These valuable skills enable graduates to work in IT for small businesses, public and private corporations, and in private practices.",
    };

    const nss = {
        "school": "NASHVILLE SOFTWARE SCHOOL",
        "date": "October 2017 - Present",
        "major": "Web Developer Bootcamp: C# & .NET Track",
        "description": "The Web Developer Bootcamp is a six-month, full-time program. The curriculum teaches the skills and technologies required to become a full-stack software developer.  The core technologies that students use in this course are the three standard languages of the web: HTML, CSS and JavaScript. This course prepares students to work and build the front-end code associated with websites, web apps and hybrid mobile applications.",
    };

    let jobs = [];
    let schools = [];

    jobs.push(job);
    schools.push(nss, trident);

    let ProfessionalData = {
        "jobs": jobs,
    };

    let SchoolData = {
        "schools": schools,
    };

    const profDataString = JSON.stringify(ProfessionalData);
    localStorage.setItem("profData", profDataString);
    const schoolString = JSON.stringify(SchoolData);
    localStorage.setItem("sData", schoolString);

    const ResumeDatabase = JSON.parse(localStorage.getItem("profData"));
    const SchoolDatabase = JSON.parse(localStorage.getItem("sData"));
    const resEl = document.getElementById("resume");
    const edEl = document.getElementById("edu");

    // Loop over keys in the database
    for (let key in ResumeDatabase) {
        // Get a reference to the array of objects
        const thisJob = ResumeDatabase[key];

        // Loop over the array of objects
        for (let i = 0; i < thisJob.length; i++) {
            // Current item in the array
            let item = thisJob[i];

            resEl.innerHTML += `
            <article class="job">
                <h2>${item.title}</h2>
                <h5>${item.date}</h5>
                <h4>${item.position1}</h4>
                <p>${item.position1Des}</p>
                <h4>${item.position2}</h4>
                <p>${item.position2Des}</p>
                <h4>${item.position3}</h4>
                <p>${item.position3Des}</p>
            </article>
        `;
        }//end for loop
    }//end For In loop

    // Loop over keys in the database
    for (let key in SchoolDatabase) {
        // Get a reference to the array of objects
        const thisSchool = SchoolDatabase[key];

        // Loop over the array of objects
        for (let i = 0; i < thisSchool.length; i++) {
            // Current item in the array
            let item = thisSchool[i];

            edEl.innerHTML += `
        <article class="school">
        <h2>${item.school}</h2>
        <h5>${item.date}</h5>
        <h4>${item.major}</h4>
        <p>${item.description}</p>   
        </article>
        `;
        }//end for loop
    }//end For In loop

}

module.exports = writeResume