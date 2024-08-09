import { BiLogOut } from 'react-icons/bi';

const LogoutBtn = () => {
  return (
    // mt-auto makes the logout btn go to the bottom
    <div className="mt-auto">
        <BiLogOut className="w-6 h-6 text-white cursor-pointer" />
    </div>
  )
}

export default LogoutBtn