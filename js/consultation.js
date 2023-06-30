function Submit (){
    const consult = document.getElementById("consult").value;
    
    localstorage.setItem("SUBJECT", consult);
    
    return;
}