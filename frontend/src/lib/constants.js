export const endpoints = {
  auth: {
    login: "/auth/login",
    logout: "/auth/logout",
  },
  dashboard: {
    index: "/dashboard",
  },
  user: {
    index: "/users",
    id: "/users/:id",
  },
  products:{
    index: "/products",
    id: "/products/:id",
  }
};
export const dashboardRoutes = {
    index: "/",
    login: "/login",
    logout: "/logout",
    dashboard: "/dashboard",
    products:{
      index: "/products",
      create: "/products/create",
      update: "/products/update/:id",
      delete: "/products/delete/:id",
    }
  }