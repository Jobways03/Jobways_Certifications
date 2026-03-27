import React, { useState, useEffect } from "react";
import "./box.css";
import { useNavigate } from "react-router-dom";

const pageStyle = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '40px 20px',
  background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const titleStyle = {
  fontSize: '32px',
  fontWeight: '700',
  color: '#ffffff',
  marginBottom: '50px',
  textAlign: 'center',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  textShadow: '0 2px 10px rgba(0,0,0,0.3)',
};

const gridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '24px',
  justifyContent: 'center',
  maxWidth: '1000px',
  width: '100%',
};

const cardStyle = {
  background: 'rgba(255, 255, 255, 0.95)',
  borderRadius: '16px',
  padding: '32px 40px',
  minWidth: '240px',
  maxWidth: '300px',
  cursor: 'pointer',
  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
  transition: 'all 0.3s ease',
  textAlign: 'center',
  border: '1px solid rgba(255,255,255,0.1)',
  flex: '1 1 240px',
};

const cardHoverStyle = {
  ...cardStyle,
  transform: 'translateY(-6px)',
  boxShadow: '0 12px 35px rgba(0,0,0,0.25)',
  background: '#ffffff',
};

const cardTextStyle = {
  fontSize: '17px',
  fontWeight: '700',
  color: '#1a1a2e',
  margin: 0,
  letterSpacing: '0.5px',
};

const SportsmartBoxes = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("company", "sports");
  }, []);

  const cards = [
    { label: 'Offer Letter', path: '/sportsOfferform' },
    { label: 'Payslip', path: '/sportsPayslipform' },
    { label: 'Hike Letter', path: '/hikeform' },
    { label: 'Experience', path: '/experienceform' },
    { label: 'Relieving Letter', path: '/relievingform' },
    { label: 'Editable Letter', path: '/GenieEditform' },
  ];

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>SPORTSMART</h1>
      <div style={gridStyle}>
        {cards.map((card, index) => (
          <div
            key={card.path}
            style={hoveredIndex === index ? cardHoverStyle : cardStyle}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => navigate(card.path)}
          >
            <p style={cardTextStyle}>{card.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsmartBoxes;
