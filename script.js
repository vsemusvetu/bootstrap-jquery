$(function () {
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });

  $("#magicBtn").click(function () {
    $("body").css("background-color", "#dbffed");
    alert("Магия jQuery сейчас сработает! И цвет сменится :)");
  });

  $("#jqueryDemo").click(function () {
    $(this).closest(".card").fadeOut(500).fadeIn(500);
  });

  $("#contactForm").on("submit", function (e) {
    e.preventDefault();

    const name = $("#name").val();
    const email = $("#email").val();
    const message = $("#message").val();

    if (name && email && message) {
      const toastLiveExample = document.getElementById("liveToast");
      const toast = new bootstrap.Toast(toastLiveExample);
      toast.show();
    } else {
      alert("Пожалуйста, заполните все поля! Даже если вы интроверт.");
    }
  });
  $("#coolBrand").click(function () {
    $("#bottomAlert").removeClass("d-none");
    setTimeout(() => $("#bottomAlert").addClass("d-none"), 5000);
  });
});
