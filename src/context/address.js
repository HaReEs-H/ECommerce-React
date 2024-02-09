import { createContext, useState } from 'react'
import { useSelector } from 'react-redux'

const AddressContext = createContext()

function AddressProvider({ children }) {
  const [selectedAddress, setSelectedAddress] = useState(null)
  const { loggedInUser } = useSelector((state) => {
    return state.users
  })
  const handleAddress = (event) => {
    setSelectedAddress(loggedInUser.addresses[event.target.value])
  }
  return (
    <AddressContext.Provider value={{ selectedAddress, handleAddress }}>
      {children}
    </AddressContext.Provider>
  )
}

export default AddressContext
export { AddressProvider }
