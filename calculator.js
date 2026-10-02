let root =document.getElementById('root');
let bai =document.getElementById('bai');
let power =document.getElementById('power');
let am =document.getElementById('am');
let sin =document.getElementById('sin');
let cos =document.getElementById('cos');
let tan =document.getElementById('tan');
let nibary =document.getElementById('nibary');
let ln =document.getElementById('ln');
let log =document.getElementById('log');
let DeletAll =document.getElementById('DeletAll');
let bracket =document.getElementById('bracket');
let persant =document.getElementById('persant');
let portion =document.getElementById('portion');
let multipy =document.getElementById('multipy');
let minus =document.getElementById('minus');
let plas =document.getElementById('plas');
let comma =document.getElementById('comma');
let DEL =document.getElementById('DEL');
let equal =document.getElementById('equal');
let one =document.getElementById('one');

let two =document.getElementById('two');
let three =document.getElementById('three');
let four =document.getElementById('four');
let five =document.getElementById('five');
let six =document.getElementById('six');
let seven =document.getElementById('seven');
let eight =document.getElementById('eight');
let nine =document.getElementById('nine');
let zero =document.getElementById('zero');
let input =document.querySelector('input');
let more =document.getElementById('more');
let btn = document.getElementById('btn');
let e =Math.E
let pi =Math.PI
let mode

btn.addEventListener('click', () => {
    // تبديل فئة الإخفاء
    more.classList.toggle('hidden');

    // الفحص وتغيير النص داخل الحدث
    if (more.classList.contains('hidden')) {
        btn.style.color='aqua'
        btn.innerText = 'more';
    } else if(more.className=='') {
        btn.style.color='red'
        btn.innerText = 'less';
    }
});





let firstnumber = 0
let typeOperation = ''


function record(num){
    input.value += num
}
function coma(){
    if(input.value.includes('.')==true){

    }else{
        record('.')
    }
}
function del(){
    input.value = input.value.slice(0,-1)
}
function DeleteAll(){
    input.value = ''
}
function sqrt(){
    input.value = Math.sqrt(input.value)
}
minus.addEventListener('click',()=>{
    firstnumber = parseFloat(input.value);
    typeOperation = '-'
    input.value = ''
})

plas.addEventListener('click',()=>{
    firstnumber = parseFloat(input.value);
    typeOperation = '+'
    input.value = ''
})
multipy.addEventListener('click',()=>{
    firstnumber = parseFloat(input.value);
    typeOperation = 'x'
    input.value = ''
})
portion.addEventListener('click',()=>{
    firstnumber = parseFloat(input.value);
    typeOperation = '/'
    input.value = ''
})

persant.addEventListener('click',()=>{
    firstnumber = parseFloat(input.value);
    typeOperation = '%'
    input.value = ''
})
power.addEventListener('click',()=>{
    firstnumber = parseFloat(input.value);
    typeOperation = '**'
    input.value = ''
})

equal.addEventListener('click',()=>{
    let secondnumber = parseFloat(input.value)
    if(typeOperation === '+'){
        input.value = firstnumber + secondnumber;
    }else if(typeOperation === '-'){
        input.value = firstnumber - secondnumber;
    }else if(typeOperation === '/'){
       if(secondnumber == '0'){
        input.value='error'
       }else{ input.value = firstnumber / secondnumber;}
    }else if(typeOperation === 'x'){
        input.value = firstnumber * secondnumber;
    }else if(typeOperation === '%'){
        input.value = firstnumber % secondnumber;
    }else if(typeOperation === '**'){
        input.value = firstnumber ** secondnumber;
    }
})

am.addEventListener('click', () => {
    let num = parseInt(input.value);
    if (num < 0) {
        input.value = "Error";
    } else {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        input.value = result;
    }
});
sin.addEventListener('click', () => {
    let radians = parseFloat(input.value) * (Math.PI / 180);
    input.value = Math.sin(radians).toFixed(4); // تقريب لـ 4 أرقام عشرية
});

cos.addEventListener('click', () => {
    let radians = parseFloat(input.value) * (Math.PI / 180);
    input.value = Math.cos(radians).toFixed(4);
});

tan.addEventListener('click', () => {
    let radians = parseFloat(input.value) * (Math.PI / 180);
    input.value = Math.tan(radians).toFixed(4);
});
log.addEventListener('click', () => {
    input.value = Math.log10(parseFloat(input.value)); // لوغاريتم أساس 10
});

ln.addEventListener('click', () => {
    input.value = Math.log(parseFloat(input.value)); // اللوغاريتم الطبيعي أساس e
});
let openBrackets = 0;
bracket.addEventListener('click',function bracket() {
    let lastChar = input.value.slice(-1);
    // إذا كانت الشاشة فارغة أو تنتهي بعملية، نفتح قوساً
    if (input.value === "" || ['+', '-', 'x', '/', '**'].includes(lastChar)) {
        input.value += "(";
        openBrackets++;
         mode = cool
    } 
    // إذا كان هناك قوس مفتوح والآخر رقم، نغلق القوس
    else if (openBrackets > 0 && !isNaN(lastChar)) {
        input.value += ")";
        openBrackets--;
         mode =trad
    }else{
        mode =trad
    }
});


