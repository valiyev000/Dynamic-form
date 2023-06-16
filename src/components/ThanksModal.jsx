import React, { useState } from 'react'

export default function ThanksModal({scrollPos}) { // scrollPos pixel deyerdir. modalin acilmasi lazim olan yeri teyin edir
                                                  // scrollPos 4cu componentde oldugun zaman submit button'a click olunduqda assign edilir



    return (
    <div id='thanksModal' style={{top:`${scrollPos}px`}}>{/* Bu modalin lazim olan yerde acilmasi ucun css yazilir */}
        <div className="container">
            <div className="header">Submitted ;)</div>
            <div className="description">If you want to create a new quote, press the button.</div>
            <button onClick={()=>location.reload()}>New Quote</button>
        </div>
    </div>
  )
}