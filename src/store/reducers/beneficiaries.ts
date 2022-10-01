const initialState = {
    beneficiaryList: []
}

const beneficiaryReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "GET_BENIFICIARIES":
            return {
                ...state,
                beneficiaryList:action.payload

            }

        default:
            return state;
    }
}

export default beneficiaryReducer;