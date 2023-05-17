<script setup lang="ts">
import NavBar from '../components/NavBar.vue'
import FooterBar from '../components/Footer.vue'
</script>
<template>
     <NavBar />
        <FooterBar />
    <div class="vue-tempalte">
        <form>
            <h3>Sign In</h3>
 
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control form-control-lg" />
            </div>
 
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>
 
            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>
 
            <p class="forgot-password text-right mt-2 mb-4">
                <router-divnk to="/forgot-password">Forgot password ?</router-divnk>
            </p>
 
            <div class="social-icons">
            
                    <div><a href="#"><i class="fa fa-google"></i>i</a></div>
                    <div><a href="#"><i class="fa fa-facebook"></i>i</a></div>
                    <div><a href="#"><i class="fa fa-twitter"></i>i</a></div>
            
            </div>
 
        </form>
    </div>
</template>
<style>

</style>
