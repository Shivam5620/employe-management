import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, updateProduct } from "../../app/features/productSlice";

const ProductModal = ({ open, onClose, product }) => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
  });

  // 👉 Edit mode me data fill karo
  useEffect(() => {
    if (product) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setForm({
        name: product.name || "",
        description: product.description || "",
        price: product.price || "",
      });
    } else {
      setForm({
        name: "",
        description: "",
        price: "",
      });
    }
  }, [product]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.price) {
      return alert("Name & Price required");
    }

    if (product) {
      // 👉 UPDATE
      await dispatch(updateProduct({ id: product._id, data: form }));
    } else {
      // 👉 ADD
      await dispatch(addProduct(form));
    }

    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">
          {product ? "Edit Product" : "Add Product"}
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded"
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-3 py-1 bg-gray-300 rounded"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-3 py-1 bg-blue-500 text-white rounded"
          >
            {product ? "Update" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;