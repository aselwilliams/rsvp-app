import GuestsList from "./components/GuestsList";
import "./App.css";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import { nanoid } from "nanoid";

const savedList = JSON.parse(localStorage.getItem('savedGuestList'));
const initialState={
  list:savedList ? savedList : []
}

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState(initialState.list);
  const [isEditing, setIsEditing] = useState(false);
  const [count, setCount] = useState(0);
  const [editId, setEditId] = useState(null);

  useEffect(()=>{
    localStorage.setItem('savedGuestList', JSON.stringify(list))
  })

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      const newGuest = {
        name: input,
        confirmed: false,
        id: nanoid(),
      };
      setList([...list, newGuest]);
      setInput("");
    } else {
      alert("Please enter guest name");
    }
  };

  const handleEdit = (id) => {
    setIsEditing(true);
    setEditId(id);
  };

  const handleUpdate = (id) => {
    const newList = list.map((guest) => ({ ...guest }));
    setList(
      newList.map((guest) => {
        if (guest.id === id) {
          return {
            ...guest,
            name: input,
          };
        } else {
          return guest;
        }
      })
    );
    setIsEditing(false);
    setInput("");
    setEditId(null);
  };

  const handleCount = (guest) => {
    let found = list.find((g) => g.id === guest.id);
    found.confirmed = !found.confirmed;
    if (guest.confirmed) {
      setCount((prevState) => prevState + 1);
    } else {
      setCount((prevState) => prevState - 1);
    }
  };

  const handleDelete = (guest) => {
    if (list.length === 0) setCount(0);
    if (guest.confirmed) {
      setCount((prevState) => prevState - 1);
    }
    let newlist = list.map((guest) => ({ ...guest }));
    setList(newlist.filter((g) => g.id !== guest.id));
  };

  return (
    <div className="App">
      <h1 className="title">RSVP App</h1>
      <Form
        count={count}
        input={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <GuestsList
        list={list}
        handleChange={handleChange}
        isEditing={isEditing}
        handleCount={handleCount}
        handleUpdate={handleUpdate}
        handleEdit={handleEdit}
        editId={editId}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
