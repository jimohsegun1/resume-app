import React from 'react';

const ExperienceItem = ({ title, company, date, children }) => {
  return (
    <div className="mb-4">
      <h3 className="font-bold">{title}</h3>
      <p className="text-gray-600">{company} | {date}</p>
      <ul className="list-disc list-inside text-gray-700">
        {React.Children.map(children, child => (
          <li>{child}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
