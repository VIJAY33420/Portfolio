import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Science</h4>
                <h5>Computer Science Student</h5>
              </div>
              <h3>EDUCATION</h3>
            </div>
            <p>
              <strong>2nd Semester (Current):</strong> C++, React.js, Tailwind CSS, MongoDB <br />
              <strong>1st Semester:</strong> C Programming, HTML, CSS, JavaScript Fundamentals, Git & GitHub
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Currently Learning</h4>
                <h5>Goal: Professional Frontend Developer</h5>
              </div>
              <h3>FUTURE</h3>
            </div>
            <p>
              Advanced React, Frontend Development, and Modern UI/UX Design. 
              My goal is to build impactful software products that solve real-world problems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Core Strengths</h4>
                <h5>Fast learner & Problem solver</h5>
              </div>
              <h3>STRENGTHS</h3>
            </div>
            <p>
              Passionate about building real-world projects with a focus on responsive design and user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
