const Buttons = (props) => {
  return (
    <>
      <div className='buttons'>
        <div>
          <button name ='AC' onClick={props.allClear}>AC</button>
          <button name ='+/-' onClick={props.handleInteger}>+/-</button>
          {/* <button>%</button> */}
          <button name ='÷'onClick={() => props.applyMethod('÷')} >÷</button>
        </div>
        <div>
          <button name ='7' onClick={props.handleNumber}>7</button>
          <button name ='8' onClick={props.handleNumber}>8</button>
          <button name ='9' onClick={props.handleNumber}>9</button>
          <button name ='x' onClick={() => props.applyMethod('x')}>x</button>   
        </div>
        <div>
          <button name ='4' onClick={props.handleNumber}>4</button>
          <button name ='5' onClick={props.handleNumber}>5</button>
          <button name ='6' onClick={props.handleNumber}>6</button>
          <button name ='-' onClick={() => props.applyMethod('-')}>-</button>
        </div>
        <div>
          <button name ='1' onClick={props.handleNumber}>1</button>
          <button name ='2' onClick={props.handleNumber}>2</button>
          <button name ='3' onClick={props.handleNumber}>3</button>
          <button name ='+' onClick={() => props.applyMethod('+')}>+</button>
        </div>  
        <div>
          <button name ='0' onClick={props.handleNumber}>0</button>
          <button name ='.' onClick={props.handleNumber}>.</button>
          <button name ='=' onClick={props.calculate}>=</button>
        </div>
      </div>
    </>
  );
};

export default Buttons;
