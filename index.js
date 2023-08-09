let questionlist = [
    {
        question: '1. Which is the largest animal in the world?',
        options: ['Shark', 'Elephant', 'Blue whale', 'Giraffe'],
        correctanswer: 'Blue whale',
        answered:false,
        classofcorrectoption:'.option3'
    },
    {
        question: '2. Which is the smallest country in the world?',
        options: ['Vatican City', 'Bhutan', 'Nepal', 'Srilanka'],
        correctanswer: 'Vatican City',
        answered:false,
        classofcorrectoption:'.option1'
    },
    {
        question: '3. Which is the largest desert in the world?',
        options: ['Kalahari', 'Gobi', 'Sahara', 'Antarctica'],
        correctanswer: 'Antarctica',
        answered:false,
        classofcorrectoption:'.option4'
    },
    {
        question: '4. Which is the smallest continent in the world?',
        options: ['Asia', 'Australia', 'Arctic', 'Africa'],
        correctanswer: 'Australia',
        answered:false,
        classofcorrectoption:'.option2'
    }
];

let idx = 0;
let score=0;
const nextbtn=document.querySelector('.next-btn')
const nodeList = document.querySelectorAll('.option');
const optionArray = Array.from(nodeList);
let qc=document.querySelector('.question-container')
let container=document.querySelector('.container')

optionArray.forEach((btn)=>{
    btn.addEventListener('click',function()
    {
        checkanswer(btn)
    })

})

function checkanswer(btn)
{
    if(questionlist[idx].answered===true)
    return;

    else
{
    if(btn.innerText===questionlist[idx].correctanswer)
    {
       score+=1
       btn.style.backgroundColor='#9aeabc'
       questionlist[idx].answered=true;
    }
    else
 {
    btn.style.backgroundColor='#ff9393'
    questionlist[idx].answered=true;
    let correct=document.querySelector(questionlist[idx].classofcorrectoption)
    correct.style.backgroundColor='#9aeabc'
 }
}
}

nextbtn.addEventListener('click',nextques)

function nextques()
{
    idx+=1;
    if(idx===4)
    {
        displayresult()
    }
    else
    {
        displayquestion()
    } 
    
}

function displayquestion() {
    let question = document.querySelector('.ques-text');
    let option1 = document.querySelector('.option1');
    let option2 = document.querySelector('.option2');
    let option3 = document.querySelector('.option3');
    let option4 = document.querySelector('.option4');

    // Reset inline styles for options
    option1.style.backgroundColor = '';
    option2.style.backgroundColor = '';
    option3.style.backgroundColor = '';
    option4.style.backgroundColor = '';

    question.innerText = questionlist[idx].question;
    option1.innerText = questionlist[idx].options[0];
    option2.innerText = questionlist[idx].options[1];
    option3.innerText = questionlist[idx].options[2];
    option4.innerText = questionlist[idx].options[3];
}


function displayresult()
{
 
 qc.style.display='none'
 let para=document.createElement('p')
 para.innerHTML=`<div class='flexs'><h3 class='ans'>Your Score is ${score} out of 4</h3>
 <button class='retry' onclick='restart()'>Play Again</button></div>`;
 container.appendChild(para)
}



function restart()
{
    idx=0;
    score=0;
    resethome()
}

function resethome()
{
    qc.style.display='block'
    container.removeChild(container.lastChild)
    for(let i=0;i<questionlist.length;i++)
    {
        questionlist[i].answered=false
    }
    displayquestion()
}