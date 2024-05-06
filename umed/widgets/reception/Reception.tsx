import React from "react";
import TextH1 from "@/components/TextH1/TextH1";
import TextP from "@/components/TextP/TextP";
import Image from "next/image";
import Umed from "@/img/r4n3vw44agbqw2ggdyulw9t7zvqc6yo7.png"
import Calendar from "@/img/calendar-icon.svg"
import Arrow from "@/img/deg-arrow.svg"
import Chat from "@/img/chat-plus-icon.svg"
import "./reception.css"

const Reception = () =>{
    return(
        <div className="reception">
            <div className="reception-cont">
                <div className="reception-wrapper">

                    <div className="reception-img">
                        <Image src={Umed} alt="" />
                    </div>
                    
                    <div className="reception-2block">

                        <div className="block1">
                            <div className="block-head">
                                <TextH1>Приемная кампания 2024</TextH1>
                                <Image src={Calendar} alt="" />
                            </div>
                            <div className="links">
                                <a href="#">
                                    <Image src={Arrow} alt="" />
                                    <TextP>Почему мы?</TextP>
                                </a>
                                <a href="#">
                                    <Image src={Arrow} alt="" />
                                    <TextP>Программы обучения</TextP>
                                </a>
                                <a href="#">
                                    <Image src={Arrow} alt="" />
                                    <TextP>Внеучебная и социальная работа</TextP>
                                </a>
                                <a href="#">
                                    <Image src={Arrow} alt="" />
                                    <TextP>Как подать документы</TextP>
                                </a>
                            </div>
                        </div>

                        <div className="block2">
                            <div className="block-head">
                                <TextH1>Важная информация</TextH1>
                                <Image src={Chat} alt="" />
                            </div>
                            <div className="links">
                                <a href="#">
                                    <Image src={Arrow} alt="" />
                                    <TextP>Сведения об образовательной организации</TextP>
                                </a>
                                <a href="#">
                                    <Image src={Arrow} alt="" />
                                    <TextP>Дополнительное образование</TextP>
                                </a>
                                <a href="#">
                                    <Image src={Arrow} alt="" />
                                    <TextP>Вопросы и ответы</TextP>
                                </a>
                                <a href="#">
                                    <Image src={Arrow} alt="" />
                                    <TextP>Новости и события</TextP>
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Reception