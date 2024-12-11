import React from 'react';
import useWindowSize from '../utilities/useWindowSize';

function SpecialItem({title, description, image, price}) {
  const { width } = useWindowSize();
  const isMobile = width < 800;

  return (
    <div> 
    {isMobile ? (
      // Mobile version
      <article ariaLabel={`${title}`} className='special'>
    <div style={{
      padding: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"}}>
      <div>
        <div className={"special-header"}>
          <h3>{title}</h3>
          <h3 className={"special-price"}>${price}</h3>
        </div>
        <p>{description}</p>
      </div>
      <img className={"special-image"} src={image} style={{ objectFit: 'cover',  height: '150px', aspectRatio: '1 / 1'}} />
    </div>
    </article>
    ) :
    (
      // Desktop version
      <article className='special'>
  <img className={"special-image"} src={image} style={{ width: "100% ", objectFit: 'cover', height: '250px' }} />
    <div style={{ padding: "20px" }}>
      <div className={"special-header"}>
        <h3>{title}</h3>
        <h3 className={"special-price"}>${price}</h3>
      </div>
      <p>{description}</p>
    </div>
    </article>
    
    )}
    </div>
  );
}

export default SpecialItem;