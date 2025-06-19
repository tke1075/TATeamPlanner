document.getElementById("ta-planner-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const size = parseInt(document.getElementById("companySize").value);
  const turnover = parseFloat(document.getElementById("turnoverRate").value);
  const period = parseInt(document.getElementById("hiringPeriod").value);
  const netNew = parseInt(document.getElementById("netNewHires").value);

  const replacementFactor = (turnover / 100) * (period / 12);
  const replacements = Math.round(size * replacementFactor);
  const totalHires = netNew + replacements;

  const output = document.getElementById("output");
  output.innerHTML = `
    <h2>Results</h2>
    <p><strong>Estimated Replacements Needed:</strong> ${replacements}</p>
    <p><strong>Total Hires Needed:</strong> ${totalHires}</p>
  `;
  output.style.display = "block";
});
