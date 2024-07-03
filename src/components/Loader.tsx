import React from 'react';
import styles from '../app/layout.module.css'; // Adjust the path as needed

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderLine}></div>
    </div>
  );
};

export default Loader;