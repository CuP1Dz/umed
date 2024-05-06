import React from "react";
import TextH1 from "@/components/TextH1/TextH1";
import TextP from "@/components/TextP/TextP";

import "./whatchoose.css"

const Whatchoose = () =>{
    return(
        <div className="whatchoose">
            <div className="whatchoose-cont">
                <div className="whatchoose-wrapper">
                    <div className="left">
                        <TextH1>Не знаешь что выбрать? UMED - выбор всей жизни!</TextH1>
                    </div>
                    <div className="right">
                        <TextP>
						    Позвоните и мы поможем вам подобрать подходящую специальность
					    </TextP>
                        <button className="btn"><TextP>Оставить заявку</TextP></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whatchoose