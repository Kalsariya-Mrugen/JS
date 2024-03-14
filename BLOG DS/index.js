let datas = JSON.parse(localStorage.getItem('POST')) || [];


const blog = () => {

    document.getElementById("blog").innerHTML = "";
    datas.map((ele, i) => {

        let div = document.createElement("div")
        let title = document.createElement("h1")
        title.innerHTML = ele.title
        let img = document.createElement("img")
        img.src = ele.img
        let contant = document.createElement("h4")
        contant.innerHTML = ele.contant
        let btn = document.createElement("i")
        btn.innerHTML = '<i class="fa-solid fa-trash"></i>'
        let l_btn = document.createElement("i")
        l_btn.innerHTML = '<i class="fa-regular fa-heart"></i>'
        l_btn.setAttribute("class","like_btn")
        div.append(title,l_btn,img,contant,btn)
        

        l_btn.addEventListener("click", () => {
            l_btn.classList.toggle('heart');
            if(l_btn.innerHTML!='<i class="fa-solid fa-heart"></i>'){
                l_btn.innerHTML='<i class="fa-solid fa-heart"></i>';
                alert(`You Liked ${ele.title} POST`);
            }
            else{
                l_btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
                alert(`You Unliked ${ele.title} POST`)
            }
            localStorage.setItem("POST",JSON.stringify(datas));
        })
        
        btn.addEventListener("click", () => {
            datas.splice(i, 1);
            localStorage.setItem("POST",JSON.stringify(datas));
            blog();
        })
        document.getElementById("blog").append(div)
    })
}



const show = (e) => { 

    e.preventDefault();

    let title = document.getElementById('title').value;
    let img = document.getElementById('img').value;
    let contant = document.getElementById('ta').value;

    let data = {
        title: title,
        img: img,
        contant: contant,
    }

    datas.push(data);

    localStorage.setItem("POST", JSON.stringify(datas));

    blog();
}

blog();

document.getElementById("form").addEventListener("submit", show);