const roll = ()=>{

    let r_num = Math.ceil(Math.random()*6);

    if(r_num==1){
        document.getElementById("img").src='DICE-IMAGE/inverted-dice-1.svg'
    }
    else if(r_num==2){
        document.getElementById("img").src='DICE-IMAGE/inverted-dice-2.svg'
    }
    else if(r_num==3){
        document.getElementById("img").src='DICE-IMAGE/inverted-dice-3.svg'
    }
    else if(r_num==4){
        document.getElementById("img").src='DICE-IMAGE/inverted-dice-4.svg'
    }
    else if(r_num==5){
        document.getElementById("img").src='DICE-IMAGE/inverted-dice-5.svg'
    }
    else if(r_num==6){
        document.getElementById("img").src='DICE-IMAGE/inverted-dice-6.svg'
    }
}
const m_roll = ()=>{
    const rotate= setInterval(()=>{
        let num = Math.ceil(Math.random()*6);

        if(num==1){
            document.getElementById("img").src='DICE-IMAGE/inverted-dice-1.svg'
        }
        else if(num==2){
            document.getElementById("img").src='DICE-IMAGE/inverted-dice-2.svg'
        }
        else if(num==3){
            document.getElementById("img").src='DICE-IMAGE/inverted-dice-3.svg'
        }
        else if(num==4){
            document.getElementById("img").src='DICE-IMAGE/inverted-dice-4.svg'
        }
        else if(num==5){
            document.getElementById("img").src='DICE-IMAGE/inverted-dice-5.svg'
        }
        else if(num==6){
            document.getElementById("img").src='DICE-IMAGE/inverted-dice-6.svg'
        }
    },100)

    setTimeout(() => {
        clearInterval(rotate)
        roll();
    },1000);

}

document.getElementById("button").addEventListener('click',m_roll);