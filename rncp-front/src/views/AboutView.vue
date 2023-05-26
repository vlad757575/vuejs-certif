<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
export default {
  setup() {
    const result = ref(null)
    axios
      .get('https://api-node.vladimir-lavrentiev.com/users')
      .then((response) => {
        result.value = JSON.parse(JSON.stringify(response.data.message));
      })
      .catch((error) => {
        console.error(error);
      });
    return { result };
  },
}
</script>
<template>
  <div>
    <ul>
      <li v-for="(user, index) in result" :key="index">
        {{ user.username }} --- {{ user.email }} --- {{ user.phone }} --- {{ user.password }}
      </li>
    </ul>
  </div>
</template>
<style>
@media (min-width: 1024px) {

  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

}
</style>
