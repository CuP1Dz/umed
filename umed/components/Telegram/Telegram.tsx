import React from "react";
import Image from "next/image";
import Tele from "@/img/tg-avatar.png"

import "./telegram.css"

const Telega = () =>{
    return(
        <a href="https://t.me/umed_chat">
            <button className="telegram-btn">
                <Image src={Tele} alt="" />
            </button>
            
        </a>
    )
}

export default Telega