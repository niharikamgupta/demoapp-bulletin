# demoapp-bulletin 

This is a simple Express app made for demo news application.

### Prerequisites
Make sure you have [Node.js](http://nodejs.org/) and the [MongoDB](https://www.mongodb.com/) installed.

To run this application, you'll need to follow below steps:

* Clone this repository:

      $ git clone https://github.com/niharikamgupta/demoapp-bulletin.git
      $ cd demoapp-bulletin
* Install all dependencies:
      
      $ npm install
      
* Seeding sample Data in DB:

      $ npm run seed

* Run Application:

      $ npm start
      
Application should now be running on [localhost:3000](http://localhost:3000/).

### Postman Collection Link 
Below is the postman collection link for Asked APIs. 

***PC Link : https://www.getpostman.com/collections/e5d2410fc3dc4d65e3c1***

* News Detail API:
  http://localhost:3000/news/detail/<id_of_news_article>
  
  **id_of_news_article : please provide Object Id of any news article from collection: news**
  
  **Note : If news id is not provided, API will return by default response of all news data.**
  
 * Category Listing API:
   http://localhost:3000/category
   
   Request body : { "categoryIds" : ["<category_id1>","<category_id2>",....] }
   
   Ex : {"categoryIds":["5fd4e48fc989f972575bdcec","5fd4e48fc989f972575bdced","5fd4e48fc989f972575bdcee","5fd4e48fc989f972575bdcef","5fd4e48fc989f972575bdcf0"]}
   
   **categoryIds : please provide Object Id of category from collection: categories**
   
   **Note : If categoryIds is empty, API will return by default response of all category data.**
   
  
      
