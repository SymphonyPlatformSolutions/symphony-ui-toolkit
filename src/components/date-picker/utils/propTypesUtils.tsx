import PropTypes from 'prop-types';

export const modifierPropTypes = [
  PropTypes.instanceOf(Date),
  PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  PropTypes.exact({
    from: PropTypes.instanceOf(Date),
    to: PropTypes.instanceOf(Date),
  }),
  PropTypes.arrayOf(
    PropTypes.exact({
      from: PropTypes.instanceOf(Date),
      to: PropTypes.instanceOf(Date),
    })
  ),
  PropTypes.exact({
    before: PropTypes.instanceOf(Date),
  }),
  PropTypes.arrayOf(
    PropTypes.exact({
      before: PropTypes.instanceOf(Date),
    })
  ),
  PropTypes.exact({
    after: PropTypes.instanceOf(Date),
  }),
  PropTypes.arrayOf(
    PropTypes.exact({
      after: PropTypes.instanceOf(Date),
    })
  ),
  PropTypes.exact({
    after: PropTypes.instanceOf(Date),
    before: PropTypes.instanceOf(Date),
  }),
  PropTypes.arrayOf(
    PropTypes.exact({
      after: PropTypes.instanceOf(Date),
      before: PropTypes.instanceOf(Date),
    })
  ),
  PropTypes.exact({
    from: PropTypes.instanceOf(Date),
    to: PropTypes.instanceOf(Date),
  }),
  PropTypes.arrayOf(
    PropTypes.exact({
      from: PropTypes.instanceOf(Date),
      to: PropTypes.instanceOf(Date),
    })
  ),
  PropTypes.exact({
    daysOfWeek: PropTypes.arrayOf(PropTypes.number),
  }),
  PropTypes.arrayOf(
    PropTypes.exact({
      daysOfWeek: PropTypes.arrayOf(PropTypes.number),
    })
  ),
  PropTypes.func,
  PropTypes.arrayOf(PropTypes.func),
];
