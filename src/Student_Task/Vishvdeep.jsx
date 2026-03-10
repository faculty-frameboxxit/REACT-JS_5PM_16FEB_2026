import { useState } from "react";
function Vishvdeep() {
  const [show, setShow] = useState(true);
  const [task6, setTask6] = useState(["Hello", "VJ"]);
  const fruits = ["mango", "banana", "apple", "berry", "orange"];
  const user = [{ name: "VJ" }];
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 },
  ];
  const tasks4 = [
    { id: 1, title: "javascript", done: true },
    { id: 2, title: "javascript", done: false },
    { id: 3, title: "javascript", done: true },
  ];
  const tasks5 = [
    { id: 1, title: "javascript", done: true },
    { id: 2, title: "javascript", done: false },
    { id: 3, title: "javascript", done: true },
  ];

  const categories = [
    {
      name: "Vegetables",
      items: ["Potato", "Onion", "Tomato"],
    },
  ];
  const items1 = ["Apple", "Mango", "Banana", "Orange", "Berry"];
  const [search, setSearch] = useState("");

  const filteredItems = items1.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase()),
  );

  const [items, setItems] = useState(["Banana", "Apple", "Mango", "Orange"]);

  const sortAsc = () => {
    setItems([...items].sort());
  };

  const sortDesc = () => {
    setItems([...items].sort().reverse());
  };
  const items2 = ["Apple", "Mango", "Banana", "Orange"];
  return (
    <ul>
      {fruits.map((fruit) => (
        <li>{fruit}</li>
      ))}
      <br />
      {user.map((user) => (
        <li>{user.name}</li>
      ))}
      {products.map((product) => (
        <div>
          <p>{product.name}</p>
          <p> {product.price}</p>
        </div>
      ))}
      {tasks4.map((task) => (
        <li>
          {task.title}
          {task.done && <span> Completed</span>}
        </li>
      ))}
      <br />
      <br />

      {tasks5.map((task) => (
        <li>
          {task.title}
          {task.done && <span> Completed</span>}
        </li>
      ))}
      <br />
      <br />
      {task6.map((item, index) => (
        <li key={index}>{item}</li>
      ))}

      <div>
        {categories.map((cat, index) => (
          <div key={index}>
            <h3>{cat.name}</h3>

            {cat.items.map((item) => (
              <li>{item}</li>
            ))}
          </div>
        ))}
      </div>

      <br />

      <div>
        <input
          type="text"
          placeholder="Search item"
          onChange={(e) => setSearch(e.target.value)}
        />

        {filteredItems.map((item) => (
          <li>{item}</li>
        ))}
      </div>
      <br />
      <br />
      <div>
        <button onClick={sortAsc}>Sort A-Z</button>
        <button onClick={sortDesc}>Sort Z-A</button>

        {items.map((item) => (
          <li>{item}</li>
        ))}
      </div>
      <br />
      <br />
      <div>
        <button onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"} List
        </button>

        {show && (
          <ul>
            {items2.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </ul>
  );
}

export default Vishvdeep;
