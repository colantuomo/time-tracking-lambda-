import { jwtVerify } from 'jose';
import { JwtValues } from '../interfaces';

const secret = new TextEncoder().encode(process.env.SECRET_KEY)

export async function validateJWT(token: string) {
    try {
        const { payload, protectedHeader } = await jwtVerify(token, secret);
        return {
            isValid: true,
            payload: payload as JwtValues,
            protectedHeader
        };
    } catch (error: any) {
        return {
            isValid: false,
            error: error?.message
        };
    }
}