export const TIME_FORMAT = {
  HH_MM_12: /^(0[1-9]|1[0-2]):[0-5][0-9]$/,
  HH_MM_SS_12: /^(0[1-9]|1[0-2]):[0-5][0-9]:[0-5][0-9]$/,
  HH_MM_12_A: /^(0[1-9]|1[0-2]):[0-5][0-9] ?[AaPp][Mm]$/,
  HH_MM_SS_12_A: /^(0[1-9]|1[0-2]):[0-5][0-9]:[0-5][0-9] ?[AaPp][Mm]$/,
  HH_MM_24: /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
  HH_MM_SS_24: /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/,
};

// const isTimeValid = (time: string, format: RegExp): boolean => {
//   return time.match(format);
// };

/**
 * Format time in ISO time format 'HH:MM:SS' on 24 hours
 * @param time
 */
export const formatTimeISO = (time) => {
  return (
    time.hours.toString().padStart(2, '0') +
    ':' +
    time.minutes.toString().padStart(2, '0') +
    ':' +
    time.seconds.toString().padStart(2, '0')
  );
};

/**
 * Convert ISO time to seconds
 * @param time HH:MM:ss
 */
const formatISOToSeconds = (time) => {
  // TODO : Do better (check, algo use Date ?)
  const matches = time.split(':'); // split it at the colons
  return +matches[0] * 60 * 60 + +matches[1] * 60 + +matches[2];
};
