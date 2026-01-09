function submitClaim() {
  const memberId = document.getElementById("memberId").value;
  const npi = document.getElementById("npi").value;
  const plan = document.getElementById("plan").value;

  const statusCard = document.getElementById("statusCard");
  const badge = document.getElementById("statusBadge");
  const message = document.getElementById("statusMessage");

  statusCard.classList.remove("hidden");

  if (!memberId || !npi || !plan) {
    badge.innerText = "Exception";
    badge.style.background = "#dc2626";
    badge.style.color = "#fff";
    message.innerText = "Please fill all mandatory details.";
  } else {
    badge.innerText = "Pending AI Review";
    badge.style.background = "#2563eb";
    badge.style.color = "#fff";
    message.innerText = "Your claim is submitted and being reviewed.";
  }
}
