export const checkBudget = (budget, dif) => {
    let bg_class;
    if( (budget/ 4) > dif){
        bg_class = 'alert alert-danger'
    }
    else if( (budget / 2) > dif){
        bg_class = 'alert alert-warning'
    }
    else {
        bg_class = 'alert alert-success'
    }
    return bg_class
}