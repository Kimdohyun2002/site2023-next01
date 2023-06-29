import Image from "next/image";
import React from "react";

const Youtube = () => {
    return (
        <section id="youtubeSection" className="youtube__wrap section gmarket5">
            <div className="youtube__inner container">
                <div className="youtube__text">
                    <h3>개발자 추천 유튜브</h3>
                    <p>
                        더 다양한 강의는 유튜브를 통해 접하실 수 있습니다!
                        <br />
                        같이 알아가며 공부해요!
                    </p>
                    <a href="#" className="button-red">
                        자세히 보기
                    </a>
                </div>
            </div>
            <div className="youtube__item">
                <div className="youtube__item__box">
                    <div>
                        <Image
                            width={400}
                            height={100}
                            src="/assets/images/youtube/youtube1.png"
                            alt="유튜브 이미지1"
                        />
                    </div>
                    <div>
                        <Image
                            width={400}
                            height={100}
                            src="/assets/images/youtube/youtube2.png"
                            alt="유튜브 이미지2"
                        />
                    </div>
                    <div>
                        <Image
                            width={400}
                            height={100}
                            src="/assets/images/youtube/youtube3.png"
                            alt="유튜브 이미지3"
                        />
                    </div>
                    <div>
                        <Image
                            width={400}
                            height={100}
                            src="/assets/images/youtube/youtube4.png"
                            alt="유튜브 이미지4"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Youtube;
