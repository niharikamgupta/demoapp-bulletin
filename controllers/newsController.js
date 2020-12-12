var News = require('../models/News');
const mongoose = require('mongoose');

// Return Detail of News.
exports.newsDetail = async function(req, res, next) {
    var newsId = req.params.id
    if(newsId != '' && typeof(newsId) != undefined && newsId != null) {
        validNewsId = mongoose.Types.ObjectId.isValid(newsId);
        if(validNewsId == false) return res.status(404).json({ error : "Invalid News Id", status : 404 });
        let newsData = await News.find({_id:newsId});
        res.send({ data : newsData, status : 200 });
    } else {
        let newsData = await News.find({});
        res.send({ data : newsData, status : 200 });
    }
};

