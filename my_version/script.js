const panels = document.querySelectorAll('.panel');
var num = 0;

function setActiveClasse(className){
    num = (num+1)%5

    panels.forEach((panel) =>{
        panel.classList.remove(className);
    })

    panels[num].classList.add(className);
}

setInterval(function(){setActiveClasse('active')}, 5000);