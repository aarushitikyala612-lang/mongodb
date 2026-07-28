use('ecommerce');

db.orders.deleteMany(
    {status:"Delivered"}
);
//delete any item which has price less than 20

db.products.deleteMany(
    {
        price:{$lt: 20}
    }
);