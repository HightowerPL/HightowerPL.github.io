<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__row--top">
        <img
          class="footer__img footer__img--martech"
          src="../assets/love-martech-footer-logo.svg"
          alt="logo lovemartech"
        />
        <img
          class="footer__img footer__img--clevertech"
          src="../assets/clevertouch-icon.svg"
          alt="logo clevertech"
        />
      </div>
      <div class="footer__row--bottom">
        <div class="footer__col--convo">
          <h4 class="footer__text--heading">start a conversation</h4>
          <ul class="footer__list footer__list--convo">
            <li class="footer__list-item">
              <a
              class="footer__link"
              href="tel:+4401962677000">+44 (0)1962 677 000</a>
            </li>
            <li class="footer__list-item">
              <a class="footer__link"
                href="mailto:hello@clever-touch.com">hello@clever-touch.com</a>
            </li>
            <li>
              <button class="footer__btn--chat btn btn--primary">
                <span>Start live chat</span>
              </button>
            </li>
          </ul>
        </div>

        <div class="footer__col--find-us">
          <h4 class="footer__text--heading">find us</h4>
          <ul class="footer__list footer__list--find-us">
            <li class="footer__list-item">Clevertouch HQ</li>
            <li class="footer__list-item">The Old Forge,</li>
            <li class="footer__list-item">Alresford, Hampshire,</li>
            <li class="footer__list-item">SO24 9BH</li>
            <li class="footer__list-item">
              <a class="footer__link" href="#">Get directions</a>
            </li>
          </ul>
        </div>

        <div class="footer__col--newsletter">
          <h4 class="footer__text--heading">never miss a thing</h4>
          <form action="POST" class="footer__form--newsletter newsletter">
            <div class="newsletter__input-wrapper">
              <input
                type="email"
                placeholder="Email"
                class="newsletter__input newsletter__input--mail"
              />
              <button class="newsletter__btn--submit btn" type="submit">Sign up</button>
            </div>
            <div class="newsletter__consent-wrapper">
              <input
                type="checkbox"
                name="consent"
                id="consent"
                class="newsletter__input--consent input--checkbox"
              />
              <label for="consent">Sign me up to receive marketing tips and content</label>
            </div>
          </form>
          <div class="footer__box--social">
            <span class="footer__btn--social footer__btn--twitter"></span>
            <span class="footer__btn--social footer__btn--linkedin"></span>
          </div>
        </div>
        <div class="footer__col--last">
          <div class="footer__box--awards">
            <img
              src="../assets/times-100-best-small-companies.png"
              alt="100 best small companies award"
              class="footer__img--award"
            />
            <img
              src="../assets/3-star-best-company.png"
              alt="3 star best company award"
              class="footer__img--award"
            />
          </div>
          <div class="footer__box--copyright">© 2020 Clevertouch Marketing.</div>
          <div class="footer__box--conditions">
            <a class="footer__link footer__link--conditions" href="#">Terms & Conditions</a>
            <a class="footer__link" href="#">Privacy Policy</a>
          </div>
          <div class="footer__box--signature">
            Designed by
            <a
              class="footer__link"
              href="https://www.biggerpicture.agency/"
            >Bigger Picture</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  background-color: rgba(0, 0, 0, 0.1);
  padding: 4rem 0 5rem;
  &__row {
    &--top {
      margin-bottom: 4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &--bottom {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  &__img {
    width: 100%;
    &--martech {
      max-width: 240px;
      margin: 0 0 4rem;
      order: 2;
    }
    &--clevertech {
      max-width: 75px;
      margin: 0 0 4rem;
      order: 1;
    }
    &--award {
      &:last-child {
        margin-left: 2.4rem;
      }
    }
  }

  &__text {
    &--heading {
      color: var(--white);
      font-size: 2rem;
      font-weight: 700;
      margin-top: 0;
      margin-bottom: 1.2rem;
    }
  }

  &__list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    color: var(--white);
    font-size: 1.8rem;

    &--convo {
      margin-bottom: 3.5rem;
      li {
        margin-bottom: 1.2rem;
      }
    }

    &--find-us {
      margin-bottom: 4.8rem;
      li {
        margin-bottom: 0.6rem;
      }
    }
  }

  &__btn {
    &--chat {
      margin-top: 2rem;
    }

    &--social {
      margin-bottom: 5rem;
      border-radius: 50%;
      padding: 0.5rem;
      width: 4.8rem;
      height: 4.8rem;
      cursor: pointer;
      display: inline-block;
      margin-right: 1.6rem;
      transition: background-color 0.4s;
      &:hover {
        background-color: var(--electricTeal);
      }
    }

    &--twitter {
      background: rgba(0, 0, 0, 0.1) url("../assets/twitter-icon.svg") center
        center no-repeat;
      background-size: 80%;
    }

    &--linkedin {
      background: rgba(0, 0, 0, 0.1) url("../assets/linkedin-icon.svg") center
        center no-repeat;
      background-size: 80%;
    }
  }

  &__box {
    &--awards {
      margin-bottom: 2.4rem;
    }

    &--copyright,
    &--conditions,
    &--signature {
      margin-bottom: 1.6rem;
      color: rgba(255, 255, 255, 0.3);
    }
  }

  &__link {
    text-decoration: underline;
    &--conditions {
      margin: 0 1rem;
    }
  }
}

.newsletter {
  color: var(--white);

  &__text {
    &--heading {
      font-weight: 700;
      font-size: 2rem;
    }
  }

  &__input {
    font-size: 1.8rem;
    width: 100%;

    &-wrapper {
      margin-bottom: 1.6rem;
      position: relative;
    }

    &--mail {
      border-radius: 0.5rem;
      padding-left: 1.8rem;
      background: rgba(0, 0, 0, 0.1);
      height: 4.8rem;
      border: none;
      color: var(--white);
      font-family: "museo-sans-rounded", sans-serif;
    }

    &--consent {
      visibility: hidden;
      margin-right: 1rem;
      cursor: pointer;

      &:hover {
        cursor: pointer;
        ~ label:before {
          border-color: var(--electricTeal);
        }
      }

      ~ label:before {
        content: "";
        position: absolute;
        top: 0.2rem;
        left: 0;
        width: 2.4rem;
        height: 2.4rem;
        border-radius: 0.5rem;
        box-sizing: border-box;
        border: 1px solid var(--darkerSlate);
        background-color: var(--darkerSlate);
      }

      &:checked {
        ~ label:before {
          background-color: var(--electricTeal);
        }
      }
    }
  }

  &__consent-wrapper {
    margin-bottom: 1.6rem;
    position: relative;
  }

  &__btn {
    &--submit {
      background-color: var(--electricTeal);
      color: var(--white);
      max-width: 117px;
      padding: 0 2.4rem;
      border-radius: 0 5px 5px 0;
      position: absolute;
      top: 0;
      right: 0;
      transition: background-color .4s;
      &:hover {
        background-color: #01807c;
      }

    }
  }
}

@media screen and (min-width: 920px) {
  .footer {
    &__col--convo,
    &__col--find-us,
    &__col--newsletter {
      text-align: left;
    }
    &__col--last {
      text-align: right;
    }
    &__row {
      &--top,
      &--bottom {
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
      }
    }
    &__img {
      width: 100%;
      &--martech {
        max-width: 447px;
        order: 1;
      }
    }
  }
}

</style>
