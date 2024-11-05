import React from 'react';

const SkillsItem = ({ skills }) => {
  return (
    <ul className="list-disc list-inside text-gray-700">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
};

export default SkillsItem;
