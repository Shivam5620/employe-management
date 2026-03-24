import express from "express";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import productRoutes from "./routes/product.route.js";
import departmentRoutes from "./routes/department.route.js";
import employeeRoutes from "./routes/employee.route.js";
import {ROUTES} from "./utils/constants.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

app.use(ROUTES.AUTH.BASE, authRoutes);
app.use(ROUTES.USERS.BASE, userRoutes);
app.use(ROUTES.PRODUCTS.BASE, productRoutes);
app.use(ROUTES.DEPARTMENTS.BASE, departmentRoutes);
app.use(ROUTES.EMPLOYEES.BASE, employeeRoutes);

app.use(errorHandler);

export default app;