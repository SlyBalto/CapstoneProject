import React from 'react';
import { Link } from 'react-router-dom';

function FooterList({linkData, title}) {
  return (

    <div>
     <p>{title}</p>
      <nav aria-label={title}>
        <ul>

        {
          linkData.map((link) =>  (
            <li key={link.id}>
              {/* fix this to use Link instead */}
              <Link to={link.linkTarget ? link.linkTarget : "/" }>{link.text}</Link>
            </li>
      ))}
              </ul>
      </nav>
    </div>

)

}
export default FooterList;