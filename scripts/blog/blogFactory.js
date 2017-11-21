const firebaseURL = "https://chasesteelysite.firebaseio.com/blogs"

const blogFactory = Object.create(null, {
    "blog": {
        value: null,
        writable: true
    },
    "all": {
        value: function () {
            return $.ajax({
                "url": `${firebaseURL}/.json`,
                "method": "GET"
            }).then(blogs => {
                this.blog = Object.keys(blogs)
                    .map(key => {
                        blogs[key].id = key
                        return blogs[key]
                    })

                return this.blog
            })
        }
    },
    "single": {
        value: function (id) {
            return $.ajax({
                "url": `${firebaseURL}/${id}/.json`,
                "method": "GET"
            })
        }
    },
    "add": {
        value: function (article) {
            return $.ajax({
                "url": `${firebaseURL}/.json`,
                "method": "POST",
                "data": JSON.stringify(article)
            })
        }
    },
    "remove": {
        value: function (id) {
            return $.ajax({
                "url": `${firebaseURL}/${id}/.json`,
                "method": "DELETE"
            })
        }
    },
    "replace": {
        value: function (article, id) {
            return $.ajax({
                "url": `${firebaseURL}/${id}/.json`,
                "method": "PUT",
                "data": JSON.stringify(article)
            })
        }
    }
})


module.exports = blogFactory