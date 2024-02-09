import Navbar from '../components/navbar/Navbar'
import UserProfile from '../components/users/UserProfile'

function UserProfilePage() {
  return (
    <div>
      <Navbar>
        <h1 className="mx-auto text-2xl">My Profile</h1>
        <UserProfile />
      </Navbar>
    </div>
  )
}

export default UserProfilePage
