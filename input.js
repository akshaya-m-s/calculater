function add(){
    var f=document.getElementById("first").value
    var s=document.getElementById("second").value
    var a=Number(f)+Number(s)
   var a= document.getElementById("result").innerHTML=`<b>${a}</b>`
}
function sub(){
    var f=document.getElementById("first").value
    var s=document.getElementById("second").value
    var a=Number(f)-Number(s)
     var a=document.getElementById("result").innerHTML=`<b>${a}</b>`
}
function mul(){
    var f=document.getElementById("first").value
    var s=document.getElementById("second").value
    var a=Number(f)*Number(s)
    var a=document.getElementById("result").innerHTML=`<b>${a}</b>`
}
function divide(){
    var f=document.getElementById("first").value
    var s=document.getElementById("second").value
    var a=Number(f)/Number(s)
     var a=document.getElementById("result").innerHTML=`<b>${a}</b>`
}
    

function cleared(){
   
    document.getElementById("first").value=""
    document.getElementById("second").value=""
//     document.getElementById("result").value=""
 }

