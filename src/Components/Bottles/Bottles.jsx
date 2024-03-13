import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = ({handleLoadData,bottles}) => {

    
    return (
        <div className="grid grid-cols md:grid-cols-4 p-3 gap-5 mt-12  rounded-lg">
            {
                bottles.map( bottle => <Bottle handleLoadData={handleLoadData} key={bottle.title} bottle={bottle}></Bottle>)
            }
        </div>
    );
};

export default Bottles;