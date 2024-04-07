var mongoose = require('mongoose');

var bookingSchema = mongoose.Schema({
    sendername: String,
    sendermobile: Number,
    sendercountry: String,
    senderstate: String,
    sendercity: String,
    senderpincode: Number,
    senderaddress: String,
    recievername: String,
    recievermobile: Number,
    recievercountry: String,
    recieverstate: String,
    recievercity: String,
    recieverpincode: Number,
    recieveraddress: String,
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
})

module.exports = mongoose.model("booking", bookingSchema);