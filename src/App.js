function Square({ value }) {
  function handleClick() {
    console.log('clicked!');
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="x" />
        <Square value="x" />
        <Square value="x" />
      </div>
      <div className="board-row">
        <Square value="x" />
        <Square value="x" />
        <Square value="x" />
      </div>
      <div className="board-row">
        <Square value="x" />
        <Square value="x" />
        <Square value="x" />
      </div>
    </>
  );
}
