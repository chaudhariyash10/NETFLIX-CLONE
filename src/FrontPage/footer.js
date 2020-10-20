import React from "react";

class Footer extends React.Component{
    render() {
        return (
            <div className="footer-class">
            <div className="title">
                <h5>Questions? Call 000-000-000-0000</h5>
            </div>
            <div className = "grid">
                <div className="row">
                    <div className="col-lg-3 col-md-6 cell">FAQs</div>
                    <div className="col-lg-3 col-md-6 cell">Help Center</div>
                    <div className="col-lg-3 col-md-6 cell">Account</div>
                    <div className="col-lg-3 col-md-6 cell">Media Center</div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 cell">Investor Relations</div>
                    <div className="col-lg-3 col-md-6 cell">Jobs</div>
                    <div className="col-lg-3 col-md-6 cell">Ways to Watch</div>
                    <div className="col-lg-3 col-md-6 cell">Terms of Use</div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 cell">Privacy</div>
                    <div className="col-lg-3 col-md-6 cell">Cookie Preferences</div>
                    <div className="col-lg-3 col-md-6 cell">Corporate Information</div>
                    <div className="col-lg-3 col-md-6 cell">Contact Us</div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 cell">Speed Test</div>
                    <div className="col-lg-3 col-md-6 cell">Legal Notices</div>
                    <div className="col-lg-3 col-md-6 cell">Netflix Originals</div>
                    <div className="col-lg-3 col-md-6 cell"></div>
                </div>
            </div>
            </div>
        )
    }
}

export default Footer;