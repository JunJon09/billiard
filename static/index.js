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

let backbutton = document.getElementById('back');

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

backbutton.addEventListener('click', Onback)

//初期値を設定
var myscore = ""; 
var yourscore = "";
var allscore ="";
var allmyscore ="";
var allyourscore = "";



//自分の1-8までのボタンの時
function my_one_eight_buttonClick(e){
  //落としたボールを記憶している。
  myscore += this.number;
  allscore += this.number;
  allmyscore += this.number;
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
  //落としたボールを記憶
  myscore += '9';
  allmyscore += '9';
  allscore += '9';
  let frontNumber = document.getElementById('mycount').textContent;
  let moreNumber = document.getElementById('myMore').textContent;  
  if(moreNumber != "Win!!" && moreNumber!="Lose"){
    var reuslt = window.confirm('9を落としたので、次のラックに進みますか？');
    if(reuslt){
      //scoreを表示の記述
      let disscore ="" //無好球のボールを探す 
      for(let i=1; i<=9; i++){
        if(myscore.indexOf(i) == -1 && yourscore.indexOf(i) == -1){
          disscore += i;
        }
        //一つも値が取れてなかった場合それをXを入れる。
        if(myscore==""){
          myscore = 'x';
        }
        if(yourscore==""){
          yourscore = 'x';
        }
      }
      var textElement = document.getElementById('score');
      var newElement = document.createElement('div');
      newElement.textContent = myscore + '|' + yourscore + '|無効球' + disscore;
      myscore ="";yourscore=""; //初期化
      textElement.appendChild(newElement);
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
      openeButton('10')
    }else{
      window.alert('処理をキャンセルしました。')
    }
  }
}

//yourのアクション

