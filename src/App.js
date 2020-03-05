import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import Users from './containers/users';
import Pizza from './containers/pizza';
import asyncComponent from './hoc/asyncComponent';

const AsyncPizza = asyncComponent(()=>{
    return import('./containers/pizza');
});

class App extends Component {
    render () {
        return(
            <div>
                <div>
                    <Link to='/'>Users</Link>
                    <Link to='/pizza'>Pizza</Link>
                </div>
                <div>
                    <Route path='/' exact component={Users} />
                    <Route path='/' exact component={AsyncPizza} />
                </div>
            </div>
        );
    }
}