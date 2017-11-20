const showPage = require("../showPage")
const navEl = document.getElementById("navBar")

const populateNav = () => {
    navEl.innerHTML = `
        <ul class="nav">
            <li>
                <a href="#" id="homeLink" class="navItem button pointer">HOME</a>
            </li>
            <li>
                <a href="#about" id="aboutLink" class="navItem button pointer">
                    <i class="fa fa-user"></i> ABOUT</a>
            </li>
            <li>
                <a href="#" id="contactLink" class="navItem button pointer">
                    <i class="fa fa-envelope"></i> CONTACT</a>
            </li>
            <li>
                <a href="#" class="navItem button pointer">
                    <i class="fa fa-pencil"></i> BLOG</a>
            </li>
            <li>
                <a href="#" id="projectLink" class="navItem button pointer">
                    <i class="fa fa-code"></i> PROJECTS</a>
            </li>
            <li>
                <a href="#" id="resumeLink" class="navItem button pointer">
                    <i class="fa fa-briefcase"></i> RESUME</a>
            </li>
        </ul>
    `
    navEl.addEventListener("click", showPage)
}
module.exports = populateNav