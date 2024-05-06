import React from "react";
import TextH1 from "@/components/TextH1/TextH1";
import TextP from "@/components/TextP/TextP";
import FastStreamCard from "@/components/FastStreamCard/FastStreamCard";
import items from "@/store/imageFaststream"

import "./fastStream.css"

const Faststream = () =>{
    return(
        <div className="faststream">
            <div className="faststream-cont">
                <div className="faststream-wrapper">
                    <TextH1>Ускоренное обучение</TextH1>
                    <div className="grid">

                        {items.map((item) => 
                            <FastStreamCard name={item.name} grade={item.grade} education={item.education}/>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faststream