console.log("Hello, World!");

let score = 0; //Integer 
let price = 3.5; // Float

console.log(score);
console.log(price);

let currentQuestionIndex = 0;


let questions = [

   {
    question: "Was ist die Hauptstadt von Deutschland?",
    //          0          1         2          3
    answers: ["Berlin", "München", "Köln", "Frankfurt"],

    correctAnswer: 0,
},
{
    question: "Was ist die Hauptstadt von Frankreich?",
    //          0          1         2          3
    answers: ["Berlin", "Lyon", "Marseille", "Paris"], 

    correctAnswer: 3, 
},
{
    question: "Was ist die Hauptstadt von Holland?",

    answers: ["Dubi", "Syria", "Amsterdam","Rotterdam" ]
}

];

function displayQuestion(){
    let question = questions[currentQuestionIndex];

   document.getElementById("question").textContent = question.question;


    let answersContainer = document.getElementById("answers");
    answersContainer.innerHTML = "  ";

   question.answers.forEach((answer, index) => {
    let button = document.createElement("button");
    button.textContent = answer;
    answersContainer.onclick= () => checkAnswer(index);
    answersContainer.appendChild(button);
    
  });
}



displayQuestion();


function checkAnswer(selectedAnswerIndex){
   let correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if(selectedAnswerIndex == correctAnswer){
        
        score += 1;
    
    }
  currentQuestionIndex++;
  displayQuestion();
}

