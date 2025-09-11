import { useState } from "react";

export default function App() {
  return (
    <div>
      <Logo />
      <Form />
      {/* <ParkingList /> */}
      {/* <Stats /> */}
    </div>
  );
}

function Logo() {
  return <h1>🏜 far away 🏝</h1>;
}

function Form() {
  const [quantity, setQuantity] = useState(13);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault()
    setQuantity(1);
    setDescription("");
  }

  return (
    <section className="add-form" onSubmit={handleSubmit}>
      <p>what do you need for your trip?</p>
      <select
        name=""
        id=""
        value={quantity}
        onChange={(e) => setQuantity(+e.target.value)}
      >
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
      <button>add</button>
    </section>
  );
}
