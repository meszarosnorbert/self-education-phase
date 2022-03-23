export const calculateDurationSum = (durations) =>
    durations.reduce((acc, d) => acc + d, 0);
