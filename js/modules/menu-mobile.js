export default function initMenuMobile(){
    const menuButton = document.querySelector('[data-menu="button"]')
    const menuList = document.querySelector('[data-menu="list"]')
    const eventos = ['click', 'touchstart']


    function openMenu(event){
        menuList.classList.add('active')
        menuButton.classList.add('active')
        outsideClick(menuList, eventos, () => {
            menuList.classList.remove('active')
            menuButton.classList.remove('active')
        })
    }
    eventos.forEach((evento)=>{
        menuButton.addEventListener(evento, openMenu)
    })

    function outsideClick(element, events, callback){
        const html = document.documentElement
        const outside = 'data-outside'
        if(!element.hasAttribute(outside)){
            events.forEach(userEvent => {
                setTimeout(() => {html.addEventListener(userEvent, handleOutsideClick)})
            })
            element.setAttribute(outside, '')
        }
        function handleOutsideClick(event){
            if (!element.contains(event.target)){
                callback()
                events.forEach(userEvent => {
                    html.removeEventListener(userEvent, handleOutsideClick)
                })
                element.removeAttribute(outside, '')
            }
        }
    }   
}