import { useState } from "react";
import { useDispatch } from "react-redux";
import operations from "redux/authUser/authUserApi";


const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const inputChange = ({target: {name, value}}) => {
        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                throw new Error();
        }
    };

    const formSubmit = e => {
        e.preventDefault();
        dispatch(operations.logIn({ email, password }));
        setEmail('');
        setPassword('');
    };

    return (
        <form onSubmit={formSubmit} className={css.contact__form}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={inputChange}
          placeholder="Name"
          className={css.contact__input}
          pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
          title="Invalid email address"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={inputChange}
          className={css.contact__input}
          required
        />
        <button className={css.contact__button} type="submit">Login</button>
      </form>
    )
}

export default Login;