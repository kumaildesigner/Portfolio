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
                <h4>UI/UX Designer</h4>
                <h5>Archways Dev</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Focused on user-centered solutions and scalable design systems for emerging digital platforms.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UI/UX Designer</h4>
                <h5>Ravions</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Crafted elite visual architectures and seamless user flows for high-traffic applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UI/UX Designer</h4>
                <h5>Appspires</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Current role: Merging deep software engineering logic with design to elevate digital product experiences.
            </p>
          </div>
          <div className="career-info-box">
             <p style={{ marginTop: '20px', fontSize: '16px', opacity: 0.8 }}>
               1.5 years of high-impact, results-driven design experience focused on user-centered solutions and scalable systems.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
