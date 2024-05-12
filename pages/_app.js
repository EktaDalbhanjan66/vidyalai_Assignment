import React from 'react';
import { WindowWidthProvider } from './WindowWidthContext';

const App = ({ Component, pageProps }) => (
  <React.Fragment>
    {/* applying the windowWidth context to provide the isSmallerDevice value */}
    <WindowWidthProvider>
      <Component {...pageProps} />
    </WindowWidthProvider>
  </React.Fragment>
);

export default App;
