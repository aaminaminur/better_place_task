import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

class Header extends Component {
    render() {
        return (
            <div>
                <DropdownButton
                    id="dropdown-basic-button"
                    title="Dropdown button"
                >
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                        Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                        Something else
                    </Dropdown.Item>
                </DropdownButton>
            </div>
        );
    }
}

export default Header;
