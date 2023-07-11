const price_1_input = document.querySelector('.price_1');
const price_2_input = document.querySelector('.price_2');
const total_price_input = document.querySelector('.total_price');
const total_price_button = document.querySelector('.total_button');
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
    let c = (price_2-price_1)*10/100 + price_1;
    total_price_input.innerText = convert(c);
    console.log(c);
    }
}
function convert(number) {
    let vnd = number.toLocaleString('vi', { style: 'currency', currency: 'VND' });
    vnd = vnd.replace('.', ',');
    return vnd;
}