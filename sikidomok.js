 function negyzet(){

Nkerulet=0;
 Nterulet=0;
 let a=document.getElementsByName("nA").value
 
 Nterulet=a*a;
 Nkerulet=4*a;
 let tartalom=`
 <p>A négyzet kerülete: ${Nkerulet}</p>
 <p>A négyzet területe: ${Nterulet}</p>
 `
 document.getElementById("negyzet").innerHTML+=tartalom;
 console.log(Nkerulet);
}