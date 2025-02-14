import { RequestHandler } from "express";
import { users } from "../database/user-db";

export const register: RequestHandler = (req, res) => {
  console.log("Register working", req.body);
  const { name, email, password, address, role } = req.body;

  const findUserName = users.find((user) => user.name === name);
  if (findUserName) {
    res.status(400).send("User name already taken ");
    return;
  }
  const findUser = users.find((user) => user.email === email);

  if (findUser) {
    res.status(400).send("User email already exists");
    return;
  }

  const lastUser = users[users.length - 1];
  const newUserId = lastUser ? Number(lastUser.id) + 1 : 1;

  const newUser = {
    id: newUserId.toString(),
    name,
    email,
    password,
    role,
    address,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  users.push(newUser);
  res.status(201).send("User registred successfully");
  return;
};

export const login: RequestHandler = (req, res) => {
  const { email, name, password } = req.body;
  const findUserEmail = users.find(
    (user) => user.email === email && user.password === password
  );
  const findUserName = users.find(
    (user) => user.name === name && user.password === password
  );

  if (findUserEmail) {
    res.status(200).send("User logged in successfully");
    return;
  }

  if (findUserName) {
    res.status(200).send("User logged in successfully");
    return;
  }

  res.status(400).send("Invalid email or password");
  return;
};

export const getProfile: RequestHandler = (req, res) => {
  const { id } = req.body;
  const findUserId = users.find((user) => user.id === id);
  if (findUserId) {
    res.status(200).send(findUserId);
  } else {
    res.status(404).send("user not found");
  }
};

export const getProfiles: RequestHandler = (req, res) => {
  res.status(200).send(users);
};

export const updateUser: RequestHandler = (req, res) => {
  const userId = req.params.id;
  const { name, email, password, address, role } = req.body;
  const user = users.find((user) => user.id === userId);
  if (!user) {
    res.status(404).send("User not found");
    return;
  }
  let isEdited = false;

  if (name && user.name !== name) {
    user.name = name;
    isEdited = true;
  }

  if (email && user.email !== email) {
    user.email = email;
    isEdited = true;
  }

  if (password && user.password !== password) {
    user.password = password;
    isEdited = true;
  }

  if (address && user.address !== address) {
    user.address = address;
    isEdited = true;
  }

  if (role && user.role !== role) {
    user.role = role;
    isEdited = true;
  }

  if (isEdited) {
    res.status(200).send("Profile updated successfully");
    return;
  } else {
    res.status(400).send("No changes were made");
    return;
  }
};
