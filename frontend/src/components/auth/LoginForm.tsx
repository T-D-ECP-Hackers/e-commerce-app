import React, {useContext, useState} from "react";
import UserContext from "../../context/UserContext";
import {useNavigate} from "react-router-dom";
import {goToProductsPage, goToSignUp} from "../../functions/navigation";
import {login} from "../../functions/login";
import {loginError} from "../../model/loginErrorType";
import {authenticateUser} from "../../api/authenticateUser";

function LoginForm() {

    const [errorMessages, setErrorMessages] = useState<loginError>({message: ""});
    const user = useContext(UserContext);
    const navigate = useNavigate();
    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const {uname, pass} = document.forms[0];
        const userName = uname.value;
        const passWord = pass.value;
        let isUserAuthenticated = await authenticateUser(userName, passWord, setErrorMessages);
        if (isUserAuthenticated) {
            console.log(`${userName} is authenticated`)
            login(userName, user.setContext)
            goToProductsPage(navigate);
        } else {
            console.log(`${userName} is not authenticated`)
        }
    };

    const renderErrorMessage = () => {
        return <div className="error">{errorMessages.message}</div>
    }

    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required/>
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required/>
                </div>
                {renderErrorMessage()}
                <div className="button-container">
                    <input type="submit" value="Login" />
                    <button className="sign-up-button" onClick={() => goToSignUp(navigate)}>Sign Up</button>
                </div>
            </form>
        </div>
    );

    return (
        <div className="login-form">
            <div className="title">Login</div>
            {renderForm}
        </div>
    );
}

export default LoginForm;