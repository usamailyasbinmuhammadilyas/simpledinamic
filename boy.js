function button() {
    document.getElementById("heading").innerHTML=''
    let number= document.getElementById("input").value;
    for (let index = 1; index < 11; index++) {
        document.getElementById("heading").innerHTML+=
      `  ${number}  x ${index} =  ${number*index}<br>`
        
    }
    
}
