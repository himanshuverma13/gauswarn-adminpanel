import React from "react";
// import OwlCarousel from "react-owl-carousel";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.min.css";
// import "react-owl-carousel/dist/assets/owl.carousel.css";
// import "react-owl-carousel/dist/assets/owl.theme.default.css";
// import "./TestimonialCarousel.css";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: "John",
      position: "Web Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipisit nisi vehicula.",
    },
    {
      name: "Kelle",
      position: "Web Designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum dolor sit amet eros imperdiet, sit amet hendrerit nisi vehicula.",
    },
    {
      name: "Steven",
      position: "Web Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum dolor sit amet eros imperdiet, sit amet hendrerit nisi vehicula.",
    },
    {
      name: "Peter",
      position: "Web Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum dolor sit amet eros imperdiet, sit amet hendrerit nisi vehicula.",
    },
  ];

  return (
    <div className="what-say">
      <div className="container">
        <h2 className="text-center text-white mb-4">What Our Customers Say</h2>
        {/* <OwlCarousel */}
          {/* className="owl-theme"
          loop
          margin={10}
          nav={false}
          autoplay={true}
          responsive={{
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 },
          }} */}
        {/* > */}
          {testimonials.map((testimonial, index) => (
            <div className="testimonial" key={index}>
              <div className="testimonial-content">
                <div className="testimonial-icon">
                  <i className="fa fa-quote-left"></i>
                </div>
                <p className="description">{testimonial.description}</p>
              </div>
              <h3 className="title">{testimonial.name}</h3>
              <span className="post">{testimonial.position}</span>
            </div>
          ))}
        {/* </OwlCarousel> */}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
