import {loginError} from "../model/loginErrorType";
import axios, {AxiosError} from "axios";

const url = 'http://localhost:8080/api/v1/register';

export async function signUpUser(userName: any, passWord: any, email: any, setErrorMessages: (value: (((prevState: loginError) => loginError) | loginError)) => void) {

    try {
        let response = await axios.post(url, {
            username: userName,
            password: passWord,
            email: email
        }, {})
        return response.data
    } catch (error: any) {
        if (error.code === AxiosError.ERR_NETWORK) {
            setErrorMessages({message: error.message})
        } else {
            setErrorMessages({message: error.response.data.message})
        }
    }
}