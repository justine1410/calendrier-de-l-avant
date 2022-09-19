let case1 = document.querySelector(".row-1");
let case2 = document.querySelector(".row-2");

let date = new Date()
let day= date.getDate();
let month = date.getMonth();
let year = date.getFullYear();


console.log(case1);
case1.addEventListener('click', ()=>{
        case1.innerHTML = "Bon de réduction de --% au magasin ----------"
})
case2.addEventListener('click', ()=>{
    if(day == 1 && month == 11 && year == 2022){
        case2.innerHTML = "Bon de réduction de --% au magasin ----------"
    }else{
        case2.innerHTML = "Ce n'est pas le bon jour"
    }
})