import Preloader from "../components/Users/preloader/Preloader";
import React from "react";

const withSuspense = (Component) => {
    return (props) => {
       return (
           <React.Suspense fallback={<Preloader />}>
               <Component {...props} />
           </React.Suspense>
       )
    }
}

export default withSuspense;