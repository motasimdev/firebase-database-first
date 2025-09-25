import React, { useState } from "react";
import Container from "../Container";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [taskError, setTaskerror] = useState("");
  const db = getDatabase();
  const [viewTask, setViewtask] = useState([])

  const handleTaskInput = (e) => {
    setTask(e.target.value);
  };
  const handleTaskBtn = () => {
    if (!task) {
      setTaskerror("Task is missing");
    } else {
      set(
        push(ref(db, "todotask/")),
        {
          name: task,
        }
        // .then(alert("success"))
        // .catch("error")
      );
    }
  };

  // read data
  const todotaskRef = ref(db, "todotask/");
  onValue(todotaskRef, (snapshot) => {
    // const data = snapshot.val();
    // updateStarCount(postElement, data);
    // console.log(snapshot.val());
    let arr = [];
    snapshot.forEach((item) => {
      // console.log(item.val());
      arr.push(item.val());
    });
    console.log(arr);
  });
  // read data
  return (
    <>
      <div className="py-10 bg-blue-900">
        <Container>
          <div className="max-w-sm mx-auto">
            <input
              onChange={handleTaskInput}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add Task"
            />
            {taskError && (
              <div className="bg-red-700 p-3 mt-4 text-center text-white">
                {taskError}
              </div>
            )}
            <button
              onClick={handleTaskBtn}
              type="submit"
              className="mt-5 cursor-pointer text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto lg:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>

          <div className="overflow-x-auto mt-5">
            <Table striped>
              <TableHead>
                <TableHeadCell>Task name</TableHeadCell>
                <TableHeadCell>Color</TableHeadCell>
                <TableHeadCell>Category</TableHeadCell>
                <TableHeadCell>Price</TableHeadCell>
                <TableHeadCell>
                  <span className="sr-only">Edit</span>
                </TableHeadCell>
              </TableHead>
              <TableBody className="divide-y">
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Apple MacBook Pro 17"
                  </TableCell>
                  <TableCell>Sliver</TableCell>
                  <TableCell>Laptop</TableCell>
                  <TableCell>$2999</TableCell>
                  <TableCell>
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Edit
                    </a>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Todo;
