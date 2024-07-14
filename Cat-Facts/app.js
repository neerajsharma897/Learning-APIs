let url="https://catfact.ninja/fact";
let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let button = document.querySelector("button");


button.addEventListener("click",async () => {
    try{
        let res = await axios.get(url);
        p.innerText = res.data.fact;
    }
    catch(err){
        console.log(err);
    }
});


async function getfacts(){
    try{
        let res = await axios.get(url);
        console.log(res.data.fact);
    }
    catch(err){
        console.log(err);
    }
};



