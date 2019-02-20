import Vue from "vue";
import App from "./App.vue";

export const eventBus = new Vue({
  data: {},
  methods: {
    changeAge() {
      this.$emit("ageWasEdited", age);
    }
  } // Set data ({ id, firstName, etc.}) and create an $emit + this.id, this.firstName, etc to change the contents of the user table
});

new Vue({
  el: "#app",
  render: h => h(App)
});