function your_one_eight_buttonClick(e){
  //落としたボールを記憶してる
  yourscore += this.number;
  allyourscore += this.number;
  allscore += this.number;
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
  //落としたボールを記憶
  yourscore += '9';
  allyourscore += '9';
  allscore += '9';
  let frontNumber = document.getElementById('yourcount').textContent;
  let moreNumber = document.getElementById('yourMore').textContent;

  if(moreNumber != "Win!!" && moreNumber!="Lose"){
    var reuslt = window.confirm('9を落としたので、次のラックに進みますか？');
    if(reuslt){
      //scoreを表示の記述
      let disscore = "" //無好球のボールを探す 
      for(let i=1; i<=9; i++){
        if(myscore.indexOf(i) == -1 && yourscore.indexOf(i)== -1){
          disscore += i;
        }
        //一つも値が取れてなかった場合それをXを入れる。
        if(myscore==""){
          myscore = 'x';
        }
        if(yourscore==""){
          yourscore = 'x';
        }
      }
      
      var textElement = document.getElementById('score');
      var newElement = document.createElement('div');
      newElement.textContent = myscore + '|' + yourscore + '|無効球' + disscore;
      myscore ="";yourscore=""; //初期化
      textElement.appendChild(newElement);
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
      openeButton('10');
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
  allscore += this.number;
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

function Onback(){
  
  if(allscore.length == 0){
    return 
  }
  var score = allscore.slice(-1);
  //最後の番号を切り取ってる
  allscore = allscore.slice(0, -1);
  //9かどうか
  openeButton(score);
  if(score != '9'){

    //自分か相手か無好球かどうか
    if(allmyscore.slice(-1)== score){
      myscore = myscore.slice(0, -1);
      allmyscore = allmyscore.slice(0, -1);
      let frontNumber = document.getElementById('mycount').textContent;
      let moreNumber = document.getElementById('myMore').textContent;
      frontNumber = Number(frontNumber) -1;
      moreNumber = Number(moreNumber) + 1;
      document.getElementById('mycount').textContent = frontNumber;
      document.getElementById('myMore').textContent = moreNumber;
    }else if(allyourscore.slice(-1)==score){
      yourscore = yourscore.slice(0, -1);
      allyourscore = allyourscore.slice(0, -1);
      let frontNumber = document.getElementById('yourcount').textContent;
      let moreNumber = document.getElementById('yourMore').textContent;
      frontNumber = Number(frontNumber) -1;
      moreNumber = Number(moreNumber) + 1;
      document.getElementById('yourcount').textContent = frontNumber;
      document.getElementById('yourMore').textContent = moreNumber;
    }else{ //無好球
      disNumber =  document.getElementById('disball').textContent
      disNumber = Number(disNumber) - 1;
      document.getElementById('disball').textContent = disNumber;
    }
  }else{//9の時
    if(allmyscore.slice(-1) == '9'){

      allmyscore = allmyscore.slice(0, -1);
      let frontNumber = document.getElementById('mycount').textContent;
      let moreNumber = document.getElementById('myMore').textContent;
      frontNumber = Number(frontNumber) -2;
      moreNumber = Number(moreNumber) + 2;
      document.getElementById('mycount').textContent = frontNumber;
      document.getElementById('myMore').textContent = moreNumber;
    }else{
      allyourscore = allyourscore.slice(0, -1);
      let frontNumber = document.getElementById('yourcount').textContent;
      let moreNumber = document.getElementById('yourMore').textContent;
      frontNumber = Number(frontNumber) -2;
      moreNumber = Number(moreNumber) + 2;
      document.getElementById('yourcount').textContent = frontNumber;
      document.getElementById('yourMore').textContent = moreNumber;
    }
    var next_9 = allscore.lastIndexOf('9');
    if(next_9 == -1){
      var start = 0;
    }else{
      start = Number(next_9)+1; //9の次から
    }
    //ボタンを消してる
    for(var i=start; i<allscore.length+1; i++){ //allscoreを先に消してるから１すくない
      deleteButton(allscore.charAt(i));
    }
    disNumber =  document.getElementById('disball').textContent
    //9-(全ての数{+1は先に消してるから}-(そのラックの初めから))
    disNumber = Number(disNumber) - (9-(allscore.length+1-start));
    document.getElementById('disball').textContent = disNumber;

    //スコアの修正
    var list_element = document.getElementById('score');
    var remove_element = list_element.removeChild(list_element.lastElementChild);
    var me = remove_element.textContent.indexOf('|');
    var you = remove_element.textContent.indexOf('|', me+1);
    ;
    myscore = remove_element.textContent.slice(0, me);
    yourscore = remove_element.textContent.slice(me+1, you);
    console.log(myscore);
    console.log(yourscore);
    if(myscore.indexOf('x')!=-1){
      myscore ="";  
    }
    if(yourscore.indexOf('x')!=-1){
      yourscore ="";
    }
    if(myscore.indexOf('9')==-1){
      yourscore = yourscore.slice(0, -1);
    }else{
      myscore = myscore.slice(0, -1);
    }     
  }
}
//ボタンを表示する
function openeButton(number){
  if(number == 1){
    mybutton1.style.display = "";
    yourbutton1.style.display = "";
    disbutton1.style.display = "";
  }else if(number == 2){
    mybutton2.style.display = "";
    yourbutton2.style.display = "";
    disbutton2.style.display = "";
  }else if(number == 3){
    mybutton3.style.display = "";
    yourbutton3.style.display = "";
    disbutton3.style.display = "";
  }else if(number == 4){
    mybutton4.style.display = "";
    yourbutton4.style.display = "";
    disbutton4.style.display = "";
  }else if(number == 5){
    mybutton5.style.display = "";
    yourbutton5.style.display = "";
    disbutton5.style.display = "";
  }else if(number == 6){
    mybutton6.style.display = "";
    yourbutton6.style.display = "";
    disbutton6.style.display = "";
  }else if(number == 7){
    mybutton7.style.display = "";
    yourbutton7.style.display = "";
    disbutton7.style.display = "";
  }else if(number == 8){
    mybutton8.style.display = "";
    yourbutton8.style.display = "";
    disbutton8.style.display = "";
  }else if(number == 9){
    mybutton9.style.display = "";
    yourbutton9.style.display = "";
  }else if(number == 10){ //全部表示
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