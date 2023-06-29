import Link from "next/link";
import React from "react";
import styles from "./footer.module.css";

const links = [
    {
        title: "사이트",
        items: [
            "웹표준 사이트",
            "반응형 사이트",
            "패럴랙스 사이트",
            "리액트 사이트",
        ],
    },
    {
        title: "유형",
        items: [
            "이미지 유형",
            "카드 유형",
            "이미지/텍스트 유형",
            "배너 유형",
            "텍스트 유형",
            "푸터 유형",
        ],
    },
    {
        title: "스크립트",
        items: [
            "검색 이펙트",
            "퀴즈 이팩트",
            "마우스 이펙트",
            "슬라이드 이펙트",
            "패럴랙스 이펙트",
            "게임 이펙트",
        ],
    },
    {
        title: "레퍼런스",
        items: ["CSS", "FONTS", "HTML", "JAVASCRIPT", "REACT"],
    },
];
const Footer = () => {
    return (
        <footer
            id="footer"
            role="contentinfo"
            className="footer__wrap section bg-blue gmarket5"
        >
            <div className="footer__inner container">
                <div className="footer__text">
                    <h5>kshkmn0929</h5>
                    <p>
                        질문 환영 🥳 <br />
                        궁금한 사항은 메일로 연락주세요!
                        <Link href="mailto:kshkmn0929@naver.com">
                            kshkmn0929@naver.com
                        </Link>
                    </p>
                    <ul className="sns">
                        <li>
                            <Link href="/">
                                <span className="ir">페이스북</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <span className="ir">인스타</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <span className="ir">유투브</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <span className="ir">깃</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__menu">
                    {links.map((section) => (
                        <div key={section.title}>
                            <h4>{section.title}</h4>
                            <ul>
                                {section.items.map((item, index) => (
                                    <li key={index}>
                                        <Link href="/">{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="footer__right">
                    Copyright 2022. All Rights Reserved. - Designed by
                    Webstoryboy
                </div>
            </div>
        </footer>
    );
};

export default Footer;
