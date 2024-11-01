import React from "react";
import Faq from "react-faq-component";
import { FaPlus, FaMinus } from "react-icons/fa6";
import "./FAQ.scss"; // Make sure you have your custom styles
// import { func } from "prop-types";

const data = {
  title: "", // We can omit the title if we handle it separately in the layout
  rows: [
    {
      title: "Что такое Alaqan?",
      content: `Alaqan — это точная и безопасная биометрия идентификации по рисунку вен ладони.`,
    },
    {
      title: "Что будет с моей биометрией?",
      content: `Alaqan не хранит биометрию ладони, при регистрации она надежно зашифровывается в цифровой код и хранится на защищенных серверах в Казахстане.`,
    },
    {
      title: "Что если отрубить руку?",
      content: `Если попытаться отсканировать отрубленную руку, система не сможет распознать биометрические данные, так как для работы требуется активный и живой кровоток.`,
    },
  ],
};

const styles = {
  titleTextColor: "black",
  rowTitleColor: "black",
  rowContentColor: "grey",
  arrowColor: "blue",
  rowContentPaddingTop:"20px",
};

const config = {
  animate: true,
  arrowIcon: "V", // Customize the arrow icon
  tabFocus: true,
  expandIcon: <FaPlus/>, // Icon when the FAQ is collapsed
  collapseIcon:<FaMinus/> , // Icon when the FAQ is expanded
  customRowClassName: "question", 
};

function FAQ  () {
  return (
    <div className="FAQ ">
      <div className="container">
        <div className="FAQ_inner">
      <div className="FAQ_title">
        <h3>FAQ</h3>
        <h1>Вопросы и ответы</h1>
      </div>
      <div className="questions">
        <Faq 
          data={data}
          styles={styles}
          config={config}
          // className="faq-component" // Custom class for the FAQ container
        />
      </div>
      </div>
      </div>
      </div>
  );
};

export default FAQ;
