import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-earthy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-herbal p-2 rounded-lg">
                <Leaf className="h-6 w-6" />
              </div>
              <span className="font-serif font-bold text-xl">
                {t('herbalHeritage')}
              </span>
            </div>
            <p className="text-sm opacity-90">
              {t('tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-herbal-light transition-smooth">{t('home')}</Link></li>
              <li><Link to="/remedies" className="hover:text-herbal-light transition-smooth">{t('remedies')}</Link></li>
              <li><Link to="/user/submit-remedy" className="hover:text-herbal-light transition-smooth">{t('submitRemedy')}</Link></li>
              <li><Link to="/feedback" className="hover:text-herbal-light transition-smooth">{t('feedback')}</Link></li>
            </ul>
          </div>

          {/* Categories</
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="hover:text-herbal-light cursor-pointer transition-smooth">Respiratory</span></li>
              <li><span className="hover:text-herbal-light cursor-pointer transition-smooth">Digestive</span></li>
              <li><span className="hover:text-herbal-light cursor-pointer transition-smooth">Skin Care</span></li>
              <li><span className="hover:text-herbal-light cursor-pointer transition-smooth">General Health</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t('contactUs')}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@herbalheritage.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-earthy-light">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm opacity-90">
              © 2024 Herbal Heritage. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <Link to="/privacy" className="text-sm hover:text-herbal-light transition-smooth">Privacy Policy</Link>
              <Link to="/terms" className="text-sm hover:text-herbal-light transition-smooth">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};