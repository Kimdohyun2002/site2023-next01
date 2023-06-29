import Image from "next/image";
import React from "react";

const Movie = () => {
    return (
        <section id="movieSection" class="movie__wrap section gmarket5">
            <div class="movie__inner container">
                <div class="movie__text">
                    <h3>도서 소개</h3>
                    <p>다양한 코딩 도서를 추천 하고 있습니다!</p>
                    <a href="#" class="button-green">
                        자세히보기
                    </a>
                </div>
                <div class="movie__item">
                    <div>
                        <Image
                            width={400}
                            height={100}
                            src="/assets/images/movie/movie1.png"
                            alt="언스플이미지1"
                        />
                    </div>
                    <div>
                        <Image
                            width={400}
                            height={100}
                            src="/assets/images/movie/movie2.png"
                            alt="언스플이미지2"
                        />
                    </div>
                    <div>
                        <Image
                            width={400}
                            height={100}
                            src="/assets/images/movie/movie4.png"
                            alt="언스플이미지3"
                        />
                    </div>
                    <div>
                        <Image
                            width={400}
                            height={100}
                            src="/assets/images/movie/movie5.png"
                            alt="언스플이미지4"
                        />
                    </div>
                    <div>
                        <Image
                            width={400}
                            height={100}
                            src="/assets/images/movie/movie6.png"
                            alt="언스플이미지5"
                        />
                    </div>
                    <div>
                        <Image
                            width={400}
                            height={100}
                            src="/assets/images/movie/movie3.png"
                            alt="언스플이미지6"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Movie;
