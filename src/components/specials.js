import React from 'react';
import SpecialItem from './specialitem';
import Button from './button';

const specialsData = [
  {
    title: "Greek Salad",
    description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: "greek-salad.jpg",
    price: "12.99",
  },
  {
    title: "Bruchetta",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: "bruchetta.jpg",
    price: "5.99",
  },
  {
    title: "Lemon Dessert",
    description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: "lemon-dessert.jpg",
    price: "5.00",
  },
];

function SpecialsSection() {

  return (
    <section className='section-container'>
      <div className='width-limiter'>
        <div className={"spacer-spread"}>
          <h1>Specials</h1>
          <Button buttonText={"Online Menu"} buttonClass={"button-black"}/>
        </div>
        <div className="grid-container">

          {/* 'special' is a reference for each index of the array for each pass through */}
          {specialsData.map((special, index) => (
            <SpecialItem
              key={index}
              title={special.title}
              description={special.description}
              image={special.image}
              price={special.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpecialsSection;
