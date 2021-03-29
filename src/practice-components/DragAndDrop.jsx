import React, { useRef} from "react";
import "../styles/drag-drop.css";

const getCard = useRef

function Card(props) {
  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
}

function Board(props) {
  const drop = (e) => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");
    const card = document.getElementById(card_id);
    card.style.display = "block";

    e.target.appendChild(card);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };
  return (
    <div
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
}

class DragAndDrop extends React.Component {
  render() {
    return (
      <div className="page-holder">
        <div className="flexbox">
          <Board id="board-1" className="board">
            <Card id="card-1" className="card" draggable={true}>
              <p>Card One</p>
            </Card>
          </Board>
          <Board id="board-2" className="board">
            <Card id="card-2" className="card" draggable={true}>
              <p>Card Two</p>
            </Card>
          </Board>
        </div>
      </div>
    );
  }
}

export default DragAndDrop;
