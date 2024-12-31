import React from 'react';
import styles from '../css/components/bento/bentogrid.module.css';

const Bento = ({ children }) => {
  return <section className={styles.bento}>{children}</section>;
};

export default Bento;
