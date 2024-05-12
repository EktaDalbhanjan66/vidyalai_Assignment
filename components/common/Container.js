import React from 'react';
import useWindowWidth from '../hooks/useWindowWidth';
import { useWindowWidthContext } from '../../pages/WindowWidthContext';

export default function Container({ children }) {
  // const { isSmallerDevice } = useWindowWidth();
  const isSmallerDevice = useWindowWidthContext();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
      }}
    >
      <div style={{ width: isSmallerDevice ? '95%' : '85%' }}>{children}</div>
    </div>
  );
}
