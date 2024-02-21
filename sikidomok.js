document.getElementById("sumbit1").onclick=function(event){
event.preventDefault();
Nkerulet=0;
 Nterulet=0;
 a=event.target.nA.value;
 Nterulet=a*a;
 Nkerulet=4*a;
 let tartalom=`
 <p>A négyzet kerülete: ${Nkerulet}</p>
 `
 document.getElementById("negyzet").innerHTML+=tartalom;
}