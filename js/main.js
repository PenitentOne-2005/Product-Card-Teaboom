document.addEventListener("DOMContentLoaded", () => {
  const radioButtons = document.querySelectorAll('input[name="weight"]');
  const priceElement = document.getElementById("product-price");
  const oldPriceElement = document.getElementById("product-old-price");
  const skuElement = document.getElementById("product-sku");
  const statusElement = document.getElementById("product-status");

  radioButtons.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      const selectedRadio = e.target;

      const newWeight = selectedRadio.value;
      const newPrice = selectedRadio.dataset.price;
      const newOldPrice = selectedRadio.dataset.oldPrice;
      const newSku = selectedRadio.dataset.sku;

      if (priceElement) {
        priceElement.textContent = newPrice;
      }

      if (oldPriceElement) {
        oldPriceElement.textContent = newOldPrice;
      }

      if (skuElement) {
        skuElement.textContent = newSku;
      }

      if (statusElement) {
        statusElement.textContent =
          `Выбрана фасовка ${newWeight} г. ` +
          `Цена ${newPrice}. ` +
          `Старая цена ${newOldPrice}. ` +
          `Артикул ${newSku}.`;
      }
    });
  });
});
