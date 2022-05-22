const filterFromTo = (data, { from, to }) => {
    if (to) {
        return data.filter(e => e.population >= +from && e.population <= +to);
    }
    return data.filter(e => e.population >= +from);
}

export default filterFromTo;
