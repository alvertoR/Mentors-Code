<template>
  <div>
    <div class="container">
      <div class="videoback">
        <video id="video" autoplay muted loop>
          <source
            src="https://res.cloudinary.com/xaiop/video/upload/v1590894361/Untitled_vmymds.mp4"
          />
        </video>
      </div>
      <nav>
        <ul>
          <li>
            <router-link to="/"><h2>Mentors Code</h2></router-link>
          </li>
          <li class="top">
            <router-link to="/mentorias"
              ><a class="mentoria" href="">
                Mentorias
              </a></router-link
            >
            <div class="separador"></div>
            <a class="empieza" @click="pop">
              Empieza
            </a>
          </li>
        </ul>
      </nav>
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
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.content {
  width: 700px;
  height: 500;
  display: flex;
  flex-direction: row;
}

.imagen {
  width: 50%;
  height: 100%;
}

.formulario {
  width: 50%;
  height: 100%;
}

.mentoria {
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  text-decoration: none;
  padding-right: 16px;
  color: #ffffff;
}

.empieza {
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  font-size: 22px;
  text-decoration: none;
  color: #ffffff;
  background-color: #f26900;
  margin-left: 16px;
  width: 130px;
  text-align: center;
  cursor: pointer;
}

.top {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.separador {
  height: 38px;
  width: 0px;
  border-right: 1px solid #ffffff;
}

.container {
  width: 100%;
  height: 100%;
  position: relative;
}

.videoback {
  display: flex;
  justify-content: center;
  height: 1000px;
}

.container img {
  display: block;
  position: relative;
  width: inherit;
  height: auto;
  top: -8px;
}

.container p {
  position: absolute;
  top: 0px;
  color: #fff;
}

nav {
  position: absolute;
  width: 100%;
  top: 16px;
}

nav ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  outline-color: 1px solid white;
}

nav ul li h2 {
  font-size: 34px;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  color: #fff;
  font-style: italic;
}
.container nav ul li a {
  text-decoration-line: none;
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
  margin-top: 10px;
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
  color: #979494;
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
