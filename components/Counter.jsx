const Counter = ({ num, onIncrease, onDecrease }) => {
  return (
    <div>
      <h1>{num}</h1>
      <button type="button" onClick={onIncrease}>
        +1
      </button>
      <button type="button" onClick={onDecrease}>
        -1
      </button>
    </div>
  );
};

export default Counter;
