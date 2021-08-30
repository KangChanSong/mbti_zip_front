import qs from 'qs';

export const createListUrlWithQuery = (search, baseUrl) => {

    const parsed = qs.parse(search, {
        ignoreQueryPrefix: true
    });

    if(!parsed.page && !parsed.size ){
        parsed.page = '1';
        parsed.size = '16';
    }   
    if(!parsed.sort && !parsed.dir){
        parsed.sort = 'createDate';
        parsed.dir = 'desc';
    }
    
    let url = baseUrl 
        + "?page=" + parsed.page
        + "&size=" + parsed.size
        + "&sort=" + parsed.sort
        + "&dir=" + parsed.dir;
    
    if(parsed.keyword && parsed.filterBy){
        url += "&keyword=" + parsed.keyword + "&filterBy=" + parsed.filterBy;
    }
    return url;
}

export const createQueryWithCondition = (forWhat, object) => {

    let url = new URL(window.location.href);
    let params = url.searchParams;
    if(forWhat === 'page'){
        params.set('page', object.page);
        params.set('size', object.size);
    }
    if (forWhat === 'sort'){
        params.set('sort', object.sort);
        params.set('dir', object.dir);
    }
    if( forWhat === 'search'){
        params.set('filterBy', object.filterBy);
        params.set('keyword', object.keyword);
    }

    return window.location.pathname + "?" + params.toString();
}