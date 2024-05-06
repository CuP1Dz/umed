import React from "react";
import Image from "next/image";
import TextH1 from "../TextH1/TextH1";
import TextP from "../TextP/TextP";
import Arrow from "@/img/deg-white-arrow.svg"
import backgroundImg from "@/img/doctor.png"

import "./newsCard.css"

interface MainStreamCardProps {
    desc: string;
    photo: any;
    name: string;
    details: string;
}

const NewsCard = ({name, desc, details, photo}: MainStreamCardProps) => {
    return (
        <div className="block">
            <div className="block-img">
                <Image src={photo} alt="" />
            </div>
            <div className="block-txt">
                <p className="ads">Объявления</p>
                <h2>{name}</h2>
                <p className="desc">{desc}</p>
                <p className="details">{details}</p>
            </div>
        </div>
    )
    
};

export default NewsCard;