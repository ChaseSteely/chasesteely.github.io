const writeContacts = () => {

    let contactInformation = {
        "email": "chasesteely@gmail.com",
        "linkedIn": "<a href='https://www.linkedin.com/in/chasesteely/' target='_blank'><i class='fa fa-linkedin pointer button'></i></a>",
        "github": "<a href='https://github.com/ChaseSteely'target='_blank'><i class='fa fa-github pointer button'></i></a>",
        "flickr": "<a href='https://www.flickr.com/photos/mchasesteely/' target='_blank'><i class='fa fa-flickr pointer button'></i></a>",
        "location": "Nashville, TN",
    };

    let contact = [];

    contact.push(contactInformation);

    let ContactData = {
        "contact": contact,
    };

    const contactInformationString = JSON.stringify(ContactData);
    localStorage.setItem("contactInformation", contactInformationString);

    const ContactDatabase = JSON.parse(localStorage.getItem("contactInformation"));
    const contactElement = document.getElementById("social-media-links");

    // Loop over keys in the database
    for (let key in ContactDatabase) {
        // Get a reference to the array of objects
        const thisContact = ContactDatabase[key];

        // Loop over the array of objects
        for (let i = 0; i < thisContact.length; i++) {
            // Current item in the array
            let item = thisContact[i];

            contactElement.innerHTML += `
                <p>${item.email}</a></p>
                    <article class="links">
                        <p>${item.linkedIn}</p>
                        <p>${item.github}</p>
                        <p>${item.flickr}</p>
                    </article>
                <p>${item.location}</p>
               
        `;
        }//end for loop
    }//end For In loop
    const initMap = () => {
        let uluru = {lat: 36.168818, lng: -86.783166,};
        let map = new google.maps.Map(document.getElementById("map"), {
            zoom:12, scrollwheel: false, draggable: false,
            center: uluru,
        });
        let marker = new google.maps.Marker({
            position: uluru,
            map: map,
        });
    }
}

module.exports = writeContacts