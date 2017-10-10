let ContactInformation = {
    "email": chaseteely.com,
    "phone": 615-294-2338,
    "location": Nashville, TN
}

const contactInformationString = JSON.stringify(ContactInformation)
localStorage.setItem("contactInformation", contactInformationString)