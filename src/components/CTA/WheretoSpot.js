import React, { useState } from "react";
import "./CTA.css";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <button className="primary-button" onClick={toggleDropdown}>
        Navigate to:
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>
            <a
              href="https://www.figma.com/design/AOJpov2NqQCRF2JZl8OeQe/Frontend-%26-Design-For-wheretospot?node-id=0-1"
              className="dropdown-item"
            >
              Design System
            </a>
          </li>
          <li>
            <a
              href="https://www.figma.com/design/AOJpov2NqQCRF2JZl8OeQe/Frontend-%26-Design-For-wheretospot?node-id=39-780"
              className="dropdown-item"
            >
              Pixel-perfect UI Design
            </a>
          </li>
          <li>
            <a
              href="https://www.figma.com/design/5PGlFRDkhNFfDGA7Tmv8Hc/Redesign-Homepage---wheretospot.com?node-id=0-1"
              className="dropdown-item"
            >
              Low-fidelity wireframes
            </a>
          </li>
          <li>
            <a
              href="https://www.figma.com/design/5PGlFRDkhNFfDGA7Tmv8Hc/Redesign-Homepage---wheretospot.com?node-id=38-10360"
              className="dropdown-item"
            >
              Submit a New Spot - Low-fidelity wireframes
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1l6DKyZ6Da4FrF_6bqHK1wyyWseN88uxP/view?usp=sharing"
              className="dropdown-item"
            >
              Code file
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
