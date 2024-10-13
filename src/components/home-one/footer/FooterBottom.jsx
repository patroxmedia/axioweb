import LogoWhiteImg from "../../../assets/images/logo/axioweb.png";
function FooterBottom() {
	return (
		<>
			<div className="col-lg-6">
				<div className="aximo-footer-logo">
					<a href="">
						<img src={LogoWhiteImg} alt="Logo" />
					</a>
				</div>
			</div>
			<div className="col-lg-6">
				<div className="aximo-copywright one">
					<p> &copy; Copyright 2024, All Rights Reserved by Patroxmedia</p>
				</div>
			</div>
		</>
	);
}

export default FooterBottom;
