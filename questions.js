const questions = [
    { q: "What is AI?", o: ["Art Institute", "Artificial Intelligence", "Adobe Illustrator", "Auto Input"], a: 1 },
    { q: "Which language is best for ML?", o: ["Python", "Java", "C", "HTML"], a: 0 },
    // ... Add total 20 questions
  ];
  
  let score = 0;
  let box = document.getElementById("questionBox");
  questions.forEach((item, i) => {
    let div = document.createElement("div");
    div.innerHTML = `<p>${i + 1}. ${item.q}</p>` +
      item.o.map((opt, idx) =>
        `<label><input type="radio" name="q${i}" value="${idx}">${opt}</label><br>`
      ).join("");
    box.appendChild(div);
  });
  
  function submitTest() {
    questions.forEach((item, i) => {
      let ans = document.querySelector(`input[name="q${i}"]:checked`);
      if (ans && parseInt(ans.value) === item.a) score++;
    });
    localStorage.setItem("score", score);
    window.location.href = "result.html";
  }
  