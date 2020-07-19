import React from "react";
import '../../Assets/mobirise-icons/mobirise-icons.css';
import "../../Assets/bootstrap/css/bootstrap.min.css";
import "../../Assets/bootstrap/css/bootstrap-grid.min.css";
import "../../Assets/bootstrap/css/bootstrap-reboot.min.css";
import "../../Assets/bootstrap/css/bootstrap.min.css";
import "../rootComp/Style.css";
import '../../Assets/socicon/css/styles.css';
import "../rootComp/Style.css";
import "../../Assets/mobirise/css/mbr-additional.css";
import "../../Assets/theme/css/style.css";
import { Steps1 , Steps2, Steps3} from "./Steps";
 


const StepHolder = props => (

<section class="step2 cid-s4p8wEMWao" id="step2-e">
    <div class="container">
        <h2 class="mbr-section-title pb-3 mbr-fonts-style align-center display-2"><strong>
        Steps
        </strong></h2>
        <h3 class="mbr-section-subtitle pb-5 mbr-fonts-style align-center display-5">
            Together we can overcome COVID<br/>If you are sick or are immunocompromised staying at home<br/>If You &nbsp;we are also here to help
        </h3>
        <div class="step-container row justify-content-center">
            <div class="card col-12 col-md-4 separline">
                <div class="step-element">
                    <div class="step-wrapper pb-3">
                        <h3 class="step d-flex align-items-center justify-content-center m-auto">
                        <Steps1/>
                        </h3>
                    </div>          
                    <div class="step-text-content align-center">
                        <h4 class="mbr-step-title pb-3 mbr-fonts-style display-5">Make you Wish List</h4>
                        <p class="mbr-step-text mbr-fonts-style display-7">
                        Make a detailed list of all the articles you need including the places where these products can be found.</p>
                    </div>
                </div>
            </div>

            <div class="card col-12 separline col-md-4">
                <div class="step-element">
                    <div class="step-wrapper pb-3">
                        <h3 class="step d-flex align-items-center justify-content-center m-auto">
                        <Steps2/>
                        </h3>
                    </div>          
                    <div class="step-text-content align-center">
                        <h4 class="mbr-step-title pb-3 mbr-fonts-style display-5">Create Request with HOMEBOUND</h4>
                        <p class="mbr-step-text mbr-fonts-style display-7">
                        Sign in into your account and submit your request, we will match you with a fellow member.</p>
                    </div>
                </div>
             </div>

             <div class="card col-md-4 col-12 separline last-child">
                 <div class="step-element">
                    <div class="step-wrapper pb-3">
                        <h3 class="step d-flex align-items-center justify-content-center m-auto">
                        <Steps3/>
                        </h3>
                    </div>          
                    <div class="step-text-content align-center">
                        <h4 class="mbr-step-title pb-3 mbr-fonts-style display-5">Get Good Delivered</h4>
                        <p class="mbr-step-text mbr-fonts-style display-7">Pickup the good at your door and stay at home to protect others.&nbsp;</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
);

export default StepHolder;
