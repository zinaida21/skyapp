import { useState, useEffect } from "react";
import MinMax from "./MinMax";
import useInput from "./useInput";

function booksStub() {
  return [
    {
      id: 1,
      title: "Война и мир - Л.Н.Толстой",
      price: 800,
      rest: 10,
      quantity: 1,
    },
    {
      id: 2,
      title: "Две жизни - К.Е.Антарова",
      price: 700,
      rest: 5,
      quantity: 1,
    },
    {
      id: 3,
      title: "Разговор с богом - Н.Д.Уолша",
      price: 1000,
      rest: 2,
      quantity: 1,
    },
    {
      id: 5,
      title: "Хохот Шамана - В.П.Серкин",
      price: 600,
      rest: 8,
      quantity: 1,
    },
    {
      id: 4,
      title: "Хроники Ехо - Макс Фрай",
      price: 400,
      rest: 8,
      quantity: 1,
    },
  ];
}
export default function BookCart() {
  const [books, setBooks] = useState(booksStub());
  const [total, setTotal] = useState(0);
  // const [value, setValue] = useState("");

  const setQuantity = (id, quantity) => {
    setBooks(
      books.map((book) => (book.id !== id ? book : { ...book, quantity }))
    );
  };

  // пользовательский хук обязательное поле
  /* const useInput = (required, e) => {
    useEffect(() => {
      const value = e.target.value;
      if (!e.target.value && required) {
        setValue("вы забыли ввести количество");
        e.target.style.borderColor = "red";
      }
    }, []);
  };*/

  const name = useInput("Ваше имя", true);
  const login = useInput("Ваш пароль", true);

  // считаем итого
  useEffect(() => {
    let summ = books.reduce(
      (total, { quantity, price }) => quantity * price + total,
      0
    );
    setTotal(summ);
  }, [books]);

  // считаем итого
  /*  useEffect(() => {
    let summ = books.reduce(
      (total, { quantity, price }) => quantity * price + total,
      0
    );
    setTotal(summ);
    console.log(summ);
  }); */

  // удаляем строку
  const deleteBtn = (id) => {
    setBooks(books.filter((item) => item.id !== id));
  };

  return (
    <div className="some">
      <h1>books list</h1>
      <form>
        <label className="label">Login:</label>
        <input
          {...name}
          // placeholder={nameText}
          // value={value}
          // onChange={(e) => setValue(e.target.value)}
          // onBlur={(e) => setValue(e.target.value)}
        />
        {name.error && <span style={{ color: "red" }}>{name.error}</span>}
        <label className="label">Password:</label>
        <input {...login} />
        {login.error && <span style={{ color: "red" }}>{login.error}</span>}
      </form>
      <table>
        <tbody>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Delete</th>
          </tr>
          {books.map((book, i) => (
            <tr key={book.id}>
              <td>{i + 1}</td>
              <td>{book.title}</td>
              <td>{book.price}</td>
              <td>
                <MinMax
                  max={book.rest}
                  current={book.quantity}
                  onChange={(quantity) => setQuantity(book.id, quantity)}
                />
              </td>
              <td className="totalSum">{book.price * book.quantity}</td>
              <td className="deleteBtn" onClick={() => deleteBtn(book.id)}>
                X
              </td>
            </tr>
          ))}
          <tr>
            <td>Итого:</td>
            <td></td>
            <td></td>
            <td></td>
            <td>{total}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

/* 
<input placeholder={value} onBlur={(e) => useInput(true, e)} />

const setquantity = (id, quantity) => {
	const newbooks = [ ...books ];
	const productInd = books.findIndex(book => book.id == id);
	const newProduct = { ...books[productInd] };
	newProduct.quantity = quantity;
	newbooks[productInd] = newProduct;
	setbooks(newbooks);
} */
