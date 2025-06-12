function yes(){ //khi an vao se hien len bang alert
    alert("ANH SẼ VỀ <3")
}
function no(){// khi di chuyen chuot den nut no se di chuyen
    const button = document.getElementById("noBt")
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    button.style.left = x + "px";
    button.style.top = y + "px";
}