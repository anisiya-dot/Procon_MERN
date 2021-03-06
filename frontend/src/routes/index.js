import React from 'react'
import { Redirect } from 'react-router-dom';

import EngineerContainer from '../containers/EngineerContainer';
import MemberContainer from '../containers/MemberContainer';
import ManagerContainer from '../containers/ManagerContainer';
import SupervisorContainer from '../containers/SupervisorContainer';

import AuthenticationContainer from "../containers/AuthenticationContainer";

const indexRoutes = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to={`/authentication/sign-in`} />
    },
    {
        path: '/authentication',
        component: AuthenticationContainer
    },
    {
        path: '/engineer',
        component: EngineerContainer
    },
    {
        path: '/member',
        component: MemberContainer
    },
    {
        path: '/manager',
        component: ManagerContainer
    },
    {
        path: '/supervisor',
        component: SupervisorContainer
    }
];
export default indexRoutes;