
function submitQuiz() {
  const age = document.getElementById("age").value;
  const skinType = document.getElementById("skinType").value;
  const concern = document.getElementById("concern").value;
  const budget = document.getElementById("budget").value;

  const quizSummary = `I am ${age} years old with ${skinType} skin. My main concern is ${concern}, and my budget is ${budget}. Give me a skincare routine.`;

  document.getElementById("result").innerHTML = "✨ Generating your plan...";

  fetch("http://127.0.0.1:5000", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: quizSummary }),
  })
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("result").innerHTML = `
        <h3>Your Personalized Plan 🧴</h3>
        <p>${data.response}</p>
      `;
    })
    .catch((err) => {
      document.getElementById("result").innerHTML = "Oops! Something went wrong.";
      console.error(err);
    });
}
