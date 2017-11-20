const navMenu = require("./nav/navMenu")
const contactStorage = require("./contacts/contactStorage")
const resume = require("./resume/resume")

const showClickedPage = event => {
    const checkId = event.target.id
    if (event.target.id !== "homeLink") {
        document.getElementById("about").classList.add("hidden")
        document.getElementById("about").classList.remove("content")
        document.getElementById("home").classList.add("hidden")
    }
    if (event.target.id === "homeLink" || event.target.id === "aboutLink") {
        document.getElementById("about").classList.remove("hidden")
        document.getElementById("about").classList.add("content")
        document.getElementById("home").classList.remove("hidden")
    }
    if (event.target.id === "contactLink") {
        contactStorage()
        document.getElementById("contactImg").classList.remove("hidden")
        document.getElementById("contacts").classList.remove("hidden")
    }
    if (event.target.id !== "contactLink") {
        document.getElementById("contactImg").classList.add("hidden")
        document.getElementById("contacts").classList.add("hidden")
    }
    if (event.target.id === "resumeLink") {
        resume()
        document.getElementById("resumeImg").classList.remove("hidden")
        document.getElementById("resumePage").classList.remove("hidden")
    }
    if (event.target.id !== "resumeLink") {
        document.getElementById("resumeImg").classList.add("hidden")
        document.getElementById("resumePage").classList.add("hidden")
    }
}
module.exports = showClickedPage