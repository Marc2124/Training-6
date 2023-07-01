alert('This is an alert message')
var x , y; 
x = 9; 
y= x + 3; 
console.log(x);
console.log(y);
x = document.getElementById('test1');
x.innerHTML = 'Welcome to Full Stack training';
x=4;
console.log(x);
x = '__'

var change1; 
change1 = document.getElementById('li1');
change1.innerHTML='Marie Kheir';

var change2 = document.getElementById('li2'); 
change2.innerHTML = 'Bashir Maroun'


function click1() {
    alert('marcel');
    document.getElementById('test2').innerHTML= ' dont click me ';
}

function divv(){
  var x = 'This is the description ';


}


setTimeout(function()  {
    document.getElementById('li3').innerHTML = 'Loading'
    
}, 1000);

setInterval(function()  {
    var interval1 = document.getElementById('li2');
    interval1.innerHTML= interval1.innerHTML + x ;
    
}, 2000);

var counter = 0 ; 
var interval2 = document.getElementById('li3');
setInterval(function()  {
    
    if ( counter < 3 ) {
        
    interval2.innerHTML= interval2.innerHTML + '.' ;
    counter = counter + 1;
    } else {
        interval2.innerHTML = 'Loading';
        counter = 0; 
       

    }
    
}, 2500);



function toggle() { 
   

    console.log(state);
    
    console.log(state);
    if (isbroke==false ) 
    {
        if ( state == false  ) {
        
            button.innerHTML='Turn Off';
            lamp.src='on.png'
          
        } 
        else {
           
            button.innerHTML='Turn On';
            lamp.src='off.png'
    
        }
        state = !state;

    } else {
        alert('Lamp is broken, fix it in order to turn on')
    }
   


}

function brake() {  
    var buttonn = document.getElementById('b2');
    buttonn.innerHTML = 'Broken';
    lamp.src="borken.png";
    button.innerHTML='Broken';
    isbroke=true;

    
   
}