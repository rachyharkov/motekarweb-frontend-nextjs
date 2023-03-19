import React from "react";

export default function Divider() {
  return (
    <div className="divider" style={{
      height: '5rem',
      background: 'linear-gradient(to bottom, transparent, var(--color-primary))',
      marginTop: '-5rem',
      zIndex: '2',
      position: 'relative',
    }}>
      <div className="divider__line"></div>
      <div className="divider__circle"></div>
      <div className="divider__line"></div>
    </div>
  );
}