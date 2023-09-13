import { useRef, useState } from "react";
import "./product.css";
import Product1 from "../../assets/images/product1.svg";
import Product2 from "../../assets/images/product2.svg";
import Product3 from "../../assets/images/product3.svg";
import Product4 from "../../assets/images/product4.svg";
import Start from "../../assets/images/StarProduct.svg";
import LeftIcon from "../../assets/images/lefticon.svg";
import RightIcon from "../../assets/images/rightIcon.svg";

function Product() {
    const [move, setMove] = useState("");
    const formRef = useRef<HTMLDivElement | null>(null);

    const scrollLeft = () => {
        if (formRef.current) {
            formRef.current.scrollLeft -= 100;
        }

        setMove("left");
    };

    const scrollRight = () => {
        if (formRef.current) {
            formRef.current.scrollLeft += 100;
        }
        setMove("right");
    };
    const resetValueAfterDelay = () => {
        setTimeout(() => {
            setMove("");
        }, 7000);
    };

    resetValueAfterDelay();

    return (
        <div className="bodyProduct contentBody">
            <div className="title">Shop Our New Beauty Products</div>
            <p className="desc">Explore the latest clean beauty essentials.</p>
            <div className="slider" ref={formRef}>
                <div className={`form ${move}`}>
                    <div className="item ">
                        <div className="content">
                            <img src={Product1} alt="" />
                            <div className="des">
                                <p className="des_read">
                                    Soy pH-Balanced Hydrating Face Wash Jumbo
                                </p>
                                <div className="des_bottom">
                                    <p className="des_category">
                                        Kiss felling of dry
                                    </p>
                                    <p className="des_name">
                                        Soy pH-Balanced Hydrating Face Wash
                                        Jumbo
                                    </p>

                                    <p className="des_count">
                                        <img src={Start} alt="start" /> (4399)
                                    </p>
                                    <button>
                                        ADD TO CART <span>$9.99</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item ">
                        <div className="content">
                            <img src={Product2} alt="" />
                            <div className="des">
                                <p className="des_read">
                                    Soy pH-Balanced Hydrating Face Wash Jumbo
                                </p>
                                <div className="des_bottom">
                                    <p className="des_category">
                                        Kiss felling of dry
                                    </p>
                                    <p className="des_name">
                                        Soy pH-Balanced Hydrating Face Wash
                                        Jumbo
                                    </p>
                                    <p className="des_count">
                                        <img src={Start} alt="start" /> (4399)
                                    </p>
                                    <button>
                                        ADD TO CART <span>$9.99</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item ">
                        <div className="content">
                            <img src={Product3} alt="" />
                            <div className="des">
                                <p className="des_read">
                                    Soy pH-Balanced Hydrating Face Wash Jumbo
                                </p>
                                <div className="des_bottom">
                                    <p className="des_category">
                                        Kiss felling of dry
                                    </p>
                                    <p className="des_name">
                                        Soy pH-Balanced Hydrating Face Wash
                                        Jumbo
                                    </p>

                                    <p className="des_count">
                                        <img src={Start} alt="start" /> (4399)
                                    </p>
                                    <button>
                                        ADD TO CART <span>$9.99</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item ">
                        <div className="content">
                            <img src={Product4} alt="" />
                            <div className="des">
                                <p className="des_read">
                                    Soy pH-Balanced Hydrating Face Wash Jumbo
                                </p>
                                <div className="des_bottom">
                                    <p className="des_category">
                                        Kiss felling of dry
                                    </p>
                                    <p className="des_name">
                                        Soy pH-Balanced Hydrating Face Wash
                                        Jumbo
                                    </p>

                                    <p className="des_count">
                                        <img src={Start} alt="start" /> (4399)
                                    </p>
                                    <button>
                                        ADD TO CART <span>$9.99</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item ">
                        <div className="content">
                            <img src={Product1} alt="" />
                            <div className="des">
                                <p className="des_read">
                                    Soy pH-Balanced Hydrating Face Wash Jumbo
                                </p>
                                <div className="des_bottom">
                                    <p className="des_category">
                                        Kiss felling of dry
                                    </p>
                                    <p className="des_name">
                                        Soy pH-Balanced Hydrating Face Wash
                                        Jumbo
                                    </p>

                                    <p className="des_count">
                                        <img src={Start} alt="start" /> (4399)
                                    </p>
                                    <button>
                                        ADD TO CART <span>$9.99</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item ">
                        <div className="content">
                            <img src={Product2} alt="" />
                            <div className="des">
                                <p className="des_read">
                                    Soy pH-Balanced Hydrating Face Wash Jumbo
                                </p>
                                <div className="des_bottom">
                                    <p className="des_category">
                                        Kiss felling of dry
                                    </p>
                                    <p className="des_name">
                                        Soy pH-Balanced Hydrating Face Wash
                                        Jumbo
                                    </p>
                                    <p className="des_count">
                                        <img src={Start} alt="start" /> (4399)
                                    </p>
                                    <button>
                                        ADD TO CART <span>$9.99</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item ">
                        <div className="content">
                            <img src={Product3} alt="" />
                            <div className="des">
                                <p className="des_read">
                                    Soy pH-Balanced Hydrating Face Wash Jumbo
                                </p>
                                <div className="des_bottom">
                                    <p className="des_category">
                                        Kiss felling of dry
                                    </p>
                                    <p className="des_name">
                                        Soy pH-Balanced Hydrating Face Wash
                                        Jumbo
                                    </p>

                                    <p className="des_count">
                                        <img src={Start} alt="start" /> (4399)
                                    </p>
                                    <button>
                                        ADD TO CART <span>$9.99</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item ">
                        <div className="content">
                            <img src={Product4} alt="" />
                            <div className="des">
                                <p className="des_read">
                                    Soy pH-Balanced Hydrating Face Wash Jumbo
                                </p>
                                <div className="des_bottom">
                                    <p className="des_category">
                                        Kiss felling of dry
                                    </p>
                                    <p className="des_name">
                                        Soy pH-Balanced Hydrating Face Wash
                                        Jumbo
                                    </p>

                                    <p className="des_count">
                                        <img src={Start} alt="start" /> (4399)
                                    </p>
                                    <button>
                                        ADD TO CART <span>$9.99</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img onClick={scrollLeft} className="btnMoveLeft" src={LeftIcon} />

            <img
                onClick={scrollRight}
                className="btnMoveRight"
                src={RightIcon}
            />
        </div>
    );
}

export default Product;
