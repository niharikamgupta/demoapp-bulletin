const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoriesSchema = new Schema({
    // _id: Schema.Types.ObjectId,
    name: String,
    slug : String,
    content: String,
    imgUrl : String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
});

module.exports = User = mongoose.model('Categories', CategoriesSchema);
