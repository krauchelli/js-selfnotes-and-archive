const question1 = {
    questionnary: "Who is Steve Jobs?",
    option: ["ligma", "Human"],
    correct: 1
};
const question2 = {

};

const arrayOfQuestions = [question1, question2];


function handleKeyboardInput(event) {

}

const keyboardEvent = new KeyboardEvent("keydown", {key: "Enter"});
document.addEventListener("keydown", handleKeyboardInput());
document.dispatchEvent(keyboardEvent);