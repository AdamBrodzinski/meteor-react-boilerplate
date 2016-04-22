import { Meteor } from 'meteor/meteor'

import React from 'react';
import ReactDOM from 'react-dom';

import routes from '../../router/routes.js';
import MainLayout from '../../ui/containers/MainLayout.jsx'

const rootRoute = {
  component: MainLayout,
  childRoutes: routes
}

Meteor.startup(() => {
  ReactDOM.render(
    <Router routes={rootRoute} />
    document.getElementById('app')
  )
})
