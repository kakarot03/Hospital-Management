import React from 'react';
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

const Home = () => {
  return (
    <div className="Home">
      <section className="home" id="home">
        <div className="image">
          <img src={homeImg} alt="" />
        </div>

        <div className="content">
          <h3>stay safe, stay healthy</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed
            autem vero? Magnam, est laboriosam!
          </p>
          <a href="#" className="btn">
            {' '}
            contact us <span className="fas fa-chevron-right" />
          </a>
        </div>
      </section>

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
              learn more <span className="fas fa-chevron-right" />{' '}
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
              learn more <span className="fas fa-chevron-right" />{' '}
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
              learn more <span className="fas fa-chevron-right" />{' '}
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
              learn more <span className="fas fa-chevron-right" />{' '}
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
              learn more <span className="fas fa-chevron-right" />{' '}
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
              learn more <span className="fas fa-chevron-right" />{' '}
            </a>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <h1 className="heading">
          {' '}
          <span>about</span> us{' '}
        </h1>

        <div className="row">
          <div className="image">
            <img src={aboutImg} alt="" />
          </div>

          <div className="content">
            <h3>we take care of your healthy life</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
              ducimus, quod ex cupiditate ullam in assumenda maiores et culpa
              odit tempora ipsam qui, quisquam quis facere iste fuga, minus
              nesciunt.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              vero ipsam laborum porro voluptates voluptatibus a nihil
              temporibus deserunt vel?
            </p>
            <a href="#" className="btn">
              {' '}
              learn more <span className="fas fa-chevron-right" />{' '}
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
        <h1 className="heading">
          {' '}
          <span>book</span> now{' '}
        </h1>

        <div className="row">
          <div className="image">
            <img src={bookImg} alt="" />
          </div>

          <form action="">
            <h3>book appointment</h3>
            <input type="text" placeholder="your name" className="box" />
            <input type="number" placeholder="your number" className="box" />
            <input type="email" placeholder="your email" className="box" />
            <input type="date" className="box" />
            <input type="submit" value="book now" className="btn" />
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
        <h1 className="heading">
          {' '}
          our <span>blogs</span>{' '}
        </h1>

        <div className="box-container">
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
                learn more <span className="fas fa-chevron-right" />{' '}
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
                learn more <span className="fas fa-chevron-right" />{' '}
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
                learn more <span className="fas fa-chevron-right" />{' '}
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

        <div className="credit">
          {' '}
          created by <span>mr. web designer</span> | all rights reserved{' '}
        </div>
      </section>
    </div>
  );
};

export default Home;
