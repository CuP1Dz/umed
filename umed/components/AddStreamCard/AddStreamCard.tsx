import React from "react";
import Image from "next/image";
import TextH1 from "../TextH1/TextH1";
import TextP from "../TextP/TextP";
import Arrow from "@/img/deg-white-arrow.svg"
import backgroundImg from "@/img/doctor.png"

import "./addStreamCard.css"

interface AddStreamCardProps {
    grade: string;
    photo: any;
    name: string;
    education: string;
}

const AddStreamCard = ({name, grade, education}: AddStreamCardProps) => {
    return (
        <div className="add-stream-card" 
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
                <div className="add-grade">
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

export default AddStreamCard;