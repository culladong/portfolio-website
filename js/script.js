
const projects = [
  {
    title: "BookSpace",
    category: "Web Application",
    description:
      "Project website BookSpace yang saya kembangkan sebagai bagian dari perjalanan belajar web development. Kunjungi repository untuk melihat kode sumber project.",
    technologies: ["Web Development", "Git", "GitHub"],
    image: "",
    icon: "📚",
    github: "https://github.com/culladong/BookSpace",
    demo: ""
  }
];

const projectList = document.getElementById("project-list");

function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = "project-card";

  const imageContainer = document.createElement("div");
  imageContainer.className = "project-image";

  if (project.image) {
    const image = document.createElement("img");
    image.src = project.image;
    image.alt = `Preview ${project.title}`;
    image.loading = "lazy";

    image.addEventListener("error", () => {
      image.remove();

      const placeholder = document.createElement("span");
      placeholder.className = "project-placeholder";
      placeholder.textContent = project.icon || "</>";
      imageContainer.appendChild(placeholder);
    });

    imageContainer.appendChild(image);
  } else {
    const placeholder = document.createElement("span");
    placeholder.className = "project-placeholder";
    placeholder.textContent = project.icon || "</>";
    imageContainer.appendChild(placeholder);
  }

  const body = document.createElement("div");
  body.className = "project-body";

  const category = document.createElement("span");
  category.className = "project-category";
  category.textContent = project.category;

  const title = document.createElement("h3");
  title.textContent = project.title;

  const description = document.createElement("p");
  description.textContent = project.description;

  const techList = document.createElement("div");
  techList.className = "tech-list";

  project.technologies.forEach((technology) => {
    const tag = document.createElement("span");
    tag.textContent = technology;
    techList.appendChild(tag);
  });

  const links = document.createElement("div");
  links.className = "project-links";

  if (project.github) {
    const githubLink = document.createElement("a");
    githubLink.href = project.github;
    githubLink.target = "_blank";
    githubLink.rel = "noopener noreferrer";
    githubLink.textContent = "GitHub ↗";
    links.appendChild(githubLink);
  }

  if (project.demo) {
    const demoLink = document.createElement("a");
    demoLink.href = project.demo;
    demoLink.target = "_blank";
    demoLink.rel = "noopener noreferrer";
    demoLink.textContent = "Live Demo ↗";
    links.appendChild(demoLink);
  }

  body.append(category, title, description, techList, links);
  card.append(imageContainer, body);

  return card;
}

function renderProjects() {
  if (!projectList) return;

  projectList.replaceChildren();

  projects.forEach((project) => {
    projectList.appendChild(createProjectCard(project));
  });
}

// Menu navigasi mobile
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Buka menu navigasi");
      menuToggle.textContent = "☰";
    });
  });
}

// Tahun otomatis
const yearElement = document.getElementById("current-year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Tampilkan daftar project
renderProjects();
