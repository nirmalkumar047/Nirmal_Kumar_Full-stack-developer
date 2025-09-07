


import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
      <div className="showcaselayout">
        <div ref={rydeRef} className="first-project-wrapper">
        <div className="image-wrapper">
          <a href="https://github.com/nirmalkumar047/Healthcare-project" target="_blank" rel="noopener noreferrer">
          <img src="/images/mhealth.png" alt="Ryde App Interface "  />
          </a>
        </div>
        <div className="text-content">
          <h2>
          An AI-powered healthcare assistant for wellness tracking, connecting you to smart medical tools in one place. 
          </h2>
          <p className="text-white-50 md:text-xl">
          An app built with React , Python/Flask, TailwindCSS  & Firebase for a fast,
          user-friendly experience.
          </p>
        </div>
        </div>

        <div className="project-list-wrapper overflow-hidden">
        <div className="project" ref={libraryRef}>
          <div className="image-wrapper bg-[#FFEFDB]">
          <a href="https://github.com/nirmalkumar047/Disease-Prediction-for-dogs">
            <img
            src="/images/dog.png"
            alt="Library Management Platform"
          />
          </a>
          </div>
          <h2>VetVision : AI-Powered Animal Disease Detection</h2>
        </div>

        <div className="project" ref={ycDirectoryRef}>
          <div className="image-wrapper bg-[#FFE7EB]">
          <a href="https://github.com/nirmalkumar047/AI-summarizer">
            <img src="/images/summari.png" alt="YC Directory App" />
          </a>
          
          </div>
          <h2>AI- Summarizer</h2>
        </div>
        </div>
      </div>
      </div>
    </div>
    );
};

export default ShowcaseSection;