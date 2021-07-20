import React from 'react';
import reactDom from 'react-dom';
import $ from 'jquery';
//import '../style/js/moves';
import '../style/css/Board.css';

export default function Board() {
    return (
        <>
            <div  className="boardcont" style={{paddingTop:'20px'}}>
        <div><h2 id="lbMe">Dama Game</h2></div><br />
      
           
    <div className="game">
       
        <div className="board">
            <div id="timer1" className="timer"></div>

            <table id="table1" className="tb1">
                <tbody>
                <tr>
                    <td>
                        <div id="p1" className="pawn">1</div>
                    </td>
                    <td>
                        <div id="p2" className="pawn">2</div>
                    </td>
                    <td>
                        <div id="p3" className="pawn">3</div>
                    </td>
                    <td>
                        <div id="p4" className="pawn">4</div>
                    </td>
                    <td>
                        <div id="p5" className="pawn">5</div>
                    </td>
                    <td>
                        <div id="p6" className="pawn">6</div>
                    </td>
                    <td>
                        <div id="p7" className="pawn">7</div>
                    </td>
                    <td>
                        <div id="p8" className="pawn">8</div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div id="p9" className="pawn pawnib">9</div>
                    </td>
                    <td>
                        <div id="p10" className="pawn pawnib">10</div>
                    </td>
                    <td>
                        <div id="p11" className="pawn pawnib">11</div>
                    </td>
                    <td>
                        <div id="p12" className="pawn pawnib">12</div>
                    </td>
                    <td>
                        <div id="p13" className="pawn pawnib">13</div>
                    </td>
                    <td>
                        <div id="p14" className="pawn pawnib">14</div>
                    </td>
                    <td>
                        <div id="p15" className="pawn pawnib">15</div>
                    </td>
                    <td>
                        <div id="p16" className="pawn pawnib">16</div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div id="p17" className="pawn pawnib">17</div>
                    </td>
                    <td>
                        <div id="p18" className="pawn pawnib">18</div>
                    </td>
                    <td>
                        <div id="p19" className="pawn pawnib">19</div>
                    </td>
                    <td>
                        <div id="p20" className="pawn pawnib">20</div>
                    </td>
                    <td>
                        <div id="p21" className="pawn pawnib">21</div>
                    </td>
                    <td>
                        <div id="p22" className="pawn pawnib">22</div>
                    </td>
                    <td>
                        <div id="p23" className="pawn pawnib">23</div>
                    </td>
                    <td>
                        <div id="p24" className="pawn pawnib">24</div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div id="p25" className="pawn">25</div>
                    </td>
                    <td>
                        <div id="p26" className="pawn">26</div>
                    </td>
                    <td>
                        <div id="p27" className="pawn">27</div>
                    </td>
                    <td>
                        <div id="p28" className="pawn">28</div>
                    </td>
                    <td>
                        <div id="p29" className="pawn">29</div>
                    </td>
                    <td>
                        <div id="p30" className="pawn">30</div>
                    </td>
                    <td>
                        <div id="p31" className="pawn">31</div>
                    </td>
                    <td>
                        <div id="p32" className="pawn">32</div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div id="p33" className="pawn">33</div>
                    </td>
                    <td>
                        <div id="p34" className="pawn">34</div>
                    </td>
                    <td>
                        <div id="p35" className="pawn">35</div>
                    </td>
                    <td>
                        <div id="p36" className="pawn">36</div>
                    </td>
                    <td>
                        <div id="p37" className="pawn">37</div>
                    </td>
                    <td>
                        <div id="p38" className="pawn">38</div>
                    </td>
                    <td>
                        <div id="p39" className="pawn">39</div>
                    </td>
                    <td>
                        <div id="p40" className="pawn">40</div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div id="p41" className="pawn pawniy">41</div>
                    </td>
                    <td>
                        <div id="p42" className="pawn pawniy">42</div>
                    </td>
                    <td>
                        <div id="p43" className="pawn pawniy">43</div>
                    </td>
                    <td>
                        <div id="p44" className="pawn pawniy">44</div>
                    </td>
                    <td>
                        <div id="p45" className="pawn pawniy">45</div>
                    </td>
                    <td>
                        <div id="p46" className="pawn pawniy">46</div>
                    </td>
                    <td>
                        <div id="p47" className="pawn pawniy">47</div>
                    </td>
                    <td>
                        <div id="p48" className="pawn pawniy">48</div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div id="p49" className="pawn pawniy">49</div>
                    </td>
                    <td>
                        <div id="p50" className="pawn pawniy">50</div>
                    </td>
                    <td>
                        <div id="p51" className="pawn pawniy">51</div>
                    </td>
                    <td>
                        <div id="p52" className="pawn pawniy">52</div>
                    </td>
                    <td>
                        <div id="p53" className="pawn pawniy">53</div>
                    </td>
                    <td>
                        <div id="p54" className="pawn pawniy">54</div>
                    </td>
                    <td>
                        <div id="p55" className="pawn pawniy">55</div>
                    </td>
                    <td>
                        <div id="p56" className="pawn pawniy">56</div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div id="p57" className="pawn">57</div>
                    </td>
                    <td>
                        <div id="p58" className="pawn">58</div>
                    </td>
                    <td>
                        <div id="p59" className="pawn">59</div>
                    </td>
                    <td>
                        <div id="p60" className="pawn">60</div>
                    </td>
                    <td>
                        <div id="p61" className="pawn">61</div>
                    </td>
                    <td>
                        <div id="p62" className="pawn">62</div>
                    </td>
                    <td>
                        <div id="p63" className="pawn">63</div>
                    </td>
                    <td>
                        <div id="p64" className="pawn">64</div>
                    </td>
                </tr>
                </tbody>
            </table>

        </div>

    </div>

         
    </div>
  
    
        </>
    )
}
