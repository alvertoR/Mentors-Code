<template>
  <div>
    <div class="contenedor">
      <div class="todo">
        <div class="video">
          <iframe
            width="800"
            height="500"
            src="https://www.youtube.com/embed/0ToMTAyrdVY"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="descrip">
          <div class="nombre"><h1>Programación Web</h1></div>
          <div class="autor"><h5>Sergio Rubiano</h5></div>
        </div>
      </div>
    </div>
    <div class="full"></div>
    <div class="mentor">
      <div class="picture">
        <img src="../assets/videos/Sergio.jpg" />
      </div>
      <div class="descripmentor">
        <h1>Mentor: Sergio Rubiano</h1>
        <h2>Ingeniero de Sistemas</h2>
        <h3>sergiorubiana@gmial.com</h3>
        <h3>311 666 6666</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,900&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@1,900&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");

.contenedor {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #f2f2f5;
  height: 650px;
}
.video {
  display: flex;
  width: 800px;
  height: 500px;
  margin-top: 50px;
}
.descrip {
  display: flex;
  flex-direction: column;
  font-family: "Lato", sans-serif;
  font-style: bold;
  font-size: 25px;
  color: #001847;
}
.mentor {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 16px;
}
.picture {
  margin-right: 16px;
}
.descripmentor {
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.descripmentor h1 {
  font-family: "Lato", sans-serif;
  font-style: bold;
  font-size: 40px;
  color: #001847;
  margin-bottom: 8px;
}
.descripmentor h2 {
  font-family: "Lato", sans-serif;
  font-style: bold;
  font-size: 24px;
  color: #001847;
}
.descripmentor h3 {
  font-family: "Lato", sans-serif;
  font-style: bold;
  font-size: 16px;
  color: #001847;
}
.picture img {
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
}
</style>
