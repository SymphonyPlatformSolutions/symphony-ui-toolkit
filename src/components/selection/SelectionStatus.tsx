enum SelectionStatus {
  CHECKED = 'checked',
  MIXED = 'mixed',
  UNCHECKED = 'unchecked',
}

/**
 * Convert SelectionStatus into a 'compliant' checked value.
 * (Defined in https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role#associated_wai-aria_roles_states_and_properties)
 *
 * Returns:
 *  - true if value = SelectionStatus.CHECKED
 *  - false if value = SelectionStatus.UNCHECKED
 *  - mixed if value = SelectionStatus.MIXED
 *
 * @param status
 */
const getCheckedValue = (status) => {
  if (!status) {
    // If not defined or null
    return false;
  }
  switch (status) {
  case SelectionStatus.CHECKED:
    return true;
  case SelectionStatus.UNCHECKED:
    return false;
  default:
    return status;
  }
};

export { getCheckedValue };

export default SelectionStatus;
