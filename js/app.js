const displayNum = document.querySelector(".displayNum");
const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")
const numInput = document.getElementById("numInput")



const addNum = () => {
    displayNum.innerText = `${Number(numInput.value) + Number(displayNum.innerText)}`
}

const minusNum = () => {
    displayNum.innerText = `${Number(displayNum.innerText)-Number(numInput.value)}`
}

plus.addEventListener("click",()=>{
    addNum();
})

minus.addEventListener("click",()=>{
    minusNum();
})

