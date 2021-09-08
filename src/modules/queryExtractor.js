import qs, { parse } from 'qs';

export const extractProperties = (location) => {

    const parsed = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });

    if(!parsed.page){
        parsed.page = 1;
    }
    if(!parsed.size){
        parsed.size = 16;
    }
    if(!parsed.sort){
        parsed.sort = 'createDate';
    }
    if(!parsed.dir){
        parsed.dir = 'desc';
    }
    return [ parsed.page, parsed.size, parsed.sort, parsed.dir, parsed.filterBy, parsed.keyword];
}