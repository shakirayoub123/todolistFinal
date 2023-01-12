<template>
  <body class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
      <Preloader></Preloader>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div class="content-wrapper">
        <ContentHeader></ContentHeader>

        <section class="content">
          <div class="container-fluid">
            <filter-todos></filter-todos>
            <router-view></router-view>
          </div>
        </section>
      </div>

      <Footer></Footer>
      <ControlSidebar></ControlSidebar>
    </div>
  </body>
</template>

<script>
import FilterTodos from "@/components/Filter.vue";

export default {
  name: "App",
  components: {
    FilterTodos,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback");
</style>
