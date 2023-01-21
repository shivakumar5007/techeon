import React from "react";
import instagram from "./images/instagram.png";
import facebook from "./images/facebook.png"
const Footer = () => {
  return (
		<>
			<footer className="w-100 bg-light text-center">
				<p>
					<img src={instagram} alt="" />
					<a href="https://www.instagram.com/techeon_2023/">@techeon_2023 </a>
				</p>
				<p>😎 2023 Techeon.</p>
			</footer>
		</>
	);
};
export default Footer;