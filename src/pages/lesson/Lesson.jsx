import { useLocation } from 'react-router-dom';
import './lesson.scss';
import { grammar } from '../../assets/data/grammar';
import { listening } from '../../assets/data/listening';
import { pleasure } from '../../assets/data/pleasure';
import { reading } from '../../assets/data/reading';
import { vocabulary } from '../../assets/data/vocabulary';
import { writing } from '../../assets/data/writing';

import emailjs from '@emailjs/browser';

// import all videos
import videoReading_1 from '../../assets/video/reading-1.mp4';

// import all audios
import audioReading_1 from '../../assets/audio/reading-1.mp3';
import { useRef, useState } from 'react';

const Lesson = () => {
  const [openModal, setOpenModal] = useState(false);
  const [score, setScore] = useState(0);

  const [matchingAns, setMatchingAns] = useState('');
  const [reOrderingAns, setReOrderingAns] = useState('');
  const [fillingGapsAns, setFillingGapsAns] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const id = parseInt(useLocation().pathname.split('/')[2]);
  const category = useLocation().pathname.split('/')[1];

  let currentLesson;
  if (category === 'grammar') {
    currentLesson = grammar.filter((lesson) => lesson.id === id)[0];
  } else if (category === 'listening') {
    currentLesson = listening.filter((lesson) => lesson.id === id)[0];
  } else if (category === 'reading') {
    currentLesson = reading.filter((lesson) => lesson.id === id)[0];
  } else if (category === 'vocabulary') {
    currentLesson = vocabulary.filter((lesson) => lesson.id === id)[0];
  } else if (category === 'writing') {
    currentLesson = writing.filter((lesson) => lesson.id === id)[0];
  } else if (category === 'pleasure') {
    currentLesson = pleasure.filter((lesson) => lesson.id === id)[0];
  }

  const handelSubmit = (e) => {
    e.preventDefault();

    console.log('anserw submited');
  };

  const handelScore = (clickedAnswer, correctAnswer, questionType) => {
    const activityPoints = 20 / currentLesson.questions.length;

    switch (questionType) {
      case 'trueFalse':
        if (clickedAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
          setScore((prev) => prev + activityPoints);
        }
        break;

      case 'multipleChoice':
        if (clickedAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
          setScore((prev) => prev + activityPoints);
        }
        break;

      case 'matching':
        const correctMatchPoint = activityPoints / correctAnswer.length;
        const matchingAnsTable = matchingAns.split(',');

        correctAnswer.forEach((ca, i) => {
          if (ca.toLowerCase() === matchingAnsTable[i].toLowerCase()) {
            setScore((prev) => prev + correctMatchPoint);
          }
        });
        break;

      case 'reOrdering':
        const correctReOrderPoint = activityPoints / correctAnswer.length;
        const reOrderAnsTable = reOrderingAns.split(',');

        correctAnswer.forEach((ca, i) => {
          if (ca.toLowerCase() === reOrderAnsTable[i].toLowerCase()) {
            setScore((prev) => prev + correctReOrderPoint);
          }
        });
        break;

      case 'fillingGaps':
        const correctFillingGapPoint = activityPoints / correctAnswer.length;
        const FillingGapAnsTable = fillingGapsAns.split(',');

        correctAnswer.forEach((ca, i) => {
          if (ca.toLowerCase() === FillingGapAnsTable[i].toLowerCase()) {
            setScore((prev) => prev + correctFillingGapPoint);
          }
        });
        break;

      default:
        break;
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_be0htqc',
        'template_alay6q4',
        form.current,
        'BBXiIwZKIHn7tJPtJ'
      )
      .then(
        (result) => {
          setName('');
          setEmail('');
          setText('');
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="lesson">
      <div className="container">
        <div className="content">
          <h1>
            {' '}
            {category === 'pleasure' ? 'Reading For Pleasure' : category}:
          </h1>
          <h2> {currentLesson.title} </h2>

          {currentLesson.hint && (
            <div className="audio">
              <h4>Instructions:</h4>
              <p>{currentLesson.hint}</p>
            </div>
          )}

          {currentLesson.video && (
            <div className="video">
              <h4>Video:</h4>
              <video src={videoReading_1} controls></video>
            </div>
          )}

          {currentLesson.audio && (
            <div className="audio">
              <h4>Audio:</h4>
              <audio src={audioReading_1} controls></audio>
            </div>
          )}

          {currentLesson.text && (
            <div className="text">
              <h4>Text:</h4>

              {currentLesson?.text.map((t, i) => (
                <p key={i}> {t} </p>
              ))}
            </div>
          )}

          {currentLesson.exp && (
            <div className="text">
              <h4>Explanation:</h4>

              <p> {currentLesson.exp} </p>
            </div>
          )}

          <hr />

          <div className="test">
            <h2>test:</h2>
            <p>
              if you have copmleat Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Harum aspernatur libero beatae quaerat ea vel.{' '}
            </p>

            <div className="questionsContainer">
              {currentLesson.questions.map((ques, i) => {
                return (
                  <div className="questionsItem trueFalse" key={i}>
                    {ques.type === 'trueFalse' ? (
                      <div className="trueFalse">
                        <h3>
                          Activity{' '}
                          {i === 0
                            ? 'One'
                            : i === 1
                            ? 'Two'
                            : i === 2
                            ? 'Three'
                            : i === 3
                            ? 'Four'
                            : 'Five'}
                          :
                        </h3>
                        <div className="question">{ques.question}</div>
                        <div className="answers">
                          {ques.answers.map((a, i) => (
                            <div
                              key={i}
                              className="answer"
                              onClick={() =>
                                handelScore(a, ques.correctAnswer, 'trueFalse')
                              }
                            >
                              {a}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : ques.type === 'multipleChoice' ? (
                      <div className="questionsItem multipleChoice">
                        <h3>
                          Activity
                          {i === 0
                            ? 'One'
                            : i === 1
                            ? 'Two'
                            : i === 2
                            ? 'Three'
                            : i === 3
                            ? 'Four'
                            : 'Five'}
                          :
                        </h3>
                        <div className="question">{ques.question}</div>
                        <div className="answers">
                          {ques.answers.map((a, i) => (
                            <div
                              key={i}
                              className="answer"
                              onClick={() =>
                                handelScore(
                                  a,
                                  ques.correctAnswer,
                                  'multipleChoice'
                                )
                              }
                            >
                              {a}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : ques.type === 'matching' ? (
                      <div className="questionsItem matching">
                        <h3>
                          Activity{' '}
                          {i === 0
                            ? 'One'
                            : i === 1
                            ? 'Two'
                            : i === 2
                            ? 'Three'
                            : i === 3
                            ? 'Four'
                            : 'Five'}
                          :
                        </h3>
                        <div className="question">{ques.question}</div>
                        <div className="answers">
                          <div className="left">
                            {ques.answers.g1.map((a, i) => (
                              <div key={i} className="answer">
                                {a}
                              </div>
                            ))}
                          </div>
                          <div className="right">
                            {ques.answers.g2.map((a, i) => (
                              <div key={i} className="answer">
                                {a}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="matchingForm">
                          <form onSubmit={handelSubmit}>
                            <label htmlFor="matchingAns">Your answer:</label>
                            <input
                              type="text"
                              className="matchingAns"
                              placeholder="Enter the correct match here like: 1-e, 2-a ...."
                              value={matchingAns}
                              onChange={(e) => setMatchingAns(e.target.value)}
                            />
                            <button
                              type="submit"
                              onClick={() =>
                                handelScore(
                                  'matching',
                                  ques.correctAnswer,
                                  'matching'
                                )
                              }
                            >
                              send
                            </button>
                          </form>
                        </div>
                      </div>
                    ) : ques.type === 'reOrdering' ? (
                      <div className="questionsItem reOrdering">
                        <h3>
                          Activity{' '}
                          {i === 0
                            ? 'One'
                            : i === 1
                            ? 'Two'
                            : i === 2
                            ? 'Three'
                            : i === 3
                            ? 'Four'
                            : 'Five'}
                          :
                        </h3>
                        <div className="question">{ques.question}</div>
                        <div className="answers">
                          {ques.answers.map((a, i) => (
                            <div key={i} className="answer">
                              {a}
                            </div>
                          ))}
                        </div>

                        <div className="reOrderingForm">
                          <form onSubmit={handelSubmit}>
                            <label htmlFor="reOrderingAns">Your answer:</label>
                            <input
                              type="text"
                              className="reOrderingAns"
                              placeholder="Enter the right order here like: 1,6,4,3 ...."
                              value={reOrderingAns}
                              onChange={(e) => setReOrderingAns(e.target.value)}
                            />
                            <button
                              type="submit"
                              onClick={() =>
                                handelScore(
                                  'reOrdering',
                                  ques.correctAnswer,
                                  'reOrdering'
                                )
                              }
                            >
                              send
                            </button>
                          </form>
                        </div>
                      </div>
                    ) : (
                      <div className="questionsItem fillingGaps">
                        <h3>
                          Activity{' '}
                          {i === 0
                            ? 'One'
                            : i === 1
                            ? 'Two'
                            : i === 2
                            ? 'Three'
                            : i === 3
                            ? 'Four'
                            : 'Five'}
                          :
                        </h3>
                        <div className="question">{ques.question}</div>
                        <div className="answers">
                          {ques.answers.map((a, i) => (
                            <div key={i} className="answer">
                              {a}
                            </div>
                          ))}
                        </div>

                        <div className="fillingGapsForm">
                          <form onSubmit={handelSubmit}>
                            <label htmlFor="fillingGapsAns">Your answer:</label>
                            <input
                              type="text"
                              className="fillingGapsAns"
                              placeholder="Enter the gaps with the same order here like: ghfhg,ghgh ...."
                              value={fillingGapsAns}
                              onChange={(e) =>
                                setFillingGapsAns(e.target.value)
                              }
                            />
                            <button
                              type="submit"
                              onClick={() =>
                                handelScore(
                                  'fillingGaps',
                                  ques.correctAnswer,
                                  'fillingGaps'
                                )
                              }
                            >
                              send
                            </button>
                          </form>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {currentLesson.cat === 'writing' && (
              <div className="email">
                <form ref={form} onSubmit={sendEmail}>
                  <h2>Your Text:</h2>
                  <div className="info">
                    <input
                      type="text"
                      name="from_name"
                      placeholder="Your Name ..."
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      type="email"
                      name="from_email"
                      placeholder="Your Email ..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <textarea
                    name="text"
                    cols="30"
                    rows="10"
                    placeholder="send text to email teacher here ..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  ></textarea>
                  <button>send</button>
                </form>
              </div>
            )}

            <div className="resultContainer">
              <button className="check" onClick={() => setOpenModal(true)}>
                Result
              </button>

              {openModal && (
                <div className="result">
                  <div className="content">
                    <div
                      className="close"
                      onClick={() => {
                        setOpenModal(false);
                        window.location.reload();
                      }}
                    >
                      X
                    </div>
                    <h2>Result:</h2>
                    <h4>
                      You got: <span> {score.toFixed(2)} /20</span>{' '}
                    </h4>
                    <h5 className={score < 12 ? `fail` : `success`}>
                      {' '}
                      {score < 10
                        ? 'Failing'
                        : score >= 10 && score < 12
                        ? 'Below Average'
                        : score >= 12 && score < 14
                        ? 'Average'
                        : score >= 14 && score < 16
                        ? 'Very Good'
                        : 'Excellent'}
                    </h5>
                    <h6 className={score < 12 ? `fail` : `success`}>
                      {score < 12
                        ? `Pleas study again this lesson.`
                        : `You can pass to the next lesson.`}
                    </h6>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
