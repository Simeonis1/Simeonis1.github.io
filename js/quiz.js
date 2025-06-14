$(document).ready(function(){
    const questions = [
        {
            "question": "Колко титли от Висшата лига има Манчестър Юнайтед?",
            "answers": [
                {"value": "20", "correct": true},
                {"value": "30", "correct": false},
                {"value": "10", "correct": false},
                {"value": "15", "correct": false},
            ]
        },
        {
            "question": "През коя година е основан Манчестър Юнайтед?",
            "answers": [
                {"value": "1887", "correct": false},
                {"value": "1788", "correct": false},
                {"value": "1878", "correct": true},
                {"value": "1905", "correct": false},
            ]
        },
    ];

    // construct HTML elements from the questions and place them in the page
    const allQuestions = questions.map((el, idx) => {
        const container = $("<div>", {"class": "question"});
        container.append(`<span id="q${idx}">${idx+1}. ${el.question}</span>`);
        el.answers.forEach(ans => {
            container.append(`<div><input type="radio" id="q${idx}-${ans.value}" name="q${idx}" value="${ans.correct}"><label for="q${idx}-${ans.value}">${ans.value}</label></div>`)
        });
        return container;
    });
    // place the questions after the intro text
    $(".quiz h2").after(allQuestions);

    // calculate quiz score
    $(".quiz button").on("click", () => {
        // select all checked radio elements
        const allAnswers = $(".quiz :radio:checked");
        // from the checked radio elements, filter only these which have the value === "true"
        // (these are the right answers)
        const rightAnswers = allAnswers.filter((_, rad) => {
            return $(rad).val() === "true";
        });
        const fullyCorrect = rightAnswers.length === questions.length ? "Честито!" : "";
        // the result is the number of right answers over all questions
        $(".quiz .results").text(`Познахте ${rightAnswers.length}/${questions.length} верни отговори. ${fullyCorrect}`);
    });
});
