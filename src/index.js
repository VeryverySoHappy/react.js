import ReactDOM from 'react-dom/client';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
//   <h1 id='title'>가위바위보</h1>
//   <button class='hand'>가위</button>
//   <button class='hand'>바위</button>
//   <button class='hand'>보</button>
//   </>,
// )

// id명 작성 가능
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <div id='hello'>안녕 리액트!</div>
  </>,
)

// class 사용 불가
/*
  javascript에서 class를 사용하기 때문에 class  사용 불가 
  
  class Dice{
    roll() {
      console.log('Rool');
    }
  }
*/

/*
  JSX에서 class 속성을 작성하려면
  className으로 작성

  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <div className='hello'>안녕 리액트!</div>
  </>,
)
*/

/*

for 속성 사용 불가능
label 태그에서 사용하는 속성인 for는 JSX에서 사용 X
Javascript에서 for 는 반복문으로 사용

for를 사용하고 싶으면, htmlFor로 작성

ReactDOM.render(
  <form>
    <label htmlFor='name'>이름</label>
    <input id='name' typeof='text'/>
  </form>,
  document.getElementById('root'));
)

*/