import React, { useState } from "react";
import "./Card.css";

export default function Card({ item }) {
    const [imgHover, setImgHover] = useState(false);
    const [cardHover, setCardHover] = useState(false);
    const imgStyle = {
        backgroundImage: `${
            imgHover ? "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))," : ""
        } url(${item.image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    };
    const descStyle = {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        transform: cardHover ? "translateY(-170px)" : "translateY(200px)",
    };
    return (
        <>
            <div
                className="bg-dark text-white rounded card m-2"
                onMouseEnter={() => setCardHover(true)}
                onMouseLeave={() => setCardHover(false)}
            >
                <div className="title">
                    <h4 className="p-4">{item.title}</h4>
                </div>
                <div className="image d-flex justify-content-center align-items-center">
                    <div
                        style={imgStyle}
                        onMouseEnter={() => setImgHover(true)}
                        onMouseLeave={() => setImgHover(false)}
                    />
                </div>
                <div style={descStyle} className="desc text-center d-flex justify-content-center">
                    <div>{item.desc}</div>
                </div>
            </div>
        </>
    );
}
