document.getElementById("coverForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Get user inputs
  var yourName = document.getElementById("yourName").value.trim();
  var jobTitle = document.getElementById("jobTitle").value.trim();
  var companyName = document.getElementById("companyName").value.trim();
  var highlights = document.getElementById("highlights").value.trim().split(",");

  // Format the highlights into bullet points
  var bulletPoints = highlights.map(function(item) {
    return "• " + item.trim();
  }).join("\n");

  // Create the cover letter content
  var letter = 
`Dear Hiring Team at ${companyName},

I am writing to express my interest in the ${jobTitle} internship position at your company. As a motivated student with a passion for learning and contributing meaningfully, I believe I can bring value to your team.

Here are some of the key strengths I bring:
${bulletPoints}

I am confident that my enthusiasm and willingness to grow make me a strong candidate for this role. I would love the opportunity to contribute and learn from your esteemed organization.

Thank you for considering my application. I look forward to the possibility of discussing how I can contribute to ${companyName}.

Sincerely,  
${yourName}`;

  // Display the output
  document.getElementById("letterText").textContent = letter;
  document.getElementById("output").style.display = "block";
});

// Copy to clipboard button
document.getElementById("copyBtn").addEventListener("click", function() {
  var text = document.getElementById("letterText").textContent;
  navigator.clipboard.writeText(text).then(function() {
    alert("Cover letter copied to clipboard!");
  });
});
