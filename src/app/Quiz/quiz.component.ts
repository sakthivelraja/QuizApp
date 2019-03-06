import { Component, OnInit } from '@angular/core';
import { QuizStructure } from '../Models/QuizStructure';

@Component({
  selector: 'quiz-section',
  templateUrl: './quiz.component.html',
  styleUrls: [ './quiz.component.css' ]
})
export class QuizComponent  {

    quizQuestionOne : QuizStructure = {QuestionNumber:1, Question: "Which is the largest country in the world by population?", OptionOne:"India", OptionTwo:"USA", OptionThree:"China", OptionFour:"Russia", CorrectAnswer:"China"};
    quizQuestionTwo : QuizStructure = {QuestionNumber:2, Question: "When did the second world war end?", OptionOne:"1945", OptionTwo:"1939", OptionThree:"1944", OptionFour:"1942", CorrectAnswer:"1945"};
    quizQuestionThree : QuizStructure = {QuestionNumber:3, Question: "Which was the first country to issue paper currency?", OptionOne:"USA", OptionTwo:"France", OptionThree:"Italy", OptionFour:"China", CorrectAnswer:"China"};
    quizQuestionFour: QuizStructure = {QuestionNumber:4, Question: "Which city hosted the 1996 Summer Olympics?", OptionOne:"Atlanta", OptionTwo:"Sydney", OptionThree:"Athens", OptionFour:"Beijing", CorrectAnswer:"Atlanta"};
    quizQuestionFive: QuizStructure = {QuestionNumber:5, Question: "Who invented telephone?", OptionOne:"Albert Einstein", OptionTwo:"Alexander Graham Bell", OptionThree:"Isaac Newton",OptionFour:"Marie Curie", CorrectAnswer:"Alexander Graham Bell"};

    quizQuestion : QuizStructure;
    quizScore : number;
    isQuizComplete: boolean;

    optionOneSelection = null;
    optionTwoSelection = null;
    optionThreeSelection = null;
    optionFourSelection = null;

   ngOnInit() {
     document.getElementById("btnStartQuiz").style.visibility="hidden";
     this.quizScore = 0;
     this.isQuizComplete = false;
     this.quizQuestion = this.quizQuestionOne;
   } 

   public OnResetClick(){
      this.ResetSelections();
      this.quizScore = 0;
      if(this.isQuizComplete == true)
      {
        this.quizQuestion = this.quizQuestionOne;
        document.getElementById("btnNext").disabled = false;
        document.getElementById("lblStatusMsg").textContent = "";
      }
   }

   public ResetSelections() {
      this.optionOneSelection = null;
      this.optionTwoSelection = null;
      this.optionThreeSelection = null;
      this.optionFourSelection = null;
   }

   public ShowScores()
   {
      document.getElementById("btnNext").disabled = true;
      document.getElementById("lblStatusMsg").textContent = 'Quiz complete. Your score is ' + this.quizScore + '. To retake the quiz click "Reset" button.';
   }

   public OnNextClick() {
      if(this.optionOneSelection != null || this.optionTwoSelection != null || this.optionThreeSelection != null || this.optionFourSelection!= null)
      {
        document.getElementById("lblStatusMsg").textContent = "";
        switch(this.quizQuestion.QuestionNumber) {
          case 1 : {
            if(this.optionOneSelection == this.quizQuestion.CorrectAnswer || this.optionTwoSelection == this.quizQuestion.CorrectAnswer || this.optionThreeSelection == this.quizQuestion.CorrectAnswer || this.optionFourSelection == this.quizQuestion.CorrectAnswer)
            {
              this.quizScore+=1;
            }
            this.quizQuestion = this.quizQuestionTwo;
            this.ResetSelections();
            break;
          }
          case 2 : {
             if(this.optionOneSelection == this.quizQuestion.CorrectAnswer || this.optionTwoSelection == this.quizQuestion.CorrectAnswer || this.optionThreeSelection == this.quizQuestion.CorrectAnswer || this.optionFourSelection == this.quizQuestion.CorrectAnswer)
            {
              this.quizScore+=1;
            }
            this.quizQuestion = this.quizQuestionThree;
            this.ResetSelections();
            break;
          }
          case 3 : {
             if(this.optionOneSelection == this.quizQuestion.CorrectAnswer || this.optionTwoSelection == this.quizQuestion.CorrectAnswer || this.optionThreeSelection == this.quizQuestion.CorrectAnswer || this.optionFourSelection == this.quizQuestion.CorrectAnswer)
            {
              this.quizScore+=1;
            }
            this.quizQuestion = this.quizQuestionFour;
            this.ResetSelections();
            break;
          }
          case 4 : {
             if(this.optionOneSelection == this.quizQuestion.CorrectAnswer || this.optionTwoSelection == this.quizQuestion.CorrectAnswer || this.optionThreeSelection == this.quizQuestion.CorrectAnswer || this.optionFourSelection == this.quizQuestion.CorrectAnswer)
            {
              this.quizScore+=1;
            }
            this.quizQuestion = this.quizQuestionFive;
            this.ResetSelections();
            break;
          }
          case 5 : {
             if(this.optionOneSelection == this.quizQuestion.CorrectAnswer || this.optionTwoSelection == this.quizQuestion.CorrectAnswer || this.optionThreeSelection == this.quizQuestion.CorrectAnswer || this.optionFourSelection == this.quizQuestion.CorrectAnswer)
            {
              this.quizScore+=1;
            }
            this.isQuizComplete = true;
            this.ShowScores();
            break;
          }
          default : {
            document.getElementById("lblStatusMsg").textContent = "This is an invalid question...";
          }
        }


      }
      else
      {
        document.getElementById("lblStatusMsg").textContent = "Please select any one option to proceed...";
      }
   }


}
