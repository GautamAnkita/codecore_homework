const express = require('express');
const quizQuestionsAns = require('../quiz_questions.js');
const router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
    const quizQuestions = quizQuestionsAns.quizQuestions;
    const userName = req.cookies.userName;
    if(userName){
        res.render('quiz', 
          {
            'userName': userName,
            'quizQuestions': quizQuestions
          }
        );
    } else {
        res.redirect('/');
    }
});

router.get('/result', function(req, res, next) {
    const userPercentageGrade = req.cookies.percentageGrade;
    const userLetterGrade = req.cookies.letterGrade;
    if(userPercentageGrade && userLetterGrade){
        let str = "";
        if(userLetterGrade === 'F'){
            str = "Better Luck Next Time!!";
        }else{
            str = "Congratulations!";
        }
        res.render('result',
            {'str': str,
             'userPercentageGrade': userPercentageGrade,
             'userLetterGrade': userLetterGrade
            });
    }else{
        res.redirect('/');
    }
});

router.post('/', (request, response) => {

    //Get the parameters/values that were submitted by the form
    const quizQuestions = quizQuestionsAns.quizQuestions;
    const quizAnswers = quizQuestionsAns.quizAnswer;
    let percentageGrade = 0;
    let letterGrade = "";
    let marks = 0;
    const totalQuestions = quizQuestions.length;
    let i = 0;
    quizQuestions.forEach(ques => {
        const name = ques.id;
        const userAns = request.body[name];
        if(userAns === undefined){
            response.redirect('/quiz')
        }
        // userAns_arr = (userAns.toString()).split("");
        // console.log(userAns_arr);
            if(userAns.toString() === quizAnswers[i++].toString()){
                marks+= 1;
            }
        
        
    });
    percentageGrade = ((marks/totalQuestions)* 100).toFixed(2);
    
        // switch (myVariable) {
        switch (true) {
            case (percentageGrade < 20):
                letterGrade = 'F';
                break;
            case (percentageGrade < 40):
                letterGrade = 'D';
                break;
            case (percentageGrade < 60):
                letterGrade = 'C';
                break;
            case (percentageGrade < 80):
                letterGrade = 'B';
                break;
            case (percentageGrade < 90):
                letterGrade = 'A';
                break;
            default:
                letterGrade = 'A+';
                break;
        }
    response.cookie('percentageGrade', percentageGrade);
    response.cookie('letterGrade', letterGrade);
    response.redirect('/quiz/result');
    });
    
module.exports = router;