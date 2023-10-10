export const getData = async (url, cbSuccess, cbError) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        cbSuccess(data);

    } catch (err) {
        // cbError(err);
    }
}