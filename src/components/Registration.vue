<template>
    <div id="registration">
        <h3>Register here</h3>
        <hr>
        <div class="row" v-for="user in users">
            <h4>{{ user.name }}</h4>
            <button @click="registerUser(user)">Đăng ký</button>
        </div>
    </div>
</template>

<script>
    import  {mapGetters} from 'vuex';
    export default {
        computed: {

            ...mapGetters({
                users: 'unregisteredUsers'
            }),

            //Trả ra gia trị của users được lấy từ getter
            /* users(){
             return this.$store.getters.unregisteredUsers;
             },*/
        },
        methods: {
            registerUser(user) {
                this.$store.dispatch('ACTION_REGISTER', user.id);
            },

            /* registerUser(user) {
             this.$store.commit('MUTATIONS_REGISTER', user.id);
             },*/

            /*registerUser(user) {
             const date = new Date;

             //Gan gia tri da dang ky cho users
             user.registered = true;

             //push user vào  mảng registrations chưa đang ky sang dang ky
             this.$store.state.registrations.push({
             userId: user.id,
             name: user.name,
             date: date.getMonth() + '/' + date.getDay()
             });*/
        }
    }
</script>

<style scoped>
    #registration {
        box-shadow: 1px 1px 2px 1px #ccc;
        margin: 20px;
        padding: 20px;
        display: inline-block;
        width: 300px;
        vertical-align: top;
    }

    .row h4 {
        display: inline-block;
        width: 70%;
        text-align: left;
        margin: 0 0 10px 0;
    }

    button {
        background-color: lightgreen;
        border: none;
        box-shadow: 1px 1px 1px black;
        font-size: inherit;
        text-align: right;
        cursor: pointer;
    }

    button:hover {
        background-color: green;
    }
</style>