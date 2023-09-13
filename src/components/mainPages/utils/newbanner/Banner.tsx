import { useState, useEffect } from "react";

import "./banner.css";
import Str from "./img/fruit_strawberry.png";
import str2 from "./img/fruit_avocado.png";
import str3 from "./img/fruit_orange.png";

function Banner() {
    const [active, setActive] = useState(0);
    const [leftMockup, setLeftMockup] = useState(0);
    const list = document.querySelectorAll(".carousel .list .item");
    const count = list.length;
    const leftEachItem = 100 / (count - 1);

    const next = () => {
        const newActive = active >= count - 1 ? 0 : active + 1;
        setActive(newActive);
        const newLeftMockup = leftMockup + leftEachItem;
        setLeftMockup(newLeftMockup);
        const carousel = document.querySelector(".carousel");
        if (carousel) carousel.classList.remove("right");
        changeCarousel();
    };

    const changeCarousel = () => {
        // find item has class hidden to remove it
        const hiddenOld = document.querySelector(".item.hidden");
        if (hiddenOld) hiddenOld.classList.remove("hidden");

        // find item old active to remove it and add class hidden
        const activeOld = document.querySelector(".item.active");
        if (activeOld) {
            activeOld.classList.remove("active");
            activeOld.classList.add("hidden");
        }

        // add class active in position active new
        if (list[active]) list[active].classList.add("active");

        // change mockup background
        const mockup = document.querySelector(".mockup") as HTMLElement | null;
        if (mockup) mockup.style.setProperty("--left", leftMockup + "%");
    };

    useEffect(() => {
        const refreshInterval = setInterval(() => next(), 3000);
        return () => clearInterval(refreshInterval);
    }, [active]);

    const prev = () => {
        const newActive = active <= 0 ? count - 1 : active - 1;
        setActive(newActive);
        const newLeftMockup = leftMockup - leftEachItem;
        setLeftMockup(newLeftMockup);
        const carousel = document.querySelector(".carousel");
        if (carousel) carousel.classList.add("right");
        changeCarousel();
    };
    return (
        <div className="carousel">
            <div className="list">
                <div className="item active">
                    <div className="content">Strawberry</div>
                    <img src={Str} className="fruit" />
                </div>
                <div className="item">
                    <div className="content">avocado</div>
                    <img src={str2} className="fruit" />
                </div>
                <div className="item hidden">
                    <div className="content">orange</div>
                    <img src={str3} className="fruit" />
                </div>
            </div>
            <div className="leaves"></div>
            <div className="mockup"></div>
            <div className="shadow"></div>
            <div className="arrow">
                <button id="prev" onClick={prev}>
                    {"<"}
                </button>
                <button id="next">{">"}</button>
            </div>
        </div>
    );
}

export default Banner;
