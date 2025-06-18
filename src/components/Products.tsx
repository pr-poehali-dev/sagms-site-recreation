import Icon from "@/components/ui/icon";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Мод Arizona Games",
      description:
        "Игровой мод для улучшенного опыта в SAMP с дополнительными возможностями",
      price: "50₽",
      image:
        "https://cdn.poehali.dev/files/4e00a9e9-8c49-4702-921f-fdf311e4fc54.png",
      type: "mod",
      features: [
        "Улучшенная графика",
        "Дополнительные функции",
        "Стабильная работа",
      ],
      buyLink: "https://t.me/arznice",
    },
    {
      id: 2,
      title: "Лаунчер Arizona Mobile",
      description:
        "Мобильный лаунчер для игры Arizona RP с удобным интерфейсом и быстрым подключением",
      price: "50₽",
      image:
        "https://cdn.poehali.dev/files/63b611e4-34d9-4c3a-bfd7-61bc8f7cc4e1.png",
      type: "launcher",
      features: [
        "Мобильная версия",
        "Быстрое подключение",
        "Стабильная работа",
      ],
      buyLink: "https://t.me/arznice",
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
                  <button
                    onClick={() => window.open(product.buyLink, "_blank")}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 flex items-center space-x-2"
                  >
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
