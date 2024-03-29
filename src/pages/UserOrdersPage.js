import Navbar from '.././components/navbar/Navbar'
import UserOrders from '../components/users/UserOrders'

function UserOrdersPage() {
  return (
    <div>
      <Navbar>
        <h1 className="mx-auto text-4xl bold">My Orders</h1>
        <UserOrders />
      </Navbar>
    </div>
  )
}

export default UserOrdersPage
