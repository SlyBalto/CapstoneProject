import React from 'react';

function TestimonialItem({ rating, image, name, reviewText }) {
  return (
    <div style={{paddingLeft: "15px"}}>
      {/* src reads directly from the public folder, image will always be jpg, just need to give its name */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img ariaLabel="Photo of testimonial writer" className={"image-rounded"} style={{height: "100px", width: "100px", objectFit: "cover"}} src={`/${image}`} alt={`Photograph of ${name}`} />
        <div>
          <h3 ariaLabel="Testimonial writer" style={{paddingLeft: "10px"}}>{name}</h3>
          <p ariaLabel="Rating" style={{paddingLeft: "10px"}}>{rating}</p>
        </div>
      </div>
        <div ariaLabel="Testimonial review">
          <p>{reviewText}</p>
        </div>
    </div>
  );
}

export default TestimonialItem;
