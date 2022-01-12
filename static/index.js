let mybutton1 = document.getElementById('mybtn1');
let mybutton2 = document.getElementById('mybtn2');
let mybutton3 = document.getElementById('mybtn3');
let mybutton4 = document.getElementById('mybtn4');
let mybutton5 = document.getElementById('mybtn5');
let mybutton6 = document.getElementById('mybtn6');
let mybutton7 = document.getElementById('mybtn7');
let mybutton8 = document.getElementById('mybtn8');
let mybutton9 = document.getElementById('mybtn9');

let yourbutton1 = document.getElementById('yourbtn1');
let yourbutton2 = document.getElementById('yourbtn2');
let yourbutton3 = document.getElementById('yourbtn3');
let yourbutton4 = document.getElementById('yourbtn4');
let yourbutton5 = document.getElementById('yourbtn5');
let yourbutton6 = document.getElementById('yourbtn6');
let yourbutton7 = document.getElementById('yourbtn7');
let yourbutton8 = document.getElementById('yourbtn8');
let yourbutton9 = document.getElementById('yourbtn9');

let plusInning = document.getElementById('pulus-inning');
let minusInning = document.getElementById('minus-inning');

let disbutton1 = document.getElementById('disbtn1');
let disbutton2 = document.getElementById('disbtn2');
let disbutton3 = document.getElementById('disbtn3');
let disbutton4 = document.getElementById('disbtn4');
let disbutton5 = document.getElementById('disbtn5');
let disbutton6 = document.getElementById('disbtn6');
let disbutton7 = document.getElementById('disbtn7');
let disbutton8 = document.getElementById('disbtn8');

mybutton1.addEventListener('click', {number:'1', handleEvent:my_one_eight_buttonClick});
mybutton2.addEventListener('click', {number:'2', handleEvent:my_one_eight_buttonClick});
mybutton3.addEventListener('click', {number:'3', handleEvent:my_one_eight_buttonClick});
mybutton4.addEventListener('click', {number:'4', handleEvent:my_one_eight_buttonClick});
mybutton5.addEventListener('click', {number:'5', handleEvent:my_one_eight_buttonClick});
mybutton6.addEventListener('click', {number:'6', handleEvent:my_one_eight_buttonClick});
mybutton7.addEventListener('click', {number:'7', handleEvent:my_one_eight_buttonClick});
mybutton8.addEventListener('click', {number:'8', handleEvent:my_one_eight_buttonClick});
mybutton9.addEventListener('click',my_nine_buttonClick);

yourbutton1.addEventListener('click', {number:'1', handleEvent:your_one_eight_buttonClick});
yourbutton2.addEventListener('click', {number:'2', handleEvent:your_one_eight_buttonClick});
yourbutton3.addEventListener('click', {number:'3', handleEvent:your_one_eight_buttonClick});
yourbutton4.addEventListener('click', {number:'4', handleEvent:your_one_eight_buttonClick});
yourbutton5.addEventListener('click', {number:'5', handleEvent:your_one_eight_buttonClick});
yourbutton6.addEventListener('click', {number:'6', handleEvent:your_one_eight_buttonClick});
yourbutton7.addEventListener('click', {number:'7', handleEvent:your_one_eight_buttonClick});
yourbutton8.addEventListener('click', {number:'8', handleEvent:your_one_eight_buttonClick});
yourbutton9.addEventListener('click', your_nine_buttonClick);

plusInning.addEventListener('click', pulasCount);
minusInning.addEventListener('click', minusCount);

disbutton1.addEventListener('click', {number:'1', handleEvent:dis_one_eight_buttonClick});
disbutton2.addEventListener('click', {number:'2', handleEvent:dis_one_eight_buttonClick});
disbutton3.addEventListener('click', {number:'3', handleEvent:dis_one_eight_buttonClick});
disbutton4.addEventListener('click', {number:'4', handleEvent:dis_one_eight_buttonClick});
disbutton5.addEventListener('click', {number:'5', handleEvent:dis_one_eight_buttonClick});
disbutton6.addEventListener('click', {number:'6', handleEvent:dis_one_eight_buttonClick});
disbutton7.addEventListener('click', {number:'7', handleEvent:dis_one_eight_buttonClick});
disbutton8.addEventListener('click', {number:'8', handleEvent:dis_one_eight_buttonClick});



