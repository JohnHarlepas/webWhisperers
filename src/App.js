import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Page from "react-page-loading";
import { CSSTransition } from "react-transition-group";
import ReactGA from 'react-ga';

//Package CSS
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "animate.css/animate.min.css";


//Template CSS Style
import "../src/style.css";
import "./assets/css/responsive.css";
// import "./assets/css/color/color-default.css"
import "./assets/css/color/color-red.1.css"


//Import Component
import HomeOne from "./pages/HomeOne";
import HomeTwo from "./pages/HomeTwo";
import HomeThree from "./pages/HomeThree";
import BlogOne from "./pages/BlogOne";
import BlogTwo from "./pages/BlogTwo";
import SingleBlog from "./pages/SingleBlog";
import ScrollUpBtn from "./components/ScrollUp";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Projects from './components/Projects';






const trackingId = "UA-145077240-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

class App extends Component {
    render() {
        return (            
            <div className="App">
                {/* <StripeProvider apiKey="pk_test_SehM06GvzFDCDv3VjHgF8T4C00hc1q3NLX">
                    <div className="example">
                        <h1>React Stripe Elements Example</h1>
                        <Elements>
                            <CheckoutForm />
                        </Elements>
                    </div>
                </StripeProvider> */}


                <Page loader={"comet-spin"} color={"#fe5619"} size={50}>
                    <div>


        
                        <Route
                            render={({ location }) => (
                                <CSSTransition
                                    key={location.key}
                                    timeout={{ enter: 900, exit: 900 }}
                                    classNames="fade"
                                >
                                    <section className="route-section">
                                        <Switch location={location}>
                                            <Route
                                                path="/linkedin"
                                                component={() => window.location = 'https://www.linkedin.com/in/john-harlepas-softwaredev/'}

                                            />

                                            <Route
                                                path="/linkedin5"
                                                component={() => window.location = 'https://www.linkedin.com/in/connie-lee-81556b111/'}

                                            />

                                            <Route
                                                path="/linkedin2"
                                                component={() => window.location = 'https://www.linkedin.com/in/steven-peng-71719548/'}

                                            />

                                            <Route
                                                path="/linkedin3"
                                                component={() => window.location = 'https://www.linkedin.com/in/patrick-ellis-19bb186a/'}

                                            />

                                            <Route
                                                path="/linkedin4"
                                                component={() => window.location = 'https://www.linkedin.com/in/john-druhan-8aa16225/'}

                                            />

                                            <Route
                                                path="/demand"
                                                component={() => window.location = 'http://www.bebetterdomore.com/blog/how-much-does-it-cost-to-maintain-a-website/'}

                                            />
                                            <Route
                                                path="/aceMobile"
                                                component={() => window.location = 'https://johnharlepas.github.io/project1_APIusage/'}

                                            />

                                            <Route
                                                path="/future"
                                                component={() => window.location = 'https://www.volusion.com/blog/website-maintenance-costs/'}

                                            />

                                            <Route
                                                path="/oPass1"
                                                component={() => window.location = 'https://www.opass.com'}

                                            />

                                            <Route
                                                path="/automated"
                                                component={() => window.location = 'https://www.markbrinker.com/website-cost'}

                                            />

                                            <Route
                                                path="/classBooks"
                                                component={() => window.location = 'https://googlebooksearch-react-may8.herokuapp.com/'}

                                            />

                                            <Route
                                                path="/ticket"
                                                component={() => window.location = 'https://websitesetup.org/website-cost/'}

                                            />

                                            <Route
                                                path="/jdhDesign"
                                                component={() => window.location = 'https://www.johnharlepas.com'}

                                            />

                                            <Route
                                                path="/impark"
                                                component={() => window.location = 'https://www.impark.com/washington-dc/655-new-york-ave-parking-garage/?gclid=EAIaIQobChMItLfg-OGj4gIVFonICh3qrAxUEBAYASAAEgLeQ_D_BwE'}

                                            />
                                            <Route
                                                path="/ace"
                                                component={() => window.location = 'https://aceparking.com/find-parking/'}

                                            />
                                            <Route
                                                path="/colonialParking"
                                                component={() => window.location = 'https://www.ecolonial.com/parkers/parking-locator/?pm_s=789'}

                                            />
                                            <Route
                                                path="/oneParking"
                                                component={() => window.location = 'http://www.oneparking.com'}

                                            />
                                            <Route
                                                path="/lazParking"
                                                component={() => window.location = 'https://www.lazparking.com/local/arlington-va/4501-n-fairfax-dr'}

                                            />
                                            <Route
                                                path="/atlanticParking"
                                                component={() => window.location = 'https://www.asgpark.com/'}

                                            />
                                            <Route
                                                path="/blog-details"
                                                component={SingleBlog}
                                            />

                                            {/* <Route
                                                path="/ebay3"
                                                component={() => window.location = 'https://www.ebay.com/itm/223527991950'}

                                            />

                                            <Route
                                                path="/ebay2"
                                                component={() => window.location = 'https://www.ebay.com/itm/223527992056'}

                                            /> */}

                                            <Route
                                                path="/proj"
                                                component={Projects}

                                            />

                                            <Route
                                                path="/works"
                                                component={Works}
                                            />

                                            <Route
                                                path="/contact"
                                                component={Contact}
                                            />






                                            <Route
                                                path="/blog-two"
                                                component={BlogTwo}
                                            />
                                            <Route
                                                path="/blog-one"
                                                component={BlogOne}
                                            />
                                            <Route
                                                path="/home-three"
                                                component={HomeThree}
                                            />
                                            <Route
                                                path="/home-two"
                                                component={HomeTwo}
                                            />
                                            <Route
                                                path="/"
                                                component={HomeOne}
                                            />
                                            <Redirect to="/not-found" />
                                        </Switch>
                                    </section>
                                </CSSTransition>
                            )}
                        />
                        {/* ScrollUpBtn: src/components/ScrollUp.jsx */}
                        <ScrollUpBtn />
                    </div>
                </Page>
            </div>
        );
    }
}
export default App;
