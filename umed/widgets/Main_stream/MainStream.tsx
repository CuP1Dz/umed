import React from "react";
import TextH1 from "@/components/TextH1/TextH1";
import TextP from "@/components/TextP/TextP";
import MainStreamCard from "@/components/MainStreamCard/MainStreamCard";
import items from "@/store/imageMainstream"

import "./mainStream.css"

const Mainstream = () =>{
    return(
        <div className="mainstream">
            <div className="mainstream-cont">
                <div className="mainstream-wrapper">
                    <TextH1>Основное направление</TextH1>
                    <div className="grid">

                        {items.map((item) => 
                            <MainStreamCard name={item.name} grade={item.grade} education={item.education}/>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mainstream