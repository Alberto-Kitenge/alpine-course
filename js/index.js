import Alpine from "alpinejs";

Alpine.data("signupForm", () => ({
  username: "",
  password: "",
  passwordConfirm: "",
  belt: "",
  bio: "",
  newsletter: true,
  showPass: false,
  errors: {},
  beltChoices: ["black", "white", "red", "orange", "brown"],
  success: false,

  validationFrom() {
    this.errors = {};

    if (this.username.length < 3) {
      this.errors.username =
        "Le nom d'utilisateur doit contenir au moins 3 caractères";
    }

    if (this.password.length < 6) {
      this.errors.password =
        "Le mot de passe doit contenir au moins 6 caractères";
    }

    if (this.password !== this.passwordConfirm) {
      this.errors.passwordConfirm = "Les mots de passe doivent correspondre";
    }

    if (!this.belt) {
      this.errors.belt = "Veuillez sélectionner une couleur de ceinture";
    }

    if (this.bio.length < 10) {
      this.errors.bio = "La biographie doit contenir au moins 10 caractères";
    }
  },

  submitForm($event) {
    this.validationFrom();

    console.log(this.errors);

    if (Object.keys(this.errors).length > 0) {
      console.log(
        this.username,
        this.password,
        this.belt,
        this.bio,
        this.newsletter
      );

      $event.target.reset();

      this.success = true;
    }
  },
}));

window.Alpine = Alpine;
Alpine.start();
