import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useContext(AuthContext);

    const login = async (username, password) => {
        const success = handleInputErrors(username, password);
        if (!success) return;
        setLoading(true);
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ username, password })
            })
            const data = await res.json();
            
            if (data.error) {
                throw new Error(data.error);
            } else {
                localStorage.setItem('chat-user', JSON.stringify(data));
                setAuthUser(data);
            }
        } catch(err) {
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    }
    return {loading, login}
}

function handleInputErrors(username, password) {
    if (!username || !password) {
      toast.error('Please fill all the fields');
      return false;
    }

    return true;
  }

export default useLogin;