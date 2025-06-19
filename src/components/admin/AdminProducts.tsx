import { useState } from "react";
import Icon from "@/components/ui/icon";

const AdminProducts = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Мод Arizona Games",
      price: "50₽",
      type: "mod",
      status: "active",
      image:
        "https://cdn.poehali.dev/files/4e00a9e9-8c49-4702-921f-fdf311e4fc54.png",
      buyLink: "https://t.me/arznice",
    },
    {
      id: 2,
      title: "Лаунчер Arizona Mobile",
      price: "50₽",
      type: "launcher",
      status: "active",
      image:
        "https://cdn.poehali.dev/files/63b611e4-34d9-4c3a-bfd7-61bc8f7cc4e1.png",
      buyLink: "https://t.me/arznice",
    },
    {
      id: 3,
      title: "Лаунчер Arizona PC",
      price: "50₽",
      type: "launcher",
      status: "active",
      image:
        "https://cdn.poehali.dev/files/84ece5f2-1cff-4ce1-bbf7-f97b2f5f378d.png",
      buyLink: "https://t.me/arznice",
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">Управление товарами</h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
        >
          <Icon name="Plus" size={18} />
          <span>Добавить товар</span>
        </button>
      </div>

      {/* Products List */}
      <div className="space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-700 rounded-lg p-4 flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center">
                <Icon
                  name={product.type === "launcher" ? "Rocket" : "Package"}
                  size={20}
                  className="text-gray-300"
                />
              </div>
              <div>
                <h3 className="text-white font-medium">{product.title}</h3>
                <div className="flex items-center space-x-3 text-sm">
                  <span className="text-purple-400">{product.price}</span>
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      product.status === "active"
                        ? "bg-green-600 text-white"
                        : "bg-red-600 text-white"
                    }`}
                  >
                    {product.status === "active" ? "Активен" : "Неактивен"}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setEditingProduct(product)}
                className="p-2 hover:bg-gray-600 rounded-lg transition-colors"
              >
                <Icon name="Edit" size={16} className="text-gray-300" />
              </button>
              <button className="p-2 hover:bg-gray-600 rounded-lg transition-colors">
                <Icon name="Trash2" size={16} className="text-red-400" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Form */}
      {(showAddForm || editingProduct) && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <h3 className="text-white font-bold mb-4">
              {editingProduct ? "Редактировать товар" : "Добавить товар"}
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Название</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 text-white rounded-lg px-3 py-2"
                  placeholder="Название товара"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Цена</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 text-white rounded-lg px-3 py-2"
                  placeholder="199₽"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Тип</label>
                <select className="w-full bg-gray-700 text-white rounded-lg px-3 py-2">
                  <option value="launcher">Лаунчер</option>
                  <option value="mod">Мод</option>
                </select>
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddForm(false);
                    setEditingProduct(null);
                  }}
                  className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg"
                >
                  Сохранить
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProducts;
