import React from 'react';
import ResumeHeader from './ResumeHeader';
import ResumeSection from './ResumeSection';
import ExperienceItem from './ExperienceItem';
import EducationItem from './EducationItem';
import SkillsItem from './SkillsItem';

const Resume = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <ResumeHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <ResumeSection title="Professional Summary">
            <p className="text-gray-700">
              A skilled Frontend MERN stack developer and Machine Learning data annotator with a solid background in creating scalable web applications. I am a team player with good PC skills and the ability to communicate confidently at all levels. Additionally, I have a strong background in general administration. I am proficient in JavaScript, MongoDB, Express.js, React.js, Next.js, TypeScript, Node.js, and Python, with a proven track record of delivering robust and user-friendly solutions.
            </p>
          </ResumeSection>

          <ResumeSection title="Experience">
            <ExperienceItem title="Machine Learning Data Annotation Specialist" company="Awarri AI" date="2023 - Present">
              <li>Correctly identify, analyze, and collect relevant data from images and videos and provide feedback to further develop the annotation of datasets.</li>
              <li>Gain in-depth knowledge of using image and data annotation software tools.</li>
              <li>Communicate effectively with the team supervisor and fellow team members.</li>
            </ExperienceItem>
            <ExperienceItem title="Admin & Loan Officer" company="Storipod" date="2024">
              <li>Collaborate with back-end developers and web designers to improve usability.</li>
              <li>Get feedback from and build solutions for users and customers.</li>
              <li>Draft correspondence such as emails and letters.</li>
            </ExperienceItem>
            <ExperienceItem title="Frontend Developer" company="Tenportion Enterprise" date="2022 - 2023">
              <li>Verifying, identification, activating customers, and responding to changing needs and support via phone calls, email, and online chats.</li>
            </ExperienceItem>
            <ExperienceItem title="Account Officer" company="OLX Nigeria" date="2016 - 2017">
              <li>Managed customer accounts and resolved inquiries efficiently.</li>
            </ExperienceItem>
          </ResumeSection>

          <ResumeSection title="Education">
            <EducationItem institution="Rufus Giwa Polytechnic" degree="H.N.D in Business Administration and Management" additionalInfo="Upper Credit" />
            <EducationItem institution="National Youth Service Corps" degree="Divine Purpose Academy" additionalInfo="Mathematics and Business Studies Teacher | 2020" />
          </ResumeSection>
        </div>

        <div>
          <ResumeSection title="Skills and Abilities">
            <SkillsItem skills={[
              "MERN Stack Development (MongoDB, Express, React, Node.js)",
              "JavaScript, Python, Jupyter Notebook",
              "Tech-savvy with MS Office applications and email programs",
              "Active listening and good communication skills",
              "Time management and organizational skills",
              "General administrative skills"
            ]} />
          </ResumeSection>

          <ResumeSection title="Certifications">
            <SkillsItem skills={[
              "The Fullstack Web Development Bootcamp - MERN Stack, Udemy | 2023",
              "Andela React Learning Programme | 2023",
              "Machine Learning Zoomcamp | 2024 (Ongoing)",
              "Jobberman Soft-Skills Training",
              "Google Digital Skills for Africa | Google",
              "Excel Essential Training | LinkedIn"
            ]} />
          </ResumeSection>

          <div className="mt-8 text-center">
            <p className="text-gray-600">GitHub: <a href="https://github.com/jimohsegun1" className="text-blue-500">github.com/jimohsegun1</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
