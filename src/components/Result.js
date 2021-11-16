const Result = (props) => {
  return (
    <>
      <div className="result">
        <textarea className="userInput" value={props.currentNumber}/>
      </div>
    </>
  );
};

export default Result;
