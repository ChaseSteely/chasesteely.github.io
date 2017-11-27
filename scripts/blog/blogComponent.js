const component = Object.create(null, {
    "write": {
        value: function (article, outputSelector) {
            $(outputSelector).append(
                `
            <article class="w3-col l8 s12">
            <!-- Blog entry -->
            <div class="w3-card-4 w3-margin w3-white">
              <img src="${article.photo}" alt="${article.title}" style="width:100%">
              <section class="w3-container">
                <h3><b>${article.title}</b></h3>
                <span class="w3-opacity">${article.date}</span></h5>
              </section>
              <section class="w3-container">
                <p>${article.content}</p>
              </section>
              <section class="article__tags">${article.tags.join(", ")}</section>
            </div>
            <hr>
          </article>
        `
            )
        }
    }
})

module.exports = component