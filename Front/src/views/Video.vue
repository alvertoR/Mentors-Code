<template>
  <div>
    <cabeza />
    <cuerpo />
    <pie />
  </div>
</template>

<script>
import cabeza from "../components/HeaderIniciado";
import cuerpo from "../components/BodyVideos";
import pie from "../components/FooterHome";
export default {
  components: {
    cabeza,
    cuerpo,
    pie
  }
};
</script>

<style scoped></style>
