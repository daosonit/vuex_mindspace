import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store(
    {
        //Khởi tạo property state: registrations:,users:
        state: {
            registrations: [],
            users: [
                {id: 1, name: 'Max', registered: false},
                {id: 2, name: 'Anna', registered: false},
                {id: 3, name: 'Chris', registered: false},
                {id: 4, name: 'Sven', registered: false},
                {id: 5, name: 'Son', registered: false},
                {id: 6, name: 'David', registered: false}
            ]
        },

        getters: {
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
        },
        mutations: {
            MUTATIONS_REGISTER(state, userId){
                const date = new Date;
                const user = state.users.find(
                    user => {
                        return user.id == userId
                    }
                );

                //Gan gia tri da dang ky cho users
                user.registered = true;

                const registration = {
                    userId: userId,
                    name: user.name,
                    date: date.getMonth() + '/' + date.getDay()
                };

                //push user vào  mảng registrations chưa đang ky sang dang ky
                state.registrations.push(registration);
            },

            MUTATIONS_UNREGISTER(state, payLoad)
            {

                const user = state.users.find(
                    user => {
                        return user.id == payLoad.userId;
                    }
                );
                console.log(user);
                const registration = state.registrations.find(
                    registration => {
                        return registration.userId == payLoad.userId;
                    }
                );

                user.registered = false;

                state.registrations.splice(state.registrations.indexOf(registration), 1);
            }
        },
        //Đấy việc cập nhật dữ liệu vào state cho mutations đảm nhiệm
        actions: {
            ACTION_REGISTER(context, userId){
                setTimeout(() => {
                    context.commit('MUTATIONS_REGISTER', userId)
                }, 300)
            },

            ACTION_UNREGISTER({commit}, payLoad){
                setTimeout(() => {
                    commit('MUTATIONS_UNREGISTER', payLoad)
                }, 300)
            },
        }
    }
);