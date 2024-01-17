import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SelectQuesType.css';

const SelectQuesType = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  }

  return (
    <div className="select-ques-type">
      <h1>Heading</h1>
      <h2>Subheading</h2>
      <div className="grid">
        <div onClick={() => handleClick('/component1')}>Grid 1</div>
        <div onClick={() => handleClick('/component2')}>Grid 2</div>
        <div>Grid 3</div>
        <div>Grid 4</div>
        <div>Grid 5</div>
        <div>Grid 6</div>
        <div>Grid 7</div>
        <div>Grid 8</div>
      </div>
    </div>
  );
}

export default SelectQuesType;