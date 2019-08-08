import { put, call, take,fork,takeEvery, takeLatest  } from 'redux-saga/effects';
import {SUCCESS_QUERY,NO_FOUND,ERROR} from '../redux/user.redux'
import axios from "axios";


//this method for worker
function* searchItem(action) {
    try{
        const url='https://api.github.com/search/repositories'
        const api=(payload)=>{
            return   axios.get(url,{params:{
                    q:payload
                }}).then(res=>{
                    console.log(res)
                   return res
            })
        }
        const {data}=yield call(api,action.payload)
        let result=[]
        data.items.map(v=>{
           result=[...result,{project_name:v.full_name,project_url:'https://github.com/'+v.full_name,stargazers_count:v.stargazers_count,watchers_count:v.watchers_count}]}
        )
        // console.log(data.items[0].stargazers_count)
        // console.log(data.items[0].watchers_count)
        // console.log('https://github.com/'+data.items[0].full_name)
        // console.log(data.items)
        // console.log(typeof(data.items) )
        //console.log(result)
        yield put({type: SUCCESS_QUERY, payload:result}) //发起一个action，类似于dispatch
    }catch (error) {
        yield put({type: ERROR, msg:error });
    }
}


//this is for monitoring
export default function* rootSaga() {
    const action=yield takeLatest('searchRequest', searchItem);
}