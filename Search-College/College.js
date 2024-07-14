let url="http://universities.hipolabs.com/search?country=";
let p = document.querySelector("p");
let button = document.querySelector("button");


button.addEventListener("click",async () => {
    try{
        p.innerText = "";
        p.style.backgroundColor= "transparent"
        let country = document.querySelector("input").value;
        console.log(country);
        let res = await axios.get(url+country);
        console.log(res.data);
        let arr = res.data;
        let i = 1;
        p.style.minHeight = "100vh";
        p.style.padding= "10px";
        p.style.margin= "20px";
        p.style.borderRadius= "1.25rem";
        p.style.opacity= "0.85";
        for(a of arr){
            p.style.backgroundColor= "white";
            p.innerHTML += `<p>  ${i++}. ${a.name} </p>`;
        }
    }
    catch(err){
        console.log(err);
    }
});

