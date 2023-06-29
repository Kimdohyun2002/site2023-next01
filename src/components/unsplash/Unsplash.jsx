import Image from "next/image";
import React from "react";

const Unsplash = () => {
    return (
        <section
            id="unsplashSection"
            className="unsplash__wrap section gmarket5"
        >
            <div className="unsplash__inner container">
                <div className="unsplash__text">
                    <h3>개발자 추천 유튜브</h3>
                    <p>
                        더 다양한 강의는 유튜브를 통해 접하실 수 있습니다!
                        <br />
                        같이 알아가며 공부해요!
                    </p>
                    <a href="#" className="button-blue">
                        자세히 보기
                    </a>
                </div>
            </div>
            <div className="unsplash__item">
                <div className="unsplash__item__box">
                    <div>
                        <Image
                            width={400}
                            height={100}
                            src="/assets/images/unsplash/unsplash1.png"
                            alt="언어 이미지1"
                        />
                    </div>
                    <div>
                        <Image
                            width={400}
                            height={100}
                            src="/assets/images/unsplash/unsplash2.png"
                            alt="언어 이미지2"
                        />
                    </div>
                    <div>
                        <Image
                            width={400}
                            height={100}
                            src="/assets/images/unsplash/unsplash3.png"
                            alt="언어 이미지3"
                        />
                    </div>
                    <div>
                        <Image
                            width={400}
                            height={100}
                            src="/assets/images/unsplash/unsplash4.png"
                            alt="언어 이미지4"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Unsplash;
