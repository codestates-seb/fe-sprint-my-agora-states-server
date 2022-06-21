import { useCallback } from "react";

const UseRequest = (url, body='', method) => {
    const callAPI = useCallback( async () => {
        const datalist = await fetch(url, {
            method: method,
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(body)
        }).then(res => res.json());
       return datalist;
    }, [url, body, method]);
    return callAPI;
};

export {UseRequest};

