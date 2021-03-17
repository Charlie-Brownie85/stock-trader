<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar__menu">
        <div class="navbar__home">
          <router-link to="/">Stock Trader</router-link>
        </div>
        <ul>
          <router-link to="/portfolio" active-class="active" tag="li"
            ><a>Portfolio</a></router-link
          >
          <router-link to="/stocks" active-class="active" tag="li"
            ><a>Stocks</a></router-link
          >
        </ul>
      </div>
      <div class="navbar__actions">
        <a href="#">End Day</a>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  background-color: $navbar-bgc;
  box-shadow: $navbar-shadow;
  color: $navbar-color;
  
  a {
    display: flex;
    padding: 20px;
    align-items: center;
    height: 100%;

    &:hover,
    &:active {
      background-color: $navbar-bgc-2;
    }
  }

  &__home {
    font-size: 26px;
  }

  &__menu {
    display: flex;

    ul {
      display: flex;
      height: 100%;
    }
  }
}

.container {
  width: 100%;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
}
</style>