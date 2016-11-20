[1mdiff --git a/css/style.css b/css/style.css[m
[1mindex 7c60f16..bc44ea8 100644[m
[1m--- a/css/style.css[m
[1m+++ b/css/style.css[m
[36m@@ -556,21 +556,21 @@[m [mbody, html {[m
 @font-face {[m
   font-family: 'Montserrat';[m
   src: url("../fonts/montserrat-light-webfont.woff2") format("woff2"), url("../fonts/montserrat-light-webfont.woff") format("woff");[m
[31m-  font-weight: normal;[m
[32m+[m[32m  font-weight: 300;[m
   font-style: normal;[m
 }[m
 [m
 @font-face {[m
   font-family: 'Montserrat';[m
   src: url("../fonts/montserrat-semibold-webfont.woff2") format("woff2"), url("../fonts/montserrat-semibold-webfont.woff") format("woff");[m
[31m-  font-weight: normal;[m
[32m+[m[32m  font-weight: 600;[m
   font-style: normal;[m
 }[m
 [m
 @font-face {[m
   font-family: 'Montserrat';[m
   src: url("../fonts/montserrat-ultralight-webfont.woff2") format("woff2"), url("../fonts/montserrat-ultralight-webfont.woff") format("woff");[m
[31m-  font-weight: normal;[m
[32m+[m[32m  font-weight: 200;[m
   font-style: normal;[m
 }[m
 [m
[36m@@ -646,6 +646,13 @@[m [mselect {[m
   transition: color .3s ease-in, border-color .3s ease-in, background-color .3s ease-in, opacity .3s ease-in;[m
 }[m
 [m
[32m+[m[32mselect {[m
[32m+[m[32m  background: #FFF url(../img/arrow.svg) 90% 50% no-repeat;[m
[32m+[m[32m  -moz-appearance: none;[m
[32m+[m[32m  -webkit-appearance: textfield;[m
[32m+[m[32m          appearance: textfield;[m
[32m+[m[32m}[m
[32m+[m
 input[type="text"]:focus,[m
 input[type="email"]:focus,[m
 input[type="password"]:focus,[m
[36m@@ -656,8 +663,28 @@[m [mselect:focus {[m
   border-color: #69F0AE;[m
 }[m
 [m
[32m+[m[32mtextarea {[m
[32m+[m[32m  line-height: 1.3;[m
[32m+[m[32m  min-height: 100px;[m
[32m+[m[32m  padding-top: 15px;[m
[32m+[m[32m  resize: vertical;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mmain {[m
[32m+[m[32m  display: -webkit-flex;[m
[32m+[m[32m  display: -ms-flexbox;[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  min-height: 100vh;[m
[32m+[m[32m  -webkit-flex-direction: column;[m
[32m+[m[32m      -ms-flex-direction: column;[m
[32m+[m[32m          flex-direction: column;[m
[32m+[m[32m}[m
[32m+[m
 .ba-indipixel {[m
   padding-top: 22px;[m
[32m+[m[32m  -webkit-flex: 1;[m
[32m+[m[32m      -ms-flex: 1;[m
[32m+[m[32m          flex: 1;[m
 }[m
 [m
 .ba-header {[m
[36m@@ -762,6 +789,7 @@[m [mselect:focus {[m
   line-height: 1.2;[m
   text-transform: uppercase;[m
   margin: 0;[m
[32m+[m[32m  font-weight: 400;[m
 }[m
 [m
 .ba-design p {[m
[36m@@ -827,21 +855,13 @@[m [mselect:focus {[m
   line-height: 45px;[m
   border-radius: 8px;[m
   padding: 0 32px;[m
[31m-  margin-top: 14px;[m
[32m+[m[32m  margin-top: 10px;[m
 }[m
 [m
 .ba-form button:hover {[m
   background: #04E4A2;[m
 }[m
 [m
[31m-.ba-form select {[m
[31m-  -webkit-appearance: textfield;[m
[31m-     -moz-appearance: textfield;[m
[31m-          appearance: textfield;[m
[31m-  background: #FFF url(../img/arrow.svg) 90% 50% no-repeat;[m
[31m-  -moz-appearance: none;[m
[31m-}[m
[31m-[m
 .ba-footer {[m
   background: #FEFCF2;[m
   padding: 21px 0 29px;[m
[36m@@ -855,6 +875,9 @@[m [mselect:focus {[m
 .ba-footer a {[m
   color: #626262;[m
   display: inline-block;[m
[32m+[m[32m  -webkit-flex-direction: row;[m
[32m+[m[32m      -ms-flex-direction: row;[m
[32m+[m[32m          flex-direction: row;[m
 }[m
 [m
 .ba-footer a svg {[m
[1mdiff --git a/css/style.css.map b/css/style.css.map[m
[1mindex f6830db..b128d9c 100644[m
[1m--- a/css/style.css.map[m
[1m+++ b/css/style.css.map[m
[36m@@ -1 +1 @@[m
[31m-{"version":3,"sources":["../scss/normalize.scss","../scss/style.scss","../scss/layout.scss"],"names":[],"mappings":"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","file":"style.css"}[m
\ No newline at end of file[m
[32m+[m[32m{"version":3,"sources":["../scss/normalize.scss","../scss/style.scss","../scss/layout.scss"],"names":[],"mappings":"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","file":"style.css"}[m
\ No newline at end of file[m
[1mdiff --git a/index.html b/index.html[m
[1mindex 1b834da..945951b 100644[m
[1m--- a/index.html[m
[1m+++ b/index.html[m
[36m@@ -13,62 +13,68 @@[m
 	<!--[if lt IE 9]>[m
 		<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>[m
 		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>[m
[31m-	<![endif]-->[m
[32m+[m		[32m<![endif]-->[m
 </head>[m
[31m-<body>[m
[31m-	<main>[m
[31m-		<div class="ba-indipixel">[m
[31m-			<div class="ba-header">[m
[31m-				<div class="ba-container cf">[m
[31m-					<a class="ba-logo" href="#"><img src="img/indipixel.svg" alt="Indipixel"></a>[m
[31m-					<a class="ba-nav" href="#">CONTACT US</a>[m
[31m-				</div>[m
[31m-			</div>[m
[31m-			<section class="ba-design">[m
[31m-				<div class="ba-container cf">[m
[31m-					<div class="col-1">[m
[31m-						<div class="ba-phone">[m
[31m-							<img class="img-phone" src="img/phone.svg" alt="phone">[m
[31m-							<img class="img-photo" src="img/photo.jpg" alt="photo">[m
[31m-						</div>[m
[31m-					</div>[m
[31m-					<div class="col-2">[m
[31m-						<h2 class="ba-title">We design and build<br>beautiful web & mobile apps</h2>[m
[31m-						<p>You can design and create, and build the most wonderful place in the world. But it takes people to make the dream a reality. - Walt Disney[m
[31m-						</p>[m
[31m-						<a class="ba-button" href="#">Know more</a>[m
[32m+[m	[32m<body>[m
[32m+[m		[32m<main>[m
[32m+[m			[32m<div class="ba-indipixel">[m
[32m+[m
[32m+[m				[32m<div class="ba-header">[m
[32m+[m					[32m<div class="ba-container cf">[m
[32m+[m						[32m<a class="ba-logo" href="#"><img src="img/indipixel.svg" alt="Indipixel"></a>[m
[32m+[m						[32m<a class="ba-nav" href="#">CONTACT US</a>[m
 					</div>[m
 				</div>[m
[31m-			</section>[m
[31m-			<section class="ba-form">[m
[31m-				<div class="ba-container cf">[m
[31m-					<form action="#" class="col-2" method="post">[m
[31m-						<p>Lets Talk</p>[m
[31m-						<div class="ba-row">[m
[31m-							<div class="ba-width-1-2">[m
[31m-								<input type="text" name="first-name" placeholder="First Name">[m
[31m-							</div>[m
[31m-							<div class="ba-width-1-2">[m
[31m-								<input type="text" name="last-name" placeholder="Last Name">[m
[32m+[m
[32m+[m				[32m<section class="ba-design">[m
[32m+[m					[32m<div class="ba-container cf">[m
[32m+[m						[32m<div class="col-1">[m
[32m+[m							[32m<div class="ba-phone">[m
[32m+[m								[32m<img class="img-phone" src="img/phone.svg" alt="phone">[m
[32m+[m								[32m<img class="img-photo" src="img/photo.jpg" alt="photo">[m
 							</div>[m
 						</div>[m
[31m-						<div class="ba-row">[m
[31m-							<div class="ba-width-1-2">[m
[31m-								<input type="email" name="email" placeholder="Email Address" required>[m
[32m+[m						[32m<div class="col-2">[m
[32m+[m							[32m<h2 class="ba-title">We design and build<br>beautiful web & mobile apps</h2>[m
[32m+[m							[32m<p>You can design and create, and build the most wonderful place in the world. But it takes people to make the dream a reality. - Walt Disney[m
[32m+[m							[32m</p>[m
[32m+[m							[32m<a class="ba-button" href="#">Know more</a>[m
[32m+[m						[32m</div>[m
[32m+[m					[32m</div>[m
[32m+[m				[32m</section>[m
[32m+[m
[32m+[m				[32m<section class="ba-form">[m
[32m+[m					[32m<div class="ba-container cf">[m
[32m+[m						[32m<form action="#" class="col-2" method="post">[m
[32m+[m							[32m<p>Lets Talk</p>[m
[32m+[m							[32m<div class="ba-row">[m
[32m+[m								[32m<div class="ba-width-1-2">[m
[32m+[m									[32m<input type="text" name="first-name" placeholder="First Name">[m
[32m+[m								[32m</div>[m
[32m+[m								[32m<div class="ba-width-1-2">[m
[32m+[m									[32m<input type="text" name="last-name" placeholder="Last Name">[m
[32m+[m								[32m</div>[m
 							</div>[m
[31m-							<div class="ba-width-1-2">[m
[31m-								<select>[m
[31m-									<option>App Design</option>[m
[31m-									<option>-</option>[m
[31m-									<option>-</option>[m
[31m-								</select>[m
[32m+[m							[32m<div class="ba-row">[m
[32m+[m								[32m<div class="ba-width-1-2">[m
[32m+[m									[32m<input type="email" name="email" placeholder="Email Address" required>[m
[32m+[m								[32m</div>[m
[32m+[m								[32m<div class="ba-width-1-2">[m
[32m+[m									[32m<select>[m
[32m+[m										[32m<option>App Design</option>[m
[32m+[m										[32m<option>-</option>[m
[32m+[m										[32m<option>-</option>[m
[32m+[m									[32m</select>[m
[32m+[m								[32m</div>[m
 							</div>[m
[31m-						</div>[m
[31m-						<textarea name="query" required placeholder="Type your query here"></textarea>[m
[31m-						<button type="submit">Send</button>[m
[31m-					</form>[m
[31m-				</div>[m
[31m-			</section>[m
[32m+[m							[32m<textarea name="query" required placeholder="Type your query here"></textarea>[m
[32m+[m							[32m<button type="submit">Send</button>[m
[32m+[m						[32m</form>[m
[32m+[m					[32m</div>[m
[32m+[m				[32m</section>[m
[32m+[m
[32m+[m			[32m</div>[m
[32m+[m
 			<div class="ba-footer">[m
 				<div class="ba-container cf">[m
 					<div class="col-1">© 2015 indipixel design</div>[m
[36m@@ -90,7 +96,7 @@[m
 					</div>[m
 				</div>[m
 			</div>[m
[31m-		</div>[m
[31m-	</main>[m
[31m-</body>[m
[32m+[m
[32m+[m		[32m</main>[m
[32m+[m	[32m</body>[m
 </html>[m
[1mdiff --git a/scss/style.scss b/scss/style.scss[m
[1mindex 54de8e5..1038624 100644[m
[1m--- a/scss/style.scss[m
[1m+++ b/scss/style.scss[m
[36m@@ -5,21 +5,21 @@[m
     font-family: 'Montserrat';[m
     src: url('../fonts/montserrat-light-webfont.woff2') format('woff2'),[m
          url('../fonts/montserrat-light-webfont.woff') format('woff');[m
[31m-    font-weight: normal;[m
[32m+[m[32m    font-weight: 300;[m
     font-style: normal;[m
 }[m
 @font-face {[m
     font-family: 'Montserrat';[m
     src: url('../fonts/montserrat-semibold-webfont.woff2') format('woff2'),[m
          url('../fonts/montserrat-semibold-webfont.woff') format('woff');[m
[31m-    font-weight: normal;[m
[32m+[m[32m    font-weight: 600;[m
     font-style: normal;[m
 }[m
 @font-face {[m
     font-family: 'Montserrat';[m
     src: url('../fonts/montserrat-ultralight-webfont.woff2') format('woff2'),[m
          url('../fonts/montserrat-ultralight-webfont.woff') format('woff');[m
[31m-    font-weight: normal;[m
[32m+[m[32m    font-weight: 200;[m
     font-style: normal;[m
 }[m
 body{[m
[36m@@ -94,7 +94,9 @@[m [mselect {[m
 	transition: color .3s ease-in, border-color .3s ease-in, background-color .3s ease-in, opacity .3s ease-in;[m
 }[m
 select{[m
[31m-[m
[32m+[m	[32mbackground: #FFF url(../img/arrow.svg) 90% 50% no-repeat;[m
[32m+[m	[32m-moz-appearance: none;[m
[32m+[m	[32mappearance: textfield;[m
 }[m
 [m
 input[type="text"]:focus,[m
[36m@@ -105,14 +107,23 @@[m [minput[type="tel"]:focus,[m
 textarea:focus,[m
 select:focus {[m
 	border-color: #69F0AE;[m
[31m-[m
 }[m
 textarea {[m
[32m+[m	[32mline-height: 1.3;[m
[32m+[m	[32mmin-height: 100px;[m
[32m+[m	[32mpadding-top: 15px;[m
[32m+[m	[32mresize: vertical;[m
[32m+[m[32m}[m
 [m
[32m+[m[32mmain{[m
[32m+[m[32m    display: flex;[m
[32m+[m[32m    min-height: 100vh;[m
[32m+[m[32m    flex-direction: column;[m
 }[m
 .ba-indipixel{[m
 	padding-top: 22px;[m
[31m-}[m
[32m+[m	[32mflex: 1;[m
[32m+[m[32m }[m
 .ba-header{[m
 	background: #E94643;[m
 	color: #fff;[m
[36m@@ -197,7 +208,7 @@[m [mtextarea {[m
 		line-height: 1.2;[m
 		text-transform: uppercase;[m
 		margin: 0;[m
[31m-		// font-weight: 400;[m
[32m+[m		[32mfont-weight: 400;[m
 	}[m
 	p{[m
 		color:  #f9fbe8;[m
[36m@@ -254,16 +265,11 @@[m [mtextarea {[m
 		line-height: 45px;[m
 		border-radius: 8px;[m
 		padding: 0 32px;[m
[31m-		margin-top: 14px;[m
[32m+[m		[32mmargin-top: 10px;[m
 		&:hover{[m
 			background: #04E4A2;[m
 		}[m
 	}[m
[31m-	select{[m
[31m-		appearance: textfield;[m
[31m-		background: #FFF url(../img/arrow.svg) 90% 50% no-repeat;[m
[31m-		-moz-appearance: none;[m
[31m-	}[m
 }[m
 .ba-footer{[m
 	background: #FEFCF2;[m
[36m@@ -275,6 +281,7 @@[m [mtextarea {[m
 	a{[m
 		color: #626262;[m
 		display: inline-block;[m
[32m+[m		[32mflex-direction: row;[m
 		svg{[m
 			vertical-align: middle;[m
 			margin-right: 20px;[m
