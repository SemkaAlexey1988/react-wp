import React from 'react';
import { render } from 'react-dom'
import 'font-awesome/css/font-awesome.min.css';




import * as serviceWorker from './serviceWorker';
import Application from './Application';

  render(
<Application />,
	document.getElementById('root')
    )
	
	serviceWorker.unregister();