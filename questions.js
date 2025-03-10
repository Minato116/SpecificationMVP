/*
 Navicat Premium Data Transfer

 Source Server         : mongodb
 Source Server Type    : MongoDB
 Source Server Version : 80004 (8.0.4)
 Source Host           : localhost:27017
 Source Schema         : project

 Target Server Type    : MongoDB
 Target Server Version : 80004 (8.0.4)
 File Encoding         : 65001

 Date: 09/03/2025 21:19:24
*/


// ----------------------------
// Collection structure for questions
// ----------------------------
db.getCollection("questions").drop();
db.createCollection("questions",{
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "question",
                "answer",
                "id",
                "content",
                "type",
                "reason",
                "question_type"
            ],
            properties: {
                id: {
                    bsonType: "int"
                },
                question: {
                    bsonType: "string"
                },
                content: {
                    bsonType: "object"
                },
                answer: {
                    bsonType: "string"
                },
                type: {
                    bsonType: "string"
                },
                reason: {
                    bsonType: "string"
                },
                question_type: {
                    bsonType: "int"
                }
            }
        }
    }
});

// ----------------------------
// Documents of questions
// ----------------------------
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce1bff26b746797a057b8a"),
    id: NumberInt("1"),
    question: "If some students study Math, and all Math students are successful, can we conclude that some students are successful?",
    content: {
        a: "Yes",
        b: "No"
    },
    answer: "a",
    type: "Logical Reasoning",
    reason: "If some students study math and all math students are successful, then there must be some students who are successful because they study math.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce1bff26b746797a057b8b"),
    id: NumberInt("2"),
    question: "If some birds can swim and all penguins are birds, can we conclude that some penguins can swim?",
    content: {
        a: "Yes",
        b: "No"
    },
    answer: "a",
    type: "Logical Reasoning",
    reason: "If some birds can swim and all penguins are birds, then it follows logically that at least some penguins can swim.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce1bff26b746797a057b8c"),
    id: NumberInt("3"),
    question: "If all A is B and all B is C, can we conclude that all A is C?",
    content: {
        a: "Yes",
        b: "No"
    },
    answer: "a",
    type: "Logical Reasoning",
    reason: "If all A is B and all B is C, then it logically follows that all A is C. This is known as the transitive property.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce1bff26b746797a057b8d"),
    id: NumberInt("4"),
    question: "If some politicians are honest and all honest people are respected, can we conclude that some politicians are respected?",
    content: {
        a: "Yes",
        b: "No"
    },
    answer: "a",
    type: "Logical Reasoning",
    reason: "If some politicians are honest and all honest people are respected, then it logically follows that at least some politicians are respected.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce1bff26b746797a057b8e"),
    id: NumberInt("5"),
    question: "If all mammals breathe air and all fish live in water, can we conclude that no mammals live in water?",
    content: {
        a: "Yes",
        b: "No"
    },
    answer: "b",
    type: "Logical Reasoning",
    reason: "The fact that all mammals breathe air does not preclude the possibility of mammals living in water. Some mammals, such as dolphins and whales, are adapted to aquatic environments.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce237426b746797a057ba2"),
    id: NumberInt("6"),
    question: "Which of the following best describes the function of a pulley?",
    content: {
        a: "To increase friction",
        b: "To change the direction of force",
        c: "To amplify force",
        d: "To decrease mechanical advantage"
    },
    answer: "b",
    type: "Mechanical Aptitude",
    reason: "A pulley is used to change the direction of force applied to lift an object.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce237426b746797a057ba3"),
    id: NumberInt("7"),
    question: "Which of the following simple machines is used to lift heavy loads by applying a small force over a longer distance?",
    content: {
        a: "Pulley",
        b: "Lever",
        c: "Wheel and axle",
        d: "Inclined plane"
    },
    answer: "d",
    type: "Mechanical Aptitude",
    reason: "An inclined plane is used to lift heavy loads by applying a small force over a longer distance.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce237426b746797a057ba4"),
    id: NumberInt("8"),
    question: "What type of energy does a wind turbine convert into electrical energy?",
    content: {
        a: "Kinetic energy",
        b: "Potential energy",
        c: "Wind Energy",
        d: "Chemical energy"
    },
    answer: "a",
    type: "Mechanical Aptitude",
    reason: "Wind turbines convert kinetic energy from wind into electrical energy.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce237426b746797a057ba5"),
    id: NumberInt("9"),
    question: "Which of the following materials is a good conductor of electricity?",
    content: {
        a: "Rubber",
        b: "Silver",
        c: "Copper",
        d: "Gold"
    },
    answer: "c",
    type: "Mechanical Aptitude",
    reason: "Copper is a good conductor of electricity due to its low resistance and high conductivity.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce237426b746797a057ba6"),
    id: NumberInt("10"),
    question: "Which of the following is an example of a first-class lever?",
    content: {
        a: "Wheelbarrow",
        b: "Scissors",
        c: "Tweezers",
        d: "Crowbar"
    },
    answer: "d",
    type: "Mechanical Aptitude",
    reason: "A crowbar is an example of a first-class lever, where the fulcrum is located between the input and output forces.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce237426b746797a057ba7"),
    id: NumberInt("11"),
    question: "You are working on a project with a tight deadline, and unexpected issues arise that delay progress. What would you do?",
    content: {
        a: "Panic and become overwhelmed by the situation.",
        b: "Blame others for the issues and refuse to take responsibility.",
        c: "Communicate the issues to stakeholders and work with the team to develop a plan to mitigate the delays.",
        d: "Hide the issues from stakeholders to avoid negative consequences."
    },
    answer: "c",
    type: "Situational Judgement",
    reason: "In this scenario, it’s important to communicate openly about the issues and work with the team to find a solution.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce237426b746797a057ba8"),
    id: NumberInt("12"),
    question: "You receive feedback from a coworker that your approach to a task could be improved. How would you respond?",
    content: {
        a: "Dismiss the feedback and continue working as usual.",
        b: "Get defensive and argue with the coworker about the feedback.",
        c: "Reflect on the feedback and consider how you can incorporate it to improve your approach.",
        d: "Retaliate by providing negative feedback about the coworker's performance."
    },
    answer: "c",
    type: "Situational Judgement",
    reason: "It is important to reflect on feedback and use it as an opportunity to improve.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce237426b746797a057ba9"),
    id: NumberInt("13"),
    question: "You are working on a project that requires collaboration with another department, but you find it challenging to communicate effectively with them. What would you do?",
    content: {
        a: "Continue working independently and avoid collaboration with the other department.",
        b: "Blame the other department for the communication issues and escalate the matter to your supervisor.",
        c: "Reach out to the other department to discuss communication challenges and find mutually beneficial solutions.",
        d: "Criticise the other department's communication skills publicly to pressure them into improving."
    },
    answer: "c",
    type: "Situational Judgement",
    reason: "By addressing the communication challenges directly, you can find a collaborative solution that benefits both departments.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce237426b746797a057baa"),
    id: NumberInt("14"),
    question: "You are in a meeting where a decision needs to be made, and there are differing opinions among team members. What would you do?",
    content: {
        a: "Push for your own opinion to be adopted without considering others' viewpoints.",
        b: "Remain silent and let others make the decision.",
        c: "Facilitate a discussion to understand each viewpoint and work towards a consensus.",
        d: "Exit the meeting to avoid conflict."
    },
    answer: "c",
    type: "Situational Judgement",
    reason: "Facilitating discussion helps to ensure that all viewpoints are considered and a consensus is reached.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce237426b746797a057bab"),
    id: NumberInt("15"),
    question: "You receive feedback from your supervisor criticising your performance on a recent project. How would you respond?",
    content: {
        a: "Get defensive and argue with your supervisor about the feedback.",
        b: "Ignore the feedback and continue working as usual.",
        c: "Reflect on the feedback and ask for specific examples to understand areas for improvement.",
        d: "Immediately start looking for a new job."
    },
    answer: "c",
    type: "Situational Judgement",
    reason: "It’s important to reflect on feedback and use it constructively to improve performance.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce237426b746797a057bac"),
    id: NumberInt("16"),
    question: "What comes next in the sequence: 2, 4, 6, 8, ___?",
    content: {
        a: "9",
        b: "10",
        c: "12",
        d: "14"
    },
    answer: "c",
    type: "Cognitive",
    reason: "The sequence is increasing by 2, so the next number is 12.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce237426b746797a057bad"),
    id: NumberInt("17"),
    question: "If 5 + 3 = 28, 6 + 2 = 36, and 7 + 5 = 60, what does 8 + 4 equal?",
    content: {
        a: "64",
        b: "72",
        c: "80",
        d: "88"
    },
    answer: "d",
    type: "Cognitive",
    reason: "The pattern is: (first number * second number) + (second number). So, (8 * 4) + 4 = 88.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce237426b746797a057bae"),
    id: NumberInt("18"),
    question: "What is the next number in the sequence: 1, 4, 9, 16, ___?",
    content: {
        a: "25",
        b: "28",
        c: "36",
        d: "49"
    },
    answer: "d",
    type: "Cognitive",
    reason: "The sequence represents perfect squares: 1^2, 2^2, 3^2, 4^2, ... So the next number is 49.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce237426b746797a057baf"),
    id: NumberInt("19"),
    question: "If John is taller than Tom, and Tom is taller than Sarah, who is the tallest?",
    content: {
        a: "John",
        b: "Tom",
        c: "Sarah",
        d: "Insufficient information"
    },
    answer: "d",
    type: "Cognitive",
    reason: "There is insufficient information to determine who is the tallest based on the given relationships.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce237426b746797a057bb0"),
    id: NumberInt("20"),
    question: "What is the result of 3 squared minus 5?",
    content: {
        a: "4",
        b: "6",
        c: "7",
        d: "8"
    },
    answer: "c",
    type: "Cognitive",
    reason: "3 squared is 9, and 9 minus 5 equals 4.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce299226b746797a057bb1"),
    id: NumberInt("21"),
    question: "How do you typically respond to stressful situations?",
    content: {
        a: "Avoid them at all costs",
        b: "Become overwhelmed and anxious",
        c: "Use coping strategies to manage stress effectively",
        d: "Deny the existence of stress"
    },
    answer: "c",
    type: "Self Awareness test",
    reason: "Use coping strategies to manage stress effectively.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce299226b746797a057bb2"),
    id: NumberInt("22"),
    question: "How often do you reflect on your own emotions and thoughts?",
    content: {
        a: "Rarely",
        b: "Occasionally",
        c: "Sometimes",
        d: "Frequently"
    },
    answer: "d",
    type: "Self Awareness test",
    reason: "Frequently reflect on emotions and thoughts.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce299226b746797a057bb3"),
    id: NumberInt("23"),
    question: "How aware are you of your own biases and prejudices?",
    content: {
        a: "Not aware at all",
        b: "Somewhat aware",
        c: "Moderately aware",
        d: "Very aware"
    },
    answer: "d",
    type: "Self Awareness test",
    reason: "Very aware of my biases and prejudices.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce299226b746797a057bb4"),
    id: NumberInt("24"),
    question: "How often do you actively seek out opportunities for personal growth and development?",
    content: {
        a: "Never",
        b: "Rarely",
        c: "Occasionally",
        d: "Frequently"
    },
    answer: "d",
    type: "Self Awareness test",
    reason: "Frequently seek out personal growth opportunities.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce299226b746797a057bb5"),
    id: NumberInt("25"),
    question: "How well do you manage your time and prioritize tasks?",
    content: {
        a: "Poorly, I often procrastinate and feel overwhelmed by deadlines",
        b: "Fairly well, but I sometimes struggle to stay organized",
        c: "Very well, I have effective time management skills",
        d: "I do not need to manage my time, as others handle it for me"
    },
    answer: "c",
    type: "Self Awareness test",
    reason: "Very well, I have effective time management skills.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce299226b746797a057bb6"),
    id: NumberInt("26"),
    question: "How do you celebrate your achievements or milestones?",
    content: {
        a: "I do not celebrate my achievements",
        b: "I celebrate quietly, without much fanfare",
        c: "I celebrate with friends or family",
        d: "I treat myself to something special"
    },
    answer: "c",
    type: "Motivation Test/Emotional Control",
    reason: "Celebrate with friends or family.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce299226b746797a057bb7"),
    id: NumberInt("27"),
    question: "How do you maintain motivation when working on long-term projects or goals?",
    content: {
        a: "I struggle to maintain motivation over time",
        b: "I remind myself of the end goal and break the project into smaller tasks",
        c: "I seek support and encouragement from others",
        d: "I rely on external rewards to stay motivated"
    },
    answer: "b",
    type: "Motivation Test/Emotional Control",
    reason: "I remind myself of the end goal and break the project into smaller tasks.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce299226b746797a057bb8"),
    id: NumberInt("28"),
    question: "How do you respond to competition or challenges from others?",
    content: {
        a: "I become discouraged and give up",
        b: "I feel motivated to work harder and improve",
        c: "I become defensive and view others as threats",
        d: "I try to sabotage others to ensure my success"
    },
    answer: "b",
    type: "Motivation Test/Emotional Control",
    reason: "I feel motivated to work harder and improve.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce299226b746797a057bb9"),
    id: NumberInt("29"),
    question: "How do you handle situations where your goals or values conflict with those of others?",
    content: {
        a: "I compromise my own goals or values to avoid conflict",
        b: "I assertively communicate my goals and values while seeking common ground",
        c: "I become passive-aggressive and avoid confrontation",
        d: "I abandon my goals or values to accommodate others"
    },
    answer: "b",
    type: "Motivation Test/Emotional Control",
    reason: "I assertively communicate my goals and values while seeking common ground.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce299226b746797a057bba"),
    id: NumberInt("30"),
    question: "How do you maintain motivation when faced with repetitive or mundane tasks?",
    content: {
        a: "I find it difficult to stay motivated and often procrastinate",
        b: "I remind myself of the importance of the tasks and their contribution to my overall goals",
        c: "I seek out new challenges to alleviate boredom",
        d: "I rush through the tasks to get them done quickly"
    },
    answer: "b",
    type: "Motivation Test/Emotional Control",
    reason: "I remind myself of the importance of the tasks and their contribution to my overall goals.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce29f326b746797a057bbb"),
    id: NumberInt("31"),
    question: "How do you respond to recognition or praise for your achievements?",
    content: {
        a: "I downplay my achievements and feel uncomfortable with praise",
        b: "I appreciate recognition but prefer to stay humble",
        c: "I enjoy recognition and seek out opportunities for praise",
        d: "I become arrogant and expect praise for everything I do"
    },
    answer: "b",
    type: "Motivation Test/Emotional Control",
    reason: "I appreciate recognition but prefer to stay humble.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce2dab26b746797a057bbc"),
    id: NumberInt("32"),
    question: "How do you respond when someone shares good news with you?",
    content: {
        a: "I offer genuine congratulations and express happiness for their success",
        b: "I feel jealous or envious of their success",
        c: "I downplay their achievements or change the subject",
        d: "I struggle to know what to say and feel uncomfortable"
    },
    answer: "a",
    type: "Social Skills",
    reason: "I offer genuine congratulations and expressing happiness shows empathy and support in social interactions.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce2dab26b746797a057bbd"),
    id: NumberInt("33"),
    question: "What do you do when you notice someone feeling sad or upset?",
    content: {
        a: "I offer support and comfort, and listen empathetically",
        b: "I ignore their feelings and pretend I didn't notice",
        c: "I try to cheer them up with jokes or distractions",
        d: "I feel awkward and avoid addressing their emotions"
    },
    answer: "a",
    type: "Social Skills",
    reason: "I offer support and listening empathetically helps build trust and emotional connection.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce2dab26b746797a057bbe"),
    id: NumberInt("34"),
    question: "How do you handle social situations where you don't know anyone?",
    content: {
        a: "I feel anxious and tend to stick to the sidelines",
        b: "I approach others and introduce myself, seeking to make connections",
        c: "I avoid social situations where I don't know anyone",
        d: "I wait for others to approach me and initiate conversation"
    },
    answer: "b",
    type: "Social Skills",
    reason: "I approach others and introducing oneself demonstrates confidence and a proactive social attitude.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce2dab26b746797a057bbf"),
    id: NumberInt("35"),
    question: "How do you handle social gatherings or events where you don't know many people?",
    content: {
        a: "I feel uncomfortable and try to leave as soon as possible",
        b: "I mingle and introduce myself to others, seeking to make new connections",
        c: "I stick with familiar people and avoid meeting new individuals",
        d: "I stay quiet and observe from the sidelines"
    },
    answer: "b",
    type: "Social Skills",
    reason: "I mingle and introducing oneself fosters networking and builds social confidence.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce2e7526b746797a057bc0"),
    id: NumberInt("36"),
    question: "How do you handle social situations where there are cultural or linguistic differences?",
    content: {
        a: "I avoid engaging with individuals from different cultures or language backgrounds",
        b: "I make an effort to understand and respect cultural differences",
        c: "I feel uncomfortable and don't know how to interact",
        d: "I assume everyone is the same and don't consider cultural differences"
    },
    answer: "b",
    type: "Social Skills",
    reason: "I make an effort to understand and respect cultural differences fosters inclusivity and effective communication.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce2f3c26b746797a057bc1"),
    id: NumberInt("37"),
    question: "How do you respond when facing a tempting but unhealthy behavior or habit?",
    content: {
        a: "I give in to the temptation without considering the consequences",
        b: "I remind myself of my long-term goals and resist the temptation",
        c: "I rationalize the behavior and convince myself it's okay 'just this once'",
        d: "I feel guilty and ashamed after giving in to the temptation"
    },
    answer: "b",
    type: "Self Regulation",
    reason: "I remind oneself of long-term goals helps in making healthier choices and maintain self-discipline.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce2f3c26b746797a057bc2"),
    id: NumberInt("38"),
    question: "How do you manage your finances to avoid overspending or financial stress?",
    content: {
        a: "I spend impulsively without considering the consequences",
        b: "I budget and track my expenses to ensure financial stability",
        c: "I ignore financial responsibilities and hope for the best",
        d: "I rely on credit cards or loans to cover expenses"
    },
    answer: "b",
    type: "Self Regulation",
    reason: "I budget and track expenses are key to maintaining financial stability and avoiding debt.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce2f3c26b746797a057bc3"),
    id: NumberInt("39"),
    question: "How do you regulate your social media usage to avoid distraction or addiction?",
    content: {
        a: "I spend excessive amounts of time on social media without realizing it",
        b: "I set limits on my social media usage and prioritize other activities",
        c: "I feel anxious when not checking social media frequently",
        d: "I ignore the negative effects of social media on my well-being"
    },
    answer: "b",
    type: "Self Regulation",
    reason: "I set limits on social media usage promotes productivity and mental well-being.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce308526b746797a057bc4"),
    id: NumberInt("40"),
    question: "How do you regulate your eating habits to maintain a balanced diet?",
    content: {
        a: "I struggle with emotional eating and binge on unhealthy foods",
        b: "I make conscious choices to eat nutritious foods and practice moderation",
        c: "I skip meals or restrict my food intake to control my weight",
        d: "I rely on convenience foods and takeout for most meals"
    },
    answer: "b",
    type: "Self Regulation",
    reason: "I make conscious choices to eat nutritious foods and practice moderation.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce308526b746797a057bc5"),
    id: NumberInt("41"),
    question: "How do you regulate your sleep patterns to ensure adequate rest?",
    content: {
        a: "I stay up late and sacrifice sleep to meet deadlines or obligations",
        b: "I prioritize getting enough sleep and establish a consistent bedtime routine",
        c: "I rely on sleep aids or medication to help me fall asleep",
        d: "I have irregular sleep patterns and struggle with insomnia"
    },
    answer: "b",
    type: "Self Regulation",
    reason: "I prioritize sleep and maintain a routine ensures better overall health and productivity.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce336826b746797a057bc7"),
    id: NumberInt("42"),
    question: "How do you perceive the emotions of others in social situations?",
    content: {
        a: "I am highly attuned to the emotions of others and can easily understand their feelings",
        b: "I sometimes struggle to recognize the emotions of others accurately",
        c: "I ignore the emotions of others and focus on my own experiences",
        d: "I misinterpret the emotions of others and often make incorrect assumptions"
    },
    answer: "a",
    type: "Empathy",
    reason: "I am highly attuned to the emotions of others and can easily understand their feelings.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce336826b746797a057bc8"),
    id: NumberInt("43"),
    question: "How do you demonstrate understanding and acceptance of diversity in others?",
    content: {
        a: "I judge others based on their differences and stereotypes",
        b: "I embrace diversity and appreciate the unique experiences of others",
        c: "I avoid interacting with people who are different from me",
        d: "I believe everyone should conform to my way of thinking and behaving"
    },
    answer: "b",
    type: "Empathy",
    reason: "I embrace diversity and appreciate the unique experiences of others.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce336826b746797a057bc9"),
    id: NumberInt("44"),
    question: "How do you respond when someone expresses vulnerability or insecurity?",
    content: {
        a: "I offer reassurance and support to help them feel more confident",
        b: "I ignore their feelings and change the subject",
        c: "I criticize them for being weak or insecure",
        d: "I feel uncomfortable and avoid addressing their feelings"
    },
    answer: "a",
    type: "Empathy",
    reason: "I offer reassurance and support to help them feel more confident.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce336826b746797a057bca"),
    id: NumberInt("45"),
    question: "How do you handle situations where someone is being mistreated or bullied?",
    content: {
        a: "I ignore the situation and avoid getting involved",
        b: "I speak up and intervene to support the individual who is being mistreated",
        c: "I join in with the mistreatment to avoid becoming a target myself",
        d: "I minimize the seriousness of the situation and believe they should handle it themselves"
    },
    answer: "b",
    type: "Empathy",
    reason: "I speak up and intervene to support the individual who is being mistreated.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce336826b746797a057bcb"),
    id: NumberInt("46"),
    question: "How do you respond when someone is feeling insecure or inadequate?",
    content: {
        a: "I criticize them for being weak or insecure",
        b: "I offer reassurance and affirm their value and worth",
        c: "I ignore their feelings and change the subject",
        d: "I avoid interacting with them to prevent feeling uncomfortable"
    },
    answer: "b",
    type: "Empathy",
    reason: "I offer reassurance and affirm their value and worth.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce33ba26b746797a057bcc"),
    id: NumberInt("47"),
    question: "How do you provide constructive feedback to others to help them improve their performance?",
    content: {
        a: "I avoid giving feedback to prevent hurting others' feelings",
        b: "I offer feedback in a constructive and respectful manner, focusing on specific behaviors and outcomes",
        c: "I criticize others harshly without providing suggestions for improvement",
        d: "I avoid giving feedback unless specifically asked"
    },
    answer: "b",
    type: "Relationship Management",
    reason: "I offer feedback in a constructive and respectful manner, focusing on specific behaviors and outcomes.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce33ba26b746797a057bcd"),
    id: NumberInt("48"),
    question: "How do you handle difficult or challenging individuals in professional relationships?",
    content: {
        a: "I avoid interacting with them and try to minimize contact",
        b: "I seek to understand their perspective and find common ground to build a positive relationship",
        c: "I confront them aggressively and escalate the conflict",
        d: "I complain about them to others but avoid addressing the issues directly"
    },
    answer: "b",
    type: "Relationship Management",
    reason: "I seek to understand their perspective and find common ground to build a positive relationship.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce33ba26b746797a057bce"),
    id: NumberInt("49"),
    question: "How do you handle situations where trust has been broken in a professional relationship?",
    content: {
        a: "I hold grudges and refuse to forgive or rebuild trust",
        b: "I address the issue directly, communicate openly, and work towards rebuilding trust",
        c: "I ignore the breach of trust and pretend everything is fine",
        d: "I avoid interacting with the individual to prevent further conflict"
    },
    answer: "b",
    type: "Relationship Management",
    reason: "I address the issue directly, communicate openly, and work towards rebuilding trust.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce33ba26b746797a057bcf"),
    id: NumberInt("50"),
    question: "How do you nurture and maintain long-term professional relationships?",
    content: {
        a: "I prioritize my own needs and interests over maintaining relationships",
        b: "I invest time and effort in building connections, staying in touch, and offering support",
        c: "I rely on others to initiate and maintain relationships",
        d: "I avoid committing to long-term relationships to prevent feeling tied down"
    },
    answer: "b",
    type: "Relationship Management",
    reason: "I invest time and effort in building connections, staying in touch, and offering support.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce33ba26b746797a057bd0"),
    id: NumberInt("51"),
    question: "How do you build and maintain professional networks outside of your immediate workplace?",
    content: {
        a: "I avoid networking events or opportunities to connect with professionals in my field",
        b: "I actively participate in industry events, join professional associations, and engage in networking activities",
        c: "I rely solely on my current workplace for professional connections",
        d: "I feel uncomfortable networking and prefer to keep to myself"
    },
    answer: "b",
    type: "Relationship Management",
    reason: "I actively participate in industry events, join professional associations, and engage in networking activities.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce342726b746797a057bd1"),
    id: NumberInt("52"),
    question: "You are offered a substantial bribe to overlook illegal activity in your workplace. What should you do?",
    content: {
        a: "Accept the bribe and turn a blind eye to the illegal activity.",
        b: "Report the bribe to your supervisor or authorities immediately.",
        c: "Negotiate for a higher bribe before making a decision.",
        d: "Ignore the offer and hope it goes away on its own."
    },
    answer: "b",
    type: "Moral Judgment",
    reason: "Reporting bribery helps maintain ethical workplace practices and prevents corruption.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce342726b746797a057bd2"),
    id: NumberInt("53"),
    question: "You discover that a colleague has been taking credit for your work. How do you handle the situation?",
    content: {
        a: "Confront the colleague and demand they stop taking credit for your work.",
        b: "Speak to your supervisor or HR department about the situation.",
        c: "Ignore the situation and continue working without addressing it.",
        d: "Take credit for their work in retaliation."
    },
    answer: "b",
    type: "Moral Judgment",
    reason: "Escalating the issue professionally helps ensure fairness and accountability.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce342726b746797a057bd3"),
    id: NumberInt("54"),
    question: "You witness a group of people vandalizing public property. What is the appropriate action?",
    content: {
        a: "Join in and participate in the vandalism to fit in with the group.",
        b: "Walk away and pretend you didn't see anything.",
        c: "Confront the vandals and try to stop them from causing further damage.",
        d: "Take pictures or video evidence of the vandalism and report it to the authorities."
    },
    answer: "d",
    type: "Moral Judgment",
    reason: "Gathering evidence and reporting ensures accountability while maintaining personal safety.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce342726b746797a057bd4"),
    id: NumberInt("55"),
    question: "You witness a coworker stealing food from the office pantry. What should you do?",
    content: {
        a: "Confront the coworker directly and ask them to stop stealing.",
        b: "Report the theft to your supervisor or HR department.",
        c: "Ignore the theft and pretend you didn't see anything.",
        d: "Join the coworker and take some food for yourself."
    },
    answer: "b",
    type: "Moral Judgment",
    reason: "Reporting workplace theft maintains integrity and discourages unethical behavior.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce342726b746797a057bd5"),
    id: NumberInt("56"),
    question: "You are in a group project where one member is not contributing their fair share of work. What should you do?",
    content: {
        a: "Do all the work yourself to ensure it gets done properly.",
        b: "Confront the uncooperative member and demand they do their part.",
        c: "Report the situation to the teacher or supervisor for intervention.",
        d: "Ignore the situation and hope the other group members will pick up the slack."
    },
    answer: "c",
    type: "Moral Judgment",
    reason: "Reporting ensures fairness and allows for mediation to address team imbalances.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce342726b746797a057bd6"),
    id: NumberInt("57"),
    question: "You are asked to sign off on a project report that contains inaccurate information. What is the appropriate action?",
    content: {
        a: "Sign the report as requested to avoid conflict with your superiors.",
        b: "Refuse to sign the report and explain your concerns to your supervisor.",
        c: "Sign the report but include a note highlighting the inaccuracies for clarification.",
        d: "Forge the signature of a colleague to avoid personal responsibility."
    },
    answer: "b",
    type: "Overt Integrity",
    reason: "Refusing to sign ensures accuracy and prevents misinformation from spreading.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce342726b746797a057bd7"),
    id: NumberInt("62"),
    question: "You accidentally break a household item while house-sitting for a neighbor. How do you handle the situation?",
    content: {
        a: "Hide the broken item and pretend you don't know what happened to it.",
        b: "Leave a note explaining what happened and offer to replace the item.",
        c: "Blame the damage on someone else who was in the house.",
        d: "Deny any knowledge of the broken item and hope the neighbor doesn't notice."
    },
    answer: "b",
    type: "Honesty and Truthfulness",
    reason: "Leave a note explaining what happened and offer to replace the item",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce342726b746797a057bd8"),
    id: NumberInt("63"),
    question: "A friend confides in you about a mistake they made that could have serious consequences. What do you do?",
    content: {
        a: "Promise to keep their secret and avoid telling anyone about it.",
        b: "Encourage your friend to come clean about the mistake and offer support in doing so.",
        c: "Use the information to your advantage or leverage it against your friend.",
        d: "Ignore the situation and pretend you didn't hear about the mistake."
    },
    answer: "b",
    type: "Honesty and Truthfulness",
    reason: "Encourage your friend to come clean about the mistake and offer support\r\nin doing so",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce342726b746797a057bd9"),
    id: NumberInt("65"),
    question: "You accidentally scratch someone's car in a parking lot. What is the right thing to do?",
    content: {
        a: "Drive away and pretend it never happened.",
        b: "Leave a note with your contact information for the owner of the car.",
        c: "Ignore the damage and hope the owner doesn't notice.",
        d: "Blame the damage on someone else to avoid taking responsibility."
    },
    answer: "b",
    type: "Honesty and Truthfulness",
    reason: "Leave a note with your contact information\r\nfor the owner of the car.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce344926b746797a057bda"),
    id: NumberInt("66"),
    question: "Your partner asks if you've been in contact with an ex-flame, but you have. What do you say?",
    content: {
        a: "Lie and deny any contact to avoid causing conflict.",
        b: "Be honest and admit that you have been in contact but assure them it's harmless.",
        c: "Dodge the question and change the topic to something unrelated.",
        d: "Accuse your partner of being insecure and deflect the question."
    },
    answer: "b",
    type: "Honesty and Truthfulness",
    reason: "Be honest and admit that you have been in contact but assure them it's\r\nharmless.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce344926b746797a057bdb"),
    id: NumberInt("67"),
    question: "A friend asks to borrow money, promising to pay you back next week. What is your response?",
    content: {
        a: "Agree to lend the money without hesitation.",
        b: "Decline the request, citing financial constraints, even if it's not true.",
        c: "Lend the money but without any expectations of being paid back.",
        d: "Agree to lend the money but set clear terms and conditions for repayment."
    },
    answer: "d",
    type: "Honesty and Truthfulness",
    reason: "Agree to lend the money but set clear terms and conditions for\r\nrepayment.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce348026b746797a057bdc"),
    id: NumberInt("68"),
    question: "Your coworker asks you to cover their shift at work because they have a family emergency. What do you do?",
    content: {
        a: "Agree to cover the shift but forget to show up or find a replacement.",
        b: "Decline to cover the shift, citing your own busy schedule or lack of interest.",
        c: "Agree to cover the shift and ensure you are present and prepared to work as requested.",
        d: "Agree to cover the shift but leave early or slack off during your time at work."
    },
    answer: "c",
    type: "Reliability",
    reason: "Agree to cover the shift and ensure you are present and prepared to work\r\nas requested.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce348026b746797a057bdd"),
    id: NumberInt("69"),
    question: "Your neighbor asks you to water their plants while they are away on vacation. What do you do?",
    content: {
        a: "Agree to water the plants but neglect to do so or do a half-hearted job.",
        b: "Decline the request, citing your own busy schedule or lack of interest.",
        c: "Water the plants regularly and ensure they are well taken care of in your neighbor's absence.",
        d: "Agree to water the plants but forget about it until your neighbor returns."
    },
    answer: "c",
    type: "Reliability",
    reason: "Water the plants regularly and ensure they are well taken care of in your\r\nneighbor's absence.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce348026b746797a057bde"),
    id: NumberInt("70"),
    question: "Your friend asks you to babysit their child for the evening. What do you do?",
    content: {
        a: "Agree to babysit but cancel at the last minute due to other plans.",
        b: "Decline the request, citing lack of experience or discomfort with babysitting.",
        c: "Babysit the child as requested and ensure their safety and well-being throughout the evening.",
        d: "Agree to babysit but leave the child unattended for long periods while you do other things."
    },
    answer: "c",
    type: "Reliability",
    reason: "Babysit the child as requested and ensure their safety and well-being\r\nthroughout the evening.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce348026b746797a057bdf"),
    id: NumberInt("71"),
    question: "Your supervisor assigns you a task and asks for regular progress updates. What do you do?",
    content: {
        a: "Provide sporadic updates and fail to communicate any setbacks or delays.",
        b: "Ignore the request for updates and hope your supervisor doesn't follow up on the task.",
        c: "Keep your supervisor informed of your progress regularly and communicate any challenges or obstacles you encounter.",
        d: "Provide overly optimistic updates to avoid admitting any difficulties or delays."
    },
    answer: "c",
    type: "Reliability",
    reason: "Keep your supervisor informed of your progress regularly and\r\ncommunicate any challenges or obstacles you encounter",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce348026b746797a057be0"),
    id: NumberInt("72"),
    question: "Your supervisor asks you to train a new employee on company procedures. What do you do?",
    content: {
        a: "Agree to train the new employee but provide incomplete or inaccurate information.",
        b: "Decline the request, citing lack of time or interest in training others.",
        c: "Train the new employee thoroughly, ensuring they understand all necessary procedures and protocols.",
        d: "Agree to train the new employee but intentionally withhold information to maintain a competitive edge."
    },
    answer: "c",
    type: "Reliability",
    reason: "Train the new employee thoroughly, ensuring they understand all\r\nnecessary procedures and protocols.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce34e326b746797a057be2"),
    id: NumberInt("58"),
    question: "Your company is pressuring employees to meet unrealistic deadlines, leading to compromised quality and safety standards. What should you do?",
    content: {
        a: "Succumb to the pressure and prioritize meeting the deadlines regardless of the consequences.",
        b: "Voice your concerns to management and advocate for more realistic timelines.",
        c: "Ignore the issue and focus on your individual tasks to avoid conflict.",
        d: "Document instances of compromised quality and safety and report them to relevant authorities."
    },
    answer: "b",
    type: "Overt Integrity",
    reason: "Voice your concerns to management and advocate for more realistic\r\ntimelines",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce34e326b746797a057be3"),
    id: NumberInt("59"),
    question: "You are asked to withhold negative information about a product from customers to ensure sales targets are met. What should you do?",
    content: {
        a: "Comply with the request to maintain a positive relationship with your employer.",
        b: "Refuse to withhold information and inform customers truthfully about the product.",
        c: "Withhold the information but provide compensation to affected customers.",
        d: "Leak the negative information anonymously to the media to expose the company."
    },
    answer: "b",
    type: "Overt Integrity",
    reason: "Refuse to withhold information and inform customers truthfully about the\r\nproduct.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce34e326b746797a057be4"),
    id: NumberInt("60"),
    question: "You receive a job offer from a competitor company, and your current employer asks if you are considering leaving. What is your response?",
    content: {
        a: "Lie and assure your current employer that you have no plans to leave.",
        b: "Be honest and disclose that you have received a job offer but have not made a decision yet.",
        c: "Avoid the question and change the subject to a different topic.",
        d: "Fabricate a story about personal reasons for considering leaving without mentioning the job offer."
    },
    answer: "b",
    type: "Overt Integrity",
    reason: " Be honest and disclose that you have received a job offer but have not\r\nmade a decision yet",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce34e326b746797a057be5"),
    id: NumberInt("61"),
    question: "Your colleague asks you to cover for them while they take unauthorized time off work. How do you react?",
    content: {
        a: "Agree to cover for your colleague to avoid confrontation.",
        b: "Refuse to cover for your colleague and advise them to follow company policies.",
        c: "Cover for your colleague but report their unauthorized absence to management afterward.",
        d: "Join your colleague and take unauthorized time off work together."
    },
    answer: "b",
    type: "Overt Integrity",
    reason: "Refuse to cover for your colleague and advise them to follow company\r\npolicies.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce352e26b746797a057beb"),
    id: NumberInt("64"),
    question: "Your child confesses to breaking a household rule. How do you respond?",
    content: {
        a: "Punish the child harshly to ensure they don't break the rule again.",
        b: "Brush off the confession and ignore the rule violation.",
        c: "Thank the child for their honesty and discuss the consequences of their actions.",
        d: "Dismiss the confession and accuse the child of lying."
    },
    answer: "c",
    type: "Honesty and Truthfulness",
    reason: "Thank the child for their honesty and discuss the consequences of their\r\nactions",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce385326b746797a057bec"),
    id: NumberInt("73"),
    question: "Your supervisor instructs you to cut corners on a project to meet tight deadlines. What should you do?",
    content: {
        a: "Follow the supervisor's instructions and cut corners to ensure the project is completed on time",
        b: "Refuse to cut corners and explain the potential risks or consequences to your supervisor.",
        c: "Cut corners discreetly without informing your supervisor to avoid conflict.",
        d: "Seek clarification from your supervisor on the specific corners to cut and proceed accordingly."
    },
    answer: "b",
    type: "Rules Compliance",
    reason: "Refuse to cut corners and explain the potential risks or consequences to your supervisor.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce38a026b746797a057bee"),
    id: NumberInt("74"),
    question: "Your company has a policy requiring employees to report any conflicts of interest they may encounter. What should you do if you realize you have a potential conflict of interest?",
    content: {
        a: "Ignore the conflict of interest and hope it doesn't become an issue.",
        b: "Disclose the conflict of interest to your supervisor or HR department as per company policy.",
        c: "Attempt to resolve the conflict of interest on your own without involving others.",
        d: "Hide the conflict of interest to avoid repercussions or negative consequences."
    },
    answer: "b",
    type: "Rules Compliance",
    reason: "Disclose the conflict of interest to your supervisor or HR department as per company policy.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce38a026b746797a057bef"),
    id: NumberInt("75"),
    question: "Your company implements a new policy requiring employees to undergo regular training on workplace safety. What should you do if you miss a training session?",
    content: {
        a: "Ignore the missed training session and hope no one notices.",
        b: "Attend the next available training session and catch up on the missed content.",
        c: "Inform your supervisor or HR department about the missed training session and request alternative arrangements.",
        d: "Refuse to attend any training sessions, believing they are unnecessary or a waste of time."
    },
    answer: "c",
    type: "Rules Compliance",
    reason: "Inform your supervisor or HR department about the missed training session and request alternative arrangements.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce38a026b746797a057bf0"),
    id: NumberInt("76"),
    question: "Your company has a policy requiring employees to follow specific procedures for handling customer complaints. What should you do if you receive a customer complaint via email?",
    content: {
        a: "Ignore the email and hope the issue resolves itself.",
        b: "Forward the email to your supervisor without responding to the customer.",
        c: "Respond to the customer promptly and address their concerns following company procedures.",
        d: "Respond to the customer, but without following company procedures to resolve the issue quickly."
    },
    answer: "c",
    type: "Rules Compliance",
    reason: "Respond to the customer promptly and address their concerns following company procedures.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce38a026b746797a057bf1"),
    id: NumberInt("77"),
    question: "Your company has a policy requiring employees to disclose any financial interests they may have in outside businesses. What should you do if you start a side business unrelated to your job?",
    content: {
        a: "Keep the side business a secret to avoid potential conflicts with your employer.",
        b: "Disclose the side business to your supervisor or HR department as required by company policy.",
        c: "Hide the side business from your employer until it becomes profitable enough to disclose.",
        d: "Sell the side business before anyone finds out to avoid violating company policy."
    },
    answer: "b",
    type: "Rules Compliance",
    reason: "Disclose the side business to your supervisor or HR department as required by company policy.",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce39eb26b746797a057c01"),
    id: NumberInt("78"),
    question: "How would you describe your ideal work environment?",
    content: {
        a: "A competitive atmosphere where individuals strive to outperform each other",
        b: "A collaborative environment where teamwork and mutual support are valued",
        c: "A structured setting with clear hierarchies and strict rules",
        d: "A flexible workplace where employees have autonomy over their tasks and schedules."
    },
    answer: "b",
    type: "Cultural Fit",
    reason: "A collaborative environment where teamwork and mutual support are valued",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce39eb26b746797a057c02"),
    id: NumberInt("79"),
    question: "What values do you prioritize in a workplace culture?",
    content: {
        a: "Individual achievement and recognition",
        b: "Collaboration and teamwork",
        c: "Adherence to rules and procedures",
        d: "Innovation and creativity"
    },
    answer: "b",
    type: "Cultural Fit",
    reason: "Collaboration and teamwork",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce39eb26b746797a057c03"),
    id: NumberInt("80"),
    question: "How do you contribute to a positive work culture?",
    content: {
        a: "By focusing on my own tasks and responsibilities without engaging with others",
        b: "By offering support and assistance to colleagues when needed and promoting a sense of camaraderie",
        c: "By adhering strictly to company policies and procedures",
        d: "By striving to outperform others and achieve individual recognition"
    },
    answer: "b",
    type: "Cultural Fit",
    reason: "By offering support and assistance to colleagues when needed and promoting a sense of camaraderie",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce39eb26b746797a057c04"),
    id: NumberInt("81"),
    question: "How do you approach diversity and inclusion in the workplace?",
    content: {
        a: "I believe diversity initiatives are unnecessary and prefer a homogeneous work environment",
        b: "I actively promote diversity and inclusion by respecting and valuing individuals from different backgrounds",
        c: "I tolerate diversity but prefer to maintain traditional workplace norms and structures",
        d: "I avoid discussing diversity issues to prevent conflict or discomfort among colleagues"
    },
    answer: "b",
    type: "Cultural Fit",
    reason: "I actively promote diversity and inclusion by respecting and valuing individuals from different backgrounds",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce39eb26b746797a057c05"),
    id: NumberInt("82"),
    question: "How do you ensure effective communication and collaboration in a virtual or remote work environment?",
    content: {
        a: "I prefer not to engage in virtual communication and focus solely on individual tasks",
        b: "I use various communication tools and platforms to stay connected with team members and share information effectively",
        c: "I avoid virtual collaboration, believing that face-to-face interaction is essential for productivity",
        d: "I rely on others to handle virtual communication and collaboration tasks while I focus on my own responsibilities"
    },
    answer: "b",
    type: "Cultural Fit",
    reason: "I use various communication tools and platforms to stay connected with team members and share information effectively",
    question_type: NumberInt("1")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce3bf326b746797a057c08"),
    id: NumberInt("83"),
    question: "Choose the image that completes the pattern (From left to right)",
    question_image: "url",
    content: {
        a: "A",
        b: "B",
        c: "C",
        d: "D",
        e: "E"
    },
    answer: "a",
    type: "Abstract Reasoning",
    reason: "The inner shape in one frame becomes the middle shape in the next frame; the central form becomes the outer shape in the next frame, and the external form becomes the inner shape two frames later. Thus, the outer shape in the missing frame should be a square (just like the middle shape in the 5th frame), the central form should be a triangle (like the inner shape in the 5th frame), and the internal structure should be a diamond (like the outer shape in the 4th frame)",
    question_type: NumberInt("2")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce3c6326b746797a057c09"),
    id: NumberInt("84"),
    question: "Complete the sequence",
    question_image: "url",
    content: {
        a: "A",
        b: "B",
        c: "C",
        d: "D",
        e: "E"
    },
    answer: "c",
    type: "Abstract Reasoning",
    reason: "The first two rules are relatively easy to work out. The shape in the centre alternates between orange and white and the navy dot is moving around the tile corners in a clockwise direction. The real challenge is spotting that the big black square is moving around the sides and corners of the tile in alternating directions, first anti-clockwise, then clock-wise. It also increases how many spaces it moves in increments of one. First it moves anti-clockwise one position, next it moves 2 spaces clockwise, then 3 anticlockwise and so on.",
    question_type: NumberInt("2")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce3c9d26b746797a057c0a"),
    id: NumberInt("85"),
    question: "Which shape comes next in the sequence?",
    question_image: "url",
    content: {
        a: "A",
        b: "B",
        c: "C",
        d: "D",
        e: "E"
    },
    answer: "e",
    type: "Abstract Reasoning",
    reason: "The black and white dots are alternating between 5 and 7 in number. In the last picture there are 5 white dots and 7 black ones, meaning the following image should contain 7 white dots and 5 black ones.",
    question_type: NumberInt("2")
} ]);
db.getCollection("questions").insert([ {
    _id: ObjectId("67ce3cd626b746797a057c0b"),
    id: NumberInt("86"),
    question: "Complete the sequence.",
    question_image: "url",
    content: {
        a: "A",
        b: "B",
        c: "C",
        d: "D",
        e: "E"
    },
    answer: "b",
    type: "Abstract Reasoning",
    reason: "Each tile contains 2 overlapping shapes, 1 larger than the other. As the 2 shapes overlap a new, smaller shape if created inside the first large shape. The large shape in the following tile corresponds directly with this new shape that was created. When the shapes overlap the largest bisection is always within the biggest shape.",
    question_type: NumberInt("2")
} ]);
