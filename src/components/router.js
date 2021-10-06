import { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import PersonalDetails from './personalDetails';
import CompanyDetails from './companyDetails';
import EmailVerifications from './emailVerifications';

class Routers extends Component
{
    render() {
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <Route path='/' exact component={PersonalDetails} />
                        <Route path='/CompanyDetails' component={CompanyDetails} />
                        <Route path='/EmailVerifications' component={EmailVerifications} />
                    </Switch>
                </Router>
            </div>
        )
    }
}
export default Routers;