import React from "react";
import { Container } from "../Container/Container";
import { LeftPart } from "./LeftPart";
import { RightPart } from "./RightPart";

const TopPartMain = function () {
    return (
        <Container id="home">
            <div className="row">
                <RightPart />
                <LeftPart />
            </div>
        </Container>
    );
}

export default TopPartMain;