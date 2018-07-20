import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'

// Components
    import Home from '../components/Home'
    import Projects from '../components/Projects'
    import NoMatch from '../components/NoMatch'

export default () => (
        <Fragment>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/projects" exact component={Projects}/>
                <Route component={NoMatch}/>
            </Switch>
        </Fragment>
)
