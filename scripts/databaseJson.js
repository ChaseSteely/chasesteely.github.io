const Database = Object.create(null, {
    load: {
        value: (callback) => { 
            $.ajax({
                "url": "https://chasesteelysite.firebaseio.com/.json",
                "method": "GET"
            }).then(db => {
                callback(db) //this is what will be passed in from my stuff

            })
        }
    }
})

module.exports = Database