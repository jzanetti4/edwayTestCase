import React from 'react'
import {connect} from "react-redux";

@connect(state=>state.searchReducer)
 class Search extends React.Component{
    constructor(props){
        super(props)
        this.handler=this.handler.bind(this)
    }

    handler(v){
        this.props.dispatch({type:'searchRequest',payload:v.target.value})

    }

    render() {
        // const resultItems = this.props.result?this.props.result:null;
        // console.log(resultItems)
        const listItems=this.props.result?this.props.result.map((item) =>
            <dt><a href={item.project_url}>{item.project_name}</a>
                <dd>stargazers_count={item.stargazers_count}</dd>
                <dd>watchers_count={item.watchers_count}</dd>
            </dt>):null

        // const listItems = resultItems.map((item) =>
        //     <li><a href={item.project_url}/>
        //     stargazers_count={item.stargazers_count}
        //     watchers_count={item.watchers_count}
        //     </li>)



        return (
            <div>
                <input type="text"  onChange={v=>this.handler(v)} placeholder="search here..."/>
                <ul>{listItems}</ul>
            </div>
        );
    }
}

export default Search