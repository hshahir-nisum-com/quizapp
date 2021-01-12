import React from 'react'
import {Switch,Route} from 'react-router-dom';
import Signin from "./signin/signin";
import TestList from './testList/testList'
import Question  from "./question/questions";
function main() {
    return (
            <Switch>
                <Route exact path="/" component={Signin} />
                <Route exact path="/testlist" component={TestList} />
                <Route exact path="/questions" component={Question} />
            </Switch>
            
        
    )
}

export default main
