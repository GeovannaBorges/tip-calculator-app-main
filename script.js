const error_msg = document.getElementsByClassName("error-msg")
const bill_input = document.getElementById("bill-input")
const tip_btn = {
    five_percent: document.getElementById("btn-5"),
    ten_percent: document.getElementById("btn-10"),
    fifteen_percent: document.getElementById("btn-15"),
    twenty5_percent: document.getElementById("btn-25"),
    fifty_percent: document.getElementById("btn-50"),
}
const custom_input = document.getElementById("custom-input")
const num_of_ppl_input = document.getElementById("num-of-ppl-input")
const tip_amount_area = document.getElementById("tip-value-area")
const total_area = document.getElementById("total-value-area")
const reset_btn = document.getElementById("reset-btn")
let possibleError = true
let tip = 0

bill_input.onchange = () => {
    if (getError() == true){
        getError()
    }
    else {
        Submit(tip)
    }
}

num_of_ppl_input.onchange = () => {
    if (getError() == true) {
        getError()
    }
    else {
        Submit(tip)
    }
}

tip_btn.five_percent.onclick = () => {
    tip = 0.05
    if (getError() == true) {
        getError()
    }
    else {
        Submit(tip)
    }
}

tip_btn.ten_percent.onclick = () => {
    tip = 0.1
    if (getError() == true) {
        getError()
    }
    else {
        Submit(tip)
    }
   
}

tip_btn.fifteen_percent.onclick = () => {
    tip = 0.15
    if (getError() == true) {
        getError()
    }
    else {
        Submit(tip)
    }
}

tip_btn.twenty5_percent.onclick = () => {
    tip = 0.25
    if (getError() == true) {
        getError()
    }
    else {
        Submit(tip)
    }
}

tip_btn.fifty_percent.onclick = () => {
    tip = 0.5
    if (getError() == true) {
        getError()
    }
    else {
        Submit(tip)
    }
}

custom_input.onchange = () => {
    tip = Number(custom_input.value) / 100
    if (getError() == true) {
        getError()
    }
    else {
        Submit(tip)
    }
}

function Submit(t) {
        
        let tip_amount = (Number(bill_input.value) * t)
        let tip_amount_person = Math.abs(tip_amount / (Number(num_of_ppl_input.value)))
        let total_person = (Number(bill_input.value) + tip_amount) / Number(num_of_ppl_input.value)
        tip_amount_area.innerHTML = `$${tip_amount_person.toFixed(2)}`
        total_area.innerHTML = `$${total_person.toFixed(2)}`
        reset_btn.style.opacity = "1"
        reset_btn.style.cursor = "pointer"
 
}

function getError() {
    if (bill_input.value.length < 1) {
        error_msg[0].style.visibility = "visible"
        bill_input.style.border = "1px solid red"
        possibleError = true
    }
    else {
        error_msg[0].style.visibility = "hidden"
        bill_input.style.border = "none"
        possibleError = false
    }

    if (num_of_ppl_input.value.length < 1) {
        error_msg[1].style.visibility = "visible"
        num_of_ppl_input.style.border = "1px solid red"
        possibleError = true
    }
    else {
        error_msg[1].style.visibility = "hidden"
        num_of_ppl_input.style.border = "none"
        possibleError = false
    }

    return possibleError

}
reset_btn.onclick = () => {
    bill_input.value = "";
    custom_input.value = "";
    num_of_ppl_input.value = "";
    tip_amount_area.innerHTML = "$0.00";
    total_area.innerHTML = "$0.00";
    reset_btn.style.opacity = "0.5"
    reset_btn.style.cursor = ""
    
}


