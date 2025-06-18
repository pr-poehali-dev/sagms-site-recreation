import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold text-white">SAMP Store</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Ваш надежный партнер в мире San Andreas Multiplayer. Предлагаем
              качественные лаунчеры и моды с гарантией качества.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://vk.com"
                target="_blank"
                className="bg-gray-800 hover:bg-purple-600 p-3 rounded-lg transition-colors"
              >
                <Icon
                  name="MessageCircle"
                  size={20}
                  className="text-gray-300 hover:text-white"
                />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-colors"
              >
                <Icon
                  name="Send"
                  size={20}
                  className="text-gray-300 hover:text-white"
                />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                className="bg-gray-800 hover:bg-indigo-600 p-3 rounded-lg transition-colors"
              >
                <Icon
                  name="MessageSquare"
                  size={20}
                  className="text-gray-300 hover:text-white"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Товары
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Поддержка
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Помощь
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Гарантии
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 SAMP Store. Все права защищены.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Icon name="Shield" size={16} className="text-green-400" />
                <span>Безопасные платежи</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Icon name="Clock" size={16} className="text-blue-400" />
                <span>Поддержка 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
