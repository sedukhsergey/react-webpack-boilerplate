import React from 'react';
import styles from './styles.module.scss';

const App = ({title}) => {
  return (
    <div className={styles.app}>
      {title}
      <h2 className={'app'}>DDDDD</h2>
    </div>
  )
};

export default App;
