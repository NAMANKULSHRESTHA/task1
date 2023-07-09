let nkEl=document.getElementById("nk-el")
let signEl=document.getElementById("sign-el")
let creEl=document.getElementById("cre-el")
let jkEl=document.getElementById("jk-ekl")
let x=0
function inc(){
    nkEl.textContent="A NEW USER JUST SIGNED UP!!!!"
    x+=1
    signEl.textContent=x
}
function cre(){
      creEl.textContent="TOTAL ENTRIES:"+x
      jkEl.textContent="TOTAL ENTRIES TODAY:"+X
}