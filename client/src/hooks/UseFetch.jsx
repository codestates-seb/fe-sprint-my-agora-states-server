const UseFetch = (url) => {
    const callData = async () => {
        const datalist = await fetch(url).then(res => res.json());
        return datalist
    };
    return callData;
}

export {UseFetch};