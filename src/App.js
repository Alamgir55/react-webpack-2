import React, { Component, Suspense } from 'react';
import { Link, Route } from 'react-router-dom';

import Users from './containers/Users';

const AsyncPizza = React.lazy(() => import('./containers/Pizza'));

class App extends Component {
    render () {
        return (
            <div>
                <div>
                    <Link to="/">Users</Link>
                    <Link to="/pizza">Pizza</Link>
                </div>
                <div>
                    <Suspense fallback={<div>Loading....</div>}>
                        <Route path="/" exact component={Users} />
                        <Route path="/pizza" component={AsyncPizza} />
                    </Suspense>
                </div>
            </div>
        )
    }
}

export default App;