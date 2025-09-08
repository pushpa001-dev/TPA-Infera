import React from 'react'

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full bg-white text-black py-20 px-6 lg:px-16"
    >
      {/* Section Heading */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-700">
          Have a project in mind or want to collaborate?  
          Let’s create something amazing together. Fill out the form or reach us directly.
        </p>
      </div>

      {/* Contact Grid */}
      <div className="grid gap-12 md:grid-cols-2 max-w-6xl mx-auto">
        {/* Left Side - Contact Details */}
        <div className="flex flex-col justify-center space-y-6">
          <h3 className="text-2xl font-semibold">Contact Information</h3>
          <p className="text-gray-700">
            We’d love to hear from you! Reach out using the details below.
          </p>

          <div className="space-y-4">
            {/* Email */}
            <div>
              <h4 className="text-lg font-medium">Email</h4>
              <a
                href="mailto:tpa.infera@gmail.com"
                className="text-gray-800 hover:underline"
              >
                tpa.infera@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div>
              <h4 className="text-lg font-medium">Phone</h4>
              <a
                href="tel:+919876543210"
                className="text-gray-800 hover:underline"
              >
                +91 98765 43210
              </a>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-medium">Follow Us</h4>
              <div className="flex space-x-4 mt-2">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-gray-100 p-8 rounded-2xl shadow-md border border-gray-200">
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-lg font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                placeholder="Type your message"
                rows={5}
                className="w-full p-3 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition-all duration-300 font-semibold"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact