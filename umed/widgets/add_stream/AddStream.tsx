import React from "react";
import TextH1 from "@/components/TextH1/TextH1";
import TextP from "@/components/TextP/TextP";
import AddStreamCard from "@/components/AddStreamCard/AddStreamCard";
import items from "@/store/imageAddstream"

import "./addStream.css"

const Addstream = () =>{
    return(
        <div className="addstream">
            <div className="addstream-cont">
                <div className="addstream-wrapper">
                    <TextH1>Дополнительное образование</TextH1>
                    <div className="grid">

                        {items.map((item) => 
                            <AddStreamCard name={item.name} grade={item.grade} education={item.education}/>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addstream