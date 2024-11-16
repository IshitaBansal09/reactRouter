// as header and footer same hai, bs uske ander ke components change ho rhe hai jaise ki Home, contact us etc.
// toh ek tareeka toh ye hai ki header hr component mein call krao, home mein bhi, contact us mein bhii 
// but thats not an optimised approach
// toh iska ek or tareeka hai => src mein jakr ek new file bnao, Layout.jsx (not compulsory, this can be done in App.jsx also) 
// and we'll use "Outlet" so that we can dynamically pass remaining things except Header and Footer
// Outlet will use this layout as a base and and jhan mein we'll write outlet, vhan pr hm cheezo ko change kr skte hai

import React from 'react' 
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return(
        <div>
            <Header />
            <Outlet />
            <Footer />  
        </div>
    )
}

export default Layout