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

//??????????????????
var myscore = ""; 
var yourscore = "";
var allscore ="";
var allmyscore ="";
var allyourscore = "";



//?????????1-8????????????????????????
function my_one_eight_buttonClick(e){
  //?????????????????????????????????????????????
  myscore += this.number;
  allscore += this.number;
  allmyscore += this.number;
  // ???????????????????????????
  let frontNumber = document.getElementById('mycount').textContent;
  let moreNumber = document.getElementById('myMore').textContent;
  //????????????????????????????????????????????????

  if(moreNumber != "Win!!" && moreNumber!="Lose"){
    deleteButton(this.number)
    // ?????????????????????????????????
    frontNumber = Number(frontNumber);
    let count = frontNumber + 1;
    document.getElementById('mycount').textContent = count;
    //More?????????
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

//??????????????????????????????
function my_nine_buttonClick(){
  //??????????????????????????????
  myscore += '9';
  allmyscore += '9';
  allscore += '9';
  let frontNumber = document.getElementById('mycount').textContent;
  let moreNumber = document.getElementById('myMore').textContent;  
  if(moreNumber != "Win!!" && moreNumber!="Lose"){
    var reuslt = window.confirm('9????????????????????????????????????????????????????????????');
    if(reuslt){
      //score??????????????????
      let disscore ="" //?????????????????????????????? 
      for(let i=1; i<=9; i++){
        if(myscore.indexOf(i) == -1 && yourscore.indexOf(i) == -1){
          disscore += i;
        }
        //???????????????????????????????????????????????????X???????????????
        if(myscore==""){
          myscore = 'x';
        }
        if(yourscore==""){
          yourscore = 'x';
        }
      }
      var textElement = document.getElementById('score');
      var newElement = document.createElement('div');
      newElement.textContent = myscore + '|' + yourscore + '|?????????' + disscore;
      myscore ="";yourscore=""; //?????????
      textElement.appendChild(newElement);
      // ?????????????????????????????????
      frontNumber = Number(frontNumber)
      count = frontNumber + 2;
      document.getElementById('mycount').textContent = count;
      
      //More?????????
      moreNumber = Number(moreNumber);
      let morecount = moreNumber - 2;
      if(morecount <= 0){
        document.getElementById('myMore').textContent = "Win!!"
        document.getElementById('yourMore').textContent = "Lose"
      }else{
        document.getElementById('myMore').textContent = morecount

        //?????????????????????????????????????????????????????????
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
      window.alert('???????????????????????????????????????')
    }
  }
}

//your??????????????????

function your_one_eight_buttonClick(e){
  //???????????????????????????????????????
  yourscore += this.number;
  allyourscore += this.number;
  allscore += this.number;
  // ???????????????????????????
  let frontNumber = document.getElementById('yourcount').textContent;
  let moreNumber = document.getElementById('yourMore').textContent;

  if(moreNumber != "Win!!" && moreNumber!="Lose"){
    //????????????????????????????????????????????????
    deleteButton(this.number);
    // ?????????????????????????????????
    frontNumber = Number(frontNumber);
    let count = frontNumber + 1;
    document.getElementById('yourcount').textContent = count;
    //More?????????
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

//??????????????????????????????
function your_nine_buttonClick(){
  //??????????????????????????????
  yourscore += '9';
  allyourscore += '9';
  allscore += '9';
  let frontNumber = document.getElementById('yourcount').textContent;
  let moreNumber = document.getElementById('yourMore').textContent;

  if(moreNumber != "Win!!" && moreNumber!="Lose"){
    var reuslt = window.confirm('9????????????????????????????????????????????????????????????');
    if(reuslt){
      //score??????????????????
      let disscore = "" //?????????????????????????????? 
      for(let i=1; i<=9; i++){
        if(myscore.indexOf(i) == -1 && yourscore.indexOf(i)== -1){
          disscore += i;
        }
        //???????????????????????????????????????????????????X???????????????
        if(myscore==""){
          myscore = 'x';
        }
        if(yourscore==""){
          yourscore = 'x';
        }
      }
      
      var textElement = document.getElementById('score');
      var newElement = document.createElement('div');
      newElement.textContent = myscore + '|' + yourscore + '|?????????' + disscore;
      myscore ="";yourscore=""; //?????????
      textElement.appendChild(newElement);
      // ?????????????????????????????????
      frontNumber = Number(frontNumber)
      count = frontNumber + 2;
      document.getElementById('yourcount').textContent = count;
      
      //More?????????
      moreNumber = Number(moreNumber);
      let morecount = moreNumber - 2;
      if(morecount <= 0){
        document.getElementById('yourMore').textContent = "Win!!"
        document.getElementById('myMore').textContent = "Lose"
      }else{
        document.getElementById('yourMore').textContent = morecount

        //?????????????????????????????????????????????????????????
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
      window.alert('???????????????????????????????????????');
    }
    
  }
}

//?????????????????????
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

//?????????
function dis_one_eight_buttonClick(){
  // ???????????????????????????
  allscore += this.number;
  let disNumber = document.getElementById('disball').textContent;
  let moreNumber = document.getElementById('yourMore').textContent;

  //????????????????????????????????????????????????
  deleteButton(this.number)

  if(moreNumber != "Win!!" && moreNumber!="Lose"){
    // ?????????????????????????????????
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
  //????????????????????????????????????
  allscore = allscore.slice(0, -1);
  //9????????????
  openeButton(score);
  if(score != '9'){

    //???????????????????????????????????????
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
    }else{ //?????????
      disNumber =  document.getElementById('disball').textContent
      disNumber = Number(disNumber) - 1;
      document.getElementById('disball').textContent = disNumber;
    }
  }else{//9??????
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
      start = Number(next_9)+1; //9????????????
    }
    //????????????????????????
    for(var i=start; i<allscore.length+1; i++){ //allscore??????????????????????????????????????????
      deleteButton(allscore.charAt(i));
    }
    disNumber =  document.getElementById('disball').textContent
    //9-(????????????{+1???????????????????????????}-(??????????????????????????????))
    disNumber = Number(disNumber) - (9-(allscore.length+1-start));
    document.getElementById('disball').textContent = disNumber;

    //??????????????????
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
//????????????????????????
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
  }else if(number == 10){ //????????????
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
//????????????????????????
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