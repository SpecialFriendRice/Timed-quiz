//The questions go in questions div h2 (id = question-title)

//do i need to randomise the questions and answers? BUILD ONE OR BOTH IN IF I HAVE TIME

//Questions and possible answers need to be an array of objects; possible answers also need to be in a subarray. This will allow for RANDOMISATION 
//do i put true and false in each answer rather than pick out the correct with an "if?" try the first way initially



var allQs = [

 { question: "How many beans make five?",
    answers: [
        {option:"two", torf: false},
        {option:"three", torf: false},
        {option:"four", torf: false},
        {option:"five", torf: true},
        ],
 },

 { question: "What type of animal has wings?",
    answers: [
        {option:"shark", torf: false},
        {option:"warthog", torf: false},
        {option:"swan", torf: true},
        {option:"hedgehog", torf: false},
        ],
    },

 { question: "What is brie?",
    answers: [
        {option:"a garment", torf: false},
        {option:"a cheese", torf: true},
        {option:"a form of government", torf: false},
        {option:"a colour", torf: false},
        ],
 },

]


// var q1 = "How many beans make five?";
// var a1Arr = ["two", "three", "four", "five"];

// var q2 = "What type of animal has wings?";
// var a2Arr = ["shark", "warthog", "swan", "hedgehog"];

// var q3 = "What is brie?";
// var a3Arr = ["a garment", "a cheese", "a form of government", "a colour"];

