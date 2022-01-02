import React from "react"
import { Link } from "gatsby"
import Banner from "../components/banner"
import Layout from "../components/layout"
/*import Image from "../components/image"*/
/*import SEO from "../components/seo"*/
import Segment from "../components/segment"


const sss = {
  color: 'blue'
}

const IndexPage = () => (

  <Layout>
    {/*--<SEO title="Tastes of the Illinois Valley" />--*/}

    <style>
      {/* @import url('https://fonts.googleapis.com/css2?family=Orelega+One&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap'); */}
    </style>

    
      <ul id="taskbar">
        <li>Email me</li>
        <li>618-402-8929</li>
        <li>Resume</li>
      </ul>
   

    {/*main banner */}
    <Banner id="banner"
      bannerText="Braxton Hancock"
      description="A fresh computer science graduate looking to develop something"
      url="../images/festival.jpeg"
    />





    <main>
      <div id="mainGrid">
        <div class="segment">
          <Segment
            title="about"
            description="
    Lorem ipsum dolor sit amet,
    consectetur adipiscing elit,
    sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua.
    Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </div>

        <div class="segment">
          <Segment
            title="Schedule"
            description="
    Lorem ipsum dolor sit amet,
    consectetur adipiscing elit,
    sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua.
    Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </div>



        <div class="segment">
          <Segment
            title="Kids Activities"
            description="
  Lorem ipsum dolor sit amet,
  consectetur adipiscing elit,
  sed do eiusmod tempor incididunt 
  ut labore et dolore magna aliqua.
  Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, 
  sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </div>



        <div class="segment">
          <Segment
            title="Vendors"
            description="
  Lorem ipsum dolor sit amet,
    consectetur adipiscing elit,
    sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua.
    Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </div>



      </div>
    </main>
    <footer>

      <ul>
        <li>
          <a target="_blank" href="https://www.peru.il.us/departments/parks-recreation-special-events">
            {/*link name below*/}
            <h3>Peru Parks & Rec</h3>
          </a>
        </li>


        <li>
          <a target="_blank" href="https://www.peru.il.us/departments/parks-recreation-special-events">
            {/*link name below*/}
            <h3>Sponsors</h3>
          </a>
        </li>

        <li>
          <h3>815-223-0061</h3>
        </li>

        <a class="btnOut" target="_blank" href="mailto:athorson@peru.il.us">
          {/*link name below*/}
          <h3>Contact</h3>


        </a>
      </ul>

    </footer>


  </Layout>
)

export default IndexPage