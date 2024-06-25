var Flag = 0
var duration 
var Music = document.getElementById('Music')
var audio = document.querySelector('audio')
var button = document.querySelector('button')
var Play = document.getElementById('Play')
var Volume = document.getElementById('Volume') 
var Duration = document.getElementById('Duration')
var Rotate = document.getElementById('Rotate')
var Start = document.getElementById('Start')
var End = document.getElementById('End')
Music.addEventListener('change',()=>{
   audio.src = URL.createObjectURL(Music.files[0])
   setTimeout(() => {
   Duration.max = String(Math.round(audio.duration))
   End.textContent = `${parseInt(parseInt(Duration.max)/60)}` + `:${parseInt(Duration.max)%60}`
   }, 500);
   button.textContent = 'Play'
   button.style.width = '100px'
   button.style.marginLeft = '250px'
})
Play.addEventListener('click',()=>{
    if(audio.src == ''){
       button.style.width = 'Fit-content'
       button.style.marginLeft = '200px'
       button.textContent = 'Select please'
    }
    else{
    if(Flag==0){
    audio.play()
    Rotate.style.animationName = 'rotater'
    button.textContent = 'Pause'
    Flag = 1}
    else{
        audio.pause()
        Rotate.style.animationName = null
        button.textContent = 'Play'
        Flag = 0
    }}
})
Volume.addEventListener('change',()=>{
    audio.volume = parseFloat(Volume.value)
})
Duration.addEventListener('change',()=>{
    audio.currentTime = parseFloat(Duration.value)
})
audio.onplaying = goto
function goto(){
    setInterval(() => {
        if(Flag == 1){
        Duration.value = String(Math.round(audio.currentTime))
       parseInt(Duration.value)%60 >=10 ?Start.textContent = `${parseInt(parseInt(Duration.value)/60)}` + `:${parseInt(Duration.value)%60}`:Start.textContent = `${parseInt(parseInt(Duration.value)/60)}` + `:0${parseInt(Duration.value)%60}` 
    }
    }, 1000);
}