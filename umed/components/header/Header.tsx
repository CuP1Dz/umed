'use client'
import React from "react";
import Image from "next/image";
import Logo from "@/img/head-logo2.svg"
import Search from "@/img/search.svg"
import Eye from "@/img/eye.svg"
import Phone from "@/img/phone.svg"
import Profile from "@/img/profile.svg"
import TextP from "../TextP/TextP";

import "./header.css"

const Header = () =>{
    return(
        <div className="header">
            <div className="header-cont">
                <div className="header-wrapper">
                    <div className="logo">
                        <Image src={Logo} alt="" />
                    </div>

                    <div className="consult">
                        <TextP>+7 351 202 00 60</TextP>
                        <div className="phone">
                            <Image src={Phone} alt="" />
                            <TextP>Получить консультацию</TextP>
                        </div>
                    </div>

                    <div className="btns">
                        <button><Image src={Search} alt="" /></button>
                        <button><Image src={Eye} alt="" /></button>
                        <button><Image src={Profile} alt="" /></button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Header