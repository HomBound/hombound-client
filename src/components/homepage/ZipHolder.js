import React from "react";



const ZipHolder = props => (
<section class="mbr-section form3 zip-check">
    <div class="container">
        <div class="row justify-content-center">
            <div class="title col-12 col-lg-8">
                <h2 class="align-center pb-2 mbr-fonts-style display-2">
                Check for Availivily on your area</h2>
            </div>
        </div>
        <div class="row py-2 justify-content-center">
            <div class="col-12 col-lg-6  col-md-8 ">
                <form class="mbr-form form-with-styler" >
                    <div class="dragArea row">
                        <div class="form-group col">
                            <input type="zip" name="email" placeholder="Zip Code"   class="form-control display-7" />
                        </div>
                        <div class="col-auto input-group-btn">
                            <button type="submit" class="btn btn-primary display-4" href="/">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

);


export default ZipHolder;