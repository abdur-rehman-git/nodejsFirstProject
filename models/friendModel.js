const mongoose = require('mongoose');

const friendSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A friend must have a name'],
        trim: true,
    },
})

const Friend = mongoose.model("Friends", friendSchema);
module.exports = Friend;
