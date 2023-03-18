export const reading = [
  {
    id: 1,
    title: 'Sequence 01: Itineraries: My Extraordinary Trip “part 01”',
    cat: 'reading',
    audioUrl: 'audioReading_1',
    videoUrl:
      'https://mega.nz/embed/Ss1CVZRS#vEBxJWv_1PjHbn47h9dejNhnZrx3DBYB_sekCtSuYfA',
    test: 'r-t-1',
    hint: 'Before reading the text, what do you think it is going to be about?, \n  what are the hints you relied on to guess?, \n  Read the text quickly and try to get the general idea of the text.',
    text: [
      'Our school organized a seven-days trip around Algeria for excellent learners. The departure was from our city; we all gathered near the school with our parents waiting for the couch, but before heading there, I made sure that all the necessary items (my mobile phone, money, my food, my clothes …etc) were all well-packed. Our final destination was Tlemcen with a stop-over for 2 nights in the capital city, Algiers. ',
      ' First, we travelled to Algiers. On the first day, we went on a sightseeing tour around the city. We visited Makam Elchahid and the National Museum of Moudjahid. The latter is a masterpiece located directly beneath Makam Chahid; it aims to collect, preserve and display objects and memories of the struggle against the French colonialism. At the entrance, the guards asked us to turn off our mobile-phones; therefore, I couldn’t take any pictures of that wonderful place. On the second day, we headed to another tourist attraction which was Elhamma Garden also known as “The Botanical Garden”. At first sight, I felt like “Alice in Wonderland”; it’s so huge and there are hundreds of different plants and high trees. ',
    ],
    exp: 'a coach: is a type of bus for travelling long distances',
    questions: [
      // true false
      {
        type: 'trueFalse',
        list: [
          {
            question: '1.	They had a one weak trip. ',
            answers: ['True', 'False'],
            correctAnswer: 'True',
          },
          {
            question: '2.	They didn’t take any luggage with them. ',
            answers: ['True', 'False'],
            correctAnswer: 'False',
          },
          {
            question:
              '3.	They visited Makam Chahid and El Hamma Garden and the National Museum.',
            answers: ['True', 'False'],
            correctAnswer: 'True',
          },
          {
            question:
              '4.	The pupils were allowed to take pictures in the museum. ',
            answers: ['True', 'False'],
            correctAnswer: 'False',
          },
        ],
      },

      //multiple choice
      {
        type: 'multipleChoice',
        list: [
          {
            question: '•	This trip was organized by: ',
            answers: [
              '1- The school',
              '2- an organization ',
              '3- The parents ',
              '4- The sports club',
            ],
            correctAnswer: '1- The school',
          },
          {
            question: '•	The learners gathered near the school: ',
            answers: [
              '1- on their own',
              '2- with their teachers ',
              '3- with their parents',
              '4- with their neighbours ',
            ],
            correctAnswer: '3- with their parents',
          },
          {
            question: '•	The cities they visited are: ',
            answers: [
              '1- Tlemcen then Algiers ',
              '2- Tlemcen only  ',
              '3- Algiers only',
              '4- Algiers then Tlemcen',
            ],
            correctAnswer: '4- Algiers then Tlemcen',
          },
          {
            question: '•	The National Museum is: ',
            answers: [
              '1- a collection of artistic famous paintings.',
              '2- a collection of rare stones ',
              '3- a collection of objects and memories related to the colonialism',
            ],
            correctAnswer:
              '3- a collection of objects and memories related to the colonialism',
          },
        ],
      },

      //matching
      {
        type: 'matching',
        question:
          'read the text again and match each word with its definition ',
        answers: {
          g1: [
            '1-	The departure',
            '2- Final Destination ',
            '3- Garden',
            '4-	tourist attraction',
          ],
          g2: [
            'a- a place full of plants and trees ',
            'b- a place that you start your trip from',
            'c- a place people like to visit during holidays because it is beautiful and famous.',
            'd- a place you visit at the end of the trip ',
          ],
        },

        correctAnswer: ['1-b', '2-d', '3-a', '4-c'],
      },

      //re-ordering
      {
        type: 'reOrdering',
        question:
          'Reorder the following ideas based on the their occurrence on the text',
        answers: [
          '1- They visited Alhamma Garden.',
          '2- They Started their trip from their city.',
          '3- They packed their luggage.',
          '4-They travelled to Algiers.',
        ],
        correctAnswer: ['3', '2', '4', '1'],
      },

      //filling the gaps
      {
        type: 'fillingGaps',
        question:
          ' Read the text again and fill in the gaps with “a.National Museum/ b.Algiers/ c.Elhamma Garden/ d.the pupils',
        answers: [
          ' .	 “we” refers to ----- ./ .	“The latter” refers to the ------ ./ .	“it” refers to ----- ./.	“the city” refers to    ----- .',
        ],
        correctAnswer: ['d', 'a', 'c', 'b'],
      },
    ],
  },

  //second
  {
    id: 2,
    title: 'Inside the Battle of Algiers: Memoir of A Woman Freedom Fighter',
    cat: 'reading',
    audioUrl: 'audioReading_1',
    videoUrl:
      'https://mega.nz/embed/Ss1CVZRS#vEBxJWv_1PjHbn47h9dejNhnZrx3DBYB_sekCtSuYfA',
    test: 'r-t-2',
    hint: '',
    text: [
      'Zohra Drif, the legendary freedom fighter, was born on a farm in Tiaret. She was a little over University when she joined a group of the (FLN) revolutionaries and placed a bomb in the 19 when the Algerian Revolution broke out. Two years later, she was studying law at Algiers French Milk Bar café. The following year, Mrs Drif was arrested and condemned to 20 years of hard labour for "terrorism". She spent five years in prison before she was finally released upon independence. Here is an extract from her book.',
      "For nearly five years, I was the only Arab girl at the French primary school, with my big long braids and long skirts reaching to my ankles, among the little European I girls with their short hair and their little dresses above the knee. The difference between me and these girls even extended to the foods we ate at ten o'clock in the playground: they pulled out a brioche, a croissant, sometimes a chocolate croissant or a baguette with jam. As for me, I had my Algerian treats-maqrouta, mbardja, msemna or matlou with our family's honey.",
      "I completed my primary-school years as an excellent student, finishing tied for first place in my class with my classmate Roselyne Garcia. I considered Roselyne a dear friend until we reached the sixth-grade entrance exam, a major test that marked the passage from childhood to adolescence. We were in school the day the results were announced. I, Zohra Drif, daughter of the Arab qadi, managed to rank among the first students in the region, whereas my best friend Roselyne, the daughter of Tissemsilt's baker and an excellent student, had failed. I was as shocked as the rest of the school at Roselyne's results.",
      `When we parted to go home, I told her, still crying, "You know, Roselyne, everybody knows you're an excellent student. It was an accident. Next year, you'll get it." Roselyne replied, "But Zohra, it's not that. You don't understand a thing. How do I explain to my mother that you passed and I didn't? She will never understand that Zohra the Arab succeeded and I failed." I was unsure whether I had misunderstood or understood all too well. Soon my tears dried up. I looked her in the eye and spat back, "Well, you'll just have to explain to your mother that it was the Arabs like Zohra who invented mathematics."`,
      `In a few short seconds, I lost my best friend and my innocence. I suddenly realised that all my excellent marks, all my efforts to learn French language and culture and all my sincere feelings of friendship for Roselyne would never make me the equal of Roselyne, the European. With one simple sentence, she put me in my place as
      the "Arab".`,
      `Adapted from: "Inside the Battle of Algiers: Memoir of A Woman Freedom Fighter" by Zohra Drif, Just World Books, USA, 2017
      `,
    ],
    exp: '',
    questions: [
      // true false
      {
        type: 'trueFalse',
        list: [
          {
            question:
              '1. Zohra Dhrif realised that she can never be equal to the French girls after the reaction of her friend Rosalyne',
            answers: ['True', 'False'],
            correctAnswer: 'True',
          },
          {
            question: '2. Zohra Dhrif didn’t study at a French School. ',
            answers: ['True', 'False'],
            correctAnswer: 'False',
          },
          {
            question: '3. Zohra Dhrif used to eat croissant  at breakfast.  ',
            answers: ['True', 'False'],
            correctAnswer: 'False',
          },
          {
            question: '4.	Zohra Dhrif didn’t fail at her 6th grade exam',
            answers: ['True', 'False'],
            correctAnswer: 'True',
          },
        ],
      },

      //multiple choice
      {
        type: 'multipleChoice',
        list: [
          {
            question: '• the text is about: ',
            answers: [
              '1- a.	The primary school memories of Zohra Drif.',
              '2- The post-independence life of Zohra Dhrif',
            ],
            correctAnswer: '2- The post-independence life of Zohra Dhrif',
          },
          {
            question: '•	The type of document is:',
            answers: ['1- an excerpt from a play', '2- excerpt from a memoir'],
            correctAnswer: '2- excerpt from a memoir',
          },
          {
            question: '•  Zohrra Dhrif studied………………. at the university: ',
            answers: ['1- law', '2- business'],
            correctAnswer: '1- law',
          },
        ],
      },

      //matching
      {
        type: 'matching',
        question:
          'Match each paragraph in the text with the statement that summarises it.',
        answers: {
          g1: [
            '1-	paragraph 01',
            '2- paragraph 02',
            '3- paragraph 03',
            '4-	paragraph 04',
          ],
          g2: [
            'a- Zohra tries to cheer up her friend Rosalyne after her failure in the sixth grade.',
            'b- Zohra realises that the French can never accept an “Arab” as their equal.',
            'c- Zohra notices for the first time her difference with her European schoolmates.',
            'd- Zohra passes her 6th grade entrance exam, whereas her friend Roselyne fails.',
          ],
        },

        correctAnswer: ['1-c', '2-d', '3-a', '4-b'],
      },

      //re-ordering
      // {
      //   type: 'reOrdering',
      //   question:
      //     'Reorder the following ideas based on the their occurrence on the text',
      //   answers: [
      //     '1- They visited Alhamma Garden.',
      //     '2- They Started their trip from their city.',
      //     '3- They packed their luggage.',
      //     '4-They travelled to Algiers.',
      //   ],
      //   correctAnswer: ['3', '2', '4', '1'],
      // },

      //filling the gaps
      // {
      //   type: 'fillingGaps',
      //   question:
      //     ' Read the text again and fill in the gaps with “a.National Museum/ b.Algiers/ c.Elhamma Garden/ d.the pupils',
      //   answers: [
      //     ' .	 “we” refers to ----- ./ .	“The latter” refers to the ------ ./ .	“it” refers to ----- ./.	“the city” refers to    ----- .',
      //   ],
      //   correctAnswer: ['d', 'a', 'c', 'b'],
      // },
    ],
  },

  // thired
  {
    id: 3,
    title: 'The Worst Experience in my Life. part 01',
    cat: 'reading',
    audioUrl: 'audioReading_1',
    videoUrl:
      'https://mega.nz/embed/Ss1CVZRS#vEBxJWv_1PjHbn47h9dejNhnZrx3DBYB_sekCtSuYfA',
    test: 'r-t-3',
    hint: 'After answering each activity, I write down the hints that helped me to predict the coming events.',
    text: [
      `Written by Ceyanne, `,
      ` I remember I was about 4 years old when my aunt brought a dog home and one day the dog completely turned on me and ripped my face. I started to heal before I began school, but I still have visible scars on my face. `,
      `During that time, I’ve never felt different; I had a very normal life and my family were very supportive. However, and after 2 years, …`,
    ],
    exp: 'sto heal: to get better, visible: clear',
    questions: [
      // true false
      {
        type: 'trueFalse',
        list: [
          {
            question: '1.	Ceyanne was attacked by a dog.',
            answers: ['True', 'False'],
            correctAnswer: 'True',
          },
          {
            question: '2.	All Ceyann’s scars were healed. ',
            answers: ['True', 'False'],
            correctAnswer: 'False',
          },
        ],
      },

      //multiple choice
      {
        type: 'multipleChoice',
        list: [
          {
            question:
              '•	After being attacked by the dog what do you think the next Ceyonne’s worst life experience is going to be about? ',
            answers: [
              '1- getting bullied',
              '2- talking about how people treated her very nicely.',
              '3- getting more health problems',
            ],
            correctAnswer: '1- getting bullied',
          },
          {
            question:
              '•	Where do you think that this bad life experience happened?',
            answers: [
              '1- 1.	At home',
              '2- At the primary school',
              '3- At the street',
            ],
            correctAnswer: '2- At the primary school',
          },
        ],
      },
    ],
  },

  //fourth
  {
    id: 4,
    title: 'The Worst Experience in my Life. part 02',
    cat: 'reading',
    audioUrl: 'audioReading_1',
    videoUrl:
      'https://mega.nz/embed/Ss1CVZRS#vEBxJWv_1PjHbn47h9dejNhnZrx3DBYB_sekCtSuYfA',
    test: 'r-t-4',
    hint: 'After answering each activity, I write down the hints that helped me to predict the coming events',
    text: [
      `I’ve started studying at primary school. At first, I’d noticed the other pupils were staring at me all the time. But then, and about my 2nd month at the school, I started to get called names like scare-face, ugly, hideous, stupid … etc. I thought they would stop, yet I was wrong. `,
      `Throughout …`,
    ],
    exp: 'a coach: is a type of bus for travelling long distances',
    questions: [
      // true false
      {
        type: 'trueFalse',
        list: [
          {
            question: '1. Ceyanne got bullied at the primary school ',
            answers: ['True', 'False'],
            correctAnswer: 'True',
          },
          {
            question: '2. She was bullied for 5 years',
            answers: ['True', 'False'],
            correctAnswer: 'True',
          },
        ],
      },

      {
        type: 'trueFalse',
        list: [
          {
            question: '1.She asked for help during primary school.  ',
            answers: ['True', 'False'],
            correctAnswer: 'False',
          },
          {
            question:
              '2. She has started feeling better after primary school. ',
            answers: ['True', 'False'],
            correctAnswer: 'False',
          },
        ],
      },

      //multiple choice
      {
        type: 'multipleChoice',
        list: [
          {
            question: '•	how do you think this would affect her personality?',
            answers: [
              '1- she would be stronger',
              '2- she would lose self-confidence.',
              '3- she would be aggressive.',
            ],
            correctAnswer: '2- she would lose self-confidence.',
          },
          {
            question: '•	what do you think she would do?',
            answers: [
              '1.	she asked for her father’s help.',
              '2- she decided to consult a therapist.',
              '3- she asked for her classmates help.',
            ],
            correctAnswer: '1.	she asked for her father’s help.',
          },
        ],
      },

      //matching
      {
        type: 'matching',
        question:
          'read the text again and match each word with its definition ',
        answers: {
          g1: [
            '1-	The departure',
            '2- Final Destination ',
            '3- Garden',
            '4-	tourist attraction',
          ],
          g2: [
            'a- a place full of plants and trees ',
            'b- a place that you start your trip from',
            'c- a place people like to visit during holidays because it is beautiful and famous.',
            'd- a place you visit at the end of the trip ',
          ],
        },

        correctAnswer: ['1-b', '2-d', '3-a', '4-c'],
      },

      //re-ordering
      {
        type: 'reOrdering',
        question:
          'Reorder the following ideas based on the their occurrence on the text',
        answers: [
          '1- They visited Alhamma Garden.',
          '2- They Started their trip from their city.',
          '3- They packed their luggage.',
          '4-They travelled to Algiers.',
        ],
        correctAnswer: ['3', '2', '4', '1'],
      },

      //filling the gaps
      {
        type: 'fillingGaps',
        question:
          ' Read the text again and fill in the gaps with “a.National Museum/ b.Algiers/ c.Elhamma Garden/ d.the pupils',
        answers: [
          ' .	 “we” refers to ----- ./ .	“The latter” refers to the ------ ./ .	“it” refers to ----- ./.	“the city” refers to    ----- .',
        ],
        correctAnswer: ['d', 'a', 'c', 'b'],
      },
    ],
  },

  //fifth
  {
    id: 5,
    title: 'The Worst Experience in my Life. part 03',
    cat: 'reading',
    audioUrl: 'audioReading_5',
    videoUrl:
      'https://mega.nz/embed/Ss1CVZRS#vEBxJWv_1PjHbn47h9dejNhnZrx3DBYB_sekCtSuYfA',
    test: 'r-t-5',
    hint: '',
    text: [
      `Throughout the whole 5 years at the elementary school, I’d never told anyone because I thought nobody would understand it. And after all these years, I have started losing my self-confidence. I saw all these beautiful girls I was going to school with and here I was, a four eyed scared faced girl that no one noticed. When people would tell me, I would be prettier If I didn’t have any scars on my face. I would try so hard to brush it off, but I just ended up crying and all they said was “I’m just saying”.`,
      `when I couldn’t hold it any longer, I cried to my father telling him everything I was going through and he told me “You’re the most beautiful girl I’ve ever seen. Trust God sweetheart and I promise everything will be fine. God is always with us; he endures with us what we go through; when you feel lonely, he will be there guiding us showing us that there’s more to beauty than just a good-looking face.`,
      `I felt pleased talking and listening to my father, so please don’t wait too long to tell someone about what you’re going through. You may think there’s nobody who will listen to you, but I promise you there are more people who share your sufferance. Reach out talk to someone and everything will be okay.`,
      `Adapted from:  https://www.noplace4hate.org/real-bullying-stories/`,
    ],
    exp: '',
    questions: [
      // true false
      {
        type: 'trueFalse',
        list: [
          {
            question: '1.	Ceyanne started comparing herself to others.',
            answers: ['True', 'False'],
            correctAnswer: 'True',
          },
          {
            question: '2. Her classmates words made her strong.',
            answers: ['True', 'False'],
            correctAnswer: 'False',
          },
          {
            question: '3. Ceyanne’s father helped her to feel better.',
            answers: ['True', 'False'],
            correctAnswer: 'True',
          },
        ],
      },
    ],
  },
];
