import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const links = [
    { label: 'Tentang Kami', href: '#' },
    { label: 'Kebijakan Privasi', href: '#' },
    { label: 'Hubungi Kami', href: '#' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'hello@certifyme.com' },
    { icon: Phone, text: '+62 812 3456 7890' },
    { icon: MapPin, text: 'Kuningan, Indonesia' },
  ];

  return (
    <footer className="mt-20 w-full bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              CertifyMe
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Platform sertifikasi terpercaya untuk profesional Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Menu
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Hubungi Kami
            </h4>
            <ul className="space-y-2">
              {contactInfo.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-yellow-500 dark:text-yellow-400 flex-shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 dark:bg-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-0">
            © 2025 CertifyMe. All Rights Reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-yellow-500 hover:text-white dark:hover:bg-yellow-500 transition-all duration-200"
                aria-label={social}
              >
                {social[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}