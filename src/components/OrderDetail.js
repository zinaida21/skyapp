export default function OrderDetail(props) {
  const incrementItem = (id, e) => {
    props.increment(id, e)
  }

  const decrementItem = (id, e) => {
    props.decrement(id, e)
  }

  return props.items.map((item) => (
    <div className="order-detail">
      <h4 className="name" key={item.productName}>
        {item.productName}
      </h4>
      <p className="price" key={item.price}>
        Price:
        {item.price}
      </p>
      <p className="price" key={item.quantity}>
        Quantity:
        {item.quantity}
      </p>
      <button
        type="button"
        className="addButton"
        onClick={(e) => incrementItem(item.id, e)}
        // onClick={this.IncrementQuantityWithPrice}
      >
        +
      </button>
      <button
        type="button"
        className="removeButton"
        onClick={(e) => decrementItem(item.id, e)}
      >
        -
      </button>
    </div>
  ))
}
