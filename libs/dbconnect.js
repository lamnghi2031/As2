// Nhớ cài Mongoose
//  npm      i       --S      mongoose
const mongoose = require("mongoose");


/// Thông tin Database Collection / Tables
const userName = "dbadmin";
const userPassword = "JbUeslEXdkGRHCHD";

const dbName = "ATN_SHOP";

const url = "mongodb+srv://dbadmin:JbUeslEXdkGRHCHD@cluster0.n0wfl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

function connectDB(xURL) {
    // kết nối MongoDB bằng LIB Mongoose
    mongoose.connect(xURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) {
            console.log("\n Error !", err);
        } else {
            console.log("\n DB connected !");
        }
    });
}

module.exports = {
    connectDB: connectDB,
    xURL: url,
}