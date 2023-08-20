export const dateToStr = (date: Date, delimiter: string = "-"): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return [year, month, day].join(delimiter) // ex) 2023-08-13
}

export const strToDate = (date: string, delimiter: string = "-"): Date => {
    const [year, month, day] = date.split(delimiter).map(Number);
    return new Date(year, month - 1, day);
}