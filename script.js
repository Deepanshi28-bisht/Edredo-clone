const openBtn = document.getElementById("openModal");
const modal = document.getElementById("videoModal");
const closeBtn = document.querySelector(".close-btn");
const video = document.getElementById("video");
const overLay = document.getElementById("overLay");
const fiveSectionMain_right = document.querySelector(".fiveSectionMain-right");

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  overLay.style.display = "flex";
  video.play();
});
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  overLay.style.display = "none";
  video.pause();
});

const data = [
  {
    id: 1,
    ques: "What is Edredo ?",
    ans: "Edredo is a comprehensive learning management system (LMS) designed to provide training and development solutions for businesses. It offers customizable learning paths, content management, and analytics to enhance employee learning and development.",
  },
  {
    id: 2,
    ques: "How can Edredo benefit my organization?",
    ans: "Edredo can help streamline your training processes, improve employee engagement, and increase productivity. It provides tools for creating personalized learning experiences, tracking progress, and measuring the impact of training programs.",
  },
  {
    id: 3,
    ques: "What features does Edredo offer?",
    ans: "Edredo offers a wide range of features, including Customizable learning paths Content management system Interactive assessments and quizzes Detailed analytics and reporting Integration with existing HR systems Mobile accessibility",
  },
  {
    id: 4,
    ques: "Is there any limit to how many classrooms I can create or students I can add?",
    ans: "No. There is no limit to the number of classrooms you can create or on the number of students you can add inside your classrooms.",
  },
  {
    id: 5,
    ques: "Can I customize the learning paths for my employees?",
    ans: "Yes, Edredo allows you to create and customize learning paths based on the specific needs of your employees and organization. You can tailor content and assessments to align with your training goals.",
  },
  {
    id: 6,
    ques: "Is Edredo mobile-friendly?",
    ans: "Absolutely! Edredo is designed to be accessible on various devices, including smartphones and tablets, ensuring that employees can access training materials anytime, anywhere.",
  },
];
const showData = () => {
  data.forEach((item, index) => {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("mainDivStyle");
    mainDiv.innerHTML = `
    <div class="quesContainer">
     <h2 id=${index}>${item.ques}</h2>
     <svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true" style=""><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path></svg>
     </div>
      <p class="answerEle">${item.ans}</p>
    `;

    const quesContainer = mainDiv.querySelector(".quesContainer");
    const answerEle = mainDiv.querySelector(".answerEle");
    if (index === 0) {
      answerEle.classList.add("show");
    }
    quesContainer.addEventListener("click", (event) => {
      document.querySelectorAll(".answerEle").forEach((answer) => {
        if (answer !== answerEle) {
          answer.classList.remove("show");
        }
        console.log(answer, "///", answerEle);
      });
      answerEle.classList.toggle("show");
    });
    fiveSectionMain_right.appendChild(mainDiv);
  });
};
showData();
