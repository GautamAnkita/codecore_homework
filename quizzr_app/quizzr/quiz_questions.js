const quizQuestions = [
    {
        title: "What is your name?",
        type: "radio",
        id: "nameQuestion",
        options: ["Rohit", "Ankita", "Arnav", "Atharva"]
    },
    {
        title: "What is your age?",
        type: "radio",
        id: "ageQuestion",
        options: ["20", "30", "35", "40"]

    },
    {
        title: "What are your hobbies?",
        type: "checkbox",
        id: "hobbiesQuestion",
        options: ["Swimming", "Movies", "Music", "Reading"]
    }
];
const quizAnswer = [["Rohit"], ["35"], ["Movies", "Music"]];
module.exports = {quizQuestions, quizAnswer};