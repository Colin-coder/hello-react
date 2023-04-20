import React, { useState } from "react";

const FAQ = () => {
  const faqList = [
    { question: "What limitations are there in the FREE version?", answer: "Currently, the free version only allows partial functionality such as reading web pages and sending up to 15 messages every three hours. There are no such limitations in the paid version." },
    { question: "What are the limitations of the PREMIUM version?", answer: "The paid version has no limit on the number of messages, but there is a temporary limit when parsing documents that should not exceed 3MB in size. If you have special needs, you can contact us for customization." },
    { question: "What is <Bot for you> of the PREMIUM version?", answer: "To ask questions, you don't have to mention the bot in the channel. You can directly communicate with the bot on Slack." },
    { question: "Can I install the bot in my slack workspace?", answer: "We will support this feature in the future." },
    { question: "Do you consider supporting other platforms?", answer: "We will support Discord and Telegram in the future." }
  ];

  const [showAnswer, setShowAnswer] = useState("");

  const handleQuestionClick = (answer) => {
    if (showAnswer === answer) {
      setShowAnswer("");
    } else {
      setShowAnswer(answer);
    }
  };

  return (
    <section className="bg-white py-10 px-5">
      <h2 className="text-4xl mb-4 text-center font-black">Questions & Answers</h2>
      <div className="container mx-auto max-w-lg">
      <ul>
        {faqList.map((item, index) => (
          <li key={index} className="mb-6">
            <div
              onClick={() => handleQuestionClick(item.answer)}
              className="rounded-lg shadow-md bg-red-50 p-5 cursor-pointer transition-all duration-300 hover:bg-red-100"
            >
              <p className="text-xl font-medium">{item.question}</p>
              {showAnswer === item.answer && (
                <p className="mt-4">{item.answer}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
      </div>
    </section>
  );
};

export default FAQ;
