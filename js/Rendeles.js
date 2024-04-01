function SendOrderData() {
    let price = 1200;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.message");
    
    let amount = parseInt(amountInput.value) * price;
    

    message.innerHTML = amount;
}