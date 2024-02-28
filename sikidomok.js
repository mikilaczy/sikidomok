 console.log(trapez)
 console.log(negyzet)
function negyzet (){

Nkerulet=0;
 Nterulet=0;
 var x=document.getElementById("search")
 console.log(x);
 var a=x.value
 
 var Nterulet=a*a;
 var Nkerulet=4*a;
 let tartalom=`
 <p>A négyzet kerülete: ${Nkerulet}</p>
 <p>A négyzet területe: ${Nterulet}</p>
 `
 document.getElementById("negyzet").innerHTML+=tartalom;
 console.log(Nkerulet);}

 function teglalap(){
    ta=0;
    tb=0;
     Tkerulet=0;
      Tterulet=0;
     var x=document.getElementById("search1")
     var xx=document.getElementById("search1.")
     var ta=x.value
     var tb=xx.value
   
     Tterulet=ta*tb;
     Tkerulet=2*ta+2*tb;
     let tartalom=`
     <p>A téglalap kerülete: ${Tkerulet}</p>
     <p>A téglalap területe: ${Tterulet}</p>
     `
     document.getElementById("teglalap").innerHTML+=tartalom;
     console.log(Tkerulet);

}
function paraleogramma(){

    Tkerulet=0;
     Tterulet=0;
     var x=document.getElementById("search2")
     var xx=document.getElementById("search2.")
     var xxx=document.getElementById("search2..")
     var a=x.value
     var b=xx.value
     var ma=xxx.value
     Pterulet=a*ma;
     Pkerulet=a*2+2*b;
     let tartalom=`
     <p>A paraleogramma kerülete: ${Pkerulet}</p>
     <p>A Paraleogramma területe: ${Pterulet}</p>
     `
     document.getElementById("paraleogramma").innerHTML+=tartalom;
     console.log(Pkerulet);}

     function trapez(){

        Tkerulet=0;
         Tterulet=0;
         var x=document.getElementById("search3")
         var xx=document.getElementById("search3.")
         var xxx=document.getElementById("search3..")
         var xxxx=document.getElementById("search3...")
         var xxxxx=document.getElementById("search3....")
         var a=x.value
         var b=xx.value
         var c=xxx.value
         var d=xxxx.value
         var ma=xxxxx.value
         
         Traterulet=(a*ma+c*ma)/2;
         Trakerulet=a*1+b*1+c*1+d*1;
         let tartalom=`
         <p>A trapéz kerülete: ${Trakerulet}</p>
         <p>A trapéz területe: ${Traterulet}</p>
         `
         document.getElementById("trapez").innerHTML+=tartalom;
         console.log(Trakerulet);}

         function deltoid(){

            Tkerulet=0;
             Tterulet=0;
             let a=document.getElementsByName("tA").value
             let b=document.getElementsByName("tB").value
             let c=document.getElementsByName("tC").value
             let d=document.getElementsByName("tD").value
             let ma=document.getElementsByName("tma").value
             
             Dterulet=((a+c)*ma)/2;
             Dkerulet=a+b+c+d;
             let tartalom=`
             <p>A deltoid kerülete: ${Dkerulet}</p>
             <p>A deltoid területe: ${Dterulet}</p>
             `
             document.getElementById("deltoid").innerHTML+=tartalom;
             console.log(Dkerulet);}

    
             function rombusz(){
    
                Tkerulet=0;
                 Tterulet=0;
                 let a=document.getElementsByName("tA").value
                 let b=document.getElementsByName("tB").value
                 let c=document.getElementsByName("tC").value
                 let d=document.getElementsByName("tD").value
                 let ma=document.getElementsByName("tma").value
                 
                 Rterulet=((a+c)*ma)/2;
                 Rkerulet=a+b+c+d;
                 let tartalom=`
                 <p>A rombusz kerülete: ${Rkerulet}</p>
                 <p>A rombusz területe: ${Rterulet}</p>
                 `
                 document.getElementById("rombusz").innerHTML+=tartalom;
                 console.log(Trakerulet);}