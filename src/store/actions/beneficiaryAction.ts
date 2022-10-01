import axios from 'axios'
import { AppDispatch } from '../index';
import { AnyAction } from 'redux';
export const GET_BENIFICIARIES = "GET_BENIFICIARIES";

export const getBeneficiaries = () => {
    return (dispatch: AppDispatch) => {
        axios.get("http://localhost:5001/beneficiary/get").then((response) => {
            console.log(response)
            // dispatch({
            //     type: GET_BENIFICIARIES,
            //     payload: response.data.beneficiaries
            // })
            console.log(response);

        }).catch((e) => {

        })
    }

}