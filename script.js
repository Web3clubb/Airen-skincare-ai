async function submitQuiz() {
  const age = document.getElementById("age").value;
  const skinType = document.getElementById("skinType").value;
  const concern = document.getElementById("concern").value;
  const budget = document.getElementById("budget").value;

  const message = `I am ${age} years old with ${skinType} skin. My main skin concern is ${concern} and my budget is ${budget}. Recommend a skincare routine.`;

  const responseBox = document.getElementById("result");
  responseBox.innerHTML = "🧪 Thinking...";

  try {
    const res = await fetch("https://YOUR-BACKEND-URL/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    responseBox.innerHTML = `<strong>Your Plan:</strong><br/>${data.response}`;
  } catch (error) {
    console.error("Error:", error);
    responseBox.innerHTML = "❌ Something went wrong. Try again!";
  }
}
