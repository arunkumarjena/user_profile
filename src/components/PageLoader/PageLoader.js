import React, {FC} from 'react';

import Spinner from "../Spinner";
import "../PageLoader/PageLoader.css";

const PageLoader = () => {
    return (
        <div className="loader-container">
            <div className="loader">
                <Spinner/>
            </div>
        </div>
    );
};

export default PageLoader;
