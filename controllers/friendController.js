const Friend = require('../models/friendModel');

exports.createFriend = async (req, res) => {
    let doc = await Friend.create(req.body);
    res.status(200).json({
        status: "Success",
        data: { friend: doc, message: "Friend created successfully" },
    });
}

exports.getAllUsers = async (req, res) => {
    let doc = await Friend.find();
    res.status(200).json({
        status: "Success",
        data: {friends: doc, message: "Get all users successfully"},
    });
}

exports.getOneFriend = async (req, res) => {
    let friend = await Friend.findById(req.params.id);
    res.status(200).json({
        status: "Success",
        data: {friends: friend, message: "Get friend by id successfully"},
    });
}

exports.updateOneFriend = async (req, res) => {
    let friend = await Friend.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json({
        status: "Success",
        data: {friends: friend, message: "Update friend by id successfully"},
    });
}

exports.deleteOneFriend = async (req, res) => {
    let friend = await Friend.findByIdAndDelete(req.params.id);
    res.status(200).json({
        status: "Success",
        data: {friends: friend, message: "Delete friend by id successfully"},
    });
}
