var ul = document.getElementById('ul')
var nextButton = document.getElementById('btnNext');
var quizbox = document.getElementById('questionBox')
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var opt4 = document.getElementById('opt4')
 
var app={
    questions:[
        {
            q:'O que é Photoshop?',
            options: ['Um software para edição de imagens',
                    'Um software de mixagem',
                    'Um framework', 'Um aparelho de DVD'],
            answer:1
        },
        {
            q:'O photoshop pode rodar em',
            options: ['Só Windows', 'Só Mac OS X', 'Windows e Mac OS X', 'Linux'],
            answer:3
        },
        {
            q:'Quem criou o Photoshop?',
            options:['João Pagani','Os irmãos Knoll','Jorcivan','JH Faccion'],
            answer:2
        }            
    ],
    index:0,
    //Load a question using the index
    load:function(){
        if(this.index<=this.questions.length-1){
            quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
            opt1.innerHTML=this.questions[this.index].options[0];
            opt2.innerHTML=this.questions[this.index].options[1];
            opt3.innerHTML=this.questions[this.index].options[2];
            opt4.innerHTML=this.questions[this.index].options[3];
        }
        else {
            //Show the end screen
            quizbox.innerHTML="Quiz Completo";
            ul.style.display="none";
            nextButton.style.display="none";
        }
    },
    next: function(){
        this.index++;
        this.load();
    },
    //Check if answer is correct or not
    check: function(ele){
        var id=ele.id.split('');
        if(id[id.length-1]==this.questions[this.index].answer){
            this.score++;
            ele.className="correct";
            this.scoreCard();
        }
        else{
            ele.className="wrong";
        }
    },
    //disable options once user selects on option
    preventClick:function(){
        for(let i=0; i<ul.children.length; i++){
            ul.children[i].style.pointerEvents="none";
        }
    },
    allowClick:function(){
        for(let i=0; i<ul.children.length; i++){
            ul.children[i].style.pointerEvents="auto";
            ul.children[i].className=''
        }
    },
    score:0,
    scoreCard:function(){
        scoreCard.innerHTML=this.questions.length + "/" + this.score;
    }
}
window.load=app.load();

function button(ele){
    app.check(ele);
    app.preventClick();
}

function next(){
    app.next();
    app.allowClick();
}