import Image from "next/image";
import Link from "next/link";
import React from "react";

const Member = () => {
    return (
        <section
            id="memberSection"
            className="member__wrap section center gmarket5"
        >
            <h3>멤버 소개</h3>
            <p>웹디자이너, 웹 퍼블리셔, 프론트앤드 개발자 멤버를 소개합니다.</p>
            <div className="member__inner container">
                <article className="member">
                    <figure className="member__header">
                        {/* <img
                            src="./assets/images/member/peep-1.svg"
                            alt="멤버"
                        /> */}
                        <Image
                            width={300}
                            height={400}
                            src="/assets/images/member/peep-1.svg"
                            alt="이미지"
                        />
                    </figure>
                    <div className="member__body">
                        <h4>웹쓰 25기</h4>
                        <p className="desc">포폴 보기</p>
                        <Link href="/" className="btn"></Link>
                    </div>
                </article>
                <article className="member">
                    <figure className="member__header">
                        <Image
                            width={300}
                            height={400}
                            src="./assets/images/member/peep-2.svg"
                            alt="멤버"
                        />
                    </figure>
                    <div className="member__body">
                        <h4>웹쓰 24기</h4>
                        <p className="desc">포폴 보기</p>
                        <Link href="/" className="btn"></Link>
                    </div>
                </article>
                <article className="member">
                    <figure className="member__header">
                        <Image
                            width={300}
                            height={400}
                            src="./assets/images/member/peep-3.svg"
                            alt="멤버"
                        />
                    </figure>
                    <div className="member__body">
                        <h4>웹쓰 25기</h4>
                        <p className="desc">포폴 보기</p>
                        <Link href="/" className="btn"></Link>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Member;
