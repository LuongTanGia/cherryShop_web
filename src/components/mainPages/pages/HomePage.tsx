import "./Pagecss.css";

import ImgHeader from "../../../assets/images/ImageHeader.svg";
import Product from "../../product/Product";
import Brand from "../utils/brand/Brand";
import BlogImg from "../../../assets/images/blogImg.svg";
import ImgItem1 from "../../../assets/images/Image_item1.svg";
import ImgItem2 from "../../../assets/images/Image_item2.svg";
import ImgItem3 from "../../../assets/images/Image_item3.svg";
import instaImg1 from "../../../assets/images/insta1.svg";
import instaImg2 from "../../../assets/images/insta2.svg";
import instaImg3 from "../../../assets/images/insta3.svg";
import instaImg4 from "../../../assets/images/insta4.svg";
import instaImg5 from "../../../assets/images/insta5.svg";
import instaImg6 from "../../../assets/images/insta6.svg";

function HomePage() {
    return (
        <div>
            <div className="homeSlide">
                <div className="homeSlide_left">
                    <div className="homeSlide_left_content">
                        <h1 className="left_content-title_h1">
                            Clean Beauty Made Easy
                        </h1>
                        <p className="left_content-desc">
                            Discover the best deals on the largest platform for
                            clean beauty.
                        </p>
                        <button className="left_content-btn_shopNow">
                            SHOP NOW
                        </button>
                    </div>
                </div>
                <div className="homeSlide_right">
                    <img src={ImgHeader} alt="" />
                </div>
            </div>
            <Brand />
            <Product />
            <div className="BlogGroup">
                <div className="BlogGroup_left">
                    <h2 className="BlogGroup_left-title">
                        Beauty You Want. Deals You Love.
                    </h2>
                    <p className="BlogGroup_left-desc">
                        We'll always bring you the best prices for your beauty
                        favorites. Explore our site to discover clean beauty
                        alternatives for all your needs and budgets.
                    </p>
                    <button className="BlogGroup_left-buttonShow left_content-btn_shopNow">
                        SHOP NOW
                    </button>
                </div>
                <div className="BlogGroup_right">
                    <iframe
                        src="https://www.youtube.com/embed/AJK5hVO3TLc"
                        title="YouTube video player"
                        // frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        // allowfullscreen
                        className="BlogGroup_right-video"
                    ></iframe>
                </div>
            </div>
            <div className="BlogGroupMini">
                <div className="BlogGroupMini_left">
                    <h2 className="BlogGroupMini_left-title">
                        You spend, you earn
                    </h2>
                    <p className="BlogGroupMini_left-desc">
                        Ultamate Rewards. Sign in or join now to earn points
                        with every purchase.
                    </p>
                    <button className="BlogGroupMini_left-buttonShow left_content-btn_shopNow">
                        Join Now
                    </button>
                </div>
                <div className="BlogGroupMini_right">
                    <img
                        src={BlogImg}
                        alt="blogImg"
                        className="BlogGroupMini_right-img"
                    />
                </div>
            </div>
            <div className="BlogGroupArticles contentBody">
                <h2 className="BlogGroupArticles-title">
                    Read Our Latest Articles
                </h2>
                <p className="BlogGroupArticles-desc">
                    See what we've been up to at Labelle! Blog posts are written
                    by out team and guests.
                </p>
                <div className="BlogGroupArticles_content">
                    <div className="BlogGroupArticles_content_item">
                        <img
                            src={ImgItem1}
                            alt="Img_item"
                            className="BlogGroupArticles_content_item-img"
                        />
                        <p className="BlogGroupArticles_content_item-desc">
                            Better Global Buying Experiere with Duties
                        </p>
                        <button className="btn_item">Read More</button>
                    </div>
                    <div className="BlogGroupArticles_content_item">
                        <img
                            src={ImgItem2}
                            alt="Img_item"
                            className="BlogGroupArticles_content_item-img"
                        />
                        <p className="BlogGroupArticles_content_item-desc">
                            Better Global Buying Experiere with Duties
                        </p>
                        <button className="btn_item">Read More</button>
                    </div>
                    <div className="BlogGroupArticles_content_item">
                        <img
                            src={ImgItem3}
                            alt="Img_item"
                            className="BlogGroupArticles_content_item-img"
                        />
                        <p className="BlogGroupArticles_content_item-desc">
                            Better Global Buying Experiere with Duties
                        </p>
                        <button className="btn_item">Read More</button>
                    </div>
                </div>
            </div>
            <div className="BlogGroupInstagram">
                <div className="BlogGroupInstagram_left">
                    <h2 className="BlogGroupInstagram_left-title">
                        Meet Our Community
                    </h2>
                    <p className="BlogGroupInstagram_left-desc">
                        Join the laBelle and share your voice with us.
                    </p>
                    <button className="BlogGroupInstagram_left-buttonShow">
                        Follow On Instagram
                    </button>
                </div>
                <div className="BlogGroupInstagram_right">
                    <img
                        src={instaImg1}
                        alt="blogImg"
                        className="BlogGroupInstagram_right-img"
                    />
                    <img
                        src={instaImg2}
                        alt="blogImg"
                        className="BlogGroupInstagram_right-img"
                    />

                    <img
                        src={instaImg3}
                        alt="blogImg"
                        className="BlogGroupInstagram_right-img"
                    />
                    <img
                        src={instaImg4}
                        alt="blogImg"
                        className="BlogGroupInstagram_right-img"
                    />
                    <img
                        src={instaImg5}
                        alt="blogImg"
                        className="BlogGroupInstagram_right-img"
                    />
                    <img
                        src={instaImg6}
                        alt="blogImg"
                        className="BlogGroupInstagram_right-img"
                    />
                </div>
            </div>
        </div>
    );
}

export default HomePage;

//viết 1 đoạn băn bản hello word bằng js
