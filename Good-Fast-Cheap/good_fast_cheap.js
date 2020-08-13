

function switchGood() {
    let g = document.getElementById("good").checked;
    let f = document.getElementById("fast").checked;
    let c = document.getElementById("cheap").checked;
    if(c && f){
        if(Math.random()<0.5){
            document.getElementById("cheap").checked = false;
        } else{
            document.getElementById("fast").checked = false;
        }
    }
}
function switchCheap() {
    let g = document.getElementById("good").checked;
    let f = document.getElementById("fast").checked;
    let c = document.getElementById("cheap").checked;
    if(g && f){
        if(Math.random()<0.5){
            document.getElementById("good").checked = false;
        } else{
            document.getElementById("fast").checked = false;
        }
    }
}
function switchFast() {
    let g = document.getElementById("good").checked;
    let f = document.getElementById("fast").checked;
    let c = document.getElementById("cheap").checked;
    if(c && g){
        if(Math.random()<0.5){
            document.getElementById("cheap").checked = false;
        } else{
            document.getElementById("good").checked = false;
        }
    }
}