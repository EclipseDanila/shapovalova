let serviceTabs = document.querySelectorAll('.service__nav__item')
let serviceInfoItems = document.querySelectorAll('.service__info__container')
function serviceTabFunc(i) {
    serviceInfoItems.forEach(el => {
        el.classList.remove('active')
    });
    serviceTabs.forEach(el => {
        el.classList.remove('active')
    });
    serviceTabs[i].classList.add('active')
    serviceInfoItems[i].classList.add('active')
}