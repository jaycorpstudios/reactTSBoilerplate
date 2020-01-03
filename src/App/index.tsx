import React from 'react';
import PropTypes from 'prop-types';
import '../theme/globals.scss';
import styles from './app.module.scss';

const reactLogo = require('../theme/images/react-logo.svg');

type AppProps = {
  title: string
}

const App: React.SFC<AppProps> = ({ title }) => (
  <div className={styles.main}>
    <h1 className={styles.title}>{title}</h1>
    <img className={styles.logo} src={reactLogo} alt="React Logo" />
  </div>
);

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
