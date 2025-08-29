import { useState } from "react";
import { Mail } from "lucide-react";

export default function App() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-blue-900 text-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold">Neotech Consulting LLC</h1>
        <button
          onClick={() => setShowContact(true)}
          className="flex items-center space-x-2 bg-blue-700 hover:bg-blue-600 px-3 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
          aria-label="Open contact dialog"
        >
          <Mail size={18} aria-hidden="true" />
          <span>Contact Us</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8 max-w-4xl mx-auto">
        {/* Hero banner image */}
        <img
          src="https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1600&q=80"
          alt="Modern residential building exterior"
          className="w-full h-64 md:h-80 object-cover rounded-xl mb-8 shadow"
          loading="eager"
        />

        <h2 className="text-2xl font-semibold mb-4">Residential Business and Property Management Consulting</h2>
        <p className="mb-6 text-gray-700">
          At Neotech Consulting LLC, we specialize in helping property owners, investors, and management companies optimize their residential property operations. From tenant relations and lease structuring to maintenance planning and financial oversight, our consulting services are designed to maximize efficiency, protect investments, and enhance tenant satisfaction. Whether you’re new to property management or looking to refine existing processes, our team provides tailored strategies to meet your goals.
        </p>

        <div className="p-6 border rounded-xl shadow-sm bg-white flex flex-col md:flex-row items-center gap-6">
          <img
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80"
            alt="Modern apartment buildings"
            className="w-full md:w-1/2 h-48 md:h-56 object-cover rounded-lg"
            loading="lazy"
          />
          <div className="md:flex-1">
            <h3 className="text-xl font-bold mb-2">Why Choose Us?</h3>
            <p className="text-gray-600">
              With deep expertise in property management best practices, regulatory compliance, and operational efficiency, Neotech Consulting LLC empowers clients to make informed decisions and achieve long-term success in residential real estate.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 p-6 text-center mt-auto">
        <p className="mb-1 font-medium">Neotech Consulting LLC</p>
        <p className="mb-1">1712 Pioneer Ave St 500, Cheyenne, WY 82001</p>
        <p className="mb-1">CEO: Tristian Fransaw</p>
        <p className="text-sm text-gray-500 mt-2">© {new Date().getFullYear()} Neotech Consulting LLC. All rights reserved.</p>
      </footer>

      {/* Contact Modal */}
      {showContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div role="dialog" aria-modal="true" aria-labelledby="contact-title" className="bg-white p-6 rounded-xl shadow-lg w-96 text-center">
            <h2 id="contact-title" className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-4 text-gray-600">Click below to send us an email.</p>
            <a
              href="mailto:contact@neotechconsulting.com"
              className="inline-block bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Send Email
            </a>
            <button
              onClick={() => setShowContact(false)}
              className="block mt-4 text-gray-600 hover:underline mx-auto"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

