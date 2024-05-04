"use client";
import React from "react";

const columns = [
  {
    title: "To Do",
    tasks: [
      {
        id: 1,
        title: "task 1",
        description: "description 1",
      },
      {
        id: 2,
        title: "task 2",
        description: "description 2",
      },
    ],
  },
  {
    title: "In Progress",
    tasks: [
      {
        id: 3,
        title: "task 3",
        description: "description 3",
      },
      {
        id: 4,
        title: "task 4",
        description: "description 4",
      },
    ],
  },
  {
    title: "Done",
    tasks: [
      {
        id: 5,
        title: "task 5",
        description: "description 5",
      },
      {
        id: 6,
        title: "task 6",
        description: "description 6",
      },
    ],
  },
];
const KanbanBoard = () => {
  const [myColumns, setMyColumns] = React.useState(columns);
  const clickAddColumn = () => {
    const _columns = [...myColumns];
    _columns.push({
      title: "New Column",
      tasks: [],
    });
    setMyColumns(_columns);
  };

  const startDragItem = (e) => {
    e.stopPropagation();

    e.dataTransfer.setData("id", e.target.getAttribute("id"));
  };
  const dropItem = (e, index) => {
    const dropID = e.dataTransfer.getData("id");
    const parent = document.getElementById(`column-${index}`);
    parent?.classList?.remove("!bg-red-300");
    if (!dropID) return;

    let flyTask = null;
    myColumns.forEach((column) => {
      column.tasks.forEach((task) => {
        if (task.id == parseInt(dropID)) {
          flyTask = { ...task };
        }
      });
    });
    const _columns = [...myColumns].map((v) => {
      return {
        ...v,
        tasks: [
          ...v.tasks.filter((task) => {
            console.log(task.id, dropID);
            return task.id != dropID;
          }),
        ],
      };
    });

    _columns[index].tasks.push({
      ...flyTask,
    });

    setMyColumns(_columns);

    e.dataTransfer.clearData();
  };
  const dragOverItem = (e, index) => {
    e.stopPropagation();
    e.preventDefault();
    const parent = document.getElementById(`column-${index}`);
    parent?.classList?.add("!bg-red-300");
  };
  return (
    <div className="w-full">
      {/* ADD BAR */}
      <div className="flex w-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-4">
        <div
          onClick={clickAddColumn}
          className="w-28 border rounded-lg text-white px-2 py-1 cursor-pointer"
        >
          Add column
        </div>
      </div>
      {/* BOARD */}
      <div className="flex flex-row gap-2 mt-2">
        {myColumns.map((column, index) => {
          return (
            // COLUMN RENDER
            <div
              key={index}
              id={`column-${index}`}
              className="flex flex-col bg-[#ebe7e7] flex-1 p-3 rounded-lg "
              onDragOver={(e) => dragOverItem(e, index)}
              onDragLeave={(e) => {
                e.stopPropagation();
                e.preventDefault();
                const parent = document.getElementById(`column-${index}`);

                parent?.classList?.remove("!bg-red-300");
              }}
              onDrop={(e) => dropItem(e, index)}
            >
              <h1
                onDragStart={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                draggable={false}
              >
                {column.title}
              </h1>
              {column.tasks.map((task, _index) => {
                return (
                  <div
                    draggable
                    id={task.id}
                    onDragStart={startDragItem}
                    key={_index}
                    className="border border-gray-300 p-2 m-2"
                  >
                    <h2>{task.title}</h2>
                    <p>{task.description}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KanbanBoard;
