import React, {useContext, useState} from "react";
import UserContext from "../../context/UserContext";
import {useNavigate} from "react-router-dom";
import {goToProductsPage} from "../../functions/navigation";
import {login} from "../../functions/login";
import {loginError} from "../../model/loginErrorType";
import {signUpUser} from "../../api/signUpUser";

export type User = {
    name: string;
};

function SignUpForm() {

    const [errorMessages, setErrorMessages] = useState<loginError>({message: ""});
    const user = useContext(UserContext);
    const navigate = useNavigate();
    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const {uname, pass, email} = document.forms[0];
        const userName = uname.value;
        const passWord = pass.value;
        const emailAddress = email.value
        let isUserAuthenticated = await signUpUser(userName, passWord, emailAddress, setErrorMessages);
        if (isUserAuthenticated) {
            console.log(`${userName} is signed up and authenticated`)
            login(userName, user.setContext)
            goToProductsPage(navigate);
        } else {
            console.log(`${userName} is not is signed up or authenticated`)
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
                <div className="input-container">
                    <label>Email </label>
                    <input type="email" name="email" required/>
                </div>
                {renderErrorMessage()}
                <div className="button-container">
                    <input type="submit" value="Sign Up"/>
                </div>
            </form>
        </div>
    );

    return (
        <div className="sign-up-form">
            <div className="title">Sign Up</div>
            {renderForm}
        </div>
    );
}

export default SignUpForm;