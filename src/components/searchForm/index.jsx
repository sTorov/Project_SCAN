import React from "react";
import "./style.css";
import Checkbox from "../checkbox";
import Input from "../input";

function SearchForm(){
    return(
        <div className="form search-form">
            <Checkbox>123</Checkbox>
            <Input type="select" label="select" error="error" valid={false} required={true}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </Input>
            <Input type="select" label="select" error="error" valid={true}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </Input>
        </div>
    )
}

export default SearchForm;