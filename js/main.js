const projects = [
  {
    title: "Unreal Engine 5 Basic",
    description: `
      <p>I learned a lot in UE5. This was a simple example.</p>
      <ul>
        <li>I used Blueprint.</li>
      </ul>`,
    image: "",
    video: "assets/Videos/UE5_Basic_Project.mp4"
  },
  {
    title: "3D Models",
    description: `
      <p>I've done a lot of things with Blender for a long time. Not everything was up to the standard I wanted. This is all I can show.</p>
      <ul>
        <li>Made with Blender, geometry nodes and substance painter.</li>
      </ul>`,
    image: "",
    video: "assets/Videos/MyBlenderJourney.mp4"
  },
  {
    title: "SFML Basic",
    description: `
      <p>It's a very simple project because I was curious about the SFML graphics library. After I did it, I thought it would be better if I made a snake, but the file was deleted. After SFML, I learned a little OpenGL.</p>
      <ul>
        <li>I used C++ and SFML.</li>
      </ul>`,
    image: "",
    video: "assets/Videos/SFML_Project.mp4"
  },
  {
    title: "Unity Ball Game",
    description: `
      <p>My first project with Unity.</p>
      <ul>
        <li>I used Unity and C#.</li>
      </ul>`,
    image: "",
    video: "assets/Videos/Unity_Ball.mp4"
  },
  {
    title: "Unity Space Shooter",
    description: `
      <p>I learned a lot from this project. It was really fun to do.</p>
      <ul>
        <li>I used Unity and C#.</li>
      </ul>`,
    image: "",
    video: "assets/Videos/Unity_SpaceShooter.mp4"
  },
  {
    title: "Unity Endless Runner",
    description: `
      <p>I made an endless runner game with Unity.</p>
      <ul>
        <li>I used Unity and C#.</li>
        <li>I learned to create obstacles.</li>
        <li>I learned the endless game mechanics.</li>
        <li>I learned how to restart the game.</li>
        <li><a href="https://github.com/alierenkarateke/EndlessRunner" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      </ul>`,
    image: "",
    video: "assets/Videos/Unity_EndlessRunner.mp4"
  },
  {
    title: "Unity Pong Game",
    description: `
      <p>This is a simple Pong game made in Unity.</p>
      <ul>
        <li>I used Unity and C#.</li>
        <li>I learned make a collison and scoring mechanics.</li>
        <li>I learned input manager.</li>
        <li>I practiced UI and change scene.</li>
        <li>I practiced basic physisc</li>
        <li>I learned adding background and collison music.</li>
        <li>I learned post processing</li>
        <li><a href="https://github.com/alierenkarateke/PongGame" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      </ul>`,
    image: "",
    video: "assets/Videos/Unity_PongGame.mp4"
  }
];

function openModal(title, description, imageUrl, videoUrl) {
  document.getElementById("modalTitle").innerHTML = title;
  document.getElementById("modalContent").innerHTML = description;

  const modalImage = document.getElementById("modalImage");
  const modalVideo = document.getElementById("modalVideo");

  if (imageUrl) {
    modalImage.src = imageUrl;
    modalImage.style.display = "block";
    modalVideo.style.display = "none";
  } else if (videoUrl) {
    modalVideo.src = videoUrl;
    modalVideo.style.display = "block";
    modalImage.style.display = "none";
  } else {
    modalImage.style.display = "none";
    modalVideo.style.display = "none";
  }

  document.getElementById("projectModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("projectModal").style.display = "none";
  document.getElementById("modalVideo").pause();
}

window.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("projectsGrid");

  projects.forEach((proj) => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    // HTML içeriği düz metne çevirip kısa açıklama alıyoruz
    const shortText = proj.description.replace(/<[^>]+>/g, "").substring(0, 100);

    card.innerHTML = `
      <h3>${proj.title}</h3>
      <p>${shortText}...</p>
    `;

    card.onclick = () => openModal(proj.title, proj.description, proj.image, proj.video);
    grid.appendChild(card);
  });

  document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("navLinks").classList.toggle("active");
  });

  document.getElementById("projectModal").addEventListener("click", (e) => {
    if (e.target.id === "projectModal") {
      closeModal();
    }
  });
});
