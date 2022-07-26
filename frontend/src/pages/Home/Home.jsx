import React, { useRef } from 'react';
import './Home.css';
import homeImg from '../../components/image/homeimg.svg';
import aboutImg from '../../components/image/about-img.svg';
import bookImg from '../../components/image/book-img.svg';
import blog1 from '../../components/image/blog-1.jpg';
import blog2 from '../../components/image/blog-2.jpg';
import blog3 from '../../components/image/blog-3.jpg';
import doc1 from '../../components/image/doc-1.jpg';
import doc2 from '../../components/image/doc-2.jpg';
import doc3 from '../../components/image/doc-3.jpg';
import doc4 from '../../components/image/doc-4.jpg';
import doc5 from '../../components/image/doc-5.jpg';
import doc6 from '../../components/image/doc-6.jpg';
import pic1 from '../../components/image/pic-1.png';
import pic2 from '../../components/image/pic-2.png';
import pic3 from '../../components/image/pic-3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretRight } from '@fortawesome/free-solid-svg-icons';
import {
  Animator,
  batch,
  Fade,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
} from 'react-scroll-motion';
import emailjs from '@emailjs/browser';

const element = <FontAwesomeIcon icon={faSquareCaretRight} size="xl" />;

const Home = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_5o6n3vc',
        'template_4rwifzj',
        form.current,
        'jEj8mNESKKy-QqdOr'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    document.getElementById('contactForm').reset();
  };

  return (
    <div className="Home">
      <section className="home" id="home">
        <div className="image">
          <img src={homeImg} alt="" />
        </div>

        <div className="content">
          <h3>Leading the way in medical excellence</h3>
          <p>
            Largest network of the world’s finest and brightest medical experts
            who provide compassionate care using outstanding expertise and
            advanced technology.
          </p>
          <a href="#contactForm" className="btn">
            {' '}
            contact us
          </a>
        </div>
      </section>

      {/* <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <h2>Let't me show you scroll animation 😀</h2>
          </Animator>
        </ScrollPage>
      </ScrollContainer> */}

      <section className="icons-container">
        <div className="icons">
          <i className="fas fa-user-md" />
          <h3>140+</h3>
          <p>doctors at work</p>
        </div>

        <div className="icons">
          <i className="fas fa-users" />
          <h3>1040+</h3>
          <p>satisfied patients</p>
        </div>

        <div className="icons">
          <i className="fas fa-procedures" />
          <h3>500+</h3>
          <p>bed facility</p>
        </div>

        <div className="icons">
          <i className="fas fa-hospital" />
          <h3>80+</h3>
          <p>available hospitals</p>
        </div>
      </section>

      <section className="services" id="services">
        <h1 className="heading">
          {' '}
          our <span>services</span>{' '}
        </h1>

        <div className="box-container">
          <div className="box">
            <i className="fas fa-notes-medical" />
            <h3>free checkups</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
              omnis.
            </p>
            <a href="#" className="btn">
              {' '}
              learn more
            </a>
          </div>

          <div className="box">
            <i className="fas fa-ambulance" />
            <h3>24/7 ambulance</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
              omnis.
            </p>
            <a href="#" className="btn">
              {' '}
              learn more
            </a>
          </div>

          <div className="box">
            <i className="fas fa-user-md" />
            <h3>expert doctors</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
              omnis.
            </p>
            <a href="#" className="btn">
              {' '}
              learn more
            </a>
          </div>

          <div className="box">
            <i className="fas fa-pills" />
            <h3>medicines</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
              omnis.
            </p>
            <a href="#" className="btn">
              {' '}
              learn more
            </a>
          </div>

          <div className="box">
            <i className="fas fa-procedures" />
            <h3>bed facility</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
              omnis.
            </p>
            <a href="#" className="btn">
              {' '}
              learn more
            </a>
          </div>

          <div className="box">
            <i className="fas fa-heartbeat" />
            <h3>total care</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
              omnis.
            </p>
            <a href="#" className="btn">
              {' '}
              learn more
            </a>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <h1
          className="heading"
          style={{ marginTop: '7rem', marginBottom: '0rem' }}
        >
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src={aboutImg} alt="" />
          </div>

          <div className="content">
            <h3>
              we take care of your
              <br /> healthy life
            </h3>
            <p>
              Treating patients as our family members, we save lives and reduce
              suffering by offering compassionate tertiary healthcare.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              vero ipsam laborum porro voluptates voluptatibus a nihil
              temporibus deserunt vel?
            </p>
            <a href="#" className="btn">
              {' '}
              learn more
            </a>
          </div>
        </div>
      </section>

      <section className="doctors" id="doctors">
        <h1 className="heading">
          {' '}
          our <span>doctors</span>{' '}
        </h1>

        <div className="box-container">
          <div className="box">
            <img src={doc1} alt="" />
            <h3>john deo</h3>
            <span>expert doctor</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-instagram" />
              <a href="#" className="fab fa-linkedin" />
            </div>
          </div>

          <div className="box">
            <img src={doc2} alt="" />
            <h3>john deo</h3>
            <span>expert doctor</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-instagram" />
              <a href="#" className="fab fa-linkedin" />
            </div>
          </div>

          <div className="box">
            <img src={doc3} alt="" />
            <h3>john deo</h3>
            <span>expert doctor</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-instagram" />
              <a href="#" className="fab fa-linkedin" />
            </div>
          </div>

          <div className="box">
            <img src={doc4} alt="" />
            <h3>john deo</h3>
            <span>expert doctor</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-instagram" />
              <a href="#" className="fab fa-linkedin" />
            </div>
          </div>

          <div className="box">
            <img src={doc5} alt="" />
            <h3>john deo</h3>
            <span>expert doctor</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-instagram" />
              <a href="#" className="fab fa-linkedin" />
            </div>
          </div>

          <div className="box">
            <img src={doc6} alt="" />
            <h3>john deo</h3>
            <span>expert doctor</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-instagram" />
              <a href="#" className="fab fa-linkedin" />
            </div>
          </div>
        </div>
      </section>

      <section className="book" id="book">
        <h1 className="heading" style={{ marginTop: '30px' }}>
          <span>Contact</span> Us{' '}
        </h1>

        <div className="row">
          <div className="image">
            <img src={bookImg} alt="" />
          </div>

          <form action="" id="contactForm" ref={form} onSubmit={sendEmail}>
            <h3 style={{ marginBottom: '10px' }}>Contact Form</h3>
            <input
              type="text"
              placeholder="Your name"
              className="box"
              name="to_name"
              required
            />
            <input
              type="mobile"
              placeholder="Your number"
              className="box"
              required
            />
            <input
              type="email"
              placeholder="Your email"
              className="box"
              name="reply_to"
              required
            />
            <textarea
              className="box"
              placeholder="Your review"
              rows={3}
              required
            />
            <button style={{ margin: '20px' }} className="btn">
              Send Email
            </button>
          </form>
        </div>
      </section>

      <section className="review" id="review">
        <h1 className="heading">
          {' '}
          client's <span>review</span>{' '}
        </h1>

        <div className="box-container">
          <div className="box">
            <img src={pic1} alt="" />
            <h3>john deo</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam sapiente nihil aperiam? Repellat sequi nisi aliquid
              perspiciatis libero nobis rem numquam nesciunt alias sapiente
              minus voluptatem, reiciendis consequuntur optio dolorem!
            </p>
          </div>

          <div className="box">
            <img src={pic2} alt="" />
            <h3>john deo</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam sapiente nihil aperiam? Repellat sequi nisi aliquid
              perspiciatis libero nobis rem numquam nesciunt alias sapiente
              minus voluptatem, reiciendis consequuntur optio dolorem!
            </p>
          </div>

          <div className="box">
            <img src={pic3} alt="" />
            <h3>john deo</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam sapiente nihil aperiam? Repellat sequi nisi aliquid
              perspiciatis libero nobis rem numquam nesciunt alias sapiente
              minus voluptatem, reiciendis consequuntur optio dolorem!
            </p>
          </div>
        </div>
      </section>

      <section className="blogs" id="blogs">
        <h1 className="heading" style={{ margin: '6rem 0rem', height: '10vh' }}>
          our <span>blogs</span>
        </h1>

        <div className="box-container" style={{ marginBottom: '5rem' }}>
          <div className="box">
            <div className="image">
              <img src={blog1} alt="" />
            </div>
            <div className="content">
              <div className="icon">
                <a href="#">
                  {' '}
                  <i className="fas fa-calendar" /> 1st may, 2021{' '}
                </a>
                <a href="#">
                  {' '}
                  <i className="fas fa-user" /> by admin{' '}
                </a>
              </div>
              <h3>blog title goes here</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident, eius.
              </p>
              <a href="#" className="btn">
                {' '}
                learn more
              </a>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={blog2} alt="" />
            </div>
            <div className="content">
              <div className="icon">
                <a href="#">
                  {' '}
                  <i className="fas fa-calendar" /> 1st may, 2021{' '}
                </a>
                <a href="#">
                  {' '}
                  <i className="fas fa-user" /> by admin{' '}
                </a>
              </div>
              <h3>blog title goes here</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident, eius.
              </p>
              <a href="#" className="btn">
                {' '}
                learn more
              </a>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={blog3} alt="" />
            </div>
            <div className="content">
              <div className="icon">
                <a href="#">
                  {' '}
                  <i className="fas fa-calendar" /> 1st may, 2021{' '}
                </a>
                <a href="#">
                  {' '}
                  <i className="fas fa-user" /> by admin{' '}
                </a>
              </div>
              <h3>blog title goes here</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident, eius.
              </p>
              <a href="#" className="btn">
                {' '}
                learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>quick links</h3>
            <a href="#">
              {' '}
              <i className="fas fa-chevron-right" /> home{' '}
            </a>
            <a href="#">
              {' '}
              <i className="fas fa-chevron-right" /> services{' '}
            </a>
            <a href="#">
              {' '}
              <i className="fas fa-chevron-right" /> about{' '}
            </a>
            <a href="#">
              {' '}
              <i className="fas fa-chevron-right" /> doctors{' '}
            </a>
            <a href="#">
              {' '}
              <i className="fas fa-chevron-right" /> book{' '}
            </a>
            <a href="#">
              {' '}
              <i className="fas fa-chevron-right" /> review{' '}
            </a>
            <a href="#">
              {' '}
              <i className="fas fa-chevron-right" /> blogs{' '}
            </a>
          </div>

          <div className="box">
            <h3>our services</h3>
            <a href="#">
              {' '}
              <i className="fas fa-chevron-right" /> dental care{' '}
            </a>
            <a href="#">
              {' '}
              <i className="fas fa-chevron-right" /> message therapy{' '}
            </a>
            <a href="#">
              {' '}
              <i className="fas fa-chevron-right" /> cardioloty{' '}
            </a>
            <a href="#">
              {' '}
              <i className="fas fa-chevron-right" /> diagnosis{' '}
            </a>
            <a href="#">
              {' '}
              <i className="fas fa-chevron-right" /> ambulance service{' '}
            </a>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <a href="#">
              {' '}
              <i className="fas fa-phone" /> +123-456-7890{' '}
            </a>
            <a href="#">
              {' '}
              <i className="fas fa-phone" /> +111-222-3333{' '}
            </a>
            <a href="#">
              {' '}
              <i className="fas fa-envelope" /> shaikhanas@gmail.com{' '}
            </a>
            <a href="#">
              {' '}
              <i className="fas fa-envelope" /> anasbhai@gmail.com{' '}
            </a>
            <a href="#">
              {' '}
              <i className="fas fa-map-marker-alt" /> mumbai, india - 400104{' '}
            </a>
          </div>

          <div className="box">
            <h3>follow us</h3>
            <a href="#">
              {' '}
              <i className="fab fa-facebook-f" /> facebook{' '}
            </a>
            <a href="#">
              {' '}
              <i className="fab fa-twitter" /> twitter{' '}
            </a>
            <a href="#">
              {' '}
              <i className="fab fa-twitter" /> twitter{' '}
            </a>
            <a href="#">
              {' '}
              <i className="fab fa-instagram" /> instagram{' '}
            </a>
            <a href="#">
              {' '}
              <i className="fab fa-linkedin" /> linkedin{' '}
            </a>
            <a href="#">
              {' '}
              <i className="fab fa-pinterest" /> pinterest{' '}
            </a>
          </div>
        </div>

        <div className="credit" style={{ marginBottom: '-4rem' }}>
          created by <span>mr. srivarshan</span> | all rights reserved{' '}
        </div>
      </section>
    </div>
  );
};

export default Home;
