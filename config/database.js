// exports.DATABASE_URL =
//   process.env.DATABASE_URL ||
//   global.DATABASE_URL ||
//   // "mongodb://cre8visionsllc:adminpassword@basereactapi-shard-00-00-eybnz.mongodb.net:27017,basereactapi-shard-00-01-eybnz.mongodb.net:27017,basereactapi-shard-00-02-eybnz.mongodb.net:27017/baseapi?ssl=true&replicaSet=BaseReactApi-shard-0&authSource=admin&retryWrites=true&w=majority";

exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/8080';
exports.PORT = process.env.PORT || 8080;



