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


export const getProfile = async (req, res) => {
  try {
    const user = await authService.getUserProfile(req.user.id);
    res.json(user);
  } catch (error) {
    next(error);
  }
};


// export const getProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select("-password");

//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };