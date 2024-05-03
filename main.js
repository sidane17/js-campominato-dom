
let easy=document.getElementById("easy");
let madium=document.getElementById("medium");
let hard=document.getElementById("hard");
let num;
let e;
let m;
let h;
let w=0;
let random=[];
let r=0;
let k;


// ---------------------------------------------------------------------------------------------
function casuale(num){
    while(w<16){
        r=Math.floor(Math.random() * (num) + 1);
       
        if(random.includes(r)==false){
            random[w]=r;
            w++;
        }
    }
    return random
}


// ---------------------------------------------------------------------------------------------

easy.onclick= function(){
     e=easy.innerHTML;
     e=parseInt(e);
    num=e;
    k=casuale(num);
    console.log(k);
    console.log(k)

}
medium.onclick= function(){
    m=medium.innerHTML;
    m=parseInt(m);
    num=m;
    k=casuale(num);
    console.log(k)
}
hard.onclick= function(){
    h=hard.innerHTML;
    h=parseInt(h);
    num=h;
    k=casuale(num);
    console.log(k)
    
    
}


// ---------------------------------------------------------------------------------------------

document.getElementById("gioca").onclick=function(){
    let b =document.getElementById("container_game");
    let win=0;
    let lose=0;
    for(let i=1;i<=num;i++){
        let elemento=creaElemento(num,i)
        b.append(elemento);
        elemento.addEventListener("click",function(){
            let z=elemento.innerHTML;
            z=parseInt(z);
           
            
            if(k.includes(z)==true){
                console.log("click")
            elemento.classList.add("background"); 
            
            
            lose++;
            
            if(lose==16){
                alert("hai perso")
            }
            
            }else {
                elemento.classList.add("background_win");
                win++;

                if(win==(num-16)){
                    alert("hai vinto")
                }
            }

        
            
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


