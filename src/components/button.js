import React from 'react';
import { Link } from 'react-router-dom';

function Button({ buttonText, buttonClass, link, onClick, style, type = "button", ariaLabel }) {
  return link ? (
    <Link to={link} className={buttonClass} style={style} aria-label={ariaLabel}>
      {buttonText}
    </Link>
  ) : (
    <button type={type} className={buttonClass} onClick={onClick} style={style} aria-label={ariaLabel}>
      {buttonText}
    </button>
  );
}

export default Button;
