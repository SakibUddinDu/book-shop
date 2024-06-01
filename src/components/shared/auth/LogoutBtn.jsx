import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from './../../../firebase/firebase.config';

function LogoutBtn() {

    const [signOut, loading, error] = useSignOut(auth);

    const handleSignOut= async () => {
        const success = await signOut();
        if (success) {
          alert('You are sign out');
        }
      }
  return <button onClick={()=> handleSignOut()} className="btn btn-primary">Logout</button>;
}

export default LogoutBtn;
