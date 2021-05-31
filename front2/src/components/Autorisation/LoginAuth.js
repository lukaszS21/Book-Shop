import axios from 'axios';

export const signin = (signinData) => async (dispatch) => {
    try {
        const res = await axios.post(`home/login`, signinData)
        dispatch({
            type: "SIGNIN",
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: "SIGNIN_ERROR"
        })
    }
}

export const signout = () => async (dispatch) => {

    dispatch({
        type: "SIGNOUT"
    })
}