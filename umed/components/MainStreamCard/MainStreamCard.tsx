import React from "react";
import Image from "next/image";
import TextH1 from "../TextH1/TextH1";
import TextP from "../TextP/TextP";
import Arrow from "@/img/deg-white-arrow.svg"
import backgroundImg from "@/img/doctor.png"

import "./mainStreamCard.css"

interface MainStreamCardProps {
    grade: string;
    photo: any;
    name: string;
    education: string;
}

const MainStreamCard = ({name, grade, education}: MainStreamCardProps) => {
    return (
        <div className="main-stream-card" 
        style={{
            backgroundImage: `url(${backgroundImg.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "30vh",
        }}>
            <div className="top-card">
                <TextH1>{name}</TextH1>
            </div>
            <div className="bottom-card">
                <div className="grade">
                    <TextP>{grade}</TextP>
                </div>

                <div className="education">
                    <div className="education-txt">
                        <TextP>{education}</TextP>
                    </div>
                    <Image src={Arrow} alt="" />
                </div>
            </div>
        </div>
    )
    
};

export default MainStreamCard;