let mybutton1 = document.getElementById('mybtn1');
let mybutton2 = document.getElementById('mybtn2');
let mybutton3 = document.getElementById('mybtn3');
let mybutton4 = document.getElementById('mybtn4');
let mybutton5 = document.getElementById('mybtn5');
let mybutton6 = document.getElementById('mybtn6');
let mybutton7 = document.getElementById('mybtn7');
let mybutton8 = document.getElementById('mybtn8');
let mybutton9 = document.getElementById('mybtn9');

mybutton1.addEventListener('click', my_one_eight_buttonClick);
mybutton2.addEventListener('click', my_one_eight_buttonClick);
mybutton3.addEventListener('click', my_one_eight_buttonClick);
mybutton4.addEventListener('click', my_one_eight_buttonClick);
mybutton5.addEventListener('click', my_one_eight_buttonClick);
mybutton6.addEventListener('click', my_one_eight_buttonClick);
mybutton7.addEventListener('click', my_one_eight_buttonClick);
mybutton8.addEventListener('click', my_one_eight_buttonClick);
mybutton9.addEventListener('click',my_nine_buttonClick);



//自分の1-8までのボタンの時
function my_one_eight_buttonClick(){
  // 今の値をとってくる
  let frontNumber = document.getElementById('mycount').textContent;
  // 文字列を数値の方に変更
  frontNumber = Number(frontNumber)
  count = frontNumber + 1;
  document.getElementById('mycount').textContent = count;
}

//自分の９を落とした時
function my_nine_buttonClick(){
  let frontNumber = document.getElementById('mycount').textContent;
  // 文字列を数値の方に変更
  frontNumber = Number(frontNumber)
  count = frontNumber + 2;
  document.getElementById('mycount').textContent = count;
}
