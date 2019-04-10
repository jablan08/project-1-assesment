const displayNum = document.querySelector(".displayNum");
const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")
const numInput = document.getElementById("numInput")



const addNum = () => {
    let num = Number(numInput.value)+ Number(displayNum.innerText);
    displayNum.innerText = num;
    if (Math.sign(num)===1 || Math.sign(num)===0){
        displayNum.style.color = "black"
    }
}

const minusNum = () => {
    let num = Number(displayNum.innerText)-Number(numInput.value)
    displayNum.innerText = num;
    if (Math.sign(num)===-1){
        displayNum.style.color = "red"
    }
}

plus.addEventListener("click",()=>{
    addNum();
})

minus.addEventListener("click",()=>{
    minusNum();
})

