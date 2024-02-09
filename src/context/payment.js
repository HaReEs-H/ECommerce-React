import { createContext, useState } from 'react'

const PaymentContext = createContext()

function PaymentProvider({ children }) {
  const [paymentMethod, setPaymentMethod] = useState('cash')
  const handlePayment = (event) => {
    setPaymentMethod(event.target.value)
  }
  return (
    <PaymentContext.Provider value={{ paymentMethod, handlePayment }}>
      {children}
    </PaymentContext.Provider>
  )
}

export default PaymentContext
export { PaymentProvider }
