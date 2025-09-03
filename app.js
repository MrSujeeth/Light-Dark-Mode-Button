function darkAndLight(){
    let btn = document.getElementById("btn")

    if(btn.innerText === "Dark"){
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
        btn.innerText = "Light"
    }

    else{
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        btn.innerText = "Dark"
    }
}




