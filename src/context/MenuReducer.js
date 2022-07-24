const MenuReducer = (state, action) => {
    switch(action.type){
        case "OPEN": {
            return{
                Menu:true
            }
        }
        break;
        case "CLOSE": {
            return{
                Menu:false
            }
        }
        break;
        default:
            return state
    }
}

export default MenuReducer