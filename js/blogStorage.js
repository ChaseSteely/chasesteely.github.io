const BlogData = [
    {
        "photo": "img/packages.jpg",
        "title": "Group Project Part Deux",
        "description": "FairyBnB Website",
        "author": "Chase Steely",
        "date": "10/18/17",
        "content": "Today our groups presented our company website built over a two-day sprint. After an excellent planning phase, we settled on a company name - <a href='http://fairybnb.chasesteely.com' target='_blank'><nobr>FairyBnB</nobr></a> - and what service our company would provide - tours to mythical lands. Our group, the Distracted Llamas, went to the whiteboard to lay out our vision for the site. Each of us was responsible for creating a database, using JSON.stringify() and localStorage.setItem() to store the data in local storage. We would control and display our databases through JSON.parse(localStorage.getItem()), looping through our data, and writing all the HTML with innerHTML +=.",
    },

    {
        "photo": "img/book.jpg",
        "title": "Group Project",
        "description": "bækur",
        "author": "Chase Steely",
        "date": "10/18/17",
        "content": "Last week we started our first sprint of Nashville Software School Cohort 22. We were split into groups of 4-5 and tasked to build a company website using Javascript to populate our HTML, utilizing a database we created that we stored in local storage.  I was tasked to design and code the index.html and a page that used a database of blog articles; very similar to what I am doing on this page.",
        "photoCode": ""
    }
]

const blogString = JSON.stringify(BlogData)
localStorage.setItem("blogStore", blogString)

const BlogDatabase = JSON.parse(localStorage.getItem("blogStore"));