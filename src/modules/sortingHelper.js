export const desc = "desc";
export const asc= "asc"
export const createDate = "createDate";
export const updateDate = "updateDate";
export const likes = "likes";
export const views = "views";

export const getSortText = (sort, dir) => {
        sort = sort.toString();
        if(sort === createDate){
                if(dir === desc){
                        return "최근순"
                }
                if(dir === asc){
                        return "오래된순"
                }       
        }
        if(sort === likes){
                if(dir === desc){
                        return "좋아요 많은 순"
                }
                if(dir === asc){
                        return "좋아요 적은 순"
                }
        }
        if(sort === views){
                if(dir === desc){
                        return "조회수 많은 순"
                }
                if(dir === asc){
                        return "조회수 적은 순"
                }
        }
}
