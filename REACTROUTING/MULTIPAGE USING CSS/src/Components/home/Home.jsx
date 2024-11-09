import React from 'react'
import "./home.css"
import "../../../public/images/1705817812558~2 (1).jpg"
import "../../../public/images/Purple Yellow Playful Boys' Clothing Etsy Banner .png"



const Home = () => {
  return (
    <div className="home-page">
      <header className="hero-section">
        <div className="hero-text">
          <br /><br /><br />
          <br /><br /><br />
          <br /><br />
          <br />
          <br />
          <br />
          
          <a href="/contact" className="btn-contact">Contact Us</a>
        </div>
      </header>
      <div id="topproducts">

        <h2 id='topproducts'>Our TOP PRODUCTS</h2>
      </div>
      <section className="cards-section">
        
        <div class="card-container">
          <div class="card">
            <img src="../../../public/images/boys/IMG-20241109-WA0003.jpg" alt="Clothing item" class="card-image" />
            <div class="card-content">
              <h2 class="card-title">Clothing Item 1</h2>
              <p class="card-price">$5.00</p>
              <button class="card-button">Buy Now</button>
            </div>
          </div>
          <div class="card">
            <img src="../../../public/images/boys/IMG-20241109-WA0004.jpg" alt="Clothing item" class="card-image" />
            <div class="card-content">
              <h2 class="card-title">Clothing Item 2</h2>
              <p class="card-price">$5.00</p>
              <button class="card-button">Buy Now</button>
            </div>
          </div>
          <div class="card">
            <img src="../../../public/images/boys/IMG-20241109-WA0005.jpg" alt="Clothing item" class="card-image" />
            <div class="card-content">
              <h2 class="card-title">Clothing Item 3</h2>
              <p class="card-price">$5.00</p>
              <button class="card-button">Buy Now</button>
            </div>
          </div>
          <div class="card">
            <img src="../../../public/images/boys/IMG-20241109-WA0006.jpg" alt="Clothing item" class="card-image" />
            <div class="card-content">
              <h2 class="card-title">Clothing Item 4</h2>
              <p class="card-price">$5.00</p>
              <button class="card-button">Buy Now</button>
            </div>
          </div>

        
          <div class="card">
            <img src="../../../public/images/boys/IMG-20241109-WA0007.jpg" alt="Clothing item" class="card-image" />
            <div class="card-content">
              <h2 class="card-title">Clothing Item 5</h2>
              <p class="card-price">$5.00</p>
              <button class="card-button">Buy Now</button>
            </div>
          </div>
          <div class="card">
            <img src="../../../public/images/boys/IMG-20241109-WA0008.jpg" alt="Clothing item" class="card-image" />
            <div class="card-content">
              <h2 class="card-title">Clothing Item 6</h2>
              <p class="card-price">$5.00</p>
              <button class="card-button">Buy Now</button>
            </div>
          </div>
          <div class="card">
            <img src="../../../public/images/boys/IMG-20241109-WA0009.jpg" alt="Clothing item" class="card-image" />
            <div class="card-content">
              <h2 class="card-title">Clothing Item 7</h2>
              <p class="card-price">$5.00</p>
              <button class="card-button">Buy Now</button>
            </div>
          </div>
          <div class="card">
            <img src="../../../public/images/boys/IMG-20241109-WA0010.jpg" alt="Clothing item" class="card-image" />
            <div class="card-content">
              <h2 class="card-title">Clothing Item 8</h2>
              <p class="card-price">$5.00</p>
              <button class="card-button">Buy Now</button>
            </div>
          </div>
          <div class="card">
            <img src="../../../public/images/boys/IMG-20241109-WA0011.jpg" alt="Clothing item" class="card-image" />
            <div class="card-content">
              <h2 class="card-title">Clothing Item 9</h2>
              <p class="card-price">$5.00</p>
              <button class="card-button">Buy Now</button>
            </div>
          </div>
          <div class="card">
            <img src="../../../public/images/boys/IMG-20241109-WA0012.jpg" alt="Clothing item" class="card-image" />
            <div class="card-content">
              <h2 class="card-title">Clothing Item 10</h2>
              <p class="card-price">$5.00</p>
              <button class="card-button">Buy Now</button>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Home;