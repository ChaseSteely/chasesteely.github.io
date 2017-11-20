const footEl = document.getElementById("footer")

const footerPop = () => {
    footEl.innerHTML = `
    <div class="up">
        <a href="#navBar" class="button">
            <i class="fa fa-angle-double-up" aria-hidden="true"></i>
    </div>
    <nav class="bottomNav">
        <a href="https://www.flickr.com/photos/mchasesteely/" target="_blank">
            <i class="fa fa-flickr pointer button right"></i>
        </a>
    <a href="https://github.com/ChaseSteely" target="_blank">
        <i class="fa fa-github pointer button right"></i>
    </a>
    <a href="https://www.linkedin.com/in/chasesteely/" target="_blank">
        <i class="fa fa-linkedin pointer button"></i>
    </a>
    </nav>
    `
}

module.exports = footerPop