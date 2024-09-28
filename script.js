document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("background-music");
    const playPauseButton = document.getElementById("play-pause");
    const volumeSlider = document.getElementById("volume");
    const imageContainer = document.getElementById("image-container");

    // Lista de canciones
    const musicTracks = [
        "music/La_Historia_de_Chisto_1.mp3", // Primera canción
        "music/La_Historia_de_Chisto_2.mp3"  // Segunda canción
    ];

    let currentTrackIndex = 0;

    // Configurar volumen inicial
    music.volume = 0.5;

    // Función para cambiar a la siguiente canción
    function changeTrack() {
        currentTrackIndex = (currentTrackIndex + 1) % musicTracks.length; // Alterna entre 0 y 1
        music.src = musicTracks[currentTrackIndex];
        music.play();
    }

    // Reproducir la siguiente canción cuando termine la actual
    music.addEventListener("ended", changeTrack);

    // Intentar reproducir la música automáticamente
    music.play().catch(error => {
        console.log("Autoplay prevented. Click to play.");
    });
    // Iniciar la música al hacer clic si no se reproduce automáticamente
    document.body.addEventListener("click", () => {
        music.play();
    });

    // Control de Play/Pause
    playPauseButton.addEventListener("click", () => {
        if (music.paused) {
            music.play();
            playPauseButton.textContent = "Pausar Música";
        } else {
            music.pause();
            playPauseButton.textContent = "Reproducir Música";
        }
    });

    // Control de Volumen
    volumeSlider.addEventListener("input", (e) => {
        music.volume = e.target.value;
    });

    const images = [
        "images/imagen1.jpg",
        "images/imagen2.jpg",
        "images/imagen3.jpg",
        "images/imagen4.jpg",
        "images/imagen5.jpg",
        "images/imagen6.jpg",
        "images/imagen7.jpg",
        "images/imagen8.jpg",
    ];

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function createImage() {
        const img = document.createElement("img");
        img.src = images[getRandomInt(images.length)];
        img.classList.add("image-item");

        // Asignar una animación aleatoria
        const animations = ["image-slide", "image-rotate"];
        const randomAnimation = animations[getRandomInt(animations.length)];
        img.classList.add(randomAnimation);

        // Posición aleatoria
        img.style.top = `${getRandomInt(90)}%`; // Ajustado para evitar overflow
        img.style.left = `${getRandomInt(90)}%`;

        imageContainer.appendChild(img);

        // Eliminar la imagen después de la duración de la animación
        setTimeout(() => {
            img.remove();
        }, 5000); // Debe coincidir con la duración de fadeInOut
    }

    // Crear imágenes cada 3 segundos
    setInterval(createImage, 3000);
});
