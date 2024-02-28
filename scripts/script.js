const TimerHora = document.querySelector("#hour")
const TimerMinutes = document.querySelector("#minutes")
const TimerSeconds = document.querySelector("#seconds")
const BtnPause = document.querySelector("#PauseBtn")
const BtnPlay = document.querySelector("#PlayBtn")
const BtnReset = document.querySelector("#ResetBtn")
const BtnResume = document.querySelector("#ResumeBtn")
const Cont_Msg = document.querySelector("#Container_mensagens")
const Cont_Cronometer = document.querySelector("#Container_cronometer")

document.body.classList = localStorage.getItem("classe")

let horas = Number(localStorage.getItem("horas"))
let minutos = Number(localStorage.getItem("minutos"))
let segundos = Number(localStorage.getItem("segundos"))
let interval
let Paused = false
let paragrafo = document.querySelector("#Container_mensagens p")
paragrafo.style.display = "none"

if(localStorage.length == 1 || localStorage.length == 0){
    TimerHora.textContent = "00"
    TimerMinutes.textContent = "00"
    TimerSeconds.textContent = "00"
}
else{
    TimerHora.textContent = FormatTime(localStorage.getItem("horas"))
    TimerMinutes.textContent = FormatTime(localStorage.getItem("minutos"))
    TimerSeconds.textContent = FormatTime(localStorage.getItem("segundos"))
}

BtnPlay.addEventListener("click", function(){
    Cont_Cronometer.style.height = "300px"
    BtnPause.style.display = "block"
    BtnPlay.style.display = "none"
    paragrafo.style.display = "block"
    paragrafo.textContent = "Bons estudos, meu amor ❤️"
    setTimeout(function sumir_inicio(){
        Cont_Cronometer.style.height = "280px"
        paragrafo.style.display = "none"
    },5000)
    
    interval = setInterval(function(){
        if(!Paused){
            segundos++
            if(segundos == 60){
                segundos = 0
                minutos++
                if(minutos == 60){
                    minutos = 0
                    horas++
                }
            }
            if(horas == 4 && minutos < 1 && paragrafo.textContent != "Bora doutora, mais um plantão 👩‍⚕️" && segundos < 30){
                paragrafo.style.display = "Block"
                paragrafo.textContent = `4 horas já. Parabéns, minha futura médica`
                Cont_Cronometer.style.height = "300px"
                
                let imagem2 = document.createElement("img")
                
                imagem2.setAttribute("src", "../imagens/relatorio-medico.png")
                imagem2.style.cssText = "width:20px; height:20px; margin-left:5px;"
    
                paragrafo.appendChild(imagem2)
            }
            if(horas == 4 && minutos < 1 && segundos == 30){
                paragrafo.style.display = "none"
                Cont_Cronometer.style.height = "280px"
            }
        }
        localStorage.setItem("horas",horas)
        localStorage.setItem("minutos",minutos)
        localStorage.setItem("segundos",segundos)

        TimerHora.textContent = FormatTime(horas)
        TimerMinutes.textContent =FormatTime(minutos)
        TimerSeconds.textContent = FormatTime(segundos)
    },1000)



})
function FormatTime(time){
   return time < 10 ? `0${time}`: time 
}

BtnPause.addEventListener("click", function(){
    Paused = true
      Cont_Cronometer.style.height = "300px"
      BtnResume.style.display = "block"
      BtnReset.style.display = "block"
      BtnPause.style.display = "none"
      paragrafo.style.display = "block"

    if(horas >= 4){
        paragrafo.textContent = "Descansa um pouco, Dra Fernanda 👩‍⚕️"
    }
    else{
        paragrafo.textContent = "Descansa um pouco, amor"
    }

})

BtnResume.addEventListener("click",function(){
    Cont_Cronometer.style.height = "300px"

    Paused = false
    BtnResume.style.display = "none"
    BtnReset.style.display = "none"
    BtnPause.style.display = "block"
    paragrafo.style.display = "block"
    
    if(horas >= 4){
        paragrafo.textContent = "Bora doutora, mais um plantão 👩‍⚕️"
    }
    else{
        paragrafo.textContent = "Continua estudando, amor. Você tá indo bem ❤️ "
    }
    
    setTimeout(function sumir_resume(){
        Cont_Cronometer.style.height = "280px"
        paragrafo.style.display = "none"
    },5000)
})
BtnReset.addEventListener("click", function(){
    Cont_Cronometer.style.height = "280px"

    Paused = false
    horas = 0
    minutos = 0
    segundos = 0

    TimerHora.textContent = "00"
    TimerMinutes.textContent = "00"
    TimerSeconds.textContent = "00"

    BtnPause.style.display = "none"
    BtnReset.style.display = "none"
    BtnResume.style.display = "none"
    BtnPlay.style.display = "block"

    paragrafo.style.display = "none"
    
    clearInterval(interval)
    localStorage.removeItem("horas")
    localStorage.removeItem("minutos")
    localStorage.removeItem("segundos")
})

BtnReset.addEventListener("mouseenter", function(){
    
    paragrafo.style.display = "block"
    if(horas < 4){
        Cont_Cronometer.style.height = "320px"
        paragrafo.innerHTML = `Antes de vc parar, saiba que você se dedicou muito hoje <br> eu estou muito orgulhoso de você, meu amor, te amo ❤️`}
        else{
        paragrafo.textContent = "Mais um plantão concluído. Parabéns, Dra Fernanda 👩‍⚕️"
        Cont_Cronometer.style.height = "300px"

    }
})


// Parte de efeitos dinâmicos com JS
const opt_style = document.querySelectorAll(".style")
const menu_estilos = document.querySelector(".menu_estilos")
const ul = document.querySelector("ul")

ul.style.display = "none"

menu_estilos.addEventListener("click", function(){
   if(ul.style.display == "none"){
    ul.style.display = "block"
    menu_estilos.classList = "menu_estilos_mouseenter"
   }
   else{
    menu_estilos.classList = "menu_estilos"
    ul.style.display = "none"
   }
})

menu_estilos.addEventListener("mouseenter", function(){
    menu_estilos.classList = "menu_estilos_mouseenter"
})

// inicio do tema de medicina
opt_style[0].addEventListener("click", function(){
    document.body.removeAttribute("class")
    localStorage.removeItem("classe")
})
// ABAIXO DISSO É ÁREA MED
opt_style[1].addEventListener("click", function Ativar_Med(){
       document.body.classList = "med"
       localStorage.setItem("classe", "med")
})

// ACIMA DISSO É ÁREA MED

// ABAIXO É A ÁREA DE NATUREZAS
opt_style[2].addEventListener("click", function Ativar_naturezas(){
    document.body.classList = "nat"
    localStorage.setItem("classe", "nat")
})

// ACIMA É A ÁREA DE NATUREZAS

opt_style[3].addEventListener("click", function Arivar_math(){
    document.body.classList = "mat"
    localStorage.setItem("classe","mat")
})






