const User = require("./../models/userModel");

//1) ADD NEW USER INFORMATION
const addUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    res.status(201).json({
      status: 1,
      message: `user created successfully`,
      data: { user: newUser },
    });
  } catch (err) {
    res.status(404).json({ status: 0, message: err });
  }
};

//2) GET A USER INFORMATION
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json({ status: 1, data: { user } });
  } catch (err) {
    res.status(404).json({ status: false, message: "User not found! :(" });
  }
};

//3)UPDATE USER INFORMATION
const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 1,
      message: `User data updated successfully`,
      data: { user },
    });
  } catch (err) {
    res.status(404).json({ status: false, message: err });
  }
};

//4) DELETWE USER INFROMATION
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res
      .status(204)
      .json({ status: 1, message: "User data successfully deleted" });
  } catch (err) {
    res.status(404).json({ status: false, message: err });
  }
};

//5)GET ALL USERS
const getAllUsers = async (req, res) => {
  try {
    // console.log(req.query);
    let email = query.email
    let password = query.password
    const users = await User.find({email},{password});
    res
      .status(200)
      .json({ status: true, length: users.length, data: { users } });
  } catch (err) {
    res.status(404).json({ status: false, message: err });
  }
};

module.exports = { addUser, getUser, updateUser, deleteUser, getAllUsers };
