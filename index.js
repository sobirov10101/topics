const listitem = document.querySelectorAll('li')
listitem.forEach((iteam) => {

    iteam.addEventListener('click', (iten) => {
        iten.target.style.textDecoration = 'line-through'
        iten.target.style.opacity = '0.8'
        iten.target.remove()
    })

})

// bugun ozim organgan narsalarim_____________________________________________________1
const ul = document.querySelector('ul')
const button = document.querySelector('button')

button.addEventListener('click', () => {
    const li = document.createElement('li')
    li.textContent = ('hello world')
    ul.appendChild(li)

})
const all = document.querySelectorAll('li')
all.forEach((ham) =>{
  ham.addEventListener(('click'), (ham) =>{
    ham.remove()
  })
})