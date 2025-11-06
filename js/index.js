import Alpine from "alpinejs";

Alpine.data("signupForm", () => ({
  username: "",
  password: "",
  passwordConfirm: "",
  belt: "",
  bio: "",
  newsletter: true,
}));

window.Alpine = Alpine;
Alpine.start();
