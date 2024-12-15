import React from "react";
import Sdata from "./Data";
import Card from "./Main";

const Information = () => {
    return (
        <>

            <h1 className="top">List of top Amazon Mini TV Series 2024</h1>

            {Sdata.map((val, index) => {
                console.log(index);
                return (
                    <Card
                        id={val.id}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        sname={val.sname}
                        link={val.link}
                    />
                );
            })}

        </>

    )
}
export default Information;