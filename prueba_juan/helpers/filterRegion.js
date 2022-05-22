const filterRegion = (data, region) => {
    return data.filter(e => e.region.toLowerCase() === region.toLowerCase());
}

export default filterRegion;
