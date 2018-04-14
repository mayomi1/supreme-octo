require('dotenv').config();
module.exports = {
    'database': process.env.DATABASE,
    'port': process.env.PORT || 3000,
    'secret': process.env.JWT_SECRET,

    //cloudinary config
    'cloud_name': process.env.CLOUD_NAME,
    'api_key': process.env.API_KEY,
    'api_secret': process.env.API_SECRET,
};