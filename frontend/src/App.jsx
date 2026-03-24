import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import { dashboardRoutes } from "./lib/constants";
import Layout from "./components/common/Layout/Layout";
import Product from "./components/Poducts/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ Default redirect */}
        <Route
          path={dashboardRoutes.index}
          element={<Navigate to={dashboardRoutes.login} />}
        />

        {/* ✅ Public Route (login) */}
        <Route
          path={dashboardRoutes.login}
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        {/* ✅ Protected Layout Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          {/* 👇 Nested routes (Layout ke andar render honge) */}
          <Route path={dashboardRoutes.dashboard} element={<Dashboard />} />

          <Route path={dashboardRoutes.products.index} element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
