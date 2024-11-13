import { BiLogOut } from 'react-icons/bi';
import useLogout from '../../hooks/useLogout';

const LogoutBtn = () => {
  const {logout, loading} = useLogout();
  return (
    // mt-auto makes the logout btn go to the bottom
    <div className="mt-auto">
      {!loading ? (
        <BiLogOut  className="w-6 h-6 text-white cursor-pointer" onClick={logout} />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  )
}

export default LogoutBtn