import React, { Component } from "react";
import "./items.css";

class Items extends Component {
    render() {
        return (
            <div>
                <from>
                    <div className="item">
                        <div className="thumbnail">
                            <p type="text" className="thumbnailWidth">
                                Image
                            </p>
                        </div>
                        <div className="details">
                            <div>
                                <p type="text" className="nameWidth">
                                    Name
                                </p>
                            </div>
                            <div className="genderNationality">
                                <p type="text" className="gender">
                                    Gender
                                </p>
                                <p type="text" className="nation">
                                    Country
                                </p>
                            </div>
                            <div className="contactDetails">
                                <p type="text" className="contact">
                                    Country
                                </p>
                                <p type="text" className="mail">
                                    Email
                                </p>
                            </div>
                        </div>
                    </div>
                </from>
            </div>
        );
    }
}

export default Items;
