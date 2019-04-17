let score = 0;
let currentQuestion = 0;
let guess = '';
let clock = '';
let questions = [
    {
        title: "what team did michael jordan play for and owns?",
        answer: ['wizards','bulls','celtics','76ers'],
        correct: '1'
    },
    {
        title: "what team did kobe play for?",
        answer: ['kings','timberwolves','clippers','lakers'],
        correct: '3'
    },
    {
        title: "what number did allen iverson wear?",
        answer: ['3','6','23','1'],
        correct:'0'
    },
    {
        title: "what team draffted lebron james?",
        answer: ['LA','philly','Cleveland','boston'],
        correct: '2'
    },
];

//functions====================================

$(document).ready(function(){
   $('.start button').on('click',function(e){
       e.preventDefault();
       $('.start').hide();
       $('.quiz').show();
       showQuestion(); 
       function setInterval(timer){
           $('.clock').on('click', function(){
             timer = clock-1
             if(clock < 20) {
                timer001.inerHTML = timer;
            }
            if(clock < 1){
                window.clearInterval(timer001);
            }  
           })
       };

       
     
             
   });
   $('.quiz ul').on('click','li',function(){
       $('.selected').removeClass('selected');
       guess = $(this).attr('id')
       console.log(guess)
       $(this).addClass('selected');       
   });
   $('.quiz a').click(function(e){
       e.preventDefault();
       if(guess){
        //    let guess = parseInt($('li .selected').attr('id'));
           checkAnswer(guess);           
       }else{
           alert('please select an answer');           
       }
   });
   $('.summary a').click(function(e){
       e.preventDefault();
       $('.summary').hide();
       $('.quiz').show();
         score = 0;
         currentQuestion = 0;
         showQuestion();
   });


//showQuestion=================================================================
function showQuestion(){
    let question = questions[currentQuestion];
    $('.quiz h2').text(question.title);
    $('.quiz ul').html('');
    for(var i=0; i<question.answer.length; i++){
        $('.quiz ul').append("<li id='"+i+"'>"+question.answer[i]+"</li>");
    }
};

//checkAnswer====================================================
function checkAnswer(){
    let question = questions[currentQuestion];
    if(question.correct === guess){
        score++;
    }
    currentQuestion++;
    if(currentQuestion>= questions.length){
        showSummary();       
    }else{
        showQuestion();
    }
    showQuestion();
};

//timer==========================================================================
function timer(){
    clock = clock-1;
    if(clock < 20) {
        timer001.inerHTML = timer;
    }
    if(clock < 1){
        window.clearInterval(timer001);
    }
};


//showSummary======================================================================
function showSummary(){
    $('.quiz').hide();
    $('.summary').show();
    $('.summary p').text("Congrats you scored "+score+" out of "+questions.length+" correct!");
}
function restartQuiz(){};

});