import React from "react";
import Navbar from "../components/Navbar";
import NewFooter from "../components/NewFooter";

export default function NoPage () {
    return (
        <>
            <Navbar />
            <h1>Error 404: Page not found</h1>
            <NewFooter />
        </>
    )
}