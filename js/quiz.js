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
        {
        "question": "Кои млади звезди се свързват с 'Класата на 92'?",
        "answers": [
            {"value": "Кристиано Роналдо и Уейн Рууни", "correct": false},
            {"value": "Райън Гигс и Пол Скоулс", "correct": true},
            {"value": "Боби Чарлтън и Джордж Бест", "correct": false},
            {"value": "Рио Фърдинанд и Неманя Видич", "correct": false}
        ]
        }, 
        {
        "question": "Коя титла Манчестър Юнайтед печели през 2008 г.?",
        "answers": [
            {"value": "Купа на Лигата", "correct": false},
            {"value": "Шампионска лига", "correct": true},
            {"value": "Суперкупа на УЕФА", "correct": false},
            {"value": "Лига Европа", "correct": false}
        ]
        },
        {
    "question": "Колко гола има Димитър Бербатов за Манчестър Юнайтед?",
    "answers": [
        {"value": "56", "correct": true},
        {"value": "48", "correct": false},
        {"value": "61", "correct": false},
        {"value": "39", "correct": false}
        ]
        },
        {
    "question": "Колко играчи от Холандия има в настоящия състав на Манчестър Юнайтед?",
    "answers": [
        {"value": "1", "correct": false},
        {"value": "2", "correct": true},
        {"value": "3", "correct": false},
        {"value": "4", "correct": false}
        ]
        },
        {
    "question": "Кой играч има най-много мачове за Манчестър Юнайтед?",
    "answers": [
        {"value": "Пол Скоулс", "correct": false},
        {"value": "Брайън Робсън", "correct": false},
        {"value": "Гари Невил", "correct": false},
        {"value": "Раян Гигс", "correct": true}
        ]
        },
        {
    "question": "Колко етапа има Кристиано Роналдо като играч на Манчестър Юнайтед?",
    "answers": [
        {"value": "1 етап (2003–2009)", "correct": false},
        {"value": "2 етапа (2003–2009 и 2021–2022)", "correct": true},
        {"value": "3 етапа (2003–2009, 2021–2022, 2023–настоящ)", "correct": false},
        {"value": "4 етапа (2000-2001, 2003–2009, 2021–2022, 2023–настоящ)", "correct": false}
        ]
        },
        {
    "question": "Колко титли от Висшата лига е спечелил Манчестър Юнайтед под ръководството на Сър Алекс Фъргюсън?",
    "answers": [
        {"value": "13", "correct": true},
        {"value": "10", "correct": false},
        {"value": "15", "correct": false},
        {"value": "20", "correct": false}
        ]
        },
        {
    "question": "Кой е капитана на Манчестър Юнайтед до момента?",
    "answers": [
        {"value": "Хари Магуайър", "correct": false},
        {"value": "Маркъс Рашфорд", "correct": false},
        {"value": "Бруно Фернандес", "correct": true},
        {"value": "Диего Далот", "correct": false}
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
