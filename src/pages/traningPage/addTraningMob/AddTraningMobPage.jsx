import AddTraningForm from "components/addTraningForm";
import PropTypes from "prop-types";

const AddTraningMobPage = ({ setGoalBooks, setDateDiff }) => {
  return (
    <AddTraningForm setGoalBooks={setGoalBooks} setDateDiff={setDateDiff} />
  );
};

AddTraningMobPage.propTypes = {
  setGoalBooks: PropTypes.func,
  setDateDiff: PropTypes.func,
};

export default AddTraningMobPage;
