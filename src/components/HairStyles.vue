<template>
  <v-container class="">
    <v-card class="transparent" height="160" flat tile></v-card>
    <v-card class="transparent" align="center" flat tile>
      <div v-for="job in jobs" :key="job.id" class="job">
        <v-card class="mt-10" width="50%" height="130px">
          <h1>{{ job.id }} {{ job.title }}</h1>
          <p>{{ job.details }}</p>
        </v-card>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "HairStyles",
  data: () => ({ jobs: [] }),

  mounted() {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => (this.jobs = data))
      .catch((error) => console.log(error.message));
  },
};
</script>

<style lang="scss" scoped>
//
</style>
