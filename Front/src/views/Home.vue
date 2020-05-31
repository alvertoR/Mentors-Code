<template>
  <div>
    <cabeza></cabeza>
    <cuerpo></cuerpo>
    <pie></pie>
  </div>
</template>

<script>
import cabeza from "../components/HeaderLogout";
import cuerpo from "../components/BodyHome";
import pie from "../components/FooterHome";

export default {
  components: { cabeza, cuerpo, pie }
};
</script>
