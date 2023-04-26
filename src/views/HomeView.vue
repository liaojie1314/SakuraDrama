<template>
    <div>
        <MiniHeader></MiniHeader>
        <HomeBody></HomeBody>
        <BBottom></BBottom>
        <BElevator></BElevator>
        <BMascot></BMascot>
    </div>
</template>

<script setup>
import BBottom from '../components/BBottom.vue'
import BElevator from '../components/BElevator.vue'
import BMascot from '../components/BMascot.vue';
import HomeBody from '../components/Body/HomeBody.vue'
import api from '@/api/login.js'
import { useAuthStore } from '../stores/state';
import { onMounted } from 'vue';
import MiniHeader from '../components/MiniHeader.vue';

const authStore = useAuthStore()
const loginTokenForm = { username: authStore.userName, token: authStore.token }
const authLogin = () => {
    api.loginApi(loginTokenForm).then(res => {
        if (res.code === 0) {
            
        }
    }).catch(error => {
        authStore.logout()
        console.log(error);
    })
}

onMounted(() => {
    authLogin()
})

</script>