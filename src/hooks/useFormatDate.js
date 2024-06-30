export const useFormatDate = (datetime) => {
    return new Date(datetime).toLocaleDateString('en-us', { month: "short", year: "numeric", day: "numeric"});
}