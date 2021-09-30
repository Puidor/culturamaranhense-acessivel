const Modal = {
  // Função para abrir o Modal
  open() {
    document.querySelector(".modal").classList.add("menu-active");
  },
  // Função para fechar o Modal
  close() {
    document.querySelector(".modal").classList.remove("menu-active");
  },
};
