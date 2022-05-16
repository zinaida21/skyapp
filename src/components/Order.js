import React from 'react'
import OrderDetail from './OrderDetail'

// const minVal = 0

export default class Order extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      amount: 0, // сумма
      quantity: 0, // количество
      details: [
        // описание товара
        {
          id: 1,
          productName: 'Война и мир - Л.Н.Толстой',
          price: 800,
          quantity: 0,
        },
        {
          id: 2,
          productName: 'Две жизни - К.Е.Антарова',
          price: 700,
          quantity: 0,
        },
        {
          id: 3,
          productName: 'Разговор с богом - Н.Д.Уолша',
          price: 1000,
          quantity: 0,
        },
        {
          id: 4,
          productName: 'Хохот Шамана - В.П.Серкин',
          price: 600,
          quantity: 0,
        },
        {
          id: 5,
          productName: 'Хроники Ехо - Макс Фрай',
          price: 400,
          quantity: 0,
        },
      ],
    }
  }

  /*
  IncrementQuantityWithPrice = (index) => {
    let totalQuantity = this.state.details.reduce(
      (sum, n) => sum + n.quantity,
      0
    )

    let totalAmount = this.state.amount

    const ArrDetails = this.state.details.map((item) => {
      if (item.id === index && item.quantity >= 0) {
        return {
          id: item.id,
          productName: item.productName,
          price: item.price,
          quantity: item.quantity + 1,
        }
      }
      return {
        id: item.id,
        productName: item.productName,
        price: item.price,
        quantity: item.quantity,
      }
    })

    ArrDetails.forEach((element) => {
      if (element.id === index && totalQuantity >= 0 && element.quantity > 0) {
        totalQuantity += 1
        totalAmount += element.price
      }
    })

    this.setState({
      amount: totalAmount,
      quantity: totalQuantity,
      details: ArrDetails,
    })
  }

  */

  IncrementQuantityWithPrice = (index) => {
    this.setState((nextState) => {
      /*  if (prevState.quantity === 0) {
        return {
          ...prevState,
        }
      }
      */
      const updatedDetails = nextState.details.map((item) =>
        item.id === index ? { ...item, quantity: item.quantity + 1 } : item
      )

      return {
        ...nextState,
        quantity: nextState.quantity + 1,
        amount:
          nextState.amount +
          nextState.details.find((item) => item.id === index).price,
        details: updatedDetails,
      }
    })
  }

  DecrementQuantityWithPrice = (index) => {
    this.setState((prevState) => {
      if (prevState.quantity === 0) {
        return {
          ...prevState,
        }
      }
      const updateDetails = prevState.details.map((item) =>
        item.id === index ? { ...item, quantity: item.quantity - 1 } : item
      )
      /*
      const updateDetails = prevState.details.map((item) => {
        if (item.id === index) {
          return {
            ...item,
            quantity: item.quantity[index] - 1,
          }
        }
        return {
          ...item,
        }
      })
*/
      console.log(index)

      return {
        ...prevState,
        quantity: prevState.quantity - 1,
        amount:
          prevState.amount -
          prevState.details.find((item) => item.id === index).price,
        details: updateDetails,
      }
    })
  }

  /* let totalAmount = this.state.amount
    let totalQuantity = this.state.quantity

    const ArrDetails = this.state.details.map((item) => {
      if (item.id === index && item.quantity >= 1) {
        return {
          id: item.id,
          productName: item.productName,
          price: item.price,
          quantity: item.quantity - 1,
        }
      }
      return {
        id: item.id,
        productName: item.productName,
        price: item.price,
        quantity: item.quantity,
      }
    })

    ArrDetails.forEach((element) => {
      if (element.id === index && totalQuantity >= 0 && element.quantity >= 0) {
        totalQuantity -= 1
        totalAmount -= element.price
      }
    })

    this.setState({
      amount: totalAmount,
      quantity: totalQuantity,
      details: ArrDetails,
    })

    */

  render() {
    // <OrderDetail />
    return (
      <div>
        <OrderDetail
          items={this.state.details}
          increment={this.IncrementQuantityWithPrice}
          decrement={this.DecrementQuantityWithPrice}
        />

        <div className="order">
          <div className="clear" />
          <p className="total">
            Total Quantity : <b>{this.state.quantity}</b>
          </p>
          <p className="total">
            Total Price : <b>{this.state.amount} /- </b>
          </p>
        </div>
      </div>
    )
  }
}
