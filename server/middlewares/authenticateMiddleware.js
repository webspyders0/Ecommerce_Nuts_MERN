import { verifyJWT } from "../utils/tokenUtil";

export const authenticateUser = async (req, res, next) => {
    // to decrypt the token from the cookie 
    const token = decryptToken(req.cookies.token);

    //TODO: remove console.log
    console.log("Cookies:", req.cookies);
    console.log("Token:", token); 

    if (!token) {
        return res.status(401).json({ msg: "Oops something went wrong" });
    }
    try {
        const { userId, role } = verifyJWT(token);
        req.user = { userId, role };
        console.log(req.user);
        next();
    } catch (error) {
        return next();
    }
};
