import { connect } from "react-redux";
import Home from "../components/Home";
import { newBooking, cancelBooking } from "../services/actions.js/action";
const mapDispatchToProps = (state) => ({
    trainData: state,
});
const mapStateToProps = (dispatch) => ({
    addPessenger: (name, amount) => dispatch(newBooking(name, amount)),
    cancelTicket: (name) => dispatch(cancelBooking(name)),
});
export default connect(mapDispatchToProps, mapStateToProps)(Home);