import React from "react";
import Image from "next/image";
import Logo from "@/img/white-ftr-logo.svg"
import TextP from "../TextP/TextP";

import "./footer.css"

const Footer = () =>{
    return(
        <div className="footer">
            <div className="footer-cont">
                <div className="footer-wrapper">

                    <div>
                        <Image src={Logo} alt="" />
                    </div>

                    <div>
                        <p>О колледже</p>
                        <p>Специальности</p>
                        <p>Ускоренное обучение</p>
                        <p>Дополнительное образование</p>
                        <p>Студентам</p>
                        <p>Поступающим</p>
                        <p>Сведения об образовательной организации</p>
                        <p>Карта сайта</p>
                    </div>

                    <div className="footer-number">
                        <div>
                            <p>+7 351 202 00 60</p>
                            <p>Получить консультацию</p>
                        </div>
                        <div>
                            <p>454092, г. Челябинск, ул. Курчатова, 9</p>
                            <p>Как нас найти?</p>
                        </div>
                    </div>

                    <div>
                        <button><TextP>Задать вопрос</TextP></button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer