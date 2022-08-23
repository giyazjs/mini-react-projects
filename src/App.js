import React from 'react';
import './index.scss';

function App() {
  const [num, setNum] = React.useState(0);
  const [text, setText] = React.useState();

  const plus = () => {
    setNum(num + 1);
  };
  const minus = () => {
    setNum(num - 1);
  };
  return (
    <div className="App">
      <span className="text">Число</span>
      <h1 className="num">{num}</h1>
      <div className="btns">
        <button className="minusBtn" onClick={minus}>
          Минус -
        </button>
        <button className="plusBtn" onClick={plus}>
          Плюс +
        </button>
      </div>
    </div>
  );
}

export default App;
