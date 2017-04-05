import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'

import AppRoutes from './js/components/AppRoutes'

import jobStore from './js/stores/JobStore'

const stores = { jobStore };

window.React = React;

render(
  <Provider {...stores}>
    <AppRoutes />
  </Provider>,
  document.getElementById('react-container')
);