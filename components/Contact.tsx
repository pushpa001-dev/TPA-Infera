import React from 'react'
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full bg-white text-black py-20 px-6 lg:px-16"
    >
      {/* Section Heading */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-raleway mb-4">
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
          <h3 className="text-2xl xl:text-4xl font-raleway text-center sm:text-start">Contact Information</h3>
          <p className="text-gray-700 text-center sm:text-start">
            We’d love to hear from you! Reach out using the details below.
          </p>

          <div className="space-y-4 flex flex-col items-center justify-center sm:items-start text-center sm:text-start">
            {/* Email */}
            <div>
              <h4 className="text-lg font-medium">Email</h4>
              <a
                href="mailto:tpa.infera@gmail.com"
                className="text-gray-800 hover:underline"
              >
                tpainfera@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div>
              <h4 className="text-lg font-medium">Phone</h4>
              <a
                href="tel:+919392047174"
                className="text-gray-800 hover:underline"
              >
                +91 93920 47174
              </a>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-medium">Follow Us</h4>
              <div className="flex space-x-4 mt-2">
                <a
                  href="https://www.instagram.com/tpa_infera_049/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/pushpa001-dev"
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
        <div className="">
         <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact