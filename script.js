
document.getElementById("plannerForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const companySize = parseInt(document.getElementById("companySize").value);
  const turnover = parseFloat(document.getElementById("turnover").value);
  const netNewHires = parseInt(document.getElementById("netNewHires").value);

  const replacements = Math.round(companySize * (turnover / 100));
  const totalHiringNeed = replacements + netNewHires;

  document.getElementById("output").innerHTML = `
    <h2>Results</h2>
    <p>Replacements Needed: <strong>${replacements}</strong></p>
    <p>Total Hiring Need: <strong>${totalHiringNeed}</strong></p>
  `;
});
