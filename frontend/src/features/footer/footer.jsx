
import AboutSection from './aboutsection';
import QuickLinks from './quicklinks';
import ContactInfo from './contactinfo';
import FooterBottom from './footerbottom';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <AboutSection />
        <QuickLinks />
        <ContactInfo />
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
