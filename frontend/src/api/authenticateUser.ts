import axios from "axios";
import {userDetails} from "../model/userDetailsType";

const url = 'userDetails.json';

export function authenticateUser(user: string, pass: any) {
    return axios(url).then(response => {
        return response.data.find((u: userDetails) => {
            return u.username === user && u.password === pass
        });
    }).catch(error => {
        console.log("Error fetching data: " + error)
    })
}