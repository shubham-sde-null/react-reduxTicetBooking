import { CANCEL_BOOKING, NEW_BOOKING } from "../../constants";
export const newBooking = (name, amount) => {
    return {
        type: NEW_BOOKING,
        payload: {
            name: name,
            amount: amount,
        },
    };
};
export const cancelBooking = (name) => {
    return {
        type: CANCEL_BOOKING,
        payload: {
            name: name,
        },
    };
};