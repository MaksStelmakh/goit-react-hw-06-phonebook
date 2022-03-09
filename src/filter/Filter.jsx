import { Label } from "./Filter.styled";
import PropTypes from "prop-types";

export default function Filter({ filter, change }) {
  return (
    <Label>
      <p>Find contacts by name</p>
      <input type="text" name="found" value={filter} onChange={change} />
    </Label>
  );
}

Filter.protoTypes = {
  filter: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};
