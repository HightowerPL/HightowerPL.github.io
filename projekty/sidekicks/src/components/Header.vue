<template>
  <header class="header">
      <div class="header--box">
          <button class="header__btn--back btn btn--alt">
              <img src="../assets/back-icon.svg" alt="back icon" class="header__img--back">
              back to articles
          </button>
      </div>

        <div class="header__logo">
            <img src="../assets/love-martech-footer-logo.svg" alt="logo">
        </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 35px 0px;
    background-color: var(--darkSlate);

    &__logo {
        max-width: 153px;
        margin: 0 auto;
    }

    &__img {
        &--back {
            width: 2.4rem;
            height: 2.4rem;
            margin-right: 1rem;
        }
    }

    &__btn--back {
            opacity: .5;
            position: absolute;
            left: 2rem;
            margin-top: -.5rem;
            padding-left: 25px;
            background: transparent;
            color: var(--white);
            font-size: 0;
            display: flex;
            align-items: center;
            height: auto;
            transition: opacity .4s;
            &:hover {
                opacity: 1;
            }
    }
}

@media screen and (min-width: 1240px) {
    .header {
        z-index: 120;
        &__logo {
            max-width: 24.3rem;
        }
        &__btn--back {
            left: 5rem;
            font-size: 1.8rem;
        }
        &__img {
            &--back {
                margin-top: 0;
                width: 1.2rem;
                height: 1.2rem;
            }
        }
    }
}
</style>
