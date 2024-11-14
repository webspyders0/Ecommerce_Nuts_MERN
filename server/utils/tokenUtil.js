import jwt from 'jsonwebtoken';
import CryptoJS from 'crypto-js';

// to create the token 
export const createToken = (payload) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET,
        {
            expiresIn:'7d',
        });
    return token;
};

// to verify the token 
export const verifyToken = (token) => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
}

// Encryption function
export const encryptToken = (token) => {
    const secretKey = process.env.ENCRYPTION_SECRET; 
    const ciphertext = CryptoJS.AES.encrypt(token, secretKey).toString();
    return ciphertext;
};

// Decryption function
export const decryptToken = (ciphertext) => {
    const secretKey = process.env.ENCRYPTION_SECRET;
    const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
    const originalToken = bytes.toString(CryptoJS.enc.Utf8);
    return originalToken;
};
