function submitClaim() {
  const memberId = document.getElementById("memberId").value;
  const npi = document.getElementById("npi").value;
  const plan = document.getElementById("plan").value;

  let status = "Submitted for AI Review";
  let color = "#0ea5e9";

  if (!memberId || !npi || !plan) {
    status = "Business Exception: Missing Mandatory Data";
    color = "#f97316";
  }

  document.getElementById("resultCard").classList.remove("hidden");
  document.getElementById("statusBox").innerHTML = `
    <b>Status:</b> ${status}<br/>
    <b>Timestamp:</b> ${new Date().toLocaleString()}
  `;
  document.getElementById("statusBox").style.borderLeftColor = color;
}
