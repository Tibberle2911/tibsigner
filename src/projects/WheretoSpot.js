import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DropdownMenu from "../components/CTA/WheretoSpot.js";
import { FaArrowLeft } from "react-icons/fa"; // Import the left arrow icon
import { Helmet } from "react-helmet";
import "./ProjectDetail.css";

function ProjectDetail2() {
  const navigate = useNavigate(); // Use the navigate hook to control routing

  const handleBackClick = () => {
    navigate("/"); // Navigate back to the homepage
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // List of image sources
  const images = Array.from(
    { length: 8 },
    (_, i) => `../WheretoSpot-Deliverables/WheretoSpot-screen-${i}.png`
  );

  const handleImageClick = (index) => {
    setCurrentImageIndex(index); // Change the current image when a preview is clicked
  };

  return (
    <main className="project-page">
      <Helmet>
        <meta
          name="google-site-verification"
          content="ZOvSOnHHIkFeR3U0S0t9gFQvjUZ4D7PLK-A-7rgONHU"
        />
        <script
          async=""
          src="https://www.googletagmanager.com/gtag/js?id=G-ESG6BZ7MDZ"
        ></script>

        <title>Where To Spot | Portfolio | Tibsigner</title>
        <meta
          name="description"
          content="Redesign the dashboard of Tesla with an additional feature to manage Tesla cars from a far distance."
        />
        <link rel="favicon icon" href="../../Logo.png" type="image/png" />
        <link
          rel="canonical"
          href="https://tibsigner.com/projects/WheretoSpot"
        />

        <meta
          property="og:title"
          content="Where To Spot | Portfolio | Tibsigner"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://tibsigner.com/projects/WheretoSpot"
        />
        <meta
          property="og:description"
          content="Redesign the dashboard of Tesla with an additional feature to manage Tesla cars from a far distance."
        />
        <meta property="og:site_name" content="Tibsigner" />
        <meta property="og:image" content="https://tibsigner.com/logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <meta property="og:image:alt" content="Tibsigner-logo" />
      </Helmet>

      <button onClick={handleBackClick} className="back-button">
        <FaArrowLeft />
        <span className="back-button-text">Back to Home</span>
      </button>

      <section>
        <div className="overview">
          <h1>Where To Spot | Internship</h1>
          <p>
          Where to spot Your Dreams in one place First Platform that merge between Talents & Places. This Platform created for the people who seeks a different vision of live through all the noises around them and escape to a place where they really find what they seeks. Places and Activities Online Shop Guide Talents Travel Guides Food & Drinks Online Services and Courses.
          </p>
          <p>
            <strong>Role:</strong> UI/UX Designer & Frontend Developer
          </p>
        </div>
        <div className="technologies">
          <h2>Technologies Used</h2>
            <p>
                HTML / CSS / JavaScript - <br />
                ReactJS, TypeScript - <br />
                Figma, Wix -
            </p>
          <h2>Showcases</h2>
          <DropdownMenu />
        </div>
      </section>
      <div className="project-details">
        <h3>Deliverables</h3>
        {/* Image Preview List */}
        <div className="image-preview-list">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Project preview ${index}`}
              className={`image-preview ${
                currentImageIndex === index ? "active" : ""
              }`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
        <img
          src={images[currentImageIndex]}
          alt="Where To Spot project preview choosen"
        />
      </div>
    </main>
  );
}

export default ProjectDetail2;
