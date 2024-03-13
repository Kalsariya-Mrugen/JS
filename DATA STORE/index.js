let count1=localStorage.getItem('count1');
document.getElementById("count_like").innerHTML=count1 || 0;

let count2=localStorage.getItem('count2');
document.getElementById("count_com").innerHTML=count2 || 0;

let count3=localStorage.getItem('count3');
document.getElementById("count_share").innerHTML=count3 || 0;


const counter1 = () =>{
    count1++;

    document.getElementById("count_like").innerHTML=count1;
    
    localStorage.setItem("count1",count1);
}

const counter2 = () =>{
    count2++;

    document.getElementById("count_com").innerHTML=count2;
    
    localStorage.setItem("count2",count2);
}

const counter3 = () =>{
    count3++;

    document.getElementById("count_share").innerHTML=count3;
    
    localStorage.setItem("count3",count3);
}

document.querySelector(".fa-share-nodes").addEventListener("click",counter3);
document.querySelector(".fa-comment").addEventListener("click",counter2);
document.querySelector(".fa-thumbs-up").addEventListener("click",counter1);