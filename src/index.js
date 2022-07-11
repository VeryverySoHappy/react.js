import ReactDOM from "react-dom";

const product = 'Macbook';
const model = ' Air';
const item = product + model;
const imageUrl = 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRZgv8Gg0gc22EmVVHQJ169M8Y4l1-rBZB9HlL_dif2MbSKf_tYAIsFCh1FQwHS71ok45IrJ6JZVw&usqp=CAc'

function handleClick(){
  alert('곧 도착합니다');
}
ReactDOM.render(
  <>
    <h1>나만의 {item} 주문하기</h1>
    <img src={imageUrl} alt='제품사진'/>
    <button onClick={handleClick}>확인</button>
  </>,
  document.getElementById('root')
);