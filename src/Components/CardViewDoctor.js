import React from 'react';
import './CardView.css';
//images
import img1 from './Images/img1.png';
import img2 from './Images/img2.png';
import img3 from './Images/img3.png';
import img4 from './Images/img4.png';
import imgbg from './Images/card-bg.png';
 

function DoctorCardView() {
  return (
    <div>
        
	<section>
		<div class="container">
			<h1 class="heading">Meet Our Doctors</h1>
			<div class="card-wrapper">
				<div class="card">
					<img src={imgbg} alt="card background" class="card-img"/>
					<img src={img1} alt="profile image" class="profile-img"/>
					<h1>Dr. Arooba Rahim</h1>
					<p class="job-title">Gynecologist</p>
					<p class="about">
						Dr. Arooba Rahim is a Gynecologist and Obstetrician. Dr. Arooba Rahim is among the Best Gynecologist in Lahore. She has a MBBS, FCPS and FMAS (Laparoscopy) degree along with an experience of 12 years.
					</p>
					<a href="#" class="btn">Contact</a>
					<ul class="social-media">
						<li><a href="#"><i class="fa fa-facebook"></i></a></li>
						<li><a href="#"><i class="fa fa-twitter"></i></a></li>
						<li><a href="#"><i class="fa fa-instagram"></i></a></li>
						<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
					</ul>
				</div>

				<div class="card">
					<img src={imgbg} alt="card background" class="card-img"/>
					<img src={img2} alt="profile image" class="profile-img"/>
					<h1>Dr. Afshan Ahmad</h1>
					<p class="job-title">Skin Specialist</p>
					<p class="about">
						Dr. Afshan Ahmad is among the Best Dermatologists in Lahore. Dr Afshan Ahmad has over 15 years of experience in the field of Dermatology. She provides a comprehensive array of Skin related services specializing.
					</p>
					<a href="#" class="btn">Contact</a>
					<ul class="social-media">
						<li><a href="#"><i class="fa fa-facebook"></i></a></li>
						<li><a href="#"><i class="fa fa-twitter"></i></a></li>
						<li><a href="#"><i class="fa fa-instagram"></i></a></li>
						<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
					</ul>
				</div>

				<div class="card">
					<img src={imgbg} alt="card background" class="card-img"/>
					<img src={img3} alt="profile image" class="profile-img"/>
					<h1>Dr. Maria Saleem</h1>
					<p class="job-title">Child Specialist</p>
					<p class="about">
						Dr. Maria Saleem is a Pediatrician and Neonatologist. Dr. Furqan Saleem is among the Best Pediatrician in Lahore. He has a M.B.B.S, F.C.P.S. (Pediatrics) and Fellow Neonatology degree along with an experience of 9 years.
					</p>
					<a href="#" class="btn">Contact</a>
					<ul class="social-media">
						<li><a href="#"><i class="fa fa-facebook"></i></a></li>
						<li><a href="#"><i class="fa fa-twitter"></i></a></li>
						<li><a href="#"><i class="fa fa-instagram"></i></a></li>
						<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
					</ul>
				</div>

				

				<div class="card">
					<img src={imgbg} alt="card background" class="card-img"/>
					<img src={img4} alt="profile image" class="profile-img"/>
					<h1>Dr. Arshad Mahmood</h1>
					<p class="job-title">Eye Specialist</p>
					<p class="about">
						Dr. Arshad Mahmood received his MBBS from PMC and then went onto finish his FCPS (Ophthalmology) and DOMS. Dr. Arshad Mahmood has 30 years of experience. He is currently the Head of Ophthalmology
					</p>
					<a href="#" class="btn">Contact</a>
					<ul class="social-media">
						<li><a href="#"><i class="fa fa-facebook"></i></a></li>
						<li><a href="#"><i class="fa fa-twitter"></i></a></li>
						<li><a href="#"><i class="fa fa-instagram"></i></a></li>
						<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
					</ul>
				</div>

				

			</div>
		</div>
	</section>

    
     
    </div>
  );
}

export default DoctorCardView;
