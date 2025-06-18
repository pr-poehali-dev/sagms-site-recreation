import { useState } from "react";
import Icon from "@/components/ui/icon";

const AdminContent = () => {
  const [content, setContent] = useState({
    heroTitle: "Лучшие лаунчеры и моды",
    heroSubtitle: "для San Andreas Multiplayer",
    heroDescription:
      "Погрузитесь в мир SAMP с нашими премиальными лаунчерами и модификациями. Стабильная работа, регулярные обновления и техническая поддержка 24/7.",
    siteName: "SAMP Store",
  });

  const [activeSection, setActiveSection] = useState("hero");

  const sections = [
    { id: "hero", label: "Главный экран", icon: "Home" },
    { id: "footer", label: "Подвал", icon: "Layout" },
    { id: "meta", label: "SEO", icon: "Search" },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold text-white mb-6">
        Управление контентом
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gray-700 rounded-lg p-4">
            <h3 className="text-white font-medium mb-4">Разделы</h3>
            <div className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                    activeSection === section.id
                      ? "bg-purple-600 text-white"
                      : "text-gray-300 hover:text-white hover:bg-gray-600"
                  }`}
                >
                  <Icon name={section.icon} size={16} />
                  <span>{section.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <div className="bg-gray-700 rounded-lg p-6">
            {activeSection === "hero" && (
              <div className="space-y-6">
                <h3 className="text-white font-bold">Главный экран</h3>

                <div>
                  <label className="block text-gray-300 mb-2">
                    Название сайта
                  </label>
                  <input
                    type="text"
                    value={content.siteName}
                    onChange={(e) =>
                      setContent({ ...content, siteName: e.target.value })
                    }
                    className="w-full bg-gray-600 text-white rounded-lg px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Заголовок</label>
                  <input
                    type="text"
                    value={content.heroTitle}
                    onChange={(e) =>
                      setContent({ ...content, heroTitle: e.target.value })
                    }
                    className="w-full bg-gray-600 text-white rounded-lg px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">
                    Подзаголовок
                  </label>
                  <input
                    type="text"
                    value={content.heroSubtitle}
                    onChange={(e) =>
                      setContent({ ...content, heroSubtitle: e.target.value })
                    }
                    className="w-full bg-gray-600 text-white rounded-lg px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Описание</label>
                  <textarea
                    value={content.heroDescription}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        heroDescription: e.target.value,
                      })
                    }
                    className="w-full bg-gray-600 text-white rounded-lg px-3 py-2 h-24"
                  />
                </div>

                <button className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                  <Icon name="Save" size={16} />
                  <span>Сохранить изменения</span>
                </button>
              </div>
            )}

            {activeSection === "footer" && (
              <div className="space-y-6">
                <h3 className="text-white font-bold">Настройки подвала</h3>

                <div>
                  <label className="block text-gray-300 mb-2">
                    Описание компании
                  </label>
                  <textarea
                    className="w-full bg-gray-600 text-white rounded-lg px-3 py-2 h-24"
                    placeholder="Описание в подвале сайта"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">
                    Социальные сети
                  </label>
                  <div className="space-y-3">
                    <input
                      type="url"
                      className="w-full bg-gray-600 text-white rounded-lg px-3 py-2"
                      placeholder="Ссылка на ВКонтакте"
                    />
                    <input
                      type="url"
                      className="w-full bg-gray-600 text-white rounded-lg px-3 py-2"
                      placeholder="Ссылка на Telegram"
                    />
                  </div>
                </div>

                <button className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                  <Icon name="Save" size={16} />
                  <span>Сохранить изменения</span>
                </button>
              </div>
            )}

            {activeSection === "meta" && (
              <div className="space-y-6">
                <h3 className="text-white font-bold">SEO настройки</h3>

                <div>
                  <label className="block text-gray-300 mb-2">
                    Title страницы
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-600 text-white rounded-lg px-3 py-2"
                    placeholder="SAMP Store - Лучшие лаунчеры и моды"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">
                    Описание (meta description)
                  </label>
                  <textarea
                    className="w-full bg-gray-600 text-white rounded-lg px-3 py-2 h-24"
                    placeholder="Описание сайта для поисковых систем"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">
                    Ключевые слова
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-600 text-white rounded-lg px-3 py-2"
                    placeholder="samp, лаунчер, моды, gta"
                  />
                </div>

                <button className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                  <Icon name="Save" size={16} />
                  <span>Сохранить изменения</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminContent;