//自分の1-8までのボタンの時
function my_one_eight_buttonClick(e){
  // 今の値をとってくる
  let frontNumber = document.getElementById('mycount').textContent;
  let moreNumber = document.getElementById('myMore').textContent;
  //ボタンを消す関数を出力している。

  if(moreNumber != "Win!!" && moreNumber!="Lose"){
    deleteButton(this.number)
    // 文字列を数値の方に変更
    frontNumber = Number(frontNumber);
    let count = frontNumber + 1;
    document.getElementById('mycount').textContent = count;
    //Moreのとこ
    moreNumber = Number(moreNumber);
    let morecount = moreNumber - 1;
    if(morecount <= 0){
      document.getElementById('myMore').textContent = "Win!!"
      document.getElementById('yourMore').textContent = "Lose"
    }else{
      document.getElementById('myMore').textContent = morecount
    }
  }
}

//自分が９を落とした時
function my_nine_buttonClick(){
  let frontNumber = document.getElementById('mycount').textContent;
  let moreNumber = document.getElementById('myMore').textContent;
  
  if(moreNumber != "Win!!" && moreNumber!="Lose"){
    var reuslt = window.confirm('9を落としたので、次のラックに進みますか？');
    if(reuslt){
        // 文字列を数値の方に変更
      frontNumber = Number(frontNumber)
      count = frontNumber + 2;
      document.getElementById('mycount').textContent = count;
      
      //Moreのとこ
      moreNumber = Number(moreNumber);
      let morecount = moreNumber - 2;
      if(morecount <= 0){
        document.getElementById('myMore').textContent = "Win!!"
        document.getElementById('yourMore').textContent = "Lose"
      }else{
        document.getElementById('myMore').textContent = morecount

        //途中で９を落とした時の無効球を考える。
        let yourNumber = document.getElementById('yourcount').textContent;
        yourNumber = Number(yourNumber)
        let disNumber = document.getElementById('disball').textContent;
        disNumber = Number(disNumber);
        if((count+yourNumber+disNumber)%10 != 0){
          let ball = (count+yourNumber+disNumber)%10;
          let allBall = (10 - ball) + disNumber;
          document.getElementById('disball').textContent = allBall;
        }
      }
      openeButton()
    }else{
      window.alert('処理をキャンセルしました。')
    }
  }
}

//yourのアクション

function your_one_eight_buttonClick(e){
  // 今の値をとってくる
  let frontNumber = document.getElementById('yourcount').textContent;
  let moreNumber = document.getElementById('yourMore').textContent;

  if(moreNumber != "Win!!" && moreNumber!="Lose"){
    //ボタンを消す関数を出力している。
    deleteButton(this.number);
    // 文字列を数値の方に変更
    frontNumber = Number(frontNumber);
    let count = frontNumber + 1;
    document.getElementById('yourcount').textContent = count;
    //Moreのとこ
    moreNumber = Number(moreNumber);
    let morecount = moreNumber - 1;
    if(morecount <= 0){
      document.getElementById('yourMore').textContent = "Win!!"
      document.getElementById('myMore').textContent = "Lose"
    }else{
      document.getElementById('yourMore').textContent = morecount
    }
  }
}

