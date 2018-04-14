/**
 * Created by mayomi on 4/14/18 by 9:59 AM.
 */
const cloudinary = require('cloudinary');
const config = require('../config/main');

exports.getImage = (req, res) => {
    cloudinary.config({
        cloud_name: config.cloud_name,
        api_key: config.api_key,
        api_secret: config.api_secret
    });

    let imageThumb = cloudinary.image('mewKL_isue59.jpg',
        {
            width: 300,
            height: 300,
            crop: "scale"
        });

    return res.send(imageThumb);
};
