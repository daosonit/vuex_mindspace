export default {
    //Trả ra danh sách nhưng user chưa đăng ký
    unregisteredUsers(state){
        return state.users.filter(
            user => {
                return !user.registered;
            }
        );
    },

    //Tra ra thong tin nhung user da dang ky
    registrations(state){
        return state.registrations;
    },

    //Tra ra tong so ban ghi da dang ky
    totalRegistrations(state){
        return state.registrations.length;
    }
}