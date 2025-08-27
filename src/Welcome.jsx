import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const Welcome = () => {

    useEffect(() => {
    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    // Observe all elements with the 'fade-in' class
    document.querySelectorAll('.fade-in').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [])


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 font-sans">
      {/* Header */}
      <header className="fixed w-full bg-white bg-opacity-90 shadow-sm backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <span className="text-2xl font-bold text-indigo-600">TaskFlow</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-indigo-500 font-medium transition-colors">Home</a>
              <a href="#" className="text-gray-600 hover:text-indigo-500 font-medium transition-colors">Features</a>
              <a href="#" className="text-gray-600 hover:text-indigo-500 font-medium transition-colors">Pricing</a>
              <a href="#" className="text-gray-600 hover:text-indigo-500 font-medium transition-colors">About</a>
            </div>
            <Link to="/signin"><button className="bg-indigo-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-indigo-600 transition-colors">
              Signin
            </button></Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center fade-in opacity-0 transform translate-y-10 transition-all duration-700">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-emerald-500">
              Organize Your Tasks, Elevate Your Productivity
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              TaskFlow helps you manage your projects and tasks efficiently, so you can focus on what truly matters. Experience the power of organized work.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                <Link to="/signup">
                <button className="bg-indigo-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-indigo-600 transition-colors">
              Get Started
            </button>
                </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 max-w-4xl mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80" 
                alt="TaskFlow Dashboard" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 fade-in opacity-0 transform translate-y-10 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Task Management Matters</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Effective task management is the foundation of productivity and success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitsData.map((benefit, index) => (
              <div 
                key={index} 
                className="fade-in opacity-0 transform translate-y-10 transition-all duration-700 bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 text-indigo-500">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 fade-in opacity-0 transform translate-y-10 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="TaskFlow Features" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="lg:w-1/2 fade-in opacity-0 transform translate-y-10 transition-all duration-700">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Powerful Features for Ultimate Productivity</h2>
              <p className="text-lg text-gray-600 mb-8">
                TaskFlow is designed with cutting-edge features to streamline your workflow and maximize efficiency.
              </p>
              <ul className="space-y-4 mb-10">
                {featuresData.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-indigo-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition-colors shadow-lg hover:shadow-xl">
                Explore All Features
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 fade-in opacity-0 transform translate-y-10 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied users who transformed their productivity with TaskFlow
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <div 
                key={index} 
                className="fade-in opacity-0 transform translate-y-10 transition-all duration-700 bg-gray-50 p-8 rounded-2xl"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-3xl p-10 md:p-16 text-center text-white fade-in opacity-0 transform translate-y-10 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Productivity?</h2>
            <p className="text-lg text-indigo-100 mb-10 max-w-2xl mx-auto">
              Join thousands of professionals who use TaskFlow to manage their tasks and achieve their goals efficiently.
            </p>
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform">
              Get Started for Free
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                </div>
                <span className="text-xl font-bold">TaskFlow</span>
              </div>
              <p className="text-gray-400 mb-6">
                TaskFlow helps individuals and teams organize tasks, boost productivity, and achieve more every day.
              </p>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-500 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            {footerLinksData.map((column, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-6">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2023 TaskFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Data for benefits section
const benefitsData = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
      </svg>
    ),
    title: "Reduces Mental Clutter",
    description: "Clear your mind by capturing all tasks in a trusted system, reducing stress and improving focus."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    ),
    title: "Improves Focus",
    description: "Prioritize what's important and avoid distractions by knowing exactly what to work on next."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
      </svg>
    ),
    title: "Meets Deadlines",
    description: "Never miss a deadline again with timely reminders and progress tracking for all your projects."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
      </svg>
    ),
    title: "Boosts Productivity",
    description: "Get more done in less time with organized workflows and efficient task management systems."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
      </svg>
    ),
    title: "Work-Life Balance",
    description: "Create boundaries between work and personal life by effectively managing your tasks and time."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
      </svg>
    ),
    title: "Enhances Collaboration",
    description: "Work seamlessly with your team by assigning, tracking, and completing tasks together."
  }
];

// Data for features section
const featuresData = [
  "Intuitive drag-and-drop interface",
  "Smart prioritization algorithms",
  "Seamless team collaboration",
  "Time tracking and productivity analytics",
  "Cross-platform synchronization",
  "Customizable workflows and categories"
];

// Data for testimonials section
const testimonialsData = [
  {
    quote: "TaskFlow has completely changed how I manage my projects. I've doubled my productivity and finally have a work-life balance.",
    initials: "JD",
    name: "John Davis",
    role: "Project Manager"
  },
  {
    quote: "The intuitive interface and powerful features make TaskFlow the best task manager I've used. My team collaboration has never been smoother.",
    initials: "SR",
    name: "Sarah Rodriguez",
    role: "Marketing Director"
  },
  {
    quote: "As a freelancer, staying organized is crucial. TaskFlow helps me manage multiple clients and deadlines without breaking a sweat.",
    initials: "MJ",
    name: "Michael Johnson",
    role: "Freelance Designer"
  }
];

// Data for footer links
const footerLinksData = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Templates", "Integrations"]
  },
  {
    title: "Resources",
    links: ["Blog", "Webinars", "Documentation", "Support"]
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Contact", "Partners"]
  }
];

export default Welcome