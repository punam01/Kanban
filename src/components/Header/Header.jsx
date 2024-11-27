import React from "react";
import './Header.css'
import DisplayDropdown from "../DisplayDropdown/DisplayDropdown";

const Header = ({ setGroupBy, setSortBy }) => {
    return (
        <div className="header-component">
            <DisplayDropdown
                onSortChange={setGroupBy} 
                onOrderChange={setSortBy} 
            />
        </div>
    );
};

export default Header;
