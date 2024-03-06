let datas = []

const blog = () => {
    document.getElementById("blog").innerHTML = ""
    datas.map((ele, i) => {
        let div1 = document.createElement("div")
        let img = document.createElement("img")
        img.src = ele.img
        let div2 = document.createElement("div")
        let title = document.createElement("h1")
        title.innerHTML = ele.title
        let contant = document.createElement("h4")
        contant.innerHTML = ele.contant
        let btn = document.createElement("button")
        btn.innerHTML = "Delete"
        let l_btn = document.createElement("button")
        l_btn.innerHTML = "LIKE"
        div1.append(img)
        div2.append(title, contant)

        l_btn.addEventListener("click", () => {
            alert("You LIKED This Blog")
        })
        btn.addEventListener("click", () => {
            datas.splice(i, 1)
            blog();

        })
        title.setAttribute("class", "title");
        document.getElementById("blog").append(div1,div2,l_btn,btn)
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
        contant: contant
    }
    datas.push(data);
    blog();
}


document.getElementById("submit").addEventListener("click", show);