import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: "10px 10px 20px 0px rgba(9, 30, 63, 0.20)",
};

const MainModal = ({ component, handleToggle = () => {}, open }) => {
  return (
    <Modal
      open={open}
      onClose={handleToggle}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{component}</Box>
    </Modal>
  );
};

Modal.propTypes = {
  component: PropTypes.element,
  handleToggle: PropTypes.func,
  open: PropTypes.bool,
};

export default MainModal;
