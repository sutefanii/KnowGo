function redirectToIndex() {
    sessionStorage.setItem('scrollTo', '900'); 
    window.location.href = "index.html"; 
} 
window.onload = function() { 
    const scrollTo = sessionStorage.getItem('scrollTo'); if (scrollTo) { window.scrollTo({
         top: parseInt(scrollTo),
          behavior: 'smooth' 
    }); 
    sessionStorage.removeItem('scrollTo'); } 
}; // блок кода, перессылающий пользователя на вкладку "О платформе"



document.addEventListener('DOMContentLoaded', function() {
    const savedOpacity = sessionStorage.getItem('mathOpacity');
    if (savedOpacity) {
        document.getElementById('math').style.opacity = savedOpacity;
    }
});

function addMath() {
    document.getElementById('math').style.opacity = '1';
    sessionStorage.setItem('mathOpacity', '1');
    window.location.href = "page3.html";
}




document.addEventListener('DOMContentLoaded', function() {
    const savedOpacity = sessionStorage.getItem('physOpacity');
    if (savedOpacity) {
        document.getElementById('physics').style.opacity = savedOpacity;
    }
});

function addPhysics() {
    document.getElementById('physics').style.opacity = '1';
    sessionStorage.setItem('physOpacity', '1');
    window.location.href = "pagephys.html";
}




document.addEventListener('DOMContentLoaded', function() {
    const savedOpacity = sessionStorage.getItem('csOpacity');
    if (savedOpacity) {
        document.getElementById('cs').style.opacity = savedOpacity;
    }
});

function addCs() {
    document.getElementById('cs').style.opacity = '1';
    sessionStorage.setItem('csOpacity', '1');
    window.location.href = "pageinf.html";
}


// функции, которые засчитывают(меняют прозрачность) достижения !!!!!!!!!!!!!!!!!!
/*
window.addEventListener('beforeunload', function() { sessionStorage.setItem('mathOpacity', '0.3');});
window.addEventListener('beforeunload', function() { sessionStorage.setItem('physOpacity', '0.3');});
window.addEventListener('beforeunload', function() { sessionStorage.setItem('csOpacity', '0.3');});
*/


// массив правильных ответов

const correctAnswers = {
    q1: "b",
    q2: "b",
    q3: "c",
    q4: "b",
    q5: "a",
    q6: "b",
    q7: "b",
    q8: "b",
    q9: "a",
    q10: "b"
  };
  
  // переменные
  const form = document.querySelector(".test-form");
  const progressCircles = document.querySelectorAll(".circle");
  const progressBar = document.querySelector(".progress");
  

  // добавление события
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let correctCount = 0;
    const formData = new FormData(form);
  
    // проверяем ответы и подсвечиваем правильные/неправильные
    const allQuestions = document.querySelectorAll(".question");
    allQuestions.forEach((question, index) => {
      const labels = question.querySelectorAll("label");
      const correctAnswer = correctAnswers[`q${index + 1}`];
      const selectedAnswer = formData.get(`q${index + 1}`);
  
      labels.forEach((label) => {
        const input = label.querySelector("input");
        if (input.value === correctAnswer) {
          // подсвечиваем правильный вариант зелёным
          label.style.color = "#1A8373";
          label.style.fontWeight = "bold";
        } else if (input.value === selectedAnswer) {
          // подсвечиваем неправильный вариант красным
          label.style.color = "rgb(95, 6, 6)";
          label.style.fontWeight = "bold";
        } else {
          // сбрасываем стиль для остальных
          label.style.color = "#000";
          label.style.fontWeight = "normal";
        }
      });
  
      // eсли ответ правильный, увеличиваем счётчик правильных
      if (selectedAnswer === correctAnswer) {
        correctCount++;
      }
    });
  
    // закрашиваем кружки
    progressCircles.forEach((circle, index) => {
      if (index < correctCount) {
        circle.style.backgroundColor = "#1A8373"; 
      } else {
        circle.style.backgroundColor = "#fff";
      }
    });
  });

