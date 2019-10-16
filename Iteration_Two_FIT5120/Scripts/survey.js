//var surveyJSON = { pages: [{ name: "page1", elements: [{ type: "radiogroup", name: "question1", title: "Are you eligible for this complaint?", isRequired: true, choices: ["Yes", "No"], otherText: "Not Sure (Check Eligibility)" }, { type: "radiogroup", name: "question4", title: "Are you working currently?", isRequired: true, choices: ["Yes", "No", { value: "item1", text: "Not sure - who is classed as a worker?" }] }, { type: "radiogroup", name: "question6", title: "Are you covered by the national anti-bullying laws?\n", isRequired: true, choices: ["Yes", "No", "Not sure - who is covered by the national anti-bullying laws?"] }, { type: "radiogroup", name: "question5", title: "Are you still working for the business or at the place where you allege the bullying took place?", choices: ["Yes", "No"] }, { type: "radiogroup", name: "question7", title: "Are you experiencing bullying at work?", isRequired: true, choices: ["Yes", "No", "Not sure – what is bullying at work?"] }] }] }
var json = {
    "completedHtml": "<h3>Thank you for completing the form.</h3><h5> Based on your answers, it appears that you may be eligible to make an application for an order to stop bullying at work.</h5><h6>We will help you to provide you with a viable solution!</h6>",
    pages: [
        {
            name: "page1",
            elements: [
                {
                    type: "radiogroup",
                    name: "question1",
                    title: "Are you eligible for this complaint?",
                    isRequired: true,
                    choices: [
                        "Yes",
                        "No"
                    ],
                    otherText: "Not Sure (Check Eligibility)"
                },
                {
                    type: "radiogroup",
                    name: "question4",
                    title: "Are you working currently?",
                    isRequired: true,
                    choices: [
                        "Yes",
                        "No",
                        {
                            value: "item1",
                            text: "Not Applicable"
                        }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "question6",
                    title: "Are you covered by the national anti-bullying laws?\n",
                    isRequired: true,
                    choices: [
                        "Yes",
                        "No",
                        {
                            value: "Not sure - who is covered by the national anti-bullying laws?",
                            text: "Not Applicable"
                        }
                    ]
                },
                {
                    type: "radiogroup",
                    name: "question5",
                    title: "Are you still working for the business or at the place where you allege the bullying took place?",
                    choices: [
                        "Yes",
                        "No"
                    ]
                },
                {
                    type: "radiogroup",
                    name: "question2",
                    title: "Are you experiencing bullying at work?",
                    isRequired: true,
                    choices: [
                        "Yes",
                        "No"
                    ]
                },
                {
                    type: "radiogroup",
                    name: "question7",
                    title: "Are you experiencing the bullying behavior repeatedly?\n",
                    isRequired: true,
                    choices: [
                        "Yes",
                        "No"
                    ]
                },
                {
                    type: "radiogroup",
                    name: "question3",
                    title: "Is it likely that you will continue to be bullied at work by this person or group?\n",
                    isRequired: true,
                    choices: [
                        "Yes",
                        "No"
                    ]
                }
            ]
        }
    ]
}

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
    });

$("#surveyContainer").Survey({ model: survey });