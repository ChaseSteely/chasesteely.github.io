const totalItems = BlogDatabase.length
const itemsPerPage = 1
const numberOfPages = Math.ceil(totalItems / itemsPerPage)
const paginationEl = document.getElementById("blogPaginator")
const blogEntry = document.getElementById("blogs");



let paginationString = "<ul>"
paginationString += "<a id='previous' href='#'>&lt;</a>"
for (var i = 0; i < numberOfPages; i++) {
  paginationString += ` <li><a class="blogPage page-${i + 1}" href="#">${i + 1}</a></li>`
}
paginationString += " <a id='next' class='page-2' href='#'>&gt;</a>"
paginationString += "</ul>"

// Update the DOM with the unordered list we just built
paginationEl.innerHTML = paginationString

// Store references to the next and previous arrows we just added
const previousEl = document.getElementById("previous")
const nextEl = document.getElementById("next")

/*
    Function that will be invoked each time the user clicks
    on one of the pagination links at the bottom of the page
*/
function produceBlog(event) {
  // Clear the blogs first before displaying the new ones
  blogEntry.innerHTML = ""

  // Which number did the user click on?

  // Convert DOMTokenList to Array
  const classes = event.target.classList
  const classArray = Array.from(classes)

  // Find the class we want that match pattern "page-n"
  const targetClass = classArray.find(clazz => {
    if (clazz.startsWith("page-")) return clazz
  })

  // Split the class into an array on the dash
  const pageNumberArray = targetClass.split("-")

  // Get the actual page number ["page", "1"]
  const actualPageNumber = pageNumberArray[1]

  // Convert the string into an integer
  const integerPageNumber = parseInt(actualPageNumber)

  const pageNumber = parseInt(
    Array.from(event.target.classList)
      .find(clazz => {
        if (clazz.startsWith("page-")) return clazz
      })
      .split("-")[1]
  )

  // Change the class name of the previous arrow
  if ((pageNumber - 1) === 0) {
    previousEl.style.display = "none"
  } else {
    previousEl.style.display = "inline"
    previousEl.className = `page-${pageNumber - 1}`
  }

  // Change the class name of the next arrow
  if ((pageNumber + 1) > numberOfPages) {
    nextEl.style.display = "none"
  } else {
    nextEl.style.display = "inline"
    nextEl.className = `page-${pageNumber + 1}`
  }

  // Determine which items to display by slicing the array
  const itemsToDisplay = BlogDatabase.slice(
    (pageNumber - 1) * itemsPerPage,
    pageNumber * itemsPerPage
  )

  // Display a <section> representation of each data object
  for (let i = 0; i < itemsToDisplay.length; i++) {
    let currentBlog = itemsToDisplay[i];
    blogEntry.innerHTML += `
            <article class="w3-col l8 s12">
              <!-- Blog entry -->
              <div class="w3-card-4 w3-margin w3-white">
                <img src="${currentBlog.photo}" alt="${currentBlog.title}" style="width:100%">
                <section class="w3-container">
                  <h3><b>${currentBlog.title}</b></h3>
                  <h5>${currentBlog.description}, <span class="w3-opacity">${currentBlog.date}</span></h5>
                  <h5><span class="w3-opacity">${currentBlog.author}</span></h5>
                </section>
    
                <section class="w3-container">
                  <p>${currentBlog.content}</p>
                </section>
              </div>
              <hr>
            </article>
    `
  }
}

// Get the array of pagination anchor tags we added to the DOM
const blogLinks = document.getElementsByClassName("blogPage")

// Add event listeners to each <a> element in the pagination
for (let j = 0; j < blogLinks.length; j++) {
  let thisBlogEntry = blogLinks[j];
  thisBlogEntry.addEventListener("click", produceBlog, false);
}

produceBlog({
  "target": {
    "classList": ["page-1"]
  }
})



previousEl.addEventListener("click", produceBlog)
nextEl.addEventListener("click", produceBlog)

// Loop over keys in the database
// for (let key in BlogDatabase) {
//     // Get a reference to the array of objects
//     const currentBlog = BlogDatabase[key]

//     // Loop over the array of objects
//     for (let i = 0; i < currentBlog.length; i++) {
//         // Current item in the array
//         let item = currentBlog[i]

//         blogEntry.innerHTML += `
//         <!-- Blog entries -->
//         <article class="w3-col l8 s12">
//           <!-- Blog entry -->
//           <div class="w3-card-4 w3-margin w3-white ${key}">
//             <img src="${item.photo}" alt="${item.title}" style="width:100%">
//             <section class="w3-container">
//               <h3><b>${item.title}</b></h3>
//               <h5>${item.description}, <span class="w3-opacity">${item.date}</span></h5>
//               <h5><span class="w3-opacity">${item.author}</span></h5>
//             </section>

//             <section class="w3-container">
//               <p>${item.content}</p>
//             </section>
//           </div>
//           <hr>
//         </article>
//         `
//     }//end for loop
// }//end For In loop




