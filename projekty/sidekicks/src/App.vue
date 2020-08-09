<template>
  <div id="app">
    <Header></Header>

    <section class="screen">
      <div class="container">
        <img
          class="screen__img--momentum"
          :src="require('./assets/' + screen.img + '.svg')"
          :alt="screen.img"
        />
        <h2 class="screen__text screen__text--heading">{{screen.heading}}</h2>
        <p class="screen__text screen__text--sub">{{ screen.sub }}</p>

      </div>
    </section>

    <Card :mobile-open="mobileRequestOpen" @close="closeCard"></Card>

    <section class="lower">
      <div class="container">
        <ul class="lower__list">
          <li class="lower__list-item" v-for="(item, index) in list" :key="index">
            <img
              class="lower__img--svg"
              :src="require('./assets/' + item[0] + '.svg')"
              :alt="item[0]"
            />
            <span class="lower__text">{{ item[1] }}</span>
          </li>
        </ul>
      </div>
    </section>

    <div class="request-wrap">
      <button
        class="request-wrap__btn btn btn--primary"
        @click="mobileRequestOpen = true">
        <span>
        Request a Demo
        </span>
      </button>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Card from './components/Card.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Card,
    Footer,
  },
  data() {
    return {
      screen: {
        img: 'momentum-logo',
        heading: 'Asset Creation Made Easy For The Enterprise',
        sub:
          'Enabling anyone to build on brand emails and landing pages in minutes.',
      },
      list: [
        ['circle', 'Easly integrate momentum into workflow'],
        ['star', 'Quickly build brand emails'],
        ['arrow', 'Review and approve teams emails and pages'],
      ],
      mobileRequestOpen: false,
    };
  },
  methods: {
    closeCard() {
      this.mobileRequestOpen = false;
    },
  },
};
</script>

<style lang="scss">
body,
html {
  --darkSlate: #253746;
  --darkerSlate: rgba(0,0,0,.1);
  --electricTeal: #00bcb5;
  --coolGray: #98a4af;
  --black: #000000;
  --hotPink: #e72176;
  --white: #ffffff;
  --lightGray: #e5e5e5;
  height: 100%;
  width: 100%;
  overflow-x:hidden;
  margin: 0;
  padding: 0;
  font-size: 10px;
  line-height: normal;
  background-color: var(--darkSlate);

   * {
    box-sizing: border-box;
  }
}

.mobile-open {
  display: block;
}

a {
  color: inherit;
}

#app {
  font-family: 'museo-sans-rounded', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 1.4rem;
  color: #2c3e50;
  background-color: var(--darkSlate);
}

.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
}

.screen {
  background: rgba(0,0,0,.1) ;
  background-size: 100% 100%;
  color: var(--white);
  padding: 14rem 4rem;
  font-weight: 700;
  overflow: hidden;
  position: relative;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    background: url('../src/assets/momentum-logo-only.svg') 50% 60% no-repeat;
    background-size: contain;
    position: absolute;
    top: -15rem;
    left: 10rem;
    z-index: 0;
    opacity: 0.2;
    transform: scale(3.5);
  }

  &__img {
    &--momentum {
      max-width: 24rem;
      margin-bottom: 4rem;
    }
  }

  &__text {
    font-weight: 700;
    max-width: 52rem;

    &--heading {
      font-size: 4.6rem;
      margin: 0 auto 2rem;
    }

    &--sub {
      margin: 0 auto;
      font-size: 2.4rem;

    }
  }
}

.lower {
  background-color: var(--darkSlate);
  height: 100%;
  position: relative;
  padding: 6rem 0 ;
  text-align: left;

  &:before {
    content: '';
    background: url('../src/assets/arrow-gray.svg') center center no-repeat;
    background-size: contain;
    z-index:-1;
    transform: rotate(45deg);
    width: 140px;
    height: 235px;
    position: absolute;
    top: 2rem;
    left: 0;
  }

  &__list {
    list-style-type: none;
    padding: 0;
    margin: 0;
    &-item {
      display: flex;
      align-items: center;
      margin-bottom: 3.3rem;
    }
  }

  &__img {
    &--svg {
      max-height: 2.7rem;
      margin-right: 2.2rem;
      color: var(--hotPink);
    }
  }
  &__text {
    font-size: 1.8rem;
    color: white;
  }
}

.btn {
  font-family: 'museo-sans-rounded', sans-serif;
  font-weight: 700;
  border: none;
  height: 4.8rem;
  font-size: 2rem;
  cursor: pointer;

  &--primary {
    background-color: var(--hotPink);
    border: 2px solid var(--hotPink);
    color: var(--white);
    border-radius: 5px;
    font-weight: 700;
      line-height: 4rem;

    padding: 0 2.4rem;
    position: relative;
    overflow: hidden;
    transition: color .4s;

    > * {
      position: relative;
      z-index: 2;
    }

    &::before {
      content: '';
      width: .2rem;
      background-color: var(--white);
      position: absolute;
      top: 0;
      bottom:0;
      left: -1rem;
      transition: transform .8s;
      z-index: 1;
    }

    &:hover {
      color: var(--hotPink);

      &::before {
        transform: scaleX(500);

      }
    }
  }
}

.request-wrap {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 90;
    padding: 2rem;
    &__btn {
      max-width: 440px;
      width: 100%;
      box-shadow: 0 0 20px rgba(0,0,0,.35);
    }
}

@media screen and (min-width: 920px) {
  .screen {
    padding-top: 17.5rem;
    text-align: left;
    &:before {
      content: '';
      top: 9rem;
      left: 32rem;
      transform: scale(1.25);
    }
    &__text {
        &--heading, &--sub {
          margin-left: 0;
          margin-right: 0;
        }
    }
  }
  .lower {
    padding-bottom: 24rem;
    &__list {
      list-style-type: none;
      padding: 0;
      margin: 0;
      &-item {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
    }
  }
}

@media screen and (min-width: 1240px) {
  .request-wrap {
    display: none;
  }

  .screen {

  }
}

.md-theme-default a:not(.md-button) {
  color: inherit;
}

</style>
