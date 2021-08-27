import Main from '../main/Main';

// action : SET_CHILD 
const SET_CHILDREN = 'layout/SET_CHILDREN';

// 상태: 레이아웃 child
const initialState = {
    children : <Main />
}

// action 생성 함수
export const setChildren = children => {
    return ({type : SET_CHILDREN, children})
}

// 구독 

// 리듀서
export default function layout(state = initialState, action){

    switch (action.type) {
        case SET_CHILDREN:
            return {
                ...state,
                children : action.children
            };
        default:
            return state;
    }
}