let body=document.querySelector('body')
let c=document.querySelector('#c')
let b=document.querySelector('#b')
let a=document.querySelector('#a')

 body.onclick=function(){
    if(b.checked &&a.checked||a.checked&&c.checked||b.checked&&c.checked){
        body.classList.add('darkMode')
        
        }
    else{
         body.classList.remove('darkMode')
        }
 }