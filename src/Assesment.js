import React, { useState } from 'react';
import StandardTest from './StandardTest'; 
import QuestionBank from './QuestionBank';
import SelectQuesType from './SelectQuesType';
// import NewQuestionModal from './NewQuestionModal'; // Import the new component
import './Assesment.css';

const Assesment = () => {
  const [view, setView] = useState('StandardTest');
  const [isModalOpen, setModalOpen] = useState(false); // State to control modal visibility

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="assesment">
      <div className="topSection">
        <h1 className="heading">Assessment</h1>
        <div className="dynamicSections">
          <div className="standard-test" onClick={() => setView('StandardTest')}>Standard Test</div>
          <div className="question-bank" onClick={() => setView('QuestionBank')}>Question Bank</div>
        </div>
        <hr />
        <div className="buttons">
          <button className="import-button">Import</button>
          <button className="add-question-button" onClick={openModal}>New Question</button>
        </div>
      </div>
      {view === 'StandardTest' && <StandardTest />}
      {view === 'QuestionBank' && <QuestionBank />}
      {view === 'SelectQuesType' && <SelectQuesType />}
      
      {/* Render the modal conditionally */}
      {isModalOpen && <SelectQuesType closeModal={closeModal} />}
    </div>
  );
};

export default Assesment;
