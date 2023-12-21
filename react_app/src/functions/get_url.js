function get_url() {
    let url = window.location.pathname;
    if (url[0] === "/") {
        url = url.substring(1);
    }
    if (url[url.length - 1] === "/") {
        url = url.substring(0, url.length - 1);
    }
    const urlSplit = url.split("/");

    const params = {};
    Object.keys(urlSplit).forEach((index) => {
        params[index] = urlSplit[index];
    });

    const { href } = window.location;
    params.href = href;
    if (href.indexOf("?") > -1) {
        const postParams = href.split("?")[1];
        const splitParams = postParams.split("&");

        Object.keys(splitParams).forEach((index) => {
            const temp = splitParams[index];
            const tempSplit = temp.split("=");

            const [firstSplit, secondSplit] = tempSplit;
            params[firstSplit] = secondSplit;
        });
    }

    return params;
}

export default get_url;
