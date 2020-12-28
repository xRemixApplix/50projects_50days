const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasse('active')
        panel.classList.add('active')
    })
})

function removeActiveClasse(className){
    panels.forEach((panel) =>{
        panel.classList.remove(className)
    })
}