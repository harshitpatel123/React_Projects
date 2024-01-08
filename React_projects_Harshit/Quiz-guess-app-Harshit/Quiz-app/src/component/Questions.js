"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var selectedAnswer = []; //stores the answer which user have selected
function Questions() {
    var _a = (0, react_1.useState)(0), score = _a[0], setscore = _a[1];
    var _b = (0, react_1.useState)(0), currentQA = _b[0], setcurrentQA = _b[1];
    var _c = (0, react_1.useState)(false), quizcomplete = _c[0], setquizcomplete = _c[1];
    var _d = (0, react_1.useState)(-1), selectedindex = _d[0], setselectedindex = _d[1];
    //Handles the next button click event and check if user has completed the quiz or not
    function HandleNextQuestion() {
        if (currentQA < 9) {
            setcurrentQA(currentQA + 1);
            setselectedindex(-1);
        }
        else {
            for (var i = 0; i < 10; i++) {
                if (parseInt(String(selectedAnswer[i])) == correctAnswerArr[i]) {
                    setscore(function (prevScore) { return prevScore + 1; });
                }
                console.log(score);
            }
            selectedAnswer = [];
            setquizcomplete(true);
        }
        console.log(selectedAnswer);        // checking the array in console -- for testing purpose
    }
    // assign the user selected value to answer array
    function HandleOnchange(e) {
        setselectedindex(e.target.value);
        selectedAnswer[currentQA] = e.target.value;
        console.log(e.target.value);        
    }
    if (quizcomplete) {
        return (<div>
                <center>
                    <h1>Congratulations !!!</h1>
                    <br />
                    <h1>Your Score is : {score}</h1>
                </center>
            </div>);
    }
    else {
        return (<div>
                <h3>Question</h3>
                {questionArr[currentQA]}
                <br />
                <h3>Answer</h3>

                {answerArr[currentQA].map(function (option, index) { return (<div key={index}>
                        <label>
                            <input type="radio" name="options" value={index + 1} onChange={HandleOnchange} checked={selectedindex == (index + 1)}/>
                            {option}
                        </label>
                        <br />
                    </div>); })}

                <br />

                <button onClick={HandleNextQuestion}>{currentQA < 9 ? "Next" : "Submit"}</button>
            </div>);
    }
}
export default Questions;
// questions and answer array for quiz
var questionArr = ["1.  What is the largest ocean on Earth?", "2.  Which of the following is a primary color?", "3.  What is the largest mammal in the world?", "4.  In which continent is the Sahara Desert located?", "5.  In which year did the Titanic sink?", "6.  What is the largest planet in our solar system?", "7.   Who is known as the 'Father of Computers'?", "8.   Who is the author of the Harry Potter series?",
    "9.  Question: Which is the smallest prime number?", "10.  What is the popular local snack in Ahmedabad made from gram flour and spices, often served with chutney?"];
var answerArr = [["A) Indian Ocean", "B) Atlantic Ocean", "C) Pacific Ocean", "D) Arctic Ocean"],
    ["A) Green", "B) Blue", "C) Red", "D) Purple"], ["A) Elephant", "B) Giraffe", "C) Blue Whale", "D) Lion"],
    ["A) Asia", "B) North America", "C) Africa", "D) South America"],
    ["A) 1905", "B) 1912", "C) 1920", "D) 1931"], ["A) Venus", "B) Jupiter", "C) Mars", "D) Saturn"],
    ["A) Alan Turing", "B) Charles Babbage", "C) Bill Gates", "D) Steve Jobs"], ["A) J.R.R. Tolkien", "B) J.K. Rowling", "C) George R.R. Martin", "D) Suzanne Collins"],
    ["A) 0", "B) 1", "C) 2", "D) 3"], ["A) Vada Pav", "B) Dhokla", "C) Fafda", "D) Kachori"]];
var correctAnswerArr = [3, 3, 3, 3, 2, 2, 2, 2, 3, 3];
// Correct ans : (1) pacific (2) red (3) Blue whale  (4)  Africa  (5) 1912  (6) Jupiter  (7) Charles Babbage  (8) J.K. Rowling (9) 2 (10) Fafda
