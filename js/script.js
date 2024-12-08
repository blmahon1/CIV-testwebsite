function onLoad() {
    const navbutton = document.querySelector("#nav-button")
    const mainnav = document.querySelector("#main-nav")
    navbutton.addEventListener('click', function() {
        if( mainnav.classList.contains('open') ) {
            mainnav.classList.remove('open')
        }
        else {
            mainnav.classList.add('open')
        }
    })
}
window.addEventListener('load', onLoad )