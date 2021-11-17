const Result = (props) => {
  return (
    <>
      <div className="result">
        <textarea className="userInput" value={props.currentNumber || props.operation}/>
      </div>
    </>
  );
};

export default Result;
