import React from 'react';
import reactDom from 'react-dom';
import $ from 'jquery';

import '../style/css/site.css'
import './Board.js'
import banner from '../images/banner.png'
import footer from '../images/bg-buttom.png'


export default function Home() {
    return (
        <>
            

<div id="banner" className="banner_holder">

    <img src={banner} />
</div>


    <div id="bg2" className="nopadding"  style={{height:'100%'}}>

        <div id="startpg" className="startpage " style={{height:'100%'}}>
            <a href="#">PLAY ONLINE</a>
            {/*<div className="info">Please Login to Save and View Your Performance</div>*/}
            <a id="infobtn" href="#">INFO</a>
            <a href="./Board">PLAY WITH DEVICE</a>
            <a href="#">TWO PLAYERS</a>
            <a href="#">SETTINGS</a>
        </div>
        <div id="infopg" className="infopage hidepage " style={{height:'100%'}}>
            <a href="#">ABOUT US</a>
            <a href="#">SUMMARY</a>
            <a href="/Home/Board">HELP</a>
            <a href="#">CONTACT US</a>
            <a id="backbtn" className="back" href="#">BACK</a>
        </div>

    </div>

    <div id="footer" className="banner_footer">
        <img src={footer} /> 
        
    </div>
        
    <script src= {process.env.PUBLIC_URL +'/wwwroot/lib/jquery/dist/jquery.js?newversion'}></script>

       </>
    )
}
