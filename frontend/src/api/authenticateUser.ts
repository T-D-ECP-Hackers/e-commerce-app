import axios, {AxiosError} from "axios";
import {loginError} from "../model/loginErrorType";

const url = 'http://localhost:8080/api/v1/authenticate';

export async function authenticateUser(user: string, pass: any, setErrorMessages: (value: (((prevState: loginError) => loginError) | loginError)) => void): Promise<any> {

    try {
        let response = await axios.post(url, {
            username: user,
            password: pass,
        }, {})
        return response.data;
    } catch (error: any) {
        if (error.code === AxiosError.ERR_NETWORK) {
            setErrorMessages({message: error.message})
        } else {
            setErrorMessages({message: error.response.data.message})
        }
    }
}