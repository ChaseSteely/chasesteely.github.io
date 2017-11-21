const paginate = require("./paginate")
const factory = require("./blogFactory")
const component = require("./blogComponent")
const filter = require("./blogFilter")

const articleController = Object.create(null, {
    "init": {
        value: function () {
            factory.all().then(articles => {
                paginate.itemsToPaginate = articles
                paginate.start(".blog__paginator", ".blog__articles", component)
            })
            filter.init()
        }
    }
})

module.exports = articleController



