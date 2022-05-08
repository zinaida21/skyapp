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

  IncrementQuantityWithPrice = (index) => {
    let totalQuantity = this.state.details.reduce(
      (sum, n) => sum + n.quantity,
      0
    ) // общее количество (total quanity)

    /* let totalQuantity = this.setState((prevState) => ({
      quantity: prevState.quantity,
    }))
    let totalAmount = this.setState((prevState) => ({
      amount: prevState.amount,
    })) */

    // let totalQuantity = this.state.quantity
    let totalAmount = this.state.amount

    const ArrDetails = this.state.details.map((item) => {
      /* totalAmount = item.price * totalQuantity */

      if (item.id === index && item.quantity >= 0) {
        // console.log(item.price)
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
        /* console.log(element.quantity)
        console.log(totalQuantity) */
      }
    })

    this.setState({
      amount: totalAmount,
      quantity: totalQuantity,
      details: ArrDetails,
    })
  }

  DecrementQuantityWithPrice = (index) => {
    /* const totalQuantity = this.state.details.reduce(
      (sum, n) => sum + n.quantity,
      0
    ) */ // общее количество (total quanity)

    let totalAmount = this.state.amount
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
  }

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
