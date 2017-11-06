const ProjectDatabase = JSON.parse(localStorage.getItem("storeProject"));
const projectEl = document.getElementById("projects");

// Loop over keys in the database
for (let key in ProjectDatabase) {
    // Get a reference to the array of objects
    const thisProject = ProjectDatabase[key];

    // Loop over the array of objects
    for (let i = 0; i < thisProject.length; i++) {
        // Current item in the array
        let item = thisProject[i];

        projectEl.innerHTML += `
        <article class="project_article">
            <picture>${item.image}</picture>
                <h2>${item.title}</h2>
                <h3>${item.teammates}</h3>
                <h4><a href="http://${item.website}" target="_blank">${item.website}</a></h4>
                <h5>${item.techniques}</h5>
                <h6>${item.published}</h6>
                <p>${item.body}</p>
        </article>
        `;
    }//end for loop
}//end For In loop