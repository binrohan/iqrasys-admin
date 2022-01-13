const BASE_URL = `http://localhost:5000`;
const COMMON_HEADERS = {
    'Access-Control-Allow-Origin': "*",
    "Content-Type": "application/json"
}

const storeUser = (user: {}, token: string) => {
    localStorage.setItem('USERV1.0', JSON.stringify(user));
    localStorage.setItem('TOKENV1.0', token);
}

export const isLoggedIn = async () => {
    const tokenJSON = localStorage.getItem('TOKENV1.0');
    if(!tokenJSON){
        localStorage.removeItem('USERV1.0');
        throw new Error("User not authenticated");
    }

    const token = JSON.parse(tokenJSON);
    return tokenExpirationCheck(token);
}

export const login = async (payload: {username: string, password: string}) => {
    const res = await fetch(`${BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
            ...COMMON_HEADERS
        },
        body: JSON.stringify(payload)
    });

    if(res.status > 299 || res.status < 200){
        throw new Error(res.statusText);
    }

    const data = await res.json();

    storeUser(data, res.headers.get('X-Authorization-Token'));    

    return data;
}

const tokenExpirationCheck = async (token: string) => {
    const res = await fetch(`${BASE_URL}/api/check`, {
        method: 'POST',
        headers: {
            ...COMMON_HEADERS,
            Authorization: token
        }
    });

    if(res.status === 401)
        throw new Error("User authentication sesson over.");

    if(res.status !== 200)
        throw new Error(res.statusText);
    

    const data = await res.json();   

    return data;
}