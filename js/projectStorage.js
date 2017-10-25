// A generator that never ends!
const projectIdGenerator = function* () {
    let uniqueId = 1

    while (true) {
        yield uniqueId
        uniqueId += 1
    }
}

// Create instance of generator
const projectIdFactory = projectIdGenerator()

// Factory function that returns a blog article object
const projectObjectFactory = function (title, photo, entry, date, team, url, ...tech) {
    return Object.create(null, {
        "id": { value: projectIdFactory.next().value, enumerable: true },
        "image": { value: photo, enumerable: true },
        "title": { value: title, enumerable: true },
        "body": { value: entry, enumerable: true },
        "techniques": { value: tech, enumerable: true },
        "published": { value: date, enumerable: true },
        "teammates": {value: team, enumerable: true},
        "website": {value: url, enumerable: true}
    })
}

const personalSite = projectObjectFactory("My Personal Website", "<img src='img/personalSite.jpg' alt='Javascript and HTML books'>", 
"My first project at NSS is designing my website. As I learn new techniques in HTML, CSS, and JavaScript, or receive tickets for new requirements through Github, I update the code.",
"10/25/2017",
"Chase Steely",
"chasesteely.com",
"HTML", " CSS", " Javascript"
)

const fairyBnB = projectObjectFactory("FairyBnB", "<img src='img/packages.jpg' alt=''>",
"This project was to build a company website with a 4-5 member team over a two-day sprint. After an excellent planning phase, we settled on a company name - FairyBnB - and what services our company would provide - tours to mythical lands. Our group, the Distracted Llamas, went to the whiteboard to lay out our vision for the site. Each of us was responsible for creating a database, using JSON.stringify() and localStorage.setItem() to store the data in local storage. We would control and display our databases through JSON.parse(localStorage.getItem()), looping through our data, and writing all the HTML with innerHTML +=. I was responsible for the Packages and Souvenirs page.",
"10/18/2017",
"Chase Steely - Jenna Solis - Jason Figueroa - Kimme Bird",
"fairybnb.chasesteely.com",
"HTML", " CSS", " Javascript"
)

const firstSprint = projectObjectFactory("bækur", "<img src='img/book.jpg' alt=''>", 
"Our first sprint of Nashville Software School Cohort 22 was to build a company website using Javascript to populate our HTML, utilizing a database we created that we stored in local storage.  I was tasked to design and code the index.html and a page that used a database of blog articles; very similar to what I am doing on this page.",
"10/13/2017",
"Chase Steely - Leah Duvic - Deanna Vickers - Tyler Bowman",
"github.com/nss-day-cohort-22/company-website-malicious-cobras",
"HTML", " CSS", " Javascript"

)

let projects = []

projects.push(personalSite, fairyBnB, firstSprint)

let Project = {
    "project": projects
}

const projectString = JSON.stringify(Project)
localStorage.setItem("storeProject", projectString)