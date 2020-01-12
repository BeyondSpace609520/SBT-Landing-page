import React from 'react';

import './with-spinner.styles.scss';

const LoadingBar = () => {
  return (
    <div className='SpinnerOverlay'>
      <div className='SpinnerContainer' />
    </div>
  );
};

export default LoadingBar;
