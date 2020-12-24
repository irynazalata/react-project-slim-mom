
import Loader from 'react-loader-spinner';
import React from 'react';
import classes from "./Loader.module.css";

export default class Loaders extends React.Component {

  render() {
    return (
      <Loader
        type="Grid"
        color="green"
        height={100}
        width={100}
        timeout={3000}
        className={classes.loader}
        />
    );
  }
}