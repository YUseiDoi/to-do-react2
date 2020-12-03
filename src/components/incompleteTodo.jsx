import React from "react";

export const IncompleteTodo = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  return (
    <div class="incomplete-area">
      <p class="title">未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <div key={todo} class="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
