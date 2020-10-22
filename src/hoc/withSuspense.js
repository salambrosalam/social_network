import React, {Component} from "react";
import Loader from "../components/Loader/Loader";

export const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<Loader/>}><Component {...props}/></React.Suspense>
    }
}