export const useFormatTime = (datetime) => {
  return new Date(datetime).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
};
