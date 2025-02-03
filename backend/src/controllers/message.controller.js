import User from "../models/user.model.js";
import Message from "../models/message.model.js";
import cloudinary from "../lib/cloudinary.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const users = await User.find({ _id: { $ne: loggedInUserId } });
    res.status(200).json(users);
  } catch (error) {
    console.error("Error in getting users for sidebar" + error);
    res.status(500).json({ message: "Internal Server Error" + error });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const loggedInUserId = req.user._id;

    const messages = await Message.find({
      $or: [
        { senderId: loggedInUserId, receiverId: userToChatId },
        { senderId: userToChatId, receiverId: loggedInUserId },
      ],
    });

    res.status(200).json(messages);
  } catch (error) {
    console.error("Error in getting messages" + error);
    res.status(500).json({ message: "Internal Server Error" + error });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const { text, image } = req.body;
    const loggedInUserId = req.user._id;

    let imageUrl;
    if (image) {
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageUrl = uploadResponse.secure_url;
    }

    const newMessage = new Message({
      senderId: loggedInUserId,
      receiverId: userToChatId,
      text,
      image: imageUrl,
    });

    await newMessage.save();

    //Real time functionality here => soctet.io

    res.status(201).json(newMessage);
  } catch (error) {
    console.error("Error in sending message" + error);
    res.status(500).json({ message: "Internal Server Error" + error });
  }
};
