document.getElementById("pic").onclick = function(){
    alert("Ouch man")
}

document.body.addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById("about").onclick = function() {
    alert("I don't have an about yet")
}
document.getElementById("projects").onclick = function()  {
    alert("this function hasn't been added yet.")
}