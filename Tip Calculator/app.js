let amount = document.querySelector('.amount')
let percentage = document.querySelector('.percentage')
let total = document.querySelector('.total')

function tipCalculator(){
    let tip = amount.value*(percentage.value/100)
    let sum = +amount.value + +tip
    amount.value=""
    percentage.value =""
    total.innerHTML = `<p>TOTAL:${sum}</p>`
}
