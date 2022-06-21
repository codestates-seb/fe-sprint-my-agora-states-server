const UseFetch = (url) => {
    const callData = async () => {
        const datalist = await fetch(url).then(res => res.json());
        // setData(datalist);
        // return data;
        return datalist
    };
    return callData;
}

export {UseFetch};