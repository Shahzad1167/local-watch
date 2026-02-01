const time=document.querySelector('#time');
const dat=document.querySelector('#date');

setInterval(function() {
let date = new Date();
time.innerHTML = date.toLocaleTimeString();
dat.innerHTML = date.toLocaleDateString('en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    
});
},1000)
