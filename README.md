기본 오류 캣치 방법

클래스형 컴포넌트 활용

componentDidCatch = (error, info) => {
    console.log(error);
    console.log(info);
}