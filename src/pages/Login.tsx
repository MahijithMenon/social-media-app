import { auth,GoogleLoginProvider } from '../config/firebase';
import  {signInWithPopup} from 'firebase/auth';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const signInWithGoogle = async () => {
         try{
            const res= await signInWithPopup(auth,GoogleLoginProvider);
            console.log(res);
            navigate('/')
        }
        catch(err){
            console.log(err);
    }
}
    return (
        <div>
            <Navbar />
            <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    )
}

export default Login;