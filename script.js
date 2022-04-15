const allsection = document.querySelectorAll(".section");

const reveal = function (entries, observer) {
  const [entry] = entries;
  if (entry.isIntesecting) return;
  console.log(entry);
  entry.target.classList.add("transition-all", "duration-1000");
  entry.target.classList.remove("opacity-[0.1]");
  entry.target.classList.remove("translate-y-1/2");

  observer.unobserve(entry.target);
};
const options = {
  root: null,
  threshold: 0.1,
};

const observer = new IntersectionObserver(reveal, options);

allsection.forEach((section) => {
  observer.observe(section);
  section.classList.add("opacity-[0.1]");
  section.classList.add("translate-y-1/2");
});
