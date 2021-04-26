const quizz_question = [
    {
        question: "Combien de pays membre la Cedeao Compte t'elle",
        a: '10',
        b: '6',
        c: '11',
        d: '12',
        correct: 'c',

    }, {
        question: "Combien de jours une année compte t'ellle?",
        a: '10',
        b: '364',
        c: '109',
        d: '12',
        correct: 'b',

    }, {
        question: "Abidjan est la capital de :",
        a: "Cote d'ivoire",
        b: 'Mali',
        c: 'Guinée',
        d: 'Ghana',
        correct: 'a',

    }, {
        question: "Accra est la capital de :",
        a: "Cote d'ivoire",
        b: 'Mali',
        c: 'Guinée',
        d: 'Ghana',
        correct: 'd',


    }, {
        question: "Bamako est la capital de :",
        a: "Cote d'ivoire",
        b: 'Mali',
        c: 'Guinée',
        d: 'Ghana',
        correct: 'b',

    }, {
        question: "Conakry est la capital de :",
        a: "Cote d'ivoire",
        b: 'Mali',
        c: 'Guinée',
        d: 'Ghana',
        correct: 'c',

    }

]

const containt = document.getElementById("containt")
const valueEl = document.getElementById('value')
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let current_question = 0;
let rep = undefined;
let score = 0;
loadQuestion();

function getReponse() {
    const valueEls = document.querySelectorAll('.value')

    valueEls.forEach((reP) => {
        if (reP.checked) {
            rep = reP.id;
            // console.log(reP.id);
        };
    });
    return rep
}





function loadQuestion() {
    const current_quiz = quizz_question[current_question];
    questionEl.innerHTML = current_quiz.question;
    a_text.innerHTML = current_quiz.a;
    b_text.innerHTML = current_quiz.b;
    c_text.innerHTML = current_quiz.c;
    d_text.innerHTML = current_quiz.d;

}


submitBtn.addEventListener('click', () => {
    

    const repse = getReponse();

    if (repse) {

        if (repse === quizz_question[current_question].correct) {
            score = score + 1;
        }


        current_question++;

        if (current_question < quizz_question.length) {
            console.log(repse);
            loadQuestion();
            
        }else{
            containt.innerHTML = `<h3>Votre Score est de : ${score}/${quizz_question.length}</h3> <button onclick="location.reload()">Reload</button>`
        }
    }




});







