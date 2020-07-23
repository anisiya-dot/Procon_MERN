import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import { SupervisorRole } from '../enums/roles';
import supervisorRoutes from '../routes/supervisorRoutes';
import TopNavbar from '../components/layout/TopNavbar';
import SideMenu from '../components/layout/SideMenu';

const switchRoutes = (
    <Switch>
        {
            supervisorRoutes.map((route, key) => (
                <Route
                    key={key}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))
        }
    </Switch>
);

const SupervisorContainer = () => {
    const token = useSelector(state => state.auth.token);
    const user = useSelector(state => state.auth.user);
    return (
        <div id="wrapper">
            {user && <TopNavbar />}
            {user && <SideMenu />}
            <div className="content-page">
                <div className="content">
                    <div className="container-fluid">
                        <div className="row space-top">
                            {token && user && user.role === SupervisorRole ? switchRoutes : <Redirect to={`/authentication/sign-in`} />}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default SupervisorContainer;