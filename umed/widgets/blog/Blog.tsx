import React from "react";
import TextH1 from "@/components/TextH1/TextH1";
import TextP from "@/components/TextP/TextP";
import Image from "next/image";
import New from "@/img/news.jpg"
import NewsCard from "@/components/NewsCard/NewsCard";
import items from "@/store/imageBlog";


import "./blog.css"

const Blog = () =>{
    return(
        <div className="blog">
            <div className="blog-cont">
                <div className="blog-wrapper">
                    <div className="blog-txt">
                        <TextH1>Блог</TextH1>
                        <TextP>Все записи</TextP>
                    </div>
                    <div className="arrows">
                        <TextH1>❮</TextH1>
                        <TextH1>❯</TextH1>
                    </div>
                </div>

                <div className="blog-flex">
                    {items.map((item) => 
                        <NewsCard photo={item.photo} name={item.name} desc={item.desc} details={item.details}/>
                    )}
                </div>    
            </div>
        </div>
    )
}

export default Blog