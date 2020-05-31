<template>
  <div>
    <div class="contenedor">
      <div class="video"></div>
      <div class="descrip">
        <div class="nombre"><h1>Programación Web</h1></div>
        <div class="autor"><h5>Sergio Rubiano</h5></div>
      </div>
    </div>
    <div class="Mentor">
      <div class="picture"></div>
      <div class="DescripMentor">
        <h1>Nombre</h1>
        <h2>Carrera</h2>
        <h3>Correo</h3>
        <h3>Numero</h3>
      </div>
    </div>
    <div class="comnetarios">
      <ul>
        <li>comentarios</li>
      </ul>
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
  border: black solid 1px;
  width: 800px;
  height: 500px;
  margin-top: 50px;
}
.descrip {
  border: black solid 1px;
  display: flex;
  flex-direction: column;
  font-family: "Lato", sans-serif;
  font-style: bold;
  font-size: 25px;
}
</style>
