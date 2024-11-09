import React from 'react'
import "./About.css"

const about = () => {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>About Us</h1>
        <p>Learn more about our journey and what makes us unique!</p>
      </section>

      <section className="about-content">
        <h2>Our Story</h2>
        <p>
          We are a fashion brand that believes in quality, creativity, and sustainability. Our journey started with a vision to bring stylish, comfortable, and eco-friendly clothing to our customers.
        </p>
        <p>
          From our humble beginnings, we've grown into a brand that values the artistry behind each design and the importance of creating something that lasts.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to deliver fashionable clothing made with love and care, while prioritizing ethical sourcing and sustainability. We want every piece to tell a story—your story.
        </p>
      </section>

      <section className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-member">
          <img src="../../../public/images/WhatsApp Image 2024-11-09 at 9.11.45 PM.jpeg" alt="Team Member 1" className="team-img" />
          <h3>FURQAN MUGHAL</h3>
          <br />

          <p>Founder & CEO</p>
          <br />
          <p>
            FURQAN MUGHAL started the company with a passion for creating timeless pieces that are both stylish and sustainable.
          </p>
        </div>
        <div className="team-member">
          <img src="../../../public/images/WhatsApp Image 2024-11-09 at 9.05.16 PM.jpeg" alt="Team Member 2" className="team-img" />
          <h3>MUHEEBULLAH KHAN</h3>
          <br />
          <p>Creative Director</p>
          <br />

          <p>
            MUHEEBULLAH leads our design team, ensuring each collection reflects the essence of our brand and creativity.
          </p>
        </div>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <ul>
          <li>Sustainability</li>
          <li>Creativity</li>
          <li>Quality</li>
          <li>Inclusivity</li>
        </ul>
      </section>
    </div>
  );
};

export default about