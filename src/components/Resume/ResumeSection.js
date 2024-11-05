import React from 'react';

const ResumeSection = ({ title, children }) => {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      {children}
    </section>
  );
};

export default ResumeSection;
