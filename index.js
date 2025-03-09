//quiz
const quiz = [
    {
        quiz: prompt("Як ти зазвичай проводиш свій вільний час?"),
        //quiz variante
        quiz_variante_answers: prompt("Введіть будь ласка текст"),
        //quiz question
        quiz: prompt("Що для тебе успіх?" ),
        //quiz variante
        quiz_variante_answers: prompt("Введіть будь ласка текст"),
        //quiz question
        quiz: prompt("Які твої захоплення?"),
        //quiz variante
        quiz_variante_answers: prompt("Введіть будь ласка текст"),
        //quiz question
        quiz: prompt("Як настрій?"),
        //quiz variante
        quiz_variante_answers: prompt("Введіть будь ласка текст"),
        //quiz question
        quiz: prompt("Які твої погляди на життя?"),
        //quiz variante
        quiz_variante_answers: prompt("Введіть будь ласка текст"),
        //ends
    },
];
//function if and else
if(quiz_variante_answers = string){
    console.log("All right");
} else {
    console.log("Буль ласка заповніть лише текстом");
}

//function getInput
function getInput() {
    const input = document.getElementById("user").value.trim(); // Видаляємо зайві пробіли
    if (input) {
        console.log("Send: ", input);
    } else {
        console.log("Будь ласка, введіть текст.");
    }
}

//function print
print(quiz_variante_answers);

//code is good
//ends
