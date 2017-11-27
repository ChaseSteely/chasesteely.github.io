btnEl = document.getElementById("blogForm!newButton")
function adminShow() {
    function showAdmin() {
        document.getElementById("admin").classList.remove("hidden")
    }
    btnEl.addEventListener("click", showAdmin)
}
module.exports = adminShow()