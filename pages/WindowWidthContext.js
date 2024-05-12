import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const WindowWidthContext = createContext();

export const WindowWidthProvider = ({ children }) => {
  const [isSmallerDevice, setIsSmallerDevice] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsSmallerDevice(width < 500);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <WindowWidthContext.Provider value={isSmallerDevice}>
      {children}
    </WindowWidthContext.Provider>
  );
};
WindowWidthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useWindowWidthContext = () => {
  return useContext(WindowWidthContext);
};
