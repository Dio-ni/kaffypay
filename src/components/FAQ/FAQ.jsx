import React from "react";
import Faq from "react-faq-component";
import { FaPlus, FaMinus } from "react-icons/fa6";
import "./FAQ.scss"; // Make sure you have your custom styles
// import { func } from "prop-types";

import { useTranslation } from 'react-i18next';




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
  const { t } = useTranslation();
  const data = {
    title: "", // We can omit the title if we handle it separately in the layout
    rows: [
      {
        title: t('questions.q1.q'),
        content: t('questions.q1.a'),
      },
      {
        title: t('questions.q2.q'),
        content: t('questions.q2.a'),
      },
      {
        title: t('questions.q3.q'),
        content: t('questions.q3.a'),
      },
    ],
  };
  return (
    <div className="FAQ ">
      <div className="container">
        <div className="FAQ_inner">
      <div className="FAQ_title">
        <h3>{t('FAQ')}</h3>
        <h1>{t('questions_answers')}</h1>
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
