import qs from 'qs';

export const extractPageAndSize = (location) => {

    const parsed = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });

    if(!parsed.page){
        parsed.page = 1;
    }
    if(!parsed.size){
        parsed.size = 16;
    }

    console.log(parsed);

    return parsed;
}