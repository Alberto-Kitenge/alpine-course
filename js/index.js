import Alpine from "alpinejs";

Alpine.data("signupForm", () => ({
  username: "",
  password: "",
  passwordConfirm: "",
  belt: "",
  bio: "",
  newsletter: true,

  submitForm() {
    console.log(
      this.username,
      this.password,
      this.belt,
      this.bio,
      this.newsletter
    );
  },
}));

window.Alpine = Alpine;
Alpine.start();
