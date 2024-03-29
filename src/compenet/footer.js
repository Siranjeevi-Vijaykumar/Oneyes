import React from "react";

export function Footer(){
    return(
        <>
         <footer class="w-100 py-4 flex-shrink-0">
        <div class="container py-4">
            <div class="row gy-4 gx-5">
                <div class="col-lg-4 col-md-6">
                    <h5 class="h1 text-white">Below Water.</h5>
                    <p class="small text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <p class="small text-white mb-0">&copy; Copyrights. All rights reserved. <a class="text-primary" href="#">Siranjeevi</a></p>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5 class="text-white mb-3">Quick links</h5>
                    <ul class="list-unstyled text-muted">
                        <li><a id="a" className="text-white" href="#">Home</a></li>
                        <li><a id="a" className="text-white" href="#">About</a></li>
                        <li><a id="a" className="text-white" href="#">Get started</a></li>
                        <li><a id="a" className="text-white" href="#">FAQ</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5 class="text-white mb-3">Quick links</h5>
                    <ul class="list-unstyled text-muted">
                        <li><a id="a" className="text-white" href="#">Home</a></li>
                        <li><a id="a" className="text-white" href="#">About</a></li>
                        <li><a id="a" className="text-white" href="#">Get started</a></li>
                        <li><a id="a" className="text-white" href="#">FAQ</a></li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h5 class="text-white mb-3 text-white">Newsletter</h5>
                    <p class="small text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <form action="#">
                        <div class="input-group mb-3">
                            <input class="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <button class="btn btn-primary" id="button-addon2" type="button"><i class="fas fa-paper-plane"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </footer>
        </>
    )
}