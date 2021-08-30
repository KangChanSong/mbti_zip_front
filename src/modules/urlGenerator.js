import qs from 'qs';

export const createListUrlWithQuery = (query, type) => {
    let parsed = qs.parse(query, {
        ignoreQueryPrefix: true,
    });

    if(!parsed.page && !parsed.size ){
        parsed = {
            ...parsed,
            page : 1,
            size : 16
        }
    }   
    if(!parsed.sort && !parsed.dir){
        parsed = {
            ...parsed,
            sort : 'createDate',
            dir : 'desc',
        }
    } 

    const { page, size, sort, dir, keyword, filterBy } = parsed;


    let url = "/" + type
    + "/api/v1/list?page=" + page
    + "&size=" + size
    + "&sort=" + sort
    + "&dir=" + dir;

    if(keyword){
        url += "&keyword=" + keyword;
    }
    if(filterBy){
        url += "&filterBy=" + filterBy;
    }
    
    return url;
}

export const splitUrlWithQueryObject = (forWhat, object) => {

    let url = new URL(window.location.href);
    let params = url.searchParams;

    if(forWhat === 'page'){
        params.set('page', object[page]);
        params.set('size', object[size]);
    }
    if (forWhat === 'sort'){
        params.set('sort', object[sort]);
        params.set('order', object[order]);
    }
    if( forWhat === 'search'){
        params.set('filterBy', object[filterBy]);
        params.set('keyword', object[keyword]);
    }

    return url.toString();
}