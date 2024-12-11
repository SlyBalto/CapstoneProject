import React from 'react';
import TestimonialItem from './testimonialitem';

const testimonialsData = [
  {
    rating: "5/5",
    image: "Brittany.png",
    name: "Brittany Taylor",
    reviewText: "My favorite place to eat with my friends, great food!",
  },
  {
    rating: "9.5/10",
    image: "Darius.jpg",
    name: "Darius Flynn",
    reviewText: "One of the best restaurants to go to in Chicago, highly recommended.",
  },
  {
    rating: "4/5",
    image: "Charlie.png",
    name: "Charlie Rosegold",
    reviewText: "Fast and speedy service that doesn't skip out on quality.",
  },
  {
    rating: "9/10",
    image: "Jennifer.jpg",
    name: "Jennifer Lily",
    reviewText: "Little Lemon is an absolute gem, can't get enough of it.",
  },
];

function TestimonialsSection() {

  return (
    <section className='section-container' style={{backgroundColor: "#495E57", color: 'white'}}>
        <div className="width-limiter">
          <div>
            <h1>Testimonials</h1>
              <div className="testimonials-section" >
                {testimonialsData.map((testimonial, index) => (
                  <TestimonialItem
                    key={index}
                    rating={testimonial.rating}
                    image={testimonial.image}
                    name={testimonial.name}
                    reviewText={testimonial.reviewText}
                  />
                ))}
              </div>
          </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
