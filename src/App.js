import React from 'react';
import './App.css';
import Logo from './images/heroSectionLogo.png';
import zomatoLogo from './images/logo.png';
import item1 from './images/item1.png';
import item2 from './images/item2.png';
import item3 from './images/item3.png';
import item4 from './images/item4.png';
import mobileBanner from './images/mobileBanner.png';
import appleStore from './images/appleStore.png';
import playStore from './images/playStore.png';

function App() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />

      <section className='hero__section'>
        <header>
          <nav className='navbar'>
            <a href='#'>Get the App</a>
            <div className='navbar__menu_container'>
              <a href='#'className='link'>Investor Relations</a>
              <a href='#'className='link'>Add restaurant</a>
              <a href='#'className='link'>Log in</a>
              <a href='#'className='link'>Sign Up</a>
              <a href='#' className='user__icon'><i className="fa-solid fa-user"></i></a>
            </div>
          </nav>
        </header>

        <div class="hero__section_container">
        <img
          src={Logo}
          alt="Zomato Logo"
          class="hero__section_logo"
        />
        <h1 class="hero__section_title">Discover the best food & drinks in Hampi-Hospet</h1>
        <div class="hero__section_input_container">
          <input
            type="text"
            placeholder="Hampi-Hospet"
            class="input_container_location"
          />
          <input
            type="text"
            placeholder="Search for a restaurant, cuisine or a dish"
            class="input_container_search"
          />
        </div>
      </div>
      </section>

      <section class="container we__offer">
      <div class="we__offer_card">
        <img src={item1} alt="item 1 offer card" />
        <div class="we__offer_content">
          <h2>Order Online</h2>
          <p>Stay home and order to your doorstep</p>
        </div>
      </div>

      <div class="we__offer_card">
        <img src={item2} alt="item 2 offer card" />
        <div class="we__offer_content">
          <h2>Dining</h2>
          <p>View the citys favourite dining venue</p>
        </div>
      </div>

      <div class="we__offer_card">
        <img src={item3} alt="item 3 offer card" />
        <div class="we__offer_content">
          <h2>Nightlife and clubs</h2>
          <p>Explore the citys top nightlife outlets</p>
        </div>
      </div>

      <div class="we__offer_card">
        <img src={item4} alt="item 4 offer card" />
        <div class="we__offer_content">
          <h2>Order Online</h2>
          <p>Stay home and order to your doorstep</p>
        </div>
      </div>
      </section>

      <section class="container collections">
        <h1>Collection</h1>
        <div className="sub__heading_container" >
          <span>Explore curated lists of top restaurants, cafes, pubs in Hospet-Hampi based on trends</span>
          <span>All collections in Hospet-Hampi</span>
        </div>
        <div class="collections_card_container">
          <div class="card card1">
            <div class="overlay"></div>
            <div class="content">
              <h4>Live Cricket Screening</h4>
              <span>56 Places</span>
            </div>
          </div>

          <div class="card card2">
            <div class="overlay"></div>
            <div class="content">
              <h4>Malnad Special</h4>
              <span>12 Places</span>
            </div>
          </div>

          <div class="card card3">
            <div class="overlay"></div>
            <div class="content">
              <h4>Newly opened Restaurants</h4>
              <span>36 Places</span>
            </div>
          </div>

          <div class="card card4">
            <div class="overlay"></div>
            <div class="content">
              <h4>Trending Pubs Near Me</h4>
              <span>16 Places</span>
            </div>
          </div>

        </div>
      </section>

      <section class="container get__the_app">
      <div class="semiContainer">
        <div class="left">
          <img src={mobileBanner} alt="mobile banner" />
        </div>
        <div class="right">
          <h1>Get the Zomato App</h1>
          <p>We will send you a link, open it and download in your phone</p>
          <div class="radio__button_container">
          <div>
            <input type="radio" name="download_app" id="email" />
            <label htmlFor="email" style={{ fontSize: '14px' }}>Email</label>
          </div>
          <div>
            <input type="radio" name="download_app" id="phone" />
            <label htmlFor="phone" style={{ fontSize: '14px' }}>Phone</label>
          </div>
          </div>
          <div class="input_container">
            <input type="email" placeholder="Email" />
            <button>Share App Link</button>
          </div>
          <div class="download__app_container">
            <h5>Download App From</h5>
            <div>
              <img src={appleStore} alt="apple store" />
              <img src={playStore} alt="play store" />
            </div>
          </div>
        </div>
      </div>
      </section>

      <footer class="container footer">
      <div class="footer_section1">
        <img src={zomatoLogo} alt="zomato logo" />
        <div class="section1__buttonContainer">
          <button>
            <img
              src="https://flagcdn.com/w40/in.png"
              alt="Indian Flag"
              style={{width: '17px'}}
            />
            India
          </button>
          <button><i class="fa fa-globe"></i>English</button>
        </div>
      </div>
      <div class="navigation_container">
        <div class="link__container">
          <h5>ABOUT ZOMATO</h5>
          <a href="#" class="footer__link">Who we are</a>
          <a href="#" class="footer__link">Blogs</a>
          <a href="#" class="footer__link">Work with us</a>
          <a href="#" class="footer__link">Investor Relations</a>
          <a href="#" class="footer__link">Report Fraud</a>
          <a href="#" class="footer__link">Contact Us</a>
        </div>

        <div class="link__container">
          <h5>ZOMAVERSE</h5>
          <a href="#" class="footer__link">Zomato</a>
          <a href="#" class="footer__link">Feeding India</a>
          <a href="#" class="footer__link">Hyperpure</a>
          <a href="#" class="footer__link">Zomaland</a>
          <a href="#" class="footer__link">BlinkInt</a>
        </div>

        <div class="link__container">
          <h5>FOR RESTAURANTS</h5>
          <a href="#" class="footer__link">Parnter With Us</a>
          <a href="#" class="footer__link">Apps For You</a>
          <br />
          <h5>FOR ENTERPRISES</h5>
          <a href="#" class="footer__link">Zomato For Work</a>
        </div>

        <div class="link__container">
          <h5>LEARN MORE</h5>
          <a href="#" class="footer__link">Privacy</a>
          <a href="#" class="footer__link">Security</a>
          <a href="#" class="footer__link">Terms</a>
          <a href="#" class="footer__link">Sitemap</a>
        </div>

        <div class="link__container">
          <h5>Social Links</h5>
          <div class="social__links_container">
            <button><i class="fa-brands fa-linkedin-in"></i></button>
            <button><i class="fa-brands fa-instagram"></i></button>
            <button><i class="fa-brands fa-twitter"></i></button>
            <button><i class="fa-brands fa-facebook"></i></button>
            <button><i class="fa-brands fa-youtube"></i></button>
          </div>
          <br />
          <img
            src={appleStore}
            alt="apple store"
            class="footer__section_logos"
          />
          <img
            src={playStore}
            alt="playstore"
            class="footer__section_logos"
          />
        </div>
      </div>
      <div class="termsNConditions">
        By continuing past this page, you agree to our Terms of Service, Cookie
        Policy, Privacy Policy and Content Policies. All trademarks are
        properties of their respective owners. 2008-2023 © Zomato™ Ltd. All
        rights reserved.
      </div>
      </footer>

    </div>
  );
}

export default App;