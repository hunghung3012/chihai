const price_1_input = document.querySelector('.price_1');
const price_2_input = document.querySelector('.price_2');
const total_price_input = document.querySelector('.total_price');
const total_price_button = document.querySelector('.total_button');
const select_pay = document.querySelector('.select_pay');
console.log(total_price_button);
total_price_button.addEventListener('click', ()=> {
    tinhToan();
})

  
function tinhToan() {
    let price_1 = parseInt(price_1_input.value);
    let price_2 = parseInt(price_2_input.value);
    if(isNaN(price_1) || isNaN(price_2)) {
        alert("Có nhập thôi cũng nhát");
    }
    else {
        console.log(select_pay.value);

    if (select_pay.value == '0') {
    let c = (price_2-price_1)*10/100 + price_1;
    total_price_input.innerText = convert(c);
    }
    if (select_pay.value == '1') {
    let c = (price_2-price_1)*3/100 + price_1;
    total_price_input.innerText = convert(c);
    }
   
    }
}
function convert(number) {
    let vnd = number.toLocaleString('vi', { style: 'currency', currency: 'VND' });
    vnd = vnd.replace('.', ',');
    return vnd;
}