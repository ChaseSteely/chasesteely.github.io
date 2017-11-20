const navMenu = require("./nav/navMenu")
const footerPop = require("./nav/footerPop")

const populateDom = () => {
    navMenu()
    footerPop()
}

module.exports = populateDom()
