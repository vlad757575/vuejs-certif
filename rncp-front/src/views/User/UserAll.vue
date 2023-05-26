<script lang="ts">
import { defineComponent } from "vue";
import UserModel from "../../models/user";
import type UserInterface from "../../interfaces/UserInterface";
import type ResponseData from "../../interfaces/ResponseUserInterface";

export default defineComponent({
  name: "users-list",
  data() {
    return {
      users: [] as UserInterface[],
      currentUser: {} as UserInterface,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    retrieveTutorials() {
      UserModel.getAll()
        .then((response: ResponseData) => {
          this.users = response.data.message;
          console.log(response.data.message);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveTutorials();
  },
});
</script>

<template>
  <div class="list row">
    <div class="col-md-6">
        <h4>Tutorials List TEST</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(user, index) in users"
          :key="index"
          >
          {{ user.phone }}
        </li>
      </ul>
    </div>
  </div>
</template>