import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>Smart Grocery App</h4>
                  <p>Mobile UX Case Study</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Figma, FigJam, Personalized UI</p>
            </div>
            <WorkImage image="/images/grocery.png" alt="Smart Grocery App Mockup" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>Freelancer Dashboard</h4>
                  <p>Web App UI</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Figma, Adobe XD, Analytics UI</p>
            </div>
            <WorkImage image="/images/freelancer.png" alt="Freelancer Dashboard Mockup" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>Travel Booking</h4>
                  <p>Website Redesign</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Figma, UX Optimization</p>
            </div>
            <WorkImage image="/images/travel.png" alt="Travel Booking Mockup" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>04</h3>
                <div>
                  <h4>Food Delivery App</h4>
                  <p>UI Concept Design</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Figma, ProtoPie, Micro-interactions</p>
            </div>
            <WorkImage image="/images/food.png" alt="Food Delivery App Mockup" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>05</h3>
                <div>
                  <h4>AI Productivity Tool</h4>
                  <p>Web App Concept</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Figma, Notion, Task Automation UI</p>
            </div>
            <WorkImage image="/images/ai-productivity.png" alt="AI Productivity Tool Mockup" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>06</h3>
                <div>
                  <h4>E-Learning Platform</h4>
                  <p>Web + Mobile UI/UX</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Figma, FigJam, Interactive Quiz UI</p>
            </div>
            <WorkImage image="/images/e-learning.png" alt="E-Learning Platform Mockup" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>07</h3>
                <div>
                  <h4>Fitness Tracking App</h4>
                  <p>Mobile UI Concept</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Figma, Adobe XD, Data Visualization</p>
            </div>
            <WorkImage image="/images/fitness-tracking.png" alt="Fitness Tracking App Mockup" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
