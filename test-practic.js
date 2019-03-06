function printQ(options) {
    if (Array.isArray(options)) {
        //<debug>
        console.debug('is array');
        //</debug>
        options.forEach(function(option) {
            printQ(option);
            // var answersArray = options.answers;
            // console.log(answersArray);
            // answersArray.forEach(function(answer) {
            //     if (answer.correct == true) {
            //         console.info(answers.text);
            //     }
            // });
        });
        return;
    }
    if (typeof options === 'undefined') {
        console.warn('no function');
        return;
    }
    Array.isArray(options);
    // options.forEach(function(option) {
    //     printQ(option);
    var answersArray = options.answers;
    console.log(answersArray);

    if (answersArray[0].correct == true) {
        console.info(answersArray[0].text);
    } else {
        console.info(answersArray[1].text);
    }
    // answersArray.forEach(function(answer) {
    //     if (answer.correct == true) {
    //         console.info(answers.text);
    //     }
    // });
    // });

    var qCode = options.fn;

    console.warn("========== " + options.q + " ==========");
    var code = qCode.toString();

    try {
        // execute for demo
        qCode();
    } catch (e) {
        console.error(e);
    }

    //code = code.replace('function q', '');
    code = code.replace(/function q\d+\(\)\s*\{/, '');
    code = code.substring(0, code.length - 1);
    //code = code.replace(/\n\s+\n/g, "\n    \n");
    code = code.replace(/\n\s+\n/g, '\n    \n');
    //code = code.replace(/\n\s{4}/g, "\n");
    code = code.replace(/\n\s{4}/g, '\n');
    // TODO html encode to show &lt;
    code = code.replace(/</g, '&lt;');
    //code = code.replace(/\s+/g, ' ');
    //code = code.trim();

    var raspuns = (options.answers || []).map(function(ans) {
        return '<label><input type="checkbox" name="' + qCode.name + '">' + ans.text + '</label>';
    });

    var question = '<article>' +
        '<h2>' + options.text + '</h2>' +
        // '<pre><code>' + code + '</code></pre>' +
        '<div class="code">' + code + '</div>' +
        '<ol type="A"><li>' +
        raspuns.join('</li><li>');
    '</li></ol>' +
    '</article>';

    $('#questions').append(question);
}

printQ([
    // TODO print strings directly if pass from BE
    //{fn: 'if (true) {console.info("Not Equals");}', text: 'simplu'},
    {
        fn: q1,
        id: 1,
        text: "Care rezultate vor fi afisate in consola?",
        answers: [
            { id: 1, text: 'Exceptie la runtime' },
            { id: 2, text: 'Afișează "the value is: undefined"', correct: true }
        ]
    },
    {
        fn: q2,
        id: 2,
        text: "Care rezultate vor fi afisate in consola?",
        answers: [
            { id: 1, text: "Raspuns 1" },
            { id: 2, text: "Raspuns 2", correct: true }
        ]
    },
    {
        fn: q3,
        id: 3,
        text: "Care este rezultatul codului de mai jos?",
        answers: [
            { id: 1, text: "Raspuns 3" },
            { id: 2, text: "Raspuns 4", correct: true }
        ]
    },
    {
        fn: q4,
        id: 4,
        text: "Care e rezultatul?",
        answers: [
            { id: 1, text: "Raspuns 5" },
            { id: 2, text: "Raspuns 6", correct: true }
        ]
    },
    {
        fn: q5,
        id: 5,
        text: "Care e rezultatul?",
        answers: [
            { id: 1, text: "Raspuns 7" },
            { id: 2, text: "Raspuns 8", correct: true }
        ]
    },
    { fn: q6, text: "Care e rezultatul?" },
    { fn: q7, text: "Care e rezultatul?" },
    { fn: q8, text: "Care e rezultatul?" },
    { fn: q9, text: "Care e rezultatul?" },
    { fn: q10, text: "Care e rezultatul?" },
    { fn: q11, text: "Care e rezultatul?" },
    { fn: q12, text: "Care e rezultatul?" },
    { fn: q13, text: "Care e rezultatul?" }
]);