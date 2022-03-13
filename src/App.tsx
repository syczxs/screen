import { useState } from 'react'

import Headers from './components/header'
import Tab from './components/tabs'
import TabMenu from './components/tabMenu.vue'

import Basic from './views/right/basic/index'
import Neighborhood from './views/right/neighborhood'
import Education from './views/right/education'
import Support from './views/right/support'

import "./App.css"


function App() {

  return (
    <div className="container">
      <Headers />
      <main>
        <TabMenu />

        <div className="content-box">

          <Tab selected={'第一页'}>
            <div className="right-content">
              <Basic />
              <Neighborhood />
              <Education />
              <Support />
            </div>
          </Tab>
        </div>
      </main>


    </div>
  )
}

export default App
