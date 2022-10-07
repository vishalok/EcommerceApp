module.exports = {
    mysql:{
        prod:{
            host: "relevel-ecommerce.cvyl0jb1nhb0.ap-south-1.rds.amazonaws.com", //"localhost",
            user: "relevel", //"root",
            password: "Ecommerce#2021", //"1234",
            database: "ecommercedb" //"ecommercedb"
        },
        local:{
            host:"localhost",
            user:"root",
            password:"1234",
            database:"ecommerce"
        }
    }
}