import React from 'react'


function Contact(){
    return(
    	<div>
	    	<div class="tc">
		    	<article class="dib mw5 center bg-white br3 pa3 pa4-ns mv3 b--black-10" style={{marginLeft:"1em", marginRight:"1em"}}>
				  <div class="tc">
				    <img src="http://tachyons.io/img/avatar_1.jpg" class="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you"/>
				    <h1 class="f5 mb2" style={{marginBottom:"1.5em"}}>FAQs</h1>
				    <a href="#0" class="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box">
				    	<span class="pl1">See Answers</span>
				  	</a>
				  </div>
				</article>
		    	<article class="dib mw5 center bg-white br3 pa3 pa4-ns mv3 b--black-10" style={{marginLeft:"1em", marginRight:"1em"}}>
				  <div class="tc">
				    <img src="http://tachyons.io/img/avatar_1.jpg" class="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you"/>
				    <h1 class="f5 mb2" style={{marginBottom:"1.5em"}}>Shipping And Return</h1>
				    <a href="#0" class="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box">
				    	<span class="pl1">Learn More</span>
				  	</a>
				  </div>
				</article>
		    	<article class="dib mw5 center bg-white br3 pa3 pa4-ns mv3 b--black-10" style={{marginLeft:"1em", marginRight:"1em"}}>
				  <div class="tc">
				    <img src="http://tachyons.io/img/avatar_1.jpg" class="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you"/>
				    <h1 class="f5 mb2" style={{marginBottom:"1.5em"}}>Corporate Quote</h1>
				    <a href="#0" class="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box" >
				    	<span class="pl1">Get A Quote</span>
				  	</a>
				  </div>
				</article>
			</div>
			<hr style={{marginLeft:"10em", marginRight:"10em"}} />

			<br />
			<div class="tc">
				<h1 class="f3 f2-m f1-l fw2 black-90 mv3" style={{marginBottom:"1em"}}>
					Still Can't find what you're looking for?
				</h1>
				<a href="#0" class="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box">
				    <span class="pl1">Send A Mail</span>
				</a>
			</div>
			<br />
			<br />
			<br />
			<hr style={{marginLeft:"10em", marginRight:"10em"}} />

			<div class="tc">
				<article class="dib center mw5 mw6-ns hidden mv4 pl5 pr5" style={{verticalAlign:"text-top"}}>
				  <h1 class="f4 black mv0 pv2 ph3">Office</h1>
				  <div class="pa3 bt">
				    <p class="f6 f5-ns lh-copy measure mv0">
				    7601 Southwest Parkway
				    </p>
				    <p class="f6 f5-ns lh-copy measure mv0">
					Austin, TX 78735
				    </p>
				    <p class="f6 f5-ns lh-copy measure mv0">
				    Phone No: +91-1234567890
				    </p>
				  </div>
				</article>
				<article class="dib center mw5 mw6-ns hidden mv4 pl5 pr5" style={{verticalAlign:"text-top"}}>
				  <h1 class="f4 black mv0 pv2 ph3">Availability</h1>
				  <div class="pa3 bt">
				    <p class="f6 f5-ns lh-copy measure mv0">
				    Monday - Friday
				    </p>
				    <p class="f6 f5-ns lh-copy measure mv0">
				    10:00AM - 5:00PM
				    </p>
				    <br />
				  </div>
				</article>

			</div>

    		<div class="pa4-l">
			  <form class="mw7 center pa4 br2-ns ba b--black-10" style={{backgroundColor: "#4CAF50"}}>
			    <fieldset class="cf bn ma0 pa0">
			      <legend class="pa0 f4-ns mb3 black-80" style={{fontSize:"2rem", marginBottom:"0em"}}>Sign up for our newsletter</legend>
			      <p>Be the first to know about our new products and services</p>
			      <div class="cf">
			        <label class="clip" for="email-address">Email Address</label>
			        <input class="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" placeholder="Your Email Address" type="text" name="email-address" value="" id="email-address" />
			        <input class="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="submit" value="Subscribe" />
			      </div>
			    </fieldset>
			  </form>
			</div>

    	</div>
    );
}

export default Contact