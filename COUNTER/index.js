
const counter1 = () => {
    let c = 0
    let loop1 = setInterval(() => {
        do {
            c+=1567;
            if(c>1234567){
                clearInterval(loop1)
            }
        } while (c == 1000000);
        document.querySelector("#c1").innerHTML = c;
    }, 10);
}
setTimeout(counter1, 1000);
const counter2 = () => {
    let c = 0
    let loop1 = setInterval(() => {
        do {
            c += 312;
            if (c > 500000) {
                clearInterval(loop1)
            }
        } while (c == 500000);
        document.querySelector("#c2").innerHTML = c;
    }, 5);
}
setTimeout(counter2, 3000);
const counter3 =()=>{
    let c=0
    let loop1=setInterval(() => {
        do {
            c+=78;
            if(c>50000){
                clearInterval(loop1)
            }
        } while(c==50000);
        document.querySelector("#c3").innerHTML=c;
    }, 10);
}
setTimeout(counter3, 5000);
const counter4 =()=>{
    let c=0
    let loop1=setInterval(() => {
        do {
            c+=210;
            if(c>100000){
                clearInterval(loop1)
            }
        } while(c==100000);
        document.querySelector("#c4").innerHTML=c;
    }, 10);
}
setTimeout(counter4, 7000);