
function filterRecords (dateFilter, date) {
    const dayInput = new Date(dateFilter).getDate() + 1;
    const monthInput = new Date(dateFilter).getMonth() + 1;
    const yearInput = new Date(dateFilter).getFullYear();

    const dayRecord = Number(date.slice(0, 2));
    const monthRecord = Number(date.slice(3, 5));
    const yearRecord = Number(date.slice(6, 10));

    const isValidDayAndMonth = (dayRecord >= dayInput && monthRecord >= monthInput);
    const isValidMonth = (monthRecord > monthInput);
    const isValidYear = (yearRecord >= yearInput);

    return (
        (( isValidDayAndMonth || isValidMonth) &&
            isValidYear
        )
    );
}

export default filterRecords;