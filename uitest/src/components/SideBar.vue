<template>
  <div>
    <v-app-bar-nav-icon v-b-toggle.sidebar-backdrop class="hamburger"></v-app-bar-nav-icon>

    <b-sidebar
      id="sidebar-backdrop"
      title="Sidebar with backdrop"
      :backdrop-variant="dark"
      backdrop
      shadow>
      <div class="px-3 py-2">
        <p>fdsfdsfdsfds</p>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      offset: true,
    }),
}
</script>

<style scoped>
</style>