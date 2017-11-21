const paginate = require("./paginate")
const factory = require("./blogFactory")
const component = require("./blogComponent")

const articleFilter = Object.create(null, {
    "init": {
        value: function () {
            document.querySelector("input[name='articleFilter']").addEventListener(
                "keyup",
                event => {
                    if (event.target.value.length >= 3) {
                        // Get lower case version of user input
                        const pattern = event.target.value.toLowerCase()

                        /**
                         * Filter article if user search string is in the title, the body
                         * or any of the tags on the article
                         */
                        const filteredArticles = factory.blog.filter(
                            article => {
                                // Find any matching tags
                                const matchingTag = article.tags.find(tag => tag.includes(pattern))

                                // Does it match anything in the title?
                                const matchingTitle = article.title.toLowerCase().includes(pattern)

                                // Does is match anything in the body?
                                const matchingBody = article.content.toLowerCase().includes(pattern)

                                return matchingTitle || matchingBody || matchingTag
                            }
                        )

                        // Paginate the filtered article
                        paginate.itemsToPaginate = filteredArticles
                        paginate.start(".blog__paginator", ".blog__articles", component)
                    } else {
                        paginate.itemsToPaginate = factory.blog
                        paginate.start(".blog__paginator", ".blog__articles", component)
                    }
                }
            )
        }
    }
})

module.exports = articleFilter