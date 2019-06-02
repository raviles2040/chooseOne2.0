import Loader from "../Loader/loader";
import React from "react";

const utils = {
    showLoader:  (that) => {
        that.setState({
            loader: <Loader/>
        })
    },
    hideLoader: (that) => {
         that.setState({
             loader:null
         })
    }
};


export default utils;