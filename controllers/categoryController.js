

var Category = require('../models/Categories');
var News = require('../models/News');
const mongoose = require('mongoose');

// Return Detail of News.
exports.getCategories = async function(req, res, next) {

    var catIds = req.body.categoryIds;
    var response = []

    if(catIds != '' && typeof(catIds) != undefined && catIds != null) {
        //iterate array of cat ids fetched from req body
        for (let index = 0; index < catIds.length; index++) {
            validCategoryId = mongoose.Types.ObjectId.isValid(catIds[index]);
            if(validCategoryId == false) return res.status(404).json({ error : "Invalid Category Id :"+catIds[index], status : 404 });
            let catData = await Category.find({_id:catIds[index]}).lean();
            if(Object.keys(catData).length != 0){
                catData = catData[0];
                let newsData = await News.find({categoryId:catIds[index]}).limit(5).lean();
                catData['newsCount'] = newsData.length
                catData['newsData'] = newsData
                response.push(catData)
            } else return res.status(404).json({ error : "Invalid Category Id :"+catIds[index], status : 404 });
        }
        res.send({ data : response, status : 200 });
    } else {
        //if cat ids array is not empty/sent; by default return all categories data along with all news
        let allCatData = await Category.find({}).lean();
        
        for (let index = 0; index < allCatData.length; index++) {
            let catData = allCatData[index];
            let newsData = await News.find({categoryId:catData['_id']}).lean();
            catData['newsCount'] = newsData.length
            catData['newsData'] = newsData
            response.push(catData)
        }
        res.send({ data : response, status : 200 });
    }
};