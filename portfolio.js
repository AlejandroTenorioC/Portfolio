$(document).ready(function () {
  const modal = document.querySelector(".certificate-section-modal");
  const modalImage = document.querySelector(".certificate-section-modal-image");
  const modalTitle = document.querySelector(
    ".certificate-section-modal-details .certificate-section-certificate-title"
  );
  const modalIssuer = document.querySelector(
    ".certificate-section-modal-details .certificate-section-certificate-issuer"
  );
  const modalDate = document.querySelector(
    ".certificate-section-modal-details .certificate-section-certificate-date"
  );
  const closeModalButton = document.querySelector(
    ".certificate-section-modal-close"
  );
  const certificateCards = document.querySelectorAll(
    ".certificate-section-certificate-card"
  );

  certificateCards.forEach((card) => {
    card.addEventListener("click", function () {
      const imgSrc = card.querySelector(
        ".certificate-section-certificate-image img"
      ).src;
      const title = card.querySelector(
        ".certificate-section-certificate-title"
      ).textContent;
      const issuer = card.querySelector(
        ".certificate-section-certificate-issuer"
      ).textContent;
      const date = card.querySelector(
        ".certificate-section-certificate-date"
      ).textContent;

      modalImage.src = imgSrc;
      modalTitle.textContent = title;
      modalIssuer.textContent = issuer;
      modalDate.textContent = date;
      modal.classList.add("active");
    });
  });

  closeModalButton.addEventListener("click", function () {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.remove("active");
    }
  });

  $("#project-section").hide();
  $("#section-certificate").hide();

  $("#see-more-education").on("click", function (e) {
    $("#nav-certificate").click();
  });

  $("#see-more-project").on("click", function (e) {
    $("#main").hide();
    $("#section-certificate").hide();
    $("#nav-certificate").removeClass("active");
    $("#nav-main").removeClass("active");
    $("#nav-project").addClass("active");
    $("#project-section").fadeIn(1000);
  });

  $("#nav-project").on("click", function (e) {
    $("#main").hide();
    $("#section-certificate").hide();
    $("#nav-certificate").removeClass("active");
    $("#nav-main").removeClass("active");
    $("#nav-project").addClass("active");
    $("#project-section").fadeIn(1000);
  });

  $("#nav-main").on("click", function (e) {
    $("#project-section").hide();
    $("#nav-main").addClass("active");
    $("#section-certificate").hide();
    $("#nav-certificate").removeClass("active");
    $("#nav-project").removeClass("active");
    $("#main").fadeIn(1000);
  });

  $("#nav-section").on("click", function (e) {
    $("#project-section").hide();
    $("#nav-main").addClass("active");
    $("#nav-project").removeClass("active");
    $("#main").fadeIn(1000);
  });

  $("#nav-certificate").on("click", function (e) {
    $("#project-section").hide();
    $("#main").hide();
    $("#nav-main").removeClass("active");
    $("#nav-project").removeClass("active");
    $("#nav-certificate").addClass("active");
    $("#section-certificate").fadeIn(1000);
  });
});
