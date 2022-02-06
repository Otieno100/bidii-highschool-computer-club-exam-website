
function submitAnswers() {
    let score = 0;
    if (document.querySelector('input[name="question_1"]:checked').value === 'C') {
        score++
    }
    if (document.querySelector('input[name="question_2"]:checked').value === 'D') {
        score++
    }
    if (document.querySelector('input[name="question_3"]:checked').value === 'A') {
        score++
    }
    if (document.querySelector('input[name="question_4"]:checked').value === 'A') {
        score++
    }
    if (document.querySelector('input[name="question_5"]:checked').value === 'A') {
        score++
    }
    let total =(score/5)*100

    document.getElementById('totalScore').innerHTML = total + '%'
}