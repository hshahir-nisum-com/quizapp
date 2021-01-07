import React from 'react'
import {Switch,Route} from 'react-router-dom';
import Signin from "./signin/signin";
import TestList from './testList/testList'
function main() {
    return (
            <Switch>
                <Route exact path="/" component={Signin} />
                <Route exact path="/testlist" component={TestList} />
            </Switch>
            
        
    )
}

export default main
