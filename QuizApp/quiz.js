function Quiz(questions){
    this.questions = questions;
    this.questIndex = 0;
    this.trueAnswers = 0;
}

Quiz.prototype.getQuest = function(){
    return this.questions[this.questIndex];
}