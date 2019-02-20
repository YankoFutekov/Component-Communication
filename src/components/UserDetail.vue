<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name {{ switchName() }}</p>
    <p>User Age {{ userAge }}</p>
    <button @click="resetName">Reset Name</button>
    <button @click="resetFn()">Function Reset Name</button>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  props: {
    // name: [String, Array]
    name: {
      type: String,
      required: true
    },
    resetFn: Function,
    userAge: {
      type: Number,
      required: true
    }
  },
  methods: {
    switchName() {
      return this.name
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      this.name = "Wadap";
      this.$emit("nameWasReset", this.name);
    },
    created() {
      eventBus.$on("ageWasEdited", age => {
        this.userAge = age;
      });
    }
  }
};
</script>
<style scoped>
div {
  background-color: lightcoral;
}
</style>
