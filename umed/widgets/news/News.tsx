import React from "react";
import TextH1 from "@/components/TextH1/TextH1";
import TextP from "@/components/TextP/TextP";
import Image from "next/image";
import New from "@/img/news.jpg"
import NewsCard from "@/components/NewsCard/NewsCard";
import items from "@/store/imageNews";


import "./news.css"

const News = () =>{
    return(
        <div className="news">
            <div className="news-cont">
                <div className="news-wrapper">
                    <div className="news-txt">
                        <TextH1>Новости и события</TextH1>
                        <TextP>Все события</TextP>
                    </div>
                    <div className="arrows">
                        <TextH1>❮</TextH1>
                        <TextH1>❯</TextH1>
                    </div>
                </div>

                <div className="news-flex">
                    {items.map((item) => 
                        <NewsCard photo={item.photo} name={item.name} desc={item.desc} details={item.details}/>
                    )}
                </div>    
            </div>
        </div>
    )
}

export default News