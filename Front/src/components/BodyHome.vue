<template>
  <div>
    <div class="container-body">
      <div class="left">
        <h2>Rompiendo los paradigmas de la programación</h2>
        <p>
          Queremos fomentar la igualdad de género en el ámbito de la
          programación, nuestros mentores son 50% mujeres, 50% hombres.
        </p>
        <a class="ya" @click="pop">Empieza Ya!</a>
      </div>
      <div class="rigth">
        <img src="../assets/home/font-body.jpg" />
      </div>
    </div>
    <div class="testimonios">
      <h2>Testimonios de nuestros Meetens:</h2>
      <div class="cards">
        <ul>
          <li>
            <div class="arriba">
              <img src="../assets/home/comilla-izquierda.svg" />
            </div>
            <p>
              El aprendizaje de Mentors Code ha sido un gran lugar para comenzar
              aprender a programas. ¡Mi hermana y yo empezamos hace más de un
              año y hasta ahora ha sido realmente bueno! Hemos tenido 3 tutores
              diferentes. Nos preocupaba que la transición no fuera fácil, !pero
              funcionó¡ En general. ¡ha sido una experiencia maravillosa!
            </p>
            <div class="abajo">
              <img src="../assets/home/comilla-derecha.svg" />
            </div>
          </li>
          <li>
            <div class="arriba">
              <img src="../assets/home/comilla-izquierda.svg" />
            </div>
            <p>
              El aprendizaje de Mentors Code ha sido un gran lugar para comenzar
              aprender a programas. ¡Mi hermana y yo empezamos hace más de un
              año y hasta ahora ha sido realmente bueno! Hemos tenido 3 tutores
              diferentes. Nos preocupaba que la transición no fuera fácil, !pero
              funcionó¡ En general. ¡ha sido una experiencia maravillosa!
            </p>
            <div class="abajo">
              <img src="../assets/home/comilla-derecha.svg" />
            </div>
          </li>
          <li>
            <div class="arriba">
              <img src="../assets/home/comilla-izquierda.svg" />
            </div>
            <p>
              El aprendizaje de Mentors Code ha sido un gran lugar para comenzar
              aprender a programas. ¡Mi hermana y yo empezamos hace más de un
              año y hasta ahora ha sido realmente bueno! Hemos tenido 3 tutores
              diferentes. Nos preocupaba que la transición no fuera fácil, !pero
              funcionó¡ En general. ¡ha sido una experiencia maravillosa!
            </p>
            <div class="abajo">
              <img src="../assets/home/comilla-derecha.svg" />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="slogan">
      <h2>Tu futuro lo creas HOY!</h2>
      <a class="ya" @click="pop">Empieza Ya!</a>
    </div>
    <div class="modal-register">
      <div class="content">
        <div class="imagen">
          <h2>Bienvenido, únete hoy a nuestro grupo de Meetens</h2>
        </div>
        <div class="formulario">
          <div class="close" @click="popClose" id="close">+</div>
          <form>
            <div class="input">
              <p>Nombre</p>
              <input class="tex" type="text" name="" id="" />
            </div>
            <div class="input">
              <p>E-mail</p>
              <input class="tex" type="email" name="" id="" />
            </div>
            <div class="input">
              <p>Contraseña</p>
              <input class="tex" type="password" name="" id="" />
            </div>
            <div class="input">
              <input class="boton" type="submit" value="Regístrate" id="" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    pop() {
      document.querySelector(".modal-register").style.display = "flex";
    },
    popClose() {
      document.querySelector(".modal-register").style.display = "none";
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");
.container-body {
  width: 100%;
  height: auto;
  outline-color: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}

.left {
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 40%;
}

.left h2 {
  font-family: "Open Sans", sans-serif;
  font-size: 36px;
  font-weight: 600;
  color: #001847;
  width: 100%;
  margin-top: 50px;
}

.left p {
  margin-top: 48px;
  font-family: "Open Sans", sans-serif;
  font-size: 26px;
  font-weight: 400;
  color: #001847;
  width: 90%;
}

.ya {
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  cursor: pointer;
  text-decoration: none;
  color: #ffffff;
  background-color: #f26900;
  width: 175px;
  padding: 7px 10px;
  text-align: center;
  margin: 36px auto;
}

.rigth {
  width: 600px;
  height: 430px;
  margin-bottom: 10px;
  margin-top: 30px;
}

.rigth img {
  position: relative;
  width: 100%;
  height: auto;
}

.testimonios {
  background-color: #f2f2f5;
  height: 670px;
}

.testimonios h2 {
  font-family: "Open Sans", sans-serif;
  font-size: 36px;
  font-weight: 600;
  color: #001847;
  width: 100%;
  text-align: center;
  padding-top: 62px;
}

.testimonios ul {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
  margin-top: 62px;
}

.testimonios ul li {
  width: 450px;
  height: 430px;
  background-color: #fff;
  margin-left: 50px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  box-shadow: 0px 3px 6px #00000029;
}

.arriba {
  height: 85%;
  width: 15%;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
}

.abajo {
  height: 100%;
  width: 15%;
  display: flex;
  flex-direction: column-reverse;
  height: 85%;
  padding-right: 30px;
}

.testimonios ul li p {
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 400;
  color: #001847;
  width: 70%;
  margin: 0 auto;
}

.slogan h2 {
  width: 100%;
  font-family: "Lato", sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #001847;
  text-align: center;
  margin-top: 60px;
}

.slogan a {
  display: block;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  text-decoration: none;
  color: #ffffff;
  background-color: #f26900;
  width: 175px;
  padding: 7px 10px;
  text-align: center;
  margin: 16px auto;
  margin-bottom: 50px;
}

.modal-register {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  display: none;
}

.content {
  width: 700px;
  height: 520px;
  display: flex;
  flex-direction: row;
}

.close {
  margin-right: -280px;
  font-size: 32px;
  transform: rotate(45deg);
  color: #f26900;
  font-weight: 900;
  cursor: pointer;
}

.imagen {
  width: 50%;
  height: 100%;
  background: url("../assets/home/sesion.svg");
  display: flex;
  justify-content: center;
  align-items: center;
}

.imagen h2 {
  width: 70%;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
}

.formulario {
  margin-top: 6px;
  width: 50%;
  height: 500px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.formulario form {
  width: 90%;
  margin: 15px auto;
}

.formulario form p {
  font-family: "Lato", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #cccccc;
  margin-top: 30px;
}

.tex {
  width: 300px;
  height: 48px;
  border: 1px solid #cccccc;
  margin-top: 10px;
}

.boton {
  width: 300px;
  height: 48px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  background-color: #f26900;
  color: #cccccc;
  margin-top: 30px;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  font-size: 22px;
  text-decoration: none;
  color: #ffffff;
  background-color: #f26900;
}
</style>
