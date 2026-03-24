import * as authService from "../services/auth.service.js";

export const login = async (req, res, next) => {
  try {
    const data = await authService.loginUser(req.body);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

export const logout = (req, res) => {
  res.status(200).json({ message: "Logged out" });
};