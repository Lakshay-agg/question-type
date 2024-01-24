import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Questions.css';

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [questionsPerPage] = useState(7);

  useEffect(() => {
    const fetchQuestions = async () => {
      const res = await axios.get('http://localhost:8080/questions');
      setQuestions(res.data);
    };

    fetchQuestions();
  }, []);

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="questions">
      <table>
        <thead>
          <tr>
            <th>Questions</th>
            <th>Last Modified</th>
            <th>Type</th>
            <th>Tags</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentQuestions.map(question => (
            <tr key={question.id}>
              <td>{question.title}</td>
              <td>{question.lastModified}</td>
              <td>{question.type}</td>
              <td>{question.tags}</td>
              <td>
                <button>Preview</button>
                <button>...</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        questionsPerPage={questionsPerPage}
        totalQuestions={questions.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Questions;