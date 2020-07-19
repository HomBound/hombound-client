import React from "react";
import Banner from "./Banner";
import StepHolder from "./StepHolder";
import ZipHolder from "./ZipHolder";
import Pictures from "./Pictures";

import '../../Assets/mobirise-icons/mobirise-icons.css';
import "../../Assets/bootstrap/css/bootstrap.min.css";
import "../../Assets/bootstrap/css/bootstrap-grid.min.css";
import "../../Assets/bootstrap/css/bootstrap-reboot.min.css";
import "../../Assets/bootstrap/css/bootstrap.min.css";
import '../../Assets/socicon/css/styles.css';
import "../../Assets/theme/css/style1.css";


function HomePage () {
    return(
    <section >
        <Banner/>
        <ZipHolder/>
        <StepHolder/>
        <Pictures/>
    </section>);
};



export default HomePage;