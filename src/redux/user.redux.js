
export const SUCCESS_QUERY='SUCCESS_QUERY'
export const NO_FOUND='NO_FOUND'
export const ERROR='ERROR'

const init_state={

    errorMsg:null,
    result:null
}


export function searchReducer(state=init_state,action) {
    switch (action.type) {
        case SUCCESS_QUERY:
            return {...state,result:action.payload}
        case NO_FOUND:
            return {...state,result:null}
        case ERROR:
            return {...state,errorMsg:action.msg}
        default:
            return {state}
    }
}
