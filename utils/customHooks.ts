import { useState, useEffect } from 'react';
import CookieManager from './cookieManager';
import JWTDecoder from './jwtDecoder';

export default function useAuth(){
    const [decodedUser, setDecodedUser] = useState<any>(null);

    useEffect(() => {
        if (typeof window !== undefined) {
            const jwt = CookieManager.getCookie("jwt");
            if (jwt) {
                const decoded = JWTDecoder.decode(jwt as string)
                setDecodedUser(decoded);
            }
        }
    }, []);

    return decodedUser;
}