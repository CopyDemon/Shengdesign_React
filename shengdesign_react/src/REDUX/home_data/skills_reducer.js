const skillsReducer = (state = false, action) => {
    switch(action.type){
        case 'click':
            return true;
        default:
            return false;
    }
}
export default skillsReducer;

