import React from "react";
import PropTypes from "prop-types";
import firebase from "firebase/app";
import "firebase/auth";

import config from "../config";
import { FirebaseAuthProvider } from "@react-firebase/auth";

const FireBaseCustom = (props) => {
  return (
    <FirebaseAuthProvider
      firebase={firebase}
      {...config}
    ></FirebaseAuthProvider>
  );
};

FireBaseCustom.propTypes = {};

export default FireBaseCustom;
