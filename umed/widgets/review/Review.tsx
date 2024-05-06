import React from "react";
import TextH1 from "@/components/TextH1/TextH1";
import Image from "next/image";
import review from "@/img/review.png"

import "./review.css"

const Review = () => {
    return(
        <div className="review">
            <div className="review-cont">
                <div className="review-wrapper">

                    <div className="review-head">
                        <TextH1>Отзывы</TextH1>
                    </div>

                    <div className="review-block">

                        <div className="review-img">
                            <Image src={review} alt="" />
                        </div>

                        <div className="review-txt">

                            <p>
                                <i>Студент III курса отделения «Медицинская оптика» Уральского медицинского колледжа</i>
                            </p>

                            <p className="placeholder">
                                <i>Поступил на специальность, не совсем понимая, что меня ждет. Обучение оказалось настолько интересным, что уже на первом курсе я понял, 
                                что медицинская оптика для меня – дело жизни. Радует, что после теоретических занятий мы может применить свои знания здесь и сейчас, 
                                в стенах колледжа, на нашем оборудовании. Поэтому когда мы приходим на производство, нам легко сориентироваться.
                                </i>
                            </p>
                            
                            <p className="review-author">
                                <span>- </span>Билолидин Алиев
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review