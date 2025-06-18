import { useState } from "react";
import Icon from "@/components/ui/icon";
import AdminProducts from "@/components/admin/AdminProducts";
import AdminSettings from "@/components/admin/AdminSettings";
import AdminContent from "@/components/admin/AdminContent";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("products");

  const tabs = [
    { id: "products", label: "Товары", icon: "Package" },
    { id: "content", label: "Контент", icon: "FileText" },
    { id: "settings", label: "Настройки", icon: "Settings" },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Панель управления
          </h1>
          <p className="text-gray-400">
            Управление контентом и настройками сайта
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-gray-800 rounded-lg p-1 mb-8">
          <div className="flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-3 px-6 rounded-md transition-all ${
                  activeTab === tab.id
                    ? "bg-purple-600 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-700"
                }`}
              >
                <Icon name={tab.icon} size={18} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-gray-800/50 rounded-lg p-6">
          {activeTab === "products" && <AdminProducts />}
          {activeTab === "content" && <AdminContent />}
          {activeTab === "settings" && <AdminSettings />}
        </div>
      </div>
    </div>
  );
};

export default Admin;
