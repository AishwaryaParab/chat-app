import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    // sign(payload, secret to sign the key, options)
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '15d'
    });

    res.cookie('jwt', token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // in ms
        httpOnly: true, // prevent XSS attacks (cross-site scripting attacks)
        sameSite: "strict", // prevent CSRF attacks (cross-site request forgery)
        secure: process.env.NODE_ENV !== "development" // secure is 'true' only in production (https)
    });
}

export default generateTokenAndSetCookie;

// We add httpOnly so that the cookie is not accessible via plain javascript and is only accessible in the browser