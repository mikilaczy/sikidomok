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
 tartalom=`
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

            Dkerulet=0;
             Dterulet=0;
             var x=document.getElementById("search4")
             var xx=document.getElementById("search4.")
             var xxx=document.getElementById("search4..")
             var xxxx=document.getElementById("search4...")
             
             var a=x.value
             var b=xx.value
             var e=xxx.value
             var f=xxxx.value
             

             Dterulet=(e*f)/2;
             Dkerulet=(a*1+b*1)*2;
             let tartalom=`
             <p>A deltoid kerülete: ${Dkerulet}</p>
             <p>A deltoid területe: ${Dterulet}</p>
             `
             document.getElementById("deltoid").innerHTML+=tartalom;
             console.log(Dkerulet);}

    
             function rombusz(){
    
                Rkerulet=0;
                 Rterulet=0;
                 var x=document.getElementById("search5")
                 var xx=document.getElementById("search5.")
                
                 var a=x.value
                 var ma=xx.value
                
               
                 
                 Rterulet=a*ma;
                 Rkerulet=4*a;
                 let tartalom=`
                 <p>A rombusz kerülete: ${Rkerulet}</p>
                 <p>A rombusz területe: ${Rterulet}</p>
                 `
                 document.getElementById("rombusz").innerHTML+=tartalom;
                 console.log(Rkerulet);}

                 function haromszog(){
    
                  Hkerulet=0;
                   Hterulet=0;
                   var x=document.getElementById("search6")
                   var xx=document.getElementById("search6.")
                   var xxx=document.getElementById("search6..")
                   var xxxx=document.getElementById("search6...")
                   var a=x.value
                   var b=xx.value
                   var c=xxx.value
                   var ma=xxxx.value
                 
                   Hterulet=(a*ma)/2;
                   Hkerulet=a*1+b*1+c*1;
                   let tartalom=`
                   <p>A háromszög kerülete: ${Hkerulet}</p>
                   <p>A háromszög területe: ${Hterulet}</p>
                   `
                   document.getElementById("haromszog").innerHTML+=tartalom;
                   console.log(Hkerulet);}

                   function kor(){
    
                     Kkerulet=0;
                      Kterulet=0;
                      var x=document.getElementById("search7")
                     
                      var r=x.value
                      
                    
                      Kterulet=2*r*3.14;
                      Kkerulet=r*r*3.14;
                      let tartalom=`
                      <p>A kör kerülete: ${Kkerulet}</p>
                      <p>A kör területe: ${Kterulet}</p>
                      `
                      document.getElementById("kor").innerHTML+=tartalom;
                      console.log(Kkerulet);}