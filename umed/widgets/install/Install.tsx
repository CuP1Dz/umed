import React from "react";
import TextH1 from "@/components/TextH1/TextH1";
import TextP from "@/components/TextP/TextP";
import Image from "next/image";
import Qr from "@/img/qr_code.svg"
import Apple from "@/img/app-store.png"
import Play from "@/img/play-store.png"

import "./install.css"

const Install = () => {
    return(
        <div className="install">
            <div className="install-cont">
                <div className="install-wrapper">

                    <div className="install-img">
                        <Image src={Qr} alt="" />
                    </div>

                    <div className="install-txt">
                        <TextH1>
                            Скачай мобильное приложение
                        </TextH1>
                        <TextP>
                            Посмотреть расписание занятий и успеваемость — все это в одном приложении <br />
                            Также вы можете <span>cкачать .apk</span>, если у вас нет доступа к магазинам приложений.
                        </TextP>

                        <div className="install-os">
                            <Image src={Apple} alt="" />
                            <Image src={Play} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Install