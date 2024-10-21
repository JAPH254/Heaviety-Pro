import React from "react";

const Footer = () => {
    return (
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold">About Heavity Collections</h3>
            <p className="mt-4">
              Heavity Collections offers a curated selection of high-quality, trendy collections to elevate your style. Explore the finest in fashion and accessories.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Shop</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
  
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="mt-4">Email: <a href="mailto:info@heavitycollections.com" className="underline">info@heavitycollections.com</a></p>
            <p className="mt-2">Phone: +123-456-7890</p>
            <p className="mt-2">Address: 123 Heavity St, Fashion City</p>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm">
          <p>&copy; 2024 Heavity Collections. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  