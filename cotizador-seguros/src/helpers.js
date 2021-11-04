export const getYears = (year) => {
    return new Date().getFullYear() - year
}

export const getBrands = (brand) => {
    let inc;
    switch(brand){
        case 'europeo':
            inc = 1.3;
            break;
        case 'americano':
            inc = 1.15;
            break;
        case 'asiatico':
            inc = 1.05;
            break;
        default:
            break
    }
    return inc;
}

export const getPlan = plan => {
    return (plan === 'basico') ? 1.20 : 1.50;
}

export const textTransformToUppercase = text => {
    return text.charAt(0).toUpperCase() +  text.slice(1)
}