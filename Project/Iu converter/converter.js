document.getElementById('output').style.visibility= "hidden";
// variables
var iumlValue = document.getElementById('IUinput');
var inPut = document.getElementsByTagName('input');
var accessInput = Array.from(inPut)[0].placeholder;


// eventlisteners
iumlValue.addEventListener('input', converter);




function converter(e){
   let imUl = e.target.value; 

   document.getElementById('output').style.visibility = 'visible';

   document.getElementById('ngmloutput').innerHTML = imUl*1.21;
   document.getElementById('iuloutput').innerHTML = imUl*1000;
   document.getElementById('ngdloutput').innerHTML = imUl*121;
   document.getElementById('miumloutput').innerHTML = imUl*121;

}
document.getElementById('output').style.visibility= "hidden";