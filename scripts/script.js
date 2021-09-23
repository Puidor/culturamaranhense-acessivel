const Modal = {
  open() {
    document.querySelector(".modal").classList.add("menu-active");
  },
  close() {
    document.querySelector(".modal").classList.remove("menu-active");
  },
};
