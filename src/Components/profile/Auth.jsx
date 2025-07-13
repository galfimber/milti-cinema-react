import { useAppContext } from "../../context/AppContext";
import { signInWithGoogle, logOut } from "../../firebase";

function Auth() {
  const { user } = useAppContext();
  return (
    <div className="auth">
      {user ? (
        <button className="profile__btn" onClick={logOut}>
          Выйти
        </button>
      ) : (
        <button className="profile__btn" onClick={signInWithGoogle}>
          Войти через Google
        </button>
      )}
    </div>
  );
}

export default Auth;
