let startEl = document.getElementById('start');
let stopEl = document.getElementById('stop');
var clock = document.getElementById('clock');
var hrEl=document.getElementById('hr');
var minEl=document.getElementById('min');
var secEl=document.getElementById('sec');
let milisecEl = document.getElementById('milisec')


let sec = 0;
let min = 0 ;
let hr = 0;

let count = 0

let timer = false



function start(){
    timer=true
    run()
}

function run(){

        setInterval(function(){
            hrEl.innerText = hr;
            minEl.innerText = min ;
            secEl.innerText = sec ;
            milisecEl.innerText = count ;
            count ++ 
            if(count == 100){
                sec = sec +1
                count = 0
            }
            if(sec == 60){
                min = min+1
                sec= 0
            }
            if(min==60){
                hr = hr + 1
                min = 0
            }
        },10);
    }

stopEl.addEventListener('click',function(){
         clearInterval(true)
         timer = true   
    }
)



let reset =document.getElementById('reset')
reset.addEventListener('click',function(){
    clearInterval(false)
    timer = false
    sec = 0;
    min = 0;
    hr = 0 ;
    count = 0;

    
})