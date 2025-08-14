import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Crafting responsive, SEO-friendly, and high-performance websites using the latest web technologies including React, Angular, Vue, and more. Tailored solutions to fit your brand and business goals.',
    icon: 'bi-code-slash',
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Building native and cross-platform mobile apps that deliver seamless user experiences on both iOS and Android devices. Expertise in React Native, Flutter, and Swift.',
    icon: 'bi-phone',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Designing intuitive interfaces and smooth user journeys focused on maximizing user engagement and satisfaction. From wireframes to prototypes, we cover it all.',
    icon: 'bi-palette',
  },
  {
    id: 4,
    title: 'E-Commerce Solutions',
    description: 'Creating scalable, secure online stores with features like payment gateway integration, inventory management, and customer analytics. Platforms include Shopify, WooCommerce, and custom builds.',
    icon: 'bi-bag-check',
  },
  {
    id: 5,
    title: 'Cloud & DevOps',
    description: 'Implementing cloud infrastructure and CI/CD pipelines to enhance scalability, reliability, and deployment speed using AWS, Azure, Docker, Kubernetes, and Jenkins.',
    icon: 'bi-cloud-arrow-up',
  },
  {
    id: 6,
    title: 'API Development & Integration',
    description: 'Designing robust RESTful and GraphQL APIs that enable smooth communication between your front-end, back-end, and third-party services.',
    icon: 'bi-plug',
  },
  {
    id: 7,
    title: 'Maintenance & Support',
    description: 'Offering ongoing support, security updates, bug fixes, and performance optimization to keep your software running smoothly and securely.',
    icon: 'bi-tools',
  },
  {
    id: 8,
    title: 'Digital Marketing & SEO',
    description: 'Helping your business grow online through strategic SEO, content marketing, PPC campaigns, and social media management.',
    icon: 'bi-graph-up',
  },
 
];


const Services = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">🛠️ Services Offered</h2>
      <div className="row g-4 mt-5">
        {services.map(service => (
          <div key={service.id} className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <i className={`${service.icon} mb-3`} style={{ fontSize: '3rem', color: '#667eea' }}></i>
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
                <Link to="/portfolio" className="btn btn-outline-primary btn-sm">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
