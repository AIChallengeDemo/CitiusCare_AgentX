function submitClaim() {
  const memberId = document.getElementById("memberId").value;
  const npi = document.getElementById("npi").value;
  const plan = document.getElementById("plan").value;

  const card = document.getElementById("resultCard");
  const badge = document.getElementById("statusBadge");
  const text = document.getElementById("statusText");

  card.classList.remove("hidden");

  if (!memberId || !npi || !plan) {
    badge.innerText = "Business Exception";
    badge.style.background = "#f97316";
    badge.style.color = "white";
    text.innerHTML = "Mandatory claim data is missing. Sent for agent review.";
  } else {
    badge.innerText = "Under AI Review";
    badge.style.background = "#2563eb";
    badge.style.color = "white";
    text.innerHTML = "Claim submitted successfully. Agent is analyzing eligibility and risk.";
  }
}
