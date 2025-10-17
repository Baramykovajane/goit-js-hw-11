import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const input = form.querySelector('input[name="search-text"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const query = input.value.trim();
  if (!query) {
    iziToast.error({
      icon: 'fa-solid fa-ban',
      iconColor: '#2222',
      message: "Please enter a search term!",
      backgroundColor: "#EF4040",
      timeout: 3000,
      close: false,
      position: "topRight"
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then((data) => {
      if (data.hits.length === 0) {
        iziToast.info({
          icon: 'fa-solid fa-ban',
          iconColor: '#2222',
          message: "Sorry, there are no images matching your search query. Please try again!",
          backgroundColor: "#EF4040",
          timeout: 3000,
          close: false,
          position: "topRight"
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch((error) => {
      iziToast.error({
        icon: 'fa-solid fa-ban',
        iconColor: '#2222',
        message: "Something went wrong. Please try again!",
        backgroundColor: "#EF4040",
        timeout: 3000,
        close: false,
        position: "topRight"
      });
      console.error("Error:", error);
    })
    .finally(() => {
      hideLoader();
    });
});