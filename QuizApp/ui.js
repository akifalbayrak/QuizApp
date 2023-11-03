function UI() {
    this.btn_replay = document.querySelector(".btn_replay"),
    this.btn_quit = document.querySelector(".btn_quit"),
    this.score_box = document.querySelector(".score_box"),
    this.btn_next = document.querySelector(".next_btn");
    this.quiz_box = document.querySelector(".quiz_box");
    this.btn_start = document.querySelector(".btn_start");
    this.option_list = document.querySelector(".option_list");
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';
    this.time_text = document.querySelector('.time_text'),
    this.time_second = document.querySelector('.time_second')
    this.time_line = document.querySelector(".time_line")
}
UI.prototype.showQuest = function(quest) {
    let question = `<span> ${quest.questText}</span>`;
    let options = "";
    for (let answer in quest.answers) {
        options += `
      <div class="option">
      <span><b>${answer}</b>: ${quest.answers[answer]}</span>
  </div>
      `;
    }
    document.querySelector(".question_text").innerHTML = question;
    this.option_list.innerHTML = options;
    const option = this.option_list.querySelectorAll(".option");
    for (let opt of option) {
        opt.setAttribute("onclick", "optionSelected(this)");
    }
};

UI.prototype.showCountQuest = function (numQuest, totalQuest) {
    let tag = `<span class='badge bg-warning'>${numQuest} / ${totalQuest} </span>`;
    document.querySelector(".quiz_box .question_index").innerHTML = tag;
};
UI.prototype.showScore = function(totalQuest, trueAnswer) {
    let tag = `Toplam ${totalQuest} sorudan ${trueAnswer} doğru cevap verdiniz.`;
    document.querySelector(".score_box .score_text").innerHTML = tag;
}
