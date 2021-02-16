export function parseDateAndTime(data) {
    const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    data.date = new Date(data.start).toLocaleDateString("pl-PL", dateOptions);
    data.start = new Date(data.start).toLocaleTimeString("pl-PL");
    data.end = new Date(data.end).toLocaleTimeString("pl-PL");
    return data;
}
