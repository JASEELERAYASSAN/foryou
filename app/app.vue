<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isAccepted = ref(false)
const noButtonPos = ref<{ top: string, left: string } | null>(null)
const hearts = ref<{ id: number, left: string, size: string, duration: string, delay: string }[]>([])

// Generate floating hearts for background
onMounted(() => {
  for (let i = 0; i < 20; i++) {
    hearts.value.push({
      id: i,
      left: Math.random() * 100 + '%',
      size: Math.random() * 20 + 10 + 'px',
      duration: Math.random() * 3 + 3 + 's',
      delay: Math.random() * 5 + 's'
    })
  }
})

const moveNoButton = () => {
  const margin = 50
  const maxWidth = window.innerWidth - 120
  const maxHeight = window.innerHeight - 60
  
  let newX = Math.max(margin, Math.random() * maxWidth)
  let newY = Math.max(margin, Math.random() * maxHeight)
  
  noButtonPos.value = {
    top: `${newY}px`,
    left: `${newX}px`
  }
}

const accept = () => {
  isAccepted.value = true
}

// Cleaned up URLs
const beggingGif = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmZyeHJ4Z3dzZ3dzZ3dzZ3dzZ3dzZ3dzZ3dzZ3dzZ3dzZ3dzZ3ZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ1pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/i6U9KY2vbeY67fW9T8/giphy.gif'
const celebrateGif = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHpueG56Z3dzZ3dzZ3dzZ3dzZ3dzZ3dzZ3dzZ3dzZ3dzZ3dzZ3ZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ3dzZ3ZyZSZ1pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/LMcAtvIgeLtoLpP7O1/giphy.gif'
</script>

<template>
  <div class="valentine-container">
    <!-- Floating Hearts Background -->
    <div class="hearts-background">
      <div
        v-for="heart in hearts" 
        :key="heart.id" 
        class="floating-heart"
        :style="{ 
          left: heart.left, 
          width: heart.size, 
          height: heart.size, 
          animationDuration: heart.duration,
          animationDelay: heart.delay
        }"
      >❤️</div>
    </div>

    <div class="content-wrapper">
      <div v-if="!isAccepted" class="proposal-state">
        <div class="gif-container">
          <img :src="beggingGif" alt="Begging" class="gif-display" />
        </div>
        <h1>Will you be my Valentine?</h1>
        <div class="button-group">
          <button class="yes-button" @click="accept">YES! 💖</button>
          <button 
            class="no-button" 
            :style="noButtonPos ? { position: 'fixed', top: noButtonPos.top, left: noButtonPos.left, margin: 0 } : {}"
            @mouseover="moveNoButton"
            @touchstart.prevent="moveNoButton"
          >
            No 🥺
          </button>
        </div>
      </div>

      <div v-else class="celebration-state">
        <div class="gif-container">
          <img :src="celebrateGif" alt="Celebration" class="gif-display success" />
        </div>
        <h1 class="bounce">Yay! See you on the 14th! ❤️</h1>
        <p class="love-text">I love you so much! 🌹</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Quicksand:wght@400;700&display=swap');

.valentine-container {
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff0f3;
  font-family: 'Quicksand', sans-serif;
  overflow: hidden;
  padding: 20px;
}

.hearts-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.floating-heart {
  position: absolute;
  bottom: -50px;
  color: #ffb3c1;
  opacity: 0.6;
  font-size: 20px;
  animation: floatUp linear infinite;
}

@keyframes floatUp {
  0% { transform: translateY(0) rotate(0deg); opacity: 0; }
  10% { opacity: 0.6; }
  90% { opacity: 0.6; }
  100% { transform: translateY(-110vh) rotate(360deg); opacity: 0; }
}

.content-wrapper {
  position: relative;
  z-index: 2;
  width: 100vw;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(5px);
  padding: 40px 20px;
  border-radius: 30px;
  box-shadow: 0 10px 30px rgba(255, 77, 109, 0.1);
  text-align: center;
}

h1 {
  font-family: 'Pacifico', cursive;
  color: #ff4d6d;
  font-size: clamp(2rem, 8vw, 3.5rem);
  margin: 30px 0;
  line-height: 1.2;
}

.love-text {
  color: #ff758f;
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 20px;
}

.gif-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.gif-display {
  width: 280px;
  max-width: 80%;
  height: auto;
  border-radius: 25px;
  box-shadow: 0 15px 35px rgba(255, 77, 109, 0.2);
  border: 4px solid white;
}

.gif-display.success {
  width: 320px;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-top: 40px;
  min-height: 80px;
}

.yes-button {
  background: linear-gradient(45deg, #ff4d6d, #ff758f);
  color: white;
  border: none;
  padding: 15px 45px;
  font-size: 1.6rem;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 8px 20px rgba(255, 77, 109, 0.3);
}

.yes-button:hover {
  transform: scale(1.1) translateY(-5px);
  box-shadow: 0 12px 25px rgba(255, 77, 109, 0.4);
}

.no-button {
  background-color: #fff;
  color: #ff4d6d;
  border: 2px solid #ff4d6d;
  padding: 15px 45px;
  font-size: 1.6rem;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  z-index: 1000;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.proposal-state, .celebration-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: scaleIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
}

.bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-20px);}
  60% {transform: translateY(-10px);}
}

@media (max-width: 480px) {
  .content-wrapper { padding: 30px 15px; }
  .yes-button, .no-button { padding: 12px 35px; font-size: 1.3rem; }
  .gif-display { width: 220px; }
}
</style>
