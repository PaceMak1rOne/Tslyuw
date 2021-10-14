import React from 'react';
// import logo from './logo.svg';
import styles from './App.module.css';
import{ Footer , Header } from './commponent'


function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
