const mongoose = require('./mongoose');
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
    name: String,
    slug: String,
    description: String,
    thumbImgUrl : String,
    fullImgUrl : String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    categoryId: {type: Schema.ObjectId, ref: 'categories'},
    // categoryname: String
});

module.exports = User = mongoose.model('News', NewsSchema);
