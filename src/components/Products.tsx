import Icon from "@/components/ui/icon";

const Products = () => {
  const products = [
    {
      id: 1,
      type: "launcher",
      title: "SAMP Launcher Pro",
      description: "Продвинутый лаунчер с автообновлением модов и серверов",
      price: "299₽",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=250&fit=crop",
      features: ["Автообновление", "Менеджер модов", "Список серверов"],
    },
    {
      id: 2,
      type: "mod",
      title: "GTA SAMP Graphics Mod",
      description: "Улучшенная графика и визуальные эффекты для SAMP",
      price: "199₽",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop",
      features: ["HD текстуры", "Улучшенное освещение", "Оптимизация FPS"],
    },
    {
      id: 3,
      type: "launcher",
      title: "Ultimate SAMP Client",
      description: "Полнофункциональный клиент с интегрированными модами",
      price: "499₽",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop",
      features: ["Встроенные моды", "Защита от читов", "Статистика игры"],
    },
    {
      id: 4,
      type: "mod",
      title: "SAMP Audio Pack",
      description: "Расширенный пакет звуков и музыки для SAMP",
      price: "149₽",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
      features: ["HD звуки", "Новая музыка", "Звуковые эффекты"],
    },
    {
      id: 5,
      type: "mod",
      title: "Car Pack Premium",
      description: "Коллекция премиальных автомобилей для SAMP",
      price: "259₽",
      image:
        "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=400&h=250&fit=crop",
      features: ["50+ автомобилей", "HD модели", "Реалистичная физика"],
    },
    {
      id: 6,
      type: "launcher",
      title: "SAMP Mobile Launcher",
      description: "Лаунчер для мобильных устройств с полной совместимостью",
      price: "399₽",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      features: [
        "Мобильная версия",
        "Сенсорное управление",
        "Облачные сохранения",
      ],
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Наши{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              товары
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Выберите лучшие лаунчеры и моды для максимального игрового опыта в
            SAMP
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-purple-500 transition-all duration-300 hover-scale"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      product.type === "launcher"
                        ? "bg-purple-600 text-white"
                        : "bg-blue-600 text-white"
                    }`}
                  >
                    {product.type === "launcher" ? "Лаунчер" : "Мод"}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-400 mb-4">{product.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">
                    Особенности:
                  </h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center space-x-2 text-sm text-gray-400"
                      >
                        <Icon
                          name="Check"
                          size={14}
                          className="text-green-400"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-400">
                    {product.price}
                  </span>
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 flex items-center space-x-2">
                    <Icon name="ShoppingCart" size={16} />
                    <span>Купить</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
