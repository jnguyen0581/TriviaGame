$("#start").on("click", function() {
    game.start();
    console.log(game.start);
})

var questions = [{
    question: "What is the biggest country in the whole world?",
    answers: ["Canada", "China", "Brazil", "Russia"],
    correctAnswer: "Russia"
}, {
    question: "What Is The Capital Of Australia?",
    answers: ["Syndney", "Perth", "Canberra", "Melbourne"],
    correctAnswer: "Canberra"
}, {
    question: "In which town of Bali, Indonesia where one of Julie Robert's movies was filmed?",
    answers: ["Ubud", "Bali", "Rome", "Delhi"],
    correctAnswer: "Ubud"
}, {
    question: "what is The World's Busiest Street Crossing in Japan called?",
    answers: ["Tokyo", "Shibuya Crossing", "The Busiest Street Crossing", "Osaka"],
    correctAnswer: "Shibuya Crossing"
}, {
    question: "What is The Capital of Spain",
    answers: ["Barcelona", "Madrid", "Valencia", "Paris"],
    correctAnswer: "Madrid"
}, {
    question: "What is the smalliest country in the world?",
    answers: ["Vatican City", "Monaco", "Palau.", "Tuvalu"],
    correctAnswer: "Vatican City"
}, {
    question: "What is the coldest country in the world today?",
    answers: ["Greenland", "Russia", "Mongolia", "Antarctica"],
    correctAnswer: "Antarctica"
}, {
    question: "The largest country in South America and fifth largest in the world. Famous for its football (soccer) tradition",
    answers: ["Brazil", "Panama", "Columbia", "Chile"],
    correctAnswer: "Brazil"
}, {
    question: "What was the capital of Japan before Tokyo?",
    answers: ["Osaka", "Kyoto", "Tokyo", "Yokohama"],
    correctAnswer: "Kyoto"
}, {
    question: "What's the biggest cave in the world?",
    answers: ["Son Doong, VietNam ", "Sistema Sac Actun, Mexico. ", "Mulu Caves, Borneo.", "New Athos Cave, Georgia."],
    correctAnswer: "Son Doong"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function(){
        game.counter--;
        $("#counter").html(game.counter);
        if(game.counter<=0){
            console.log("Over!");
            game.done();
        }

    },
    start: function(){
        timer = setInterval(game.countdown,1000);
        $('subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
        $("#start").remove();
        for (var i=0; i<questions.length; i++){
            $("#subwrapper").append("<h2>"+questions[i].question+"</h2>");
            for (var m=0; m<questions[i].answers.length; m++){
                $("#subwrapper").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[m] + "'>" + questions[i].answers[m]);
            }
        }
    },
    done: function(){
        $.each($('input[name="question-0]":checked'), function(){
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        this.result();
    },
    result: function(){
        clearInterval(timer);
        $("#subwrapper h2").remove();
        $("#subwrapper").html("<h2>Done</h2>");
        $("#subwrapper").append("<h3>Correct Ansers: "+this.correct+"</h3>");
        $("#subwrapper").append("<h3>Incorrect Ansers: "+this.incorrect+"</h3>");
        $("#subwrapper").append("<h3>Unanswers: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
    }
}