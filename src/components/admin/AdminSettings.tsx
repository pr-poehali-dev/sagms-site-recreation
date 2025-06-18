import { useState } from "react";
import Icon from "@/components/ui/icon";

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    maintenanceMode: false,
    analyticsEnabled: true,
    emailNotifications: true,
    theme: "dark",
  });

  return (
    <div>
      <h2 className="text-xl font-bold text-white mb-6">Настройки системы</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General Settings */}
        <div className="bg-gray-700 rounded-lg p-6">
          <h3 className="text-white font-bold mb-4 flex items-center space-x-2">
            <Icon name="Settings" size={20} />
            <span>Общие настройки</span>
          </h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="text-white font-medium">
                  Режим обслуживания
                </label>
                <p className="text-gray-400 text-sm">Временно отключить сайт</p>
              </div>
              <button
                onClick={() =>
                  setSettings({
                    ...settings,
                    maintenanceMode: !settings.maintenanceMode,
                  })
                }
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.maintenanceMode ? "bg-purple-600" : "bg-gray-600"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.maintenanceMode ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="text-white font-medium">Аналитика</label>
                <p className="text-gray-400 text-sm">
                  Сбор статистики посещений
                </p>
              </div>
              <button
                onClick={() =>
                  setSettings({
                    ...settings,
                    analyticsEnabled: !settings.analyticsEnabled,
                  })
                }
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.analyticsEnabled ? "bg-purple-600" : "bg-gray-600"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.analyticsEnabled
                      ? "translate-x-6"
                      : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div>
              <label className="block text-gray-300 mb-2">
                Тема оформления
              </label>
              <select
                value={settings.theme}
                onChange={(e) =>
                  setSettings({ ...settings, theme: e.target.value })
                }
                className="w-full bg-gray-600 text-white rounded-lg px-3 py-2"
              >
                <option value="dark">Темная</option>
                <option value="light">Светлая</option>
                <option value="auto">Автоматическая</option>
              </select>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-gray-700 rounded-lg p-6">
          <h3 className="text-white font-bold mb-4 flex items-center space-x-2">
            <Icon name="Shield" size={20} />
            <span>Безопасность</span>
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-2">
                Пароль администратора
              </label>
              <input
                type="password"
                className="w-full bg-gray-600 text-white rounded-lg px-3 py-2"
                placeholder="Новый пароль"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">
                Подтвердите пароль
              </label>
              <input
                type="password"
                className="w-full bg-gray-600 text-white rounded-lg px-3 py-2"
                placeholder="Повторите пароль"
              />
            </div>

            <button className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <Icon name="Key" size={16} />
              <span>Изменить пароль</span>
            </button>
          </div>
        </div>

        {/* Backup & Export */}
        <div className="bg-gray-700 rounded-lg p-6">
          <h3 className="text-white font-bold mb-4 flex items-center space-x-2">
            <Icon name="Database" size={20} />
            <span>Резервное копирование</span>
          </h3>

          <div className="space-y-4">
            <div>
              <p className="text-gray-300 mb-4">
                Создайте резервную копию данных
              </p>
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                <Icon name="Download" size={16} />
                <span>Скачать резервную копию</span>
              </button>
            </div>

            <div>
              <p className="text-gray-300 mb-4">
                Последняя резервная копия: Сегодня, 14:30
              </p>
              <button className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                <Icon name="Upload" size={16} />
                <span>Восстановить из копии</span>
              </button>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-gray-700 rounded-lg p-6">
          <h3 className="text-white font-bold mb-4 flex items-center space-x-2">
            <Icon name="Bell" size={20} />
            <span>Уведомления</span>
          </h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="text-white font-medium">
                  Email уведомления
                </label>
                <p className="text-gray-400 text-sm">
                  О новых заказах и событиях
                </p>
              </div>
              <button
                onClick={() =>
                  setSettings({
                    ...settings,
                    emailNotifications: !settings.emailNotifications,
                  })
                }
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.emailNotifications ? "bg-purple-600" : "bg-gray-600"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.emailNotifications
                      ? "translate-x-6"
                      : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div>
              <label className="block text-gray-300 mb-2">
                Email для уведомлений
              </label>
              <input
                type="email"
                className="w-full bg-gray-600 text-white rounded-lg px-3 py-2"
                placeholder="admin@sampstore.com"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg flex items-center space-x-2">
          <Icon name="Save" size={18} />
          <span>Сохранить все настройки</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSettings;
