import React from 'react'
import { render } from 'react-dom'

import AppRoutes from './js/components/AppRoutes'

window.React = React;

render(
  <AppRoutes />,
  document.getElementById('react-container')
);