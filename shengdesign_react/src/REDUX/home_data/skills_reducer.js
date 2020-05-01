const show_all_skills = (state = false, action) => {
    switch(action.type){
        case 'show_all_skills':
            return true;
        case 'hide_all_skills':
            return false;
        default:
            return false;
    }
}
export default show_all_skills;

