let unreadNotifications = document.querySelectorAll('.unread')

function notificationCounter() {
    unreadNotifications = document.querySelectorAll('.unread')
    document.querySelector('#notifications').textContent = unreadNotifications.length
}
notificationCounter()

document.querySelector('#markasread').addEventListener('click', () => {
    unreadNotifications.forEach(element =>  
        {
            element.classList.remove('unread')
            element.classList.add('read')
        })
    notificationCounter()
})



unreadNotifications.forEach(element =>  
    {
        let dot = document.createElement('span')
        dot.classList.add('dot')
        element.querySelector('.message').querySelector('span').appendChild(dot)

        element.addEventListener('mouseover', () => {
            element.classList.remove('unread')
            element.classList.add('read')
            element.querySelector('.dot').remove()
            notificationCounter()
        }, { once: true }
        )
    })