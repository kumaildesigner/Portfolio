import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Senior UI/UX Designer focused on crafting intuitive, high-impact digital experiences and user-centered design systems.
        </p>
        <h3 className="title" style={{ marginTop: '50px' }}>Education</h3>
        <p className="para">
          Bachelor’s in Software Engineering<br />
          University of Toronto
        </p>
      </div>
    </div>
  );
};

export default About;