//相手が９を落とした時
function your_nine_buttonClick(){
  let frontNumber = document.getElementById('yourcount').textContent;
  let moreNumber = document.getElementById('yourMore').textContent;

  if(moreNumber != "Win!!" && moreNumber!="Lose"){
    var reuslt = window.confirm('9を落としたので、次のラックに進みますか？');
    if(reuslt){
      // 文字列を数値の方に変更
      frontNumber = Number(frontNumber)
      count = frontNumber + 2;
      document.getElementById('yourcount').textContent = count;
      
      //Moreのとこ
      moreNumber = Number(moreNumber);
      let morecount = moreNumber - 2;
      if(morecount <= 0){
        document.getElementById('yourMore').textContent = "Win!!"
        document.getElementById('myMore').textContent = "Lose"
      }else{
        document.getElementById('yourMore').textContent = morecount

        //途中で９を落とした時の無効球を考える。
        let myNumber = document.getElementById('mycount').textContent;
        myNumber = Number(myNumber)
        let disNumber = document.getElementById('disball').textContent;
        disNumber = Number(disNumber);
        if((count+myNumber+disNumber)%10 != 0){
          let ball = (count+myNumber+disNumber)%10;
          let allBall = (10 - ball) + disNumber;
          document.getElementById('disball').textContent = allBall;
        }
      }
      openeButton();
    }else{
      window.alert('処理をキャンセルしました。');
    }
    
  }
}

//イニングの実装
function pulasCount(){
  let count = document.getElementById('count').textContent;
  count = Number(count) + 1;
  document.getElementById('count').textContent = count; 
}
function minusCount(){
  let count = document.getElementById('count').textContent;
  count = Number(count) - 1;
  if(count < 0){
    count = 0;
  }
  document.getElementById('count').textContent = count; 
}

//無効球
function dis_one_eight_buttonClick(){
  // 今の値をとってくる
  let disNumber = document.getElementById('disball').textContent;
  let moreNumber = document.getElementById('yourMore').textContent;

  //ボタンを消す関数を出力している。
  deleteButton(this.number)

  if(moreNumber != "Win!!" && moreNumber!="Lose"){
    // 文字列を数値の方に変更
    disNumber = Number(disNumber);
    let count = disNumber + 1;
    document.getElementById('disball').textContent = count;
  }
}

//ボタンを隠す関数
function deleteButton(number){
  if(number=="1"){
    mybutton1.style.display = "none";
    yourbutton1.style.display = "none";
    disbutton1.style.display = "none";
  }else if(number=="2"){
    mybutton2.style.display = "none";
    yourbutton2.style.display = "none";
    disbutton2.style.display = "none";
  }else if(number=="3"){
    mybutton3.style.display = "none";
    yourbutton3.style.display = "none";
    disbutton3.style.display = "none";
  }else if(number=="4"){
    mybutton4.style.display = "none";
    yourbutton4.style.display = "none";
    disbutton4.style.display = "none";
  }else if(number=="5"){
    mybutton5.style.display = "none";
    yourbutton5.style.display = "none";
    disbutton5.style.display = "none";
  }else if(number=="6"){
    mybutton6.style.display = "none";
    yourbutton6.style.display = "none";
    disbutton6.style.display = "none";
  }else if(number=="7"){
    mybutton7.style.display = "none";
    yourbutton7.style.display = "none";
    disbutton7.style.display = "none";
  }else if(number=="8"){
    mybutton8.style.display = "none";
    yourbutton8.style.display = "none";
    disbutton8.style.display = "none";
  }
}

//ボタンを表示する
function openeButton(){
  mybutton1.style.display = "";
  yourbutton1.style.display = "";
  disbutton1.style.display = "";
  mybutton2.style.display = "";
  yourbutton2.style.display = "";
  disbutton2.style.display = "";
  mybutton3.style.display = "";
  yourbutton3.style.display = "";
  disbutton3.style.display = "";
  mybutton4.style.display = "";
  yourbutton4.style.display = "";
  disbutton4.style.display = "";
  mybutton5.style.display = "";
  yourbutton5.style.display = "";
  disbutton5.style.display = "";
  mybutton6.style.display = "";
  yourbutton6.style.display = "";
  disbutton6.style.display = "";
  mybutton7.style.display = "";
  yourbutton7.style.display = "";
  disbutton7.style.display = "";
  mybutton8.style.display = "";
  yourbutton8.style.display = "";
  disbutton8.style.display = "";
}