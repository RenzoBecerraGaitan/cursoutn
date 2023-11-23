import React from "react"

export default function Payment({ dollarsPrices }) {

    return (
        <>
            <div className="row">
                <div className="col">
                    <h1>{dollarsPrices}</h1>
                </div>
            </div>
        </>
    )
}