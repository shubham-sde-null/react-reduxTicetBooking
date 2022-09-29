import { CANCEL_BOOKING, NEW_BOOKING } from "../../constants";
export const reservationHistory = (oldReservationList = [], action) => {
    switch (action.type) {
        case NEW_BOOKING:
            return [...oldReservationList, action.payload];
        case CANCEL_BOOKING:
            return oldReservationList.filter((record) => {
                return record.name !== action.payload.name;
            });
        default:
            return oldReservationList;
    }
};
export const accounting = (totalMoney = 0, action) => {
    switch (action.type) {
        case NEW_BOOKING:
            return totalMoney + Number(action.payload.amount);
        case CANCEL_BOOKING:
            return totalMoney - 100;
        default:
            return totalMoney;
    }
};