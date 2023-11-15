import jwt from 'jsonwebtoken';
import { JWT_KEY } from '../config/environment';

export const jwtService = {
    signToken: (payload: string | object | Buffer, expiration: string) => {
        return jwt.sign(payload, JWT_KEY, {
            expiresIn: expiration
        });
    },

    verifyToken: (token: string, callbackFn: jwt.VerifyCallback) => {
        jwt.verify(token, JWT_KEY, callbackFn);
    }
}