import PropTypes from "prop-types";

import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";

import styles from "./IconTypeSwitch.module.css";

export const IconTypeSwitch = ({ icon, onSwitch }) => {
  return (
    <div className={styles.iconSwitch}>
      {icon === "view_list" ? (
        <ViewModuleIcon
          fontSize="large"
          onClick={() => onSwitch("view_module")}
        />
      ) : (
        <ViewListIcon fontSize="large" onClick={() => onSwitch("view_list")} />
      )}
    </div>
  );
};

IconTypeSwitch.propTypes = {
  icon: PropTypes.oneOf(["view_list", "view_module"]).isRequired,
  onSwitch: PropTypes.func.isRequired,
};
