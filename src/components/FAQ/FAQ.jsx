import React, { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa6";
import "./FAQ.scss";

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null); // State to track which question is expanded

  const toggleQuestion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle the question
  };

  return (
    <section className="FAQ wrapper">
      <div className="FAQ_title">
        <h3>FAQ</h3>
        <h1>Вопросы и ответы</h1>
      </div>
      <div className="questions">
        {[ // Array of question and answer objects
          {
            question: "Что такое Alaqan?",
            answer: "Alaqan — это точная и безопасная биометрия идентификации по рисунку вен ладони."
          },
          {
            question: "Что будет с моей биометрией?",
            answer: "Alaqan не хранит биометрию ладони, при регистрации она надежно зашифровывается в цифровой код и хранится на защищенных серверах в Казахстане."
          },
          {
            question: "Что если отрубить руку?",
            answer: "Если попытаться отсканировать отрубленную руку, система не сможет распознать биометрические данные, так как для работы требуется активный и живой кровоток."
          }
        ].map((item, index) => (
          <div className="question" key={index} onClick={() => toggleQuestion(index)}>
            <div className="question_text" >
              <h3>{item.question}</h3>
              <span  >
                <FaMinus />
                <FaPlus
                style={{
                    transition: "opacity 0.4s ease", 
                    opacity: expandedIndex === index ? 0 : 1 
                }} 
                />
              </span>
            </div>
            <p style={{
               maxHeight: expandedIndex === index ? '200px' : '0',
               overflow: 'hidden',
               transition: 'max-height 0.4s ease, opacity 0.5s ease, padding-top 0.5s ease', // Added padding transition
               opacity: expandedIndex === index ? 1 : 0,
               paddingTop: expandedIndex === index ? '15px' : '0',
            }}>
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ;
