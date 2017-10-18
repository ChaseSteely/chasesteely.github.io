const BlogDatabase = JSON.parse(localStorage.getItem("blogStore"));
const blogEntry = document.getElementsByClassName("content")[0];

// Loop over keys in the database
for (let key in BlogDatabase) {
    // Get a reference to the array of objects
    const currentBlog = BlogDatabase[key]

    // Loop over the array of objects
    for (let i = 0; i < currentBlog.length; i++) {
        // Current item in the array
        let item = currentBlog[i]

        blogEntry.innerHTML += `
        <!-- Blog entries -->
        <article class="w3-col l8 s12">
          <!-- Blog entry -->
          <div class="w3-card-4 w3-margin w3-white ${key}">
            <img src="${item.photo}" alt="${item.title}" style="width:100%">
            <section class="w3-container">
              <h3><b>${item.title}</b></h3>
              <h5>${item.description}, <span class="w3-opacity">${item.date}</span></h5>
              <h5><span class="w3-opacity">${item.author}</span></h5>
            </section>
        
            <section class="w3-container">
              <p>${item.content}</p>
            </section>
          </div>
          <hr>
        </article>
        `
    }//end for loop
}//end For In loop




