let contactInformation = {
    "email": "chaseteely@gmail.com",
    "phone": "615-294-2338",
    "linkedIn": "<a href='https://www.linkedin.com/in/chasesteely/' target='_blank'><i class='fa fa-linkedin pointer button'></i></a>",
    "github":"<a href='https://github.com/ChaseSteely'target='_blank'><i class='fa fa-github pointer button'></i></a>",
    "flickr": "<a href='https://www.flickr.com/photos/mchasesteely/' target='_blank'><i class='fa fa-flickr pointer button'></i></a>",
    "location": "Nashville, TN"
}

let contact = []

contact.push(contactInformation)

let ContactData = {
    "contact": contact
}

const contactInformationString = JSON.stringify(ContactData)
localStorage.setItem("contactInformation", contactInformationString)

const ContactDatabase = JSON.parse(localStorage.getItem("contactInformation"));
const contactElement = document.getElementsByClassName("contactInfo")[0];

// Loop over keys in the database
for (let key in ContactDatabase) {
    // Get a reference to the array of objects
    const thisContact = ContactDatabase[key]

    // Loop over the array of objects
    for (let i = 0; i < thisContact.length; i++) {
        // Current item in the array
        let item = thisContact[i]

        contactElement.innerHTML += `
                <p>${item.email}</p>
                <p>${item.phone}</p>
                    <div class="links">
                        <p>${item.linkedIn}</p>
                        <p>${item.github}</p>
                        <p>${item.flickr}</p>
                    </div>
                <p>${item.location}</p>
               
        `
    }//end for loop
}//end For In loop