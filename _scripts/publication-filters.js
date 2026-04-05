document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("[data-publication-filters]");
  if (!container) {
    return;
  }

  const yearSelect = document.getElementById("publication-year-filter");
  const venueSelect = document.getElementById("publication-venue-filter");
  const topicSelect = document.getElementById("publication-topic-filter");
  const clearButton = document.getElementById("publication-clear-filters");
  const cards = Array.from(document.querySelectorAll("[data-publication-card]"));
  const groups = Array.from(document.querySelectorAll("[data-publication-year-group]"));
  const imageModal = document.getElementById("publication-image-modal");
  const imageModalImg = document.getElementById("publication-image-modal-img");
  const imageTriggers = Array.from(document.querySelectorAll("[data-publication-image-trigger]"));
  const imageCloseControls = Array.from(document.querySelectorAll("[data-publication-image-close]"));

  if (!yearSelect || !venueSelect || !topicSelect || !clearButton || cards.length === 0) {
    return;
  }

  const readValues = (key) =>
    [...new Set(cards.map((card) => (card.dataset[key] || "").trim()).filter(Boolean))]
      .sort((left, right) => {
        if (key === "year") {
          return Number(right) - Number(left);
        }
        if (key === "topic") {
          const topicOrder = [
            "Retinal Encoding/Decoding",
            "Spiking Neural Networks",
            "Neuromorphic camera",
            "Others",
          ];
          return topicOrder.indexOf(left) - topicOrder.indexOf(right);
        }
        return left.localeCompare(right);
      });

  const appendOptions = (select, values, placeholder) => {
    select.innerHTML = "";
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = placeholder;
    select.appendChild(defaultOption);

    values.forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      select.appendChild(option);
    });
  };

  appendOptions(yearSelect, readValues("year"), "Select Year");
  appendOptions(venueSelect, readValues("venue"), "Select Venue");
  appendOptions(topicSelect, readValues("topic"), "Select Topic");

  const applyFilters = () => {
    const yearValue = yearSelect.value.trim().toLowerCase();
    const venueValue = venueSelect.value.trim().toLowerCase();
    const topicValue = topicSelect.value.trim().toLowerCase();

    cards.forEach((card) => {
      const matchYear = !yearValue || (card.dataset.year || "").trim().toLowerCase() === yearValue;
      const matchVenue = !venueValue || (card.dataset.venue || "").trim().toLowerCase() === venueValue;
      const matchTopic = !topicValue || (card.dataset.topic || "").trim().toLowerCase() === topicValue;
      card.hidden = !(matchYear && matchVenue && matchTopic);
    });

    groups.forEach((group) => {
      const visibleCards = group.querySelectorAll("[data-publication-card]:not([hidden])");
      group.hidden = visibleCards.length === 0;
    });
  };

  [yearSelect, venueSelect, topicSelect].forEach((select) => {
    select.addEventListener("change", applyFilters);
  });

  clearButton.addEventListener("click", () => {
    yearSelect.value = "";
    venueSelect.value = "";
    topicSelect.value = "";
    applyFilters();
  });

  if (imageModal && imageModalImg && imageTriggers.length > 0) {
    const closeImageModal = () => {
      imageModal.hidden = true;
      imageModal.setAttribute("aria-hidden", "true");
      imageModalImg.src = "";
      imageModalImg.alt = "";
      document.body.classList.remove("publication-image-modal-open");
    };

    imageTriggers.forEach((trigger) => {
      trigger.addEventListener("click", (event) => {
        event.preventDefault();
        const image = trigger.querySelector("img");
        if (!image) {
          return;
        }
        imageModalImg.src = image.currentSrc || image.src;
        imageModalImg.alt = image.alt || "Publication image preview";
        imageModal.hidden = false;
        imageModal.setAttribute("aria-hidden", "false");
        document.body.classList.add("publication-image-modal-open");
      });
    });

    imageCloseControls.forEach((control) => {
      control.addEventListener("click", closeImageModal);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !imageModal.hidden) {
        closeImageModal();
      }
    });
  }

  applyFilters();
});
