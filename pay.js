import {cost1,cost2,cost3} from "./order.js"

const tot = document.querySelector(".tot")

const item1 = document.querySelector(".item1")

const item2 =document.querySelector(".item2")

const item3 =document.querySelector(".item3")

const subtotal =document.querySelector(".subtotal")

const tax =document.querySelector(".tax")

function getTot1(){
    return localStorage.getItem("tot1");
}

function getTot2(){
    return localStorage.getItem("tot2");
}

function getTot3(){
    return localStorage.getItem("tot3");
}

item1.innerHTML = getTot1() + "- Certified-Mugs-Root-Beer $" + (getTot1() * cost1) 

item2.innerHTML = getTot2() + "- Lemon-Lime-Gatorade $" + (getTot2() * cost2) 

item3.innerHTML = getTot3() + "- REAL-Coke-Thats-Good $" + (getTot3() * cost3) 

const subTot = (getTot1() * cost1 + getTot2()  * cost2 + getTot3() * cost3 ).toFixed(2)

subtotal.innerHTML + "Subtotal:" + subTot

const taxNum = (0.0825 * parseFloat(subTot)).toFixed(2)

tax.innerHTML = "Tax:" + taxNum

const total = "Total: " + (parseFloat(subTot) + parseFloat(taxNum)).toFixed(2)

tot.innerHTML = total

