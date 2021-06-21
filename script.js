function buttonclick(num){
    console.log("wrk"+num)
   document.getElementById("screen").value+=num 
} 
function clrscr(){
    document.getElementById("screen").value=""
}
function equalclick(){
     var text=document.getElementById("screen").value
      var result=eval(text)
      document.getElementById('screen').value=result
}