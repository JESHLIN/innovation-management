// src/components/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css'; // Assuming you have a CSS file for styling

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="overlay">
          <h1>Empowering Innovation Across Gujarat</h1>
          <p>Your innovation, our support. Join the revolution.</p>
          <Link to="/innovation">
            <button className="cta-btn">Get Started</button>
          </Link>
        </div>
      </div>

      

      {/* Innovation Highlights */}
      <section className="innovation-highlights">
  <h2>Featured Innovations</h2>
  <div className="innovations-grid">
    <div className="innovation-card">
      <div className="innovation-image-one"></div>  {/* Background image */}
      <div className="innovation-text">  {/* Text below the image */}
        <h3>Innovation Project 1</h3>
        <p>Details about this innovative project. <Link to="/project/1">Read More</Link></p>
      </div>
    </div>

    <div className="innovation-card">
      <div className="innovation-image-two"></div>
      <div className="innovation-text">
        <h3>Innovation Project 2</h3>
        <p>Details about this innovative project. <Link to="/project/2">Read More</Link></p>
      </div>
    </div>

    <div className="innovation-card">
      <div className="innovation-image-three"></div>
      <div className="innovation-text">
        <h3>Innovation Project 3</h3>
        <p>Details about this innovative project. <Link to="/project/3">Read More</Link></p>
      </div>
    </div>
  </div>
</section>


      {/* IPR and Startup Support */}
      <section className="ipr-startup-section">
        <h2>IPR & Startup Support</h2>
        <p>Learn how we assist with Intellectual Property Rights (IPR) and Startup Growth.</p>
        <div className="support-links">
          <Link to="/ipr">Learn About IPR</Link>
          <Link to="/startup">Startup Support</Link>
        </div>
      </section>

      {/* Research & Development */}
      <section className="research-development-section">
        <h2>Research & Development</h2>
        <p>
          Focus on research areas that drive Gujarat’s growth. Collaborate with top universities and research institutions.
        </p>
      </section>

      {/* News & Events */}
      <section className="news-events-section">
        <h2>News & Events</h2>
        <div className="news-grid">
          <div className="news-card">
            <h3>Upcoming Event</h3>
            <p>Details of upcoming seminars or innovation challenges.</p>
            <Link to="/events/1">Learn More</Link>
          </div>
          <div className="news-card">
            <h3>Recent Innovation News</h3>
            <p>Read about the latest innovation trends in Gujarat.</p>
            <Link to="/news/1">Read More</Link>
          </div>
        </div>
      </section>

      {/* User Testimonials */}
      <section className="testimonials-section">
        <h2>User Testimonials</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"The platform helped us protect our intellectual property and provided us with vital mentorship." – Startup Founder</p>
          </div>
          <div className="testimonial-card">
            <p>"A great tool to manage our innovation projects and keep track of our progress." – Researcher</p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter-section">
        <h2>Stay Updated</h2>
        <p>Sign up for our newsletter to get the latest updates on innovation and startups.</p>
        <form>
          <input type="email" placeholder="Enter your email" />
          
          <button type="submit">Subscribe</button>
          
        </form>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div className="quick-links">
            <Link to="/ipr">IPR</Link>
            <Link to="/startup">Startups</Link>
            <Link to="/innovation">Innovation</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="social-media">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
