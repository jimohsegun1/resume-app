import React from 'react';

const EducationItem = ({ institution, degree, additionalInfo }) => {
  return (
    <div className="mb-4">
      <h3 className="font-bold">{institution}</h3>
      <p className="text-gray-600">{degree} | {additionalInfo}</p>
    </div>
  );
};

export default EducationItem;
