
let easy=document.getElementById("easy");
let madium=document.getElementById("medium");
let hard=document.getElementById("hard");
let num;
let e;
let m;
let h;
// ---------------------------------------------------------------------------------------------

easy.onclick= function(){
     e=easy.innerHTML;
     e=parseInt(e);
    num=e;
    console.log(num);
}
medium.onclick= function(){
    m=medium.innerHTML;
    m=parseInt(m);
    num=m;
}
hard.onclick= function(){
    h=hard.innerHTML;
    h=parseInt(h);
    num=h;
}
// ---------------------------------------------------------------------------------------------

document.getElementById("gioca").onclick=function(){
    let b =document.getElementById("container_game");
    
for(let i=1;i<=num;i++){
    let elemento=creaElemento(num,i)
    b.append(elemento);
    elemento.addEventListener("click",function(){
        console.log(i);
        elemento.classList.toggle("background");
    })
}
// ---------------------------------------------------------------------------------------------

function creaElemento(num,i){
    if(num==81){
        let cube=document.createElement("div")
    cube.classList.add("blocco_game_medium")
    cube.innerHTML=i;
    return cube;
    }else if(num==49){
        let cube=document.createElement("div")
    cube.classList.add("blocco_game_hard")
    cube.innerHTML=i;
    return cube;
    }
    let cube=document.createElement("div")
    cube.classList.add("blocco_game")
    cube.innerHTML=i;
    return cube;
}

}


