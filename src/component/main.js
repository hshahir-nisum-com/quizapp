import React from 'react'
import {Switch,Route} from 'react-router-dom';
import Signin from "./signin/signin";
import TestList from './testList/testList'
import Question  from "./question/questions";
import Result from "./result/result";
function main() {
    return (
            <Switch>
                <Route exact path="/" component={Signin} />
                <Route exact path="/testlist" component={TestList} />
                <Route exact path="/JStest" component={Question} />
                <Route exact path="/reacttest" component={Question} />
                <Route exact path="/result" component={Result} />
            </Switch>
            
        
    )
}

export default main
