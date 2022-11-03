$(document).ready(function() {
    $('#choices').hide();
    $('#tab-2').hide();

    var questionNo = 0;
    var score = 0;

    askedQuestions = [];

    let randNum = Math.floor((Math.random() * 5)); // for selecting questions from array radnomly
    
    questions = [
        "Which one is NOT a legal variable name?",
        "What is a correct syntax to output 'Hello World' in Python?",
        "How do you insert COMMENTS in Python code?",
        "What is the correct syntax to output the type of variable or object in Python?",
        "What is the correct file extension for python files?"
        
    ];
    choices = [
        [["_myvar", false],["Myvar", false],["my_var", false],["my-var", true]],
        [["print('Hello World')", true],["p('Hello World')", false],["echo('Hello World');", false],["echo 'Hello World'", false]],
        [["/*This is comment*/", false],["#This is comment", true],["//This is comment", false],["None of above", false]],
        [["print(typeof(x))", false],["print(typeof x)", false],["print(typeOf(x))", false],["print(type(x))", true]],
        [[".pt", false],[".pyt", false],[".pyth", false],[".py", true]]
    ];

    questionTabCompletion = ["35px","70px","105px","140px"];
    $('#start').click(function() {
        $('#start').hide();

        $('#choices').show();

        $('#tab-2').show();

        $('img').hide();
        
        $('#tab').css('top', '30%');

        $('#tab').hide();

        $('#question').text(questions[randNum]); // show first question
        $('#question').css('font-size', '30px');
        $('#question').show();

        askedQuestions.push(randNum); // push it to asked questions array

        $('#a .T').text('A');
        $('#a .Text').text(choices[randNum][0][0]);

        $('#b .T').text('B');
        $('#b .Text').text(choices[randNum][1][0]);

        $('#c .T').text('C');
        $('#c .Text').text(choices[randNum][2][0]);

        $('#d .T').text('D');
        $('#d .Text').text(choices[randNum][3][0]);

        $('#question-text').text('Question ' + (questionNo + 1) + '/4');
        $('#score-tab').text('0');

        
    });

    $('#a').click(function() {
        if(!choices[randNum][0][1]) { 
            $('#a').css('background-color', 'red'); // wrong answer
        }
        else {
            $('#a').css('background-color', 'green'); // correct answer
            score++;
        }
        questionNo++;
        
        setTimeout( // wait 1s before moving to next next question
            function() 
            {
                console.log('executed');
                randNum = Math.floor((Math.random() * 5)); // randomly select an index for questions
                console.log('asked questions before looping: ' + askedQuestions);
                while (askedQuestions.includes(randNum)) {
                    randNum = Math.floor((Math.random() * 5));
                }
                askedQuestions.push(randNum);
                console.log('asked questions after looping and pushing: ' + askedQuestions);
                console.log('randNum after looping (next qs index) : ' + randNum);
                if(questionNo + 1 > 4) { // when 4 question is finished do these (show the total score page)
                    $('#question').text('Total Score: ' + score);
                    $('#tab').hide();
                    $('#choices').hide();
                    $('#tab-2').hide();
                    $('#start').text('Play Again');
                    $('#start').show();
                    questionNo = 0;
                    score = 0;
                    $('#a').css('background-color', 'white');
                    $('#completed').css('width', '35px');
                    askedQuestions = [];
                    console.clear();
                }
    
                else { // else show the next question
                    $('#completed').css('border', '2px solid #009688');
                    $('#completed').css('width', questionTabCompletion[questionNo]);
                    $('#score-tab').text(score);
                    $('#question').text(questions[randNum]);
                    $('#question-text').text('Question ' + (questionNo + 1) + '/4');

                    $('#a .T').text('A'); //choice A
                    $('#a .Text').text(choices[randNum][0][0]); //content of choice A
        
                    $('#b .T').text('B'); //choice B
                    $('#b .Text').text(choices[randNum][1][0]); //content of choice B
        
                    $('#c .T').text('C'); //choice C
                    $('#c .Text').text(choices[randNum][2][0]); //content of choice C
        
                    $('#d .T').text('D'); //choice D
                    $('#d .Text').text(choices[randNum][3][0]); //content of choice D
                    $('#a').css('background-color', 'white'); // after 1s make #a white
                }
            }, 1000);

        
    })

    $('#b').click(function() {
        if(!choices[randNum][1][1]) {
            $('#b').css('background-color', 'red');
        }
        else {
            $('#b').css('background-color', 'green');
            score++;
        }
        questionNo++;
        randNum = Math.floor((Math.random() * 5));
        setTimeout(
            function() 
            {

                if(questionNo + 1 > 4) {
                    $('#question').text('Total Score: ' + score);
                    $('#tab').hide();
                    $('#choices').hide();
                    $('#tab-2').hide();
                    $('#start').text('Play Again');
                    $('#start').show();
                    questionNo = 0;
                    score = 0;
                    $('#b').css('background-color', 'white');
                    $('#completed').css('width', '35px');
                    askedQuestions = [];
                    console.clear(); // for debugging
                }
    
                else {
                    console.log('executed'); // for debugging
                    randNum = Math.floor((Math.random() * 5)); // randomly select an index for questions
                    console.log('asked questions before looping: ' + askedQuestions); // for debugging
                    while (askedQuestions.includes(randNum)) {
                        randNum = Math.floor((Math.random() * 5));
                    }
                    askedQuestions.push(randNum);
                    console.log('asked questions after looping and pushing: ' + askedQuestions); // for debugging
                    console.log('randNum after looping (next qs index) : ' + randNum); // for debugging
                    $('#completed').css('border', '2px solid #009688');
                    $('#completed').css('width', questionTabCompletion[questionNo]);
                    $('#score-tab').text(score);
                    $('#question').text(questions[randNum]);
                    $('#question-text').text('Question ' + (questionNo + 1) + '/4');

                    $('#a .T').text('A');
                    $('#a .Text').text(choices[randNum][0][0]);

                    $('#b .T').text('B');
                    $('#b .Text').text(choices[randNum][1][0]);

                    $('#c .T').text('C');
                    $('#c .Text').text(choices[randNum][2][0]);

                    $('#d .T').text('D');
                    $('#d .Text').text(choices[randNum][3][0]);
                    $('#b').css('background-color', 'white');
                }
            }, 1000);
    })

    $('#c').click(function() {
        if(!choices[randNum][2][1]) {
            $('#c').css('background-color', 'red');
        }
        else {
            $('#c').css('background-color', 'green');
            score++;
        }
        questionNo++;
        randNum = Math.floor((Math.random() * 5));
        setTimeout(
            function() 
            {

                if(questionNo + 1 > 4) {
                    $('#question').text('Total Score: ' + score);
                    $('#tab').hide();
                    $('#choices').hide();
                    $('#tab-2').hide();
                    $('#start').text('Play Again');
                    $('#start').show();
                    questionNo = 0;
                    score = 0;
                    $('#c').css('background-color', 'white');
                    $('#completed').css('width', '35px');
                    askedQuestions = [];
                    console.clear();
                }
    
                else {
                    console.log('executed');
                    randNum = Math.floor((Math.random() * 5)); // randomly select an index for questions
                    console.log('asked questions before looping: ' + askedQuestions);
                    while (askedQuestions.includes(randNum)) {
                        randNum = Math.floor((Math.random() * 5));
                    }
                    askedQuestions.push(randNum);
                    console.log('asked questions after looping and pushing: ' + askedQuestions);
                    console.log('randNum after looping (next qs index) : ' + randNum);
                    $('#completed').css('border', '2px solid #009688');
                    $('#completed').css('width', questionTabCompletion[questionNo]);
                    $('#score-tab').text(score);
                    $('#question').text(questions[randNum]);
                    $('#question-text').text('Question ' + (questionNo + 1) + '/4');

                    $('#a .T').text('A');
                    $('#a .Text').text(choices[randNum][0][0]);

                    $('#b .T').text('B');
                    $('#b .Text').text(choices[randNum][1][0]);

                    $('#c .T').text('C');
                    $('#c .Text').text(choices[randNum][2][0]);

                    $('#d .T').text('D');
                    $('#d .Text').text(choices[randNum][3][0]);
                    $('#c').css('background-color', 'white');
                }
            }, 1000);
    })

    $('#d').click(function() {
        if(!choices[randNum][3][1]) {
            $('#d').css('background-color', 'red');
        }
        else {
            $('#d').css('background-color', 'green');
            score++;
        }
        questionNo++;
        randNum = Math.floor((Math.random() * 5));
        setTimeout(
            function() 
            {
                if(questionNo + 1 > 4) {
                    $('#question').text('Total Score: ' + score);
                    $('#tab').hide();
                    $('#choices').hide();
                    $('#tab-2').hide();
                    $('#start').text('Play Again');
                    $('#start').show();
                    questionNo = 0;
                    score = 0;  
                    $('#d').css('background-color', 'white');
                    $('#completed').css('width', '35px');
                    askedQuestions = [];
                    console.clear();
                }
    
                else {
                    console.log('executed');
                    randNum = Math.floor((Math.random() * 5)); // randomly select an index for questions
                    console.log('asked questions before looping: ' + askedQuestions);
                    while (askedQuestions.includes(randNum)) {
                        randNum = Math.floor((Math.random() * 5));
                    }
                    askedQuestions.push(randNum);
                    console.log('asked questions after looping and pushing: ' + askedQuestions);
                    console.log('randNum after looping (next qs index) : ' + randNum);
                    $('#completed').css('border', '2px solid #009688');
                    $('#completed').css('width', questionTabCompletion[questionNo]);
                    $('#score-tab').text(score);
                    $('#question').text(questions[randNum]);
                    $('#question-text').text('Question ' + (questionNo + 1) + '/4');

                    $('#a .T').text('A');
                    $('#a .Text').text(choices[randNum][0][0]);
            
                    $('#b .T').text('B');
                    $('#b .Text').text(choices[randNum][1][0]);
            
                    $('#c .T').text('C');
                    $('#c .Text').text(choices[randNum][2][0]);
            
                    $('#d .T').text('D');
                    $('#d .Text').text(choices[randNum][3][0]);
                    $('#d').css('background-color', 'white');
                }
            }, 1000);
    })
});