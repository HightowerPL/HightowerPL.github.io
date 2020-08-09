<template>
<div class="card-wrapper" :class="{showMobile: mobileOpen}">
  <div class="card-container">
    <div class="card" >
      <div class="md-layout md-gutter">
        <div class="card__icon-wrapper ">
          <img
            class="card__icon--close"
            src="../assets/close.png"
            alt="close icon"
            @click="$emit('close')" >
        </div>
        <div class="card__header-wrapper md-layout-item">
          <h3 class="card__text--heading  md-layout-item">Request a demo</h3>
        </div>
      </div>
      <form
          action="post"
          class="card__form--demo md-layout md-gutter"
          novalidate
          @submit.prevent="validateUser">
        <div class="card__input-wrapper md-layout-item md-small-size-50 md-xsmall-size-100">
          <md-field :class="getValidationClass('firstName')">
            <label class="card__label" for="first-name">first name</label>
            <md-input
              class="card__input"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              v-model="form.firstName"
              :disabled="sending"
            />
            <span
              class="md-error"
              v-if="!$v.form.firstName.required">The first name is required</span>
            <span
              class="md-error"
              v-else-if="!$v.form.firstName.minlength">Invalid first name</span>
          </md-field>
        </div>

        <div class="card__input-wrapper md-layout-item md-small-size-50 md-xsmall-size-100">
          <md-field :class="getValidationClass('lastName')">
            <label class="card__label" for="last-name">last name</label>
            <md-input
              class="card__input"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              v-model="form.lastName"
              :disabled="sending"
            />
            <span
              class="md-error"
              v-if="!$v.form.lastName.required">The last name is required</span>
            <span
              class="md-error"
              v-else-if="!$v.form.lastName.minlength">Invalid last name</span>
          </md-field>
        </div>

        <div class="card__input-wrapper md-layout-item md-small-size-50 md-xsmall-size-100">
          <md-field :class="getValidationClass('email')">
            <label class="card__label" for="email">email</label>
            <md-input
              class="card__input"
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              v-model="form.email"
              :disabled="sending"
            />
            <span
              class="md-error"
              v-if="!$v.form.email.required">The email is required</span>
            <span
              class="md-error"
              v-else-if="!$v.form.email.email">Invalid email</span>
          </md-field>
        </div>

        <div class="card__input-wrapper md-layout-item md-small-size-50 md-xsmall-size-100">
          <md-field :class="getValidationClass('telephone')">
            <label class="card__label" for="telephone">telephone</label>
            <md-input
              class="card__input"
              name="telephone"
              id="telephone"
              type="tel"
              autocomplete="telephone"
              v-model="form.telephone"
              :disabled="sending"
            />
            <span
              class="md-error"
              v-if="!$v.form.telephone.required">The telephone is required</span>
            <span
              class="md-error"
              v-else-if="!$v.form.telephone.minlength">Invalid telephone</span>
          </md-field>
        </div>

        <div class="card__input-wrapper md-layout-item md-small-size-50 md-xsmall-size-100">
          <md-field :class="getValidationClass('position')">
            <label class="card__label" for="position">position</label>
            <md-input
              class="card__input"
              name="position"
              id="position"
              autocomplete="position"
              v-model="form.position"
              :disabled="sending"
            />
            <span
              class="md-error"
              v-if="!$v.form.position.required">The position is required</span>
            <span
              class="md-error"
              v-else-if="!$v.form.position.minlength">Invalid position</span>
          </md-field>
        </div>

        <div class="card__input-wrapper md-layout-item md-small-size-50 md-xsmall-size-100">
          <md-field :class="getValidationClass('company')">
            <label class="card__label" for="company">company</label>
            <md-input
              class="card__input"
              name="company"
              id="company"
              autocomplete="company"
              v-model="form.company"
              :disabled="sending"
            />
            <span
              class="md-error"
              v-if="!$v.form.company.required">The company is required</span>
            <span
              class="md-error"
              v-else-if="!$v.form.company.minlength">Invalid company</span>
          </md-field>
        </div>

        <div class="card__btn-wrapper md-layout-item md-xsmall-size-100">
            <button
              type="submit"
              class="card__btn--submit btn btn--primary">
              <span>
                Submit
              </span>
              <img
               class="card__img--forward"
               src="../assets/forward-icon.svg" alt="submit icon">
            </button>

        </div>
      </form>
    </div>
  </div>

</div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, email, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'Card',
  mixins: [validationMixin],
  data() {
    return {
      form: {
        firstName: null,
        lastName: null,
        email: null,
        telephone: null,
        position: null,
        company: null,
      },
      userSaved: false,
      sending: false,
      lastUser: null,
    };
  },
  props: {
    mobileOpen: Boolean,
  },
  validations: {
    form: {
      firstName: {
        required,
        minLength: minLength(3),
      },
      lastName: {
        required,
        minLength: minLength(3),
      },
      email: {
        required,
        email,
      },
      telephone: {
        required,
        minLength: minLength(3),
      },
      position: {
        required,
        minLength: minLength(3),
      },
      company: {
        required,
        minLength: minLength(3),
      },
    },
  },
  methods: {
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty,
        };
      }
      return null;
    },
    clearForm() {
      this.$v.$reset();
      this.form.firstName = null;
      this.form.lastName = null;
      this.form.email = null;
      this.form.company = null;
      this.form.telephone = null;
      this.form.position = null;
    },
    saveUser() {
      this.sending = true;

      // Instead of this timeout, here you can call your API
      window.setTimeout(() => {
        this.lastUser = `${this.form.firstName} ${this.form.lastName}`;
        this.userSaved = true;
        this.sending = false;
        this.clearForm();
      }, 1500);
    },
    validateUser() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.saveUser();
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {

  padding: 2rem 4rem;
  background-color: var(--white);

  &-wrapper {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background-color: var(--white);
  }

  &__icon-wrapper {
    position: absolute;
    top: 2.5rem;
    right: 4rem;
    width: 1.8rem;
    height: 1.8rem;
  }

  &__text {
    &--heading {
      font-size: 2.4rem;
      color: var(--darkSlate);
      margin-top: 0;
    }
  }

  &__input {
      font-family: "museo-sans-rounded", sans-serif;
      font-size: 2rem;
      &-wrapper {
        box-sizing: border-box;

        display: inline-block;
      }
      &::after {
      height: 2px;

      }

  }

  &__label {
    font-weight: 700;
  }

  &__btn--submit {
    padding: 1.2rem;
    width: 100%;
    max-width: 26.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 3rem auto 0;
  }

  &__img {
    &--forward {
      width: 2.4rem;
      height: 2.4rem;
      border-radius: 5px;
      position: relative;

      &::before {
        position: absolute;
        top: .2rem;
        left: .2rem;
        right: .2rem;
        bottom: .2rem;
        background-color:var(--hotPink);
      }
    }
  }
}

.showMobile {
  display: block;
}

@media screen and (min-width: 768px) {
  .card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    padding: 4.8rem 12rem 6.75rem;
    max-width: 74rem;
    width: 100%;

    &-wrapper {
      background-color: rgba(0,0,0,.5);
    }

    &__icon-wrapper {
      top: 5.5rem;
      right: 12.5rem;
      padding: 0;
    }
  }
}

@media screen and (min-width: 1240px) {
  .card {
    position: absolute;
    top: auto;
    bottom: -5rem;
    right: -10rem;
    left: auto;
    transform: none;

    &-wrapper {
      display: block;
      position: relative;
    }

    &-container {
      max-width: 1240px;
      margin: 0 auto;
      position: relative;
    }

    &__text--heading {
      text-align: left;
    }

    &__btn--submit {
      float: right;
    }

    &__icon-wrapper {
      display: none;
    }
  }
}

.md-field::after {
  height: 2px;
  background-color: var(--coolGray);
}

.slide-fade-enter-active {
  transition: all .6s ease;
}
.slide-fade-leave-active {
  transition: all .6s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
