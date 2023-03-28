import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import './index.css';
import App from './App';
import { Provider } from './context/context';

ReactDOM.render(
  <SpeechProvider appId="1d63b50f-45b0-43aa-8661-a6787c1386aa" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root'),
);

