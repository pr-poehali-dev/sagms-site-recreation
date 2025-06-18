import Icon from "@/components/ui/icon";

const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Лучшие{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              лаунчеры
            </span>{" "}
            и моды
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-8">
            для San Andreas Multiplayer
          </h2>
        </div>

        <div className="animate-fade-in max-w-3xl mx-auto mb-12">
          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            Погрузитесь в мир SAMP с нашими премиальными лаунчерами и
            модификациями. Стабильная работа, регулярные обновления и
            техническая поддержка 24/7.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center space-x-3 p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <Icon name="Shield" size={24} className="text-purple-400" />
              <span className="text-white font-medium">Безопасность</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <Icon name="Zap" size={24} className="text-blue-400" />
              <span className="text-white font-medium">Производительность</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <Icon
                name="HeartHandshake"
                size={24}
                className="text-green-400"
              />
              <span className="text-white font-medium">Поддержка</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <button
            onClick={scrollToProducts}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover-scale flex items-center justify-center space-x-2"
          >
            <Icon name="ShoppingCart" size={20} />
            <span>Смотреть товары</span>
          </button>
          <button className="border border-gray-600 hover:border-purple-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-gray-800 flex items-center justify-center space-x-2">
            <Icon name="Play" size={20} />
            <span>Демо версия</span>
          </button>
        </div>

        {/* Социальные ссылки */}
        <div className="flex justify-center space-x-6 mt-8 animate-fade-in">
          <a
            href="https://t.me/arznice"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Icon name="Send" size={24} />
            <span>Telegram</span>
          </a>
          <a
            href="https://vk.com/arznice"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Icon name="Users" size={24} />
            <span>VK</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
