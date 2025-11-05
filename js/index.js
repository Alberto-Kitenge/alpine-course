import Alpine from "alpinejs";

Alpine.data("counter", () => ({
  count: 0,
  name: "John Doe",

  logCount() {
    console.log("Le compteur vaut : " + this.count);
  },
}));

window.Alpine = Alpine;
Alpine.start();
