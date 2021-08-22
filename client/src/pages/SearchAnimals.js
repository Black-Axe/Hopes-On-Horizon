import React from 'react'
import Banner from '../components/BannerSearch'
import Search from '../components/Search'

import './animals.scss';
export default function SearchAnimals() {
    return (
        <>
        <Banner />
        <div className="side-bar">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/animals">Animals</a>
                </li>
                <li>
                    <a href="/search">Search</a>
                </li>
            </ul>
        </div>
        
<section class="cards-wrapper">
  <div class="cardAnimal-grid-space">
    <div class="num">01</div>
    <a class="cardAnimal cardAnimal-image" href="/">
      <div>
        <h1>HTML Syntax</h1>
        <p>The syntax of a language is how it works. How to actually write it. Learn HTML syntax…</p>
        <div class="date">6 Oct 2017</div>
        <div class="tags">
          <div class="tag">HTML</div>
        </div>
      </div>
    </a>
  </div>
  <div class="cardAnimal-grid-space">
    <div class="num">01</div>s
    <a class="cardAnimal" href="https://codetheweb.blog/2017/10/06/html-syntax/">
      <div>
        <h1>HTML Syntax</h1>
        <p>The syntax of a language is how it works. How to actually write it. Learn HTML syntax…</p>
        <div class="date">6 Oct 2017</div>
        <div class="tags">
          <div class="tag">HTML</div>
        </div>
      </div>
    </a>
  </div>
  <div class="cardAnimal-grid-space">
    <div class="num">02</div>
    <a class="cardAnimal" href="https://codetheweb.blog/2017/10/09/basic-types-of-html-tags/">
      <div>
        <h1>Basic types of HTML tags</h1>
        <p>Learn about some of the most common HTML tags…</p>
        <div class="date">9 Oct 2017</div>
        <div class="tags">
          <div class="tag">HTML</div>
        </div>
      </div>
    </a>
  </div>
  <div class="cardAnimal-grid-space">
    <div class="num">03</div>
    <a class="cardAnimal" href="https://codetheweb.blog/2017/10/14/links-images-about-file-paths/">
      <div>
        <h1>Links, images and about file paths</h1>
        <p>Learn how to use links and images along with file paths…</p>
        <div class="date">14 Oct 2017</div>
        <div class="tags">
          <div class="tag">HTML</div>
        </div>
      </div>
    </a>
  </div>
 </section>

        </>
    )
}
