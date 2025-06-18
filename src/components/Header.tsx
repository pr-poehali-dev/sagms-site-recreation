import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Icon name="Gamepad2" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-white">SAMP Store</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Главная
            </a>
            <a
              href="#products"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Товары
            </a>
            <a
              href="/admin"
              className="text-gray-300 hover:text-purple-400 transition-colors flex items-center space-x-1"
            >
              <Icon name="Settings" size={16} />
              <span>Управление</span>
            </a>
            <a
              href="https://vk.com"
              target="_blank"
              className="text-gray-300 hover:text-purple-400 transition-colors flex items-center space-x-1"
            >
              <Icon name="MessageCircle" size={16} />
              <span>ВКонтакте</span>
            </a>
            <a
              href="https://t.me"
              target="_blank"
              className="text-gray-300 hover:text-purple-400 transition-colors flex items-center space-x-1"
            >
              <Icon name="Send" size={16} />
              <span>Телеграм</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 rounded-lg mt-2">
              <a
                href="/"
                className="block px-3 py-2 text-gray-300 hover:text-purple-400"
              >
                Главная
              </a>
              <a
                href="#products"
                className="block px-3 py-2 text-gray-300 hover:text-purple-400"
              >
                Товары
              </a>
              <a
                href="/admin"
                className="block px-3 py-2 text-gray-300 hover:text-purple-400"
              >
                Управление
              </a>
              <a
                href="https://vk.com"
                target="_blank"
                className="block px-3 py-2 text-gray-300 hover:text-purple-400"
              >
                ВКонтакте
              </a>
              <a
                href="https://t.me"
                target="_blank"
                className="block px-3 py-2 text-gray-300 hover:text-purple-400"
              >
                Телеграм
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
