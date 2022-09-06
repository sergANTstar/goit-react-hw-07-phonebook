import { useState } from "react";
import { useDispatch } from "react-redux";
import operations from "redux/authUser/authUserApi";

const Registration = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const inputChange = ({target: {name, value}}) => {
        switch (name) {
            case 'name':
                setName(value);
                break;
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
        dispatch(operations.logIn({name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <form onSubmit={formSubmit} className={css.contact__form}>
            <input
              type="text"
              name="name"
              value={name}
              onChange={inputChange}
              placeholder="Name"
              className={css.contact__input}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
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
            <button className={css.contact__button} type="submit">Sidn Up</button>
      </form>
    )
}

export default Registration