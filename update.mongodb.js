use('ecommerce');
// db.products.update({category: "Electronics"},
//     {$inc: {price: 100}}

// );

db.products.updateMany(
    {
        category: "Electronics"
    },
    {
        $set: {category:"$stock"}
    }
);
