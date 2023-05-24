/*This script uses JS to standardize the footer across all pages.*/
const element2 = document.getElementById("footerID");
element2.innerHTML = `
		<p>
			Contact Me: <a href="mailto:rmechery@wpi.edu">rmechery@wpi.edu</a>
		</p>
		
		<!--"fa" and "fa-()" are classes for imported style sheet and "footer-icon" class is in style.css-->
		<a href="https://www.instagram.com/ryan_mechery/" class="fa fa-instagram footer-icon"></a>
		<a href="https://www.linkedin.com/in/ryan-mechery/" class="fa fa-linkedin footer-icon"></a>
		<a href="https://github.com/groundhog3" class="fa fa-github footer-icon"></a>
		
		<p>
	    <a href="https://jigsaw.w3.org/css-validator/check/referer">
	        <img style="border:0;width:88px;height:31px"
	            src="https://jigsaw.w3.org/css-validator/images/vcss-blue"
	            alt="Valid CSS!" />
	    </a>
		</p>

		
		<p style="font-size: 12px">
			Please do not share any photos from my website. Thanks.
			<br>©2021-2022
		</p>
`;