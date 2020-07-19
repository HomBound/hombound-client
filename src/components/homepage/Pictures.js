import React from "react";
import '../../Assets/mobirise-icons/mobirise-icons.css';
import "../../Assets/bootstrap/css/bootstrap.min.css";
import "../../Assets/bootstrap/css/bootstrap-grid.min.css";
import "../../Assets/bootstrap/css/bootstrap-reboot.min.css";
import "../../Assets/bootstrap/css/bootstrap.min.css";
import '../../Assets/socicon/css/styles.css';
import "../../Assets/theme/css/style1.css";
import "../../Assets/mobirise/css/mbr-additional.css";
import image1 from "../../Assets/images/image1.jpg";
import image2 from "../../Assets/images/image2.jpg";
import image3 from "../../Assets/images/image3.jpg";


const Pictures = props => (


<section class="features2 cid-s4p8nPFtzg" id="features2-d">

    <div class="container">
        <div class="media-container-row">
            <div class="card p-3 col-12 col-md-6 col-lg-4">
                <div class="card-wrapper">
                    <div class="card-img">
                        <img src={image3} alt="Mobirise" title=""/>
                    </div>
            </div>
        </div>

        <div class="card p-3 col-12 col-md-6 col-lg-4">
            <div class="card-wrapper">
                <div class="card-img">
                    <img src={image1} alt="Mobirise" title=""/>
                </div>
            </div>
        </div>

        <div class="card p-3 col-12 col-md-6 col-lg-4">
            <div class="card-wrapper">
                <div class="card-img">
                    <img src={image2} alt="Mobirise" title=""/>
                </div>
            </div>
        </div>

        
    </div>
</div>
</section>

);


export default Pictures;