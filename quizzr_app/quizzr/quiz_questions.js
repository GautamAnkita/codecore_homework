const quizQuestions = [
    {
        title: "World War I began in which year?",
        type: "radio",
        id: "ww1",
        options: ["1923", "1938", "1917", "1914"]
    },
    {
        title: "Adolf Hitler was born in which country?",
        type: "radio",
        id: "hitler",
        options: ["France", "Germany", "Austria", "Hungary"]
    },
    {
        title: "John F. Kennedy was assassinated in:",
        type: "radio",
        id: "kennedy",
        options: ["New York", "Austin", "Dallas", "Miami"]
    },
    {
        title: "American involvement in the Korean War took place in which decade?",
        type: "radio",
        id: "korean war",
        options: ["1970s", "1950s", "1920s", "1960s"]
    },
    {
        title: "What nationality was the 15th & 16th century navigator, Vasco da Gama?",
        type: "radio",
        id: "Vasco",
        options: ["Peruvian", "Polish", "Polynesian", "Portuguese"]
    },
    {
        title: "Which 51-mile waterway opened to traffic in August 1914?",
        type: "radio",
        id: "waterway",
        options: ["Manchester Ship Canal", "Panama Canal", "St Lawrence Seaway", "Suez Canal"]
    },
    {
        title: "Which of the following provinces exist in Canada?",
        type: "checkbox",
        id: "province",
        options: ["British Columbia", "Ontario", "Washington", "Oregon"]
    },
    {
        title: "Which of the following counties exist in Europe?",
        type: "checkbox",
        id: "europe",
        options: ["Italy", "Morocco", "Lebanon", "France"]
    },
    {
        title: "Which of the following are the official languages of Canada?",
        type: "checkbox",
        id: "languages",
        options: ["Spanish", "English", "French", "Portuguese"]
    },
    {
        title: "Which of the following countries share their border with Italy?",
        type: "checkbox",
        id: "border",
        options: ["Germany", "Austria", "Slovenia", "Switzerland"]
    }
];
const quizAnswer = [["1914"], ["Austria"], ["Dallas"], ["1950s"], ["Portuguese"], ["Panama Canal"],
["British Columbia", "Ontario"], ["Italy", "France"], ["English", "French"], [["Austria", "Slovenia", "Switzerland"]]];
module.exports = {quizQuestions, quizAnswer};