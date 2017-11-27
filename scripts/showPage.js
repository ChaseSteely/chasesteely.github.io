const navMenu = require("./nav/navMenu")
const contactStorage = require("./contacts/contactStorage")
const projectsController = require("./projects/projectsController")
const resume = require("./resume/resume")
const blogController = require("./blog/blogController")
const showAdmin = require("./blog/showAdmin")

const showClickedPage = event => {
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
    if (event.target.id === "projectLink") {
        projectsController()
        document.getElementById("projectImg").classList.remove("hidden")
        document.getElementById("projectPage").classList.remove("hidden")
    }
    if (event.target.id !== "projectLink") {
        document.getElementById("projectImg").classList.add("hidden")
        document.getElementById("projectPage").classList.add("hidden")
    }
    if (event.target.id === "blogLink") {
        blogController.init()
        document.getElementById("blogImg").classList.remove("hidden")
        document.getElementById("blogPage").classList.remove("hidden")
    }
    if (event.target.id !== "blogLink") {
        document.getElementById("blogImg").classList.add("hidden")
        document.getElementById("blogPage").classList.add("hidden")
    }
}
module.exports = showClickedPage