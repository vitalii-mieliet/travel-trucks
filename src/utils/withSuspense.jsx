import { LinearProgress } from "@mui/material";
import React, { Suspense } from "react";

const withSuspense = (Component, Fallback = null) => {
  return class extends React.Component {
    render() {
      if (!Fallback) Fallback = <LinearProgress />; // by default
      return (
        <Suspense fallback={Fallback}>
          <Component {...this.props} />
        </Suspense>
      );
    }
  };
};

export default withSuspense;
