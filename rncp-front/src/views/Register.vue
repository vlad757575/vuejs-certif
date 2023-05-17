<script setup lang="ts">
import NavBar from '../components/NavBar.vue'
</script>
<template>
    <NavBar />
    <div class="vue-tempalte my-form">
        <form>
            <h3>REGISTER</h3>
 
            <div class="form-group">
                <label> Name</label>
                <input type="text" class="form-control form-control-lg"/>
            </div>
 
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control form-control-lg" />
            </div>
 
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>
 
            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>
 
            <p class="forgot-password text-right">
                Already registered 
                <router-link :to="{name: 'login'}">sign in?</router-link>
            </p>
        </form>
    </div>
</template>