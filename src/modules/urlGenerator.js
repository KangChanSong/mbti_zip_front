import qs from 'qs';

export default createListUrlWithQuery = (query, type) => {
    const query = qs.parse(query, {
        ignoreQueryPrefix: true,
    });

    let url = "/" + type
    + "/api/v1/list?page=" + qs.page
    + "&size=" + qs.size
    + "&sort=" + qs.sort
    + "&dir=" + qs.dir;

    if(qs.keyword){
        url += "&keyword=" + qs.keyword;
    }
    if(qs.filterBy){
        url += "&filterBy=" + qs.filterBy;
    }
    
    return url;
}