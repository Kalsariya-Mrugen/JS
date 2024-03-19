const api = (m)=>{
    
    m.map((ele)=>{

        let div = document.createElement('div');
        div.setAttribute("class","box");

        let title = document.createElement('p');
        title.setAttribute("class","title")
        title.innerHTML=ele.title;

        let img = document.createElement('img');
        img.setAttribute("class","img");
        img.src=ele.thumbnail;

        let price = document.createElement('p');
        price.setAttribute("class","price");
        price.innerHTML=`Price: <b>$</b> ${ele.price}`;

        let rating = document.createElement('p');
        rating.setAttribute("class","rating");
        rating.innerHTML=`Rating : ${ele.rating}/5`;


        div.append(title,img,price,rating);
        document.getElementById("main-box").append(div);
    })

}


fetch('https://dummyjson.com/products')
.then((r) => r.json())
.then((m) => api(m.products))