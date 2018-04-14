/**
 * Created by mayomi on 4/13/18 by 4:12 PM.
 */

// Set user info from request
exports.setUserInfo = function setUserInfo(request) {
    const getUserInfo = {
        _id: request._id,
        email: request.email,
    };

    return getUserInfo;
};