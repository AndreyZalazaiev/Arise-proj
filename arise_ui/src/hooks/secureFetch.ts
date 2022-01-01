import {useKeycloak} from "@react-keycloak/web";

type RequestInfo = string | Request;
export const baseUrl = process.env.REACT_APP_API_URL;

export function secureFetch<T>(token: string): (r: RequestInfo) => Promise<T> {
    return async (request: RequestInfo) => {
        let r = request;
        if (typeof request === 'string') {
            r = new Request(baseUrl + request, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        }
        const response = await fetch(r);
        return await response.json();
    };
}

export function useFetch<T>(
    requestType?: string
): (r: RequestInfo) => Promise<T> {
    return async (request: RequestInfo) => {
        let r = request;
        if (typeof request === 'string') {
            r = new Request(baseUrl + request);
        }
        const response = await fetch(r);
        if (requestType === 'text') {
            return response.text();
        }
        return response.json();
    };
}

export function useSecureFetch<T>(
    requestType?: string
): (r: RequestInfo) => Promise<T> {
    const {keycloak} = useKeycloak();
    const {token} = keycloak;
    if (!token) throw new Error("Authorization failed");

    return async (request: RequestInfo) => {
        let r = request;
        if (typeof request === 'string') {
            r = new Request(baseUrl + request, {
                headers: getAuthHeader(token),
            });
        }
        const response = await fetch(r);
        if (requestType === 'text') {
            return response.text();
        }
        return response.json();
    };
}

export function useSecureDelete(): (r: RequestInfo) => Promise<number> {
    const {keycloak} = useKeycloak();
    const {token} = keycloak;
    if (!token) throw new Error("Authorization failed");

    return async (request: RequestInfo) => {
        let r = request;
        if (typeof request === 'string') {
            r = new Request(baseUrl + request, {
                headers: getAuthHeader(token),
                method: 'DELETE',
            });
        }
        const response = await fetch(r);
        return response.status;
    };
}

export function useSecureFormPost<T>(): (
    url: string,
    params: Record<string, string>
) => Promise<T> {
    const {keycloak} = useKeycloak();
    const {token} = keycloak;
    if (!token) throw new Error("Authorization failed");
    return async (url: string, params: Record<string, string>) => {
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Bearer ${token}`,
        };
        const r = new Request(baseUrl + url, {
            method: 'POST',
            headers: headers,
            body: new URLSearchParams(params).toString(),
        });
        const response = await fetch(r);
        return await response.json();
    };
}

export function useSecureJSONPost<T>(): (
    url: string,
    params: Object,
    returnType?: string
) => Promise<T> {
    const {keycloak} = useKeycloak();
    const {token} = keycloak;
    if (!token) throw new Error("Authorization failed");
    return async (url: string, params: Object, returnType?: string) => {
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        };
        const r = new Request(baseUrl + url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(params),
        });
        const response = await fetch(r);

        if (returnType === 'text') {
            return response.text();
        }

        const body = await response.json();
        body.responseStatus = response.status;
        return body;
    };
}

export const getAuthHeader = (token: string) => {
    return {
        'Authorization': `Bearer ${token}`,
    }
}
