import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <ParkingList items={items} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏜 far away 🏝</h1>;
}

function Form({ onAddItems }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <section className="add-form" onSubmit={handleSubmit}>
      <p>what do you need for your trip?</p>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="items..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleSubmit}>add</button>
    </section>
  );
}

function ParkingList({ items }) {
  return (
    <ul className="list">
      {items.map((items) => (
        <Item
          key={items.id}
          id={items.id}
          description={items.description}
          quantity={items.quantity}
          packed={items.packed}
        />
      ))}
    </ul>
  );
}

function Item({ description, packed, quantity }) {
  return (
    <li>
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity}
        {description}
        {packed}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      you have x items on your list, and you already packed x
    </footer>
  );
}
