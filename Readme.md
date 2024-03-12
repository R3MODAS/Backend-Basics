Restful API
-----------
It is a representational state/standard way of defining API by using appropiate and proper methods `GET,POST,PUT,PATCH,DELETE` and also sending correct status codes.

MVC Model
----------
It is known as Model View Controller. `Model` means the data and the type of data we will be dealing with, `View` means showing the data in the UI, `Controllers` are function/methods that helps to write logics to show the data in UI properly 

NoSQL DB Structure
-------------------
There is a `DB Server` and inside that there is `Database` and inside it there is `Collections` and it contains one/more `Document/Documents`. The data inside the `Document` is in BSON format and the `objectId` inside the `Document` works like the concept of `Primary Key`.

DB Server -> Databases -> Collections -> Documents for NoSQL DB
DB Server -> Databases -> Tables -> Tuples for SQL DB

Commands for MongoDB
--------------------
- `show databases` for showing all the databases

- `use db_name` for creating/switching to the database

- `db.products.insertOne()` for inserting a single document inside the collection `products`

- `db.products.find()` for finding `document/documents` inside the `collection`

- `db.products.insertMany()` for inserting multiple documents inside the collection `products`

- `db.products.find({title: {$eq: "Das"}})` for finding title whose value is equal to Das and `$eq` is by default applied

- `db.products.find({rating: {$gt: 4.5}})` for finding rating whose value is greater than 4.5

- more operators such as `$gt,$lt,$gte,$lte` are used to do such operations

- `db.products.find({ $and: [{rating: {$gt: 4.5}}, {id: {$gt: 1}} ]})` says that the find the object which has rating>4.5 and id>1 as both should be satisfied and similarly we can use `$or,$and,$nor,$not`

- There are `cursor methods` in mongodb such as `sort()` helps to sort out elements and `1` means ascending and `-1` means descending,
`limit()` which helps to limit the result

- `db.products.countDocuments()` counts the number of documents that matches a certain condition

- `db.products.find({'price': {$gt: 600}}, {'title': 1, 'price': 1})` this means that find the object who has price greater than 600 but show only objectId (by default), title and price data inside the object and not bloat it with all data. 1 means true and 0 means false.

MongoDB Atlas
-------------
MongoDB Atlas Database is in cloud and it is much safe version.

JWT
---
It is json web token which is basically used as an authorization pass for user who has signed up and don't need to login again and again while they visit a website as with the help of token, they can verify themselves