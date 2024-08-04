import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt; // first, use the cookie-parser middleware
        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No Token Provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET); // we get the payload back
        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized - No Token Provided" });
        }

        const user = await User.findById(decoded.userId).select("-password");
        if (!user) {
            return res.status(401).json({ error: "User not found" });
        }

        req.user = user;
        next();
    } catch(err) {
        console.error("Error in protect route middleware: ", err.message);
        res.status(500).json({ error: "Internal Server Error "});
    }
}

export default protectRoute;