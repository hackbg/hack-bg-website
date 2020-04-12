<template>
  <header class="py-4 py-sm-5">
    <b-navbar class="p-0" toggleable="lg" type="light">
      <b-navbar-brand>
        <b-navbar-brand class="font-family-headings" to="/">
          <span class="h3 text-dark">hack</span>
        </b-navbar-brand>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto ">
          <b-nav-item to="/" exact-active-class="active">Home</b-nav-item>
          <b-nav-item to="/about" active-class="active">About</b-nav-item>
          <b-nav-item to="/blog" active-class="active">Blog</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>
