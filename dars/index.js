const listitem = document.querySelectorAll('li')
listitem.forEach((iteam) => {

    iteam.addEventListener('click', (iten) => {
        iten.target.style.textDecoration = 'line-through'
        iten.target.style.opacity = '0.8'
    })

})