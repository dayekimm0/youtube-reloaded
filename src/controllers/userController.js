import User from "../models/user";
import bcrypt from "bcrypt";

export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res) => {
  const { email, id, password, password2, name, location } = req.body;
  const pageTitle = "Join";
  if (password !== password2) {
    return res.status(404).render("join", {
      pageTitle,
      errorMessage: "Password confirmation does not match",
    });
  }

  const exists = await User.exists({ $or: [{ id }, { email }] });
  if (exists) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "This ID/Email is already taken !",
    });
  }
  try {
    await User.create({
      email,
      id,
      password,
      name,
      location,
    });
    return res.redirect("/login");
  } catch (error) {
    return res
      .status(400)
      .render("join", { pageTitle: "Join", errorMessage: error._message });
  }
};

export const edit = (req, res) => {
  return res.send("Edit User");
};

export const remove = (req, res) => {
  return res.send("Remove User");
};

export const getLogin = (req, res) => {
  return res.render("login", { pageTitle: "Login" });
};

export const postLogin = async (req, res) => {
  const { id, password } = req.body;
  const user = await User.findOne({ id });
  const pageTitle = "Login";
  if (!user) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "An account with this ID does not match",
    });
  }

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "Wrong Password",
    });
  }
  return res.end();
};

export const logout = (req, res) => {
  return res.send("Logout");
};

export const see = (req, res) => {
  return res.send("See User");
};
