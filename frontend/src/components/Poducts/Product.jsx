import { useEffect, useState, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import { fetchProducts, deleteProduct } from "../../app/features/productSlice";
import ProductModal from "./ProductModal";
import { MdDelete, MdEdit } from "react-icons/md";

const Products = () => {
  const dispatch = useDispatch();
  const { products = [], loading } = useSelector((state) => state.products);

  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const Table = DataTable.default || DataTable;
  // ✅ Fetch once
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // ✅ Memoized handlers (prevent re-render)
  const handleDelete = useCallback(
    (id) => {
      dispatch(deleteProduct(id));
    },
    [dispatch]
  );

  const handleEdit = useCallback((row) => {
    setSelectedProduct(row);
    setOpen(true);
  }, []);

  const handleAdd = useCallback(() => {
    setSelectedProduct(null);
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  // ✅ Columns optimized
  const columns = useMemo(
    () => [
      {
        name: "Name",
        selector: (row) => row.name,
        sortable: true,
      },
      {
        name: "Price",
        selector: (row) => `₹${row.price}`,
        sortable: true,
      },
      {
        name: "Actions",
        cell: (row) => (
          <div className="flex gap-2">
            <button
              onClick={() => handleEdit(row)}
              className="p-1 rounded hover:bg-blue-100 transition"
            >
              <MdEdit className="text-gray-600 text-lg" />
            </button>

            <button
              onClick={() => handleDelete(row._id)}
              className="p-1 rounded hover:bg-red-100 transition"
            >
              <MdDelete className="text-gray-600 text-lg" />
            </button>
          </div>
        ),
      },
    ],
    [handleEdit, handleDelete]
  );

  // ✅ Custom styles (clean UI)
  const customStyles = useMemo(
    () => ({
      rows: {
        style: {
          minHeight: "60px",
        },
      },
      headCells: {
        style: {
          fontWeight: "600",
          fontSize: "14px",
        },
      },
    }),
    []
  );

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold text-gray-800">Products</h1>

        <button
          onClick={handleAdd}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition"
        >
         Add Product
        </button>
      </div>

      {/* Table */}
      <Table
        columns={columns}
        data={products}
        progressPending={loading}
        pagination
        highlightOnHover
        striped
        responsive
        customStyles={customStyles}
        noDataComponent={
          <div className="py-6 text-gray-500">No products found</div>
        }
      />

      {/* Modal */}
      <ProductModal
        open={open}
        onClose={handleClose}
        product={selectedProduct}
      />
    </div>
  );
};

export default Products;