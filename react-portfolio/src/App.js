import React from 'react';

function App() {

  return (
    <div className="App">
      <div className="container">
		<div id="menu">
			<div id="uvod">
				<h1 id="mikac_inc">@mikac_inc</h1>
				<img src="slike/prof.jpg" id="slika" />
				<div id="about_div"><span className="typed"></span></div>
				<div id="findme_links">
					<a target="_blank" className="findme" href="https://www.instagram.com/mikac_inc/" style={{color:'red'}}>
						Instagram
						<span className="arrow">-></span>
					</a>
					<a target="_blank" className="findme" href="https://github.com/MikaCinc" style={{color:'orange'}}>
						Git Hub
						<span className="arrow">-></span>
					</a>
					<a target="_blank" className="findme" href="https://www.linkedin.com/in/mikacinc/" style={{color:'aqua'}}>
						LinkedIn
						<span className="arrow">-></span>
					</a>
				</div>
			</div>
			<div className="switch_menu">
				<div className="switch">Biography</div>
				<div className="switch">ByTheNumbers</div>
				<div className="switch">Experience</div>
				<div className="switch">Skills</div>
				<div className="switch">Projects</div>
			</div>
		</div>
		<div id="content">

			<div className="content_switch" id="content_biography">
				<h3 id="sectionTitle_biography" className="sectionTitle tShadow cyan">// Short biography /</h3>
				<img src="slike/bio_pic.jpg" id="bio_pic" />
				<p id="bioParagraph" className="gradientText">
					Mihajlo Marjanović is a student of the Faculty of Electronical engineering @ University of Nis. He
					started doing web development at primary school which he completed as the best student of generation
					and
					with diploma of excellence. He participated in numerous competitions organized by the Ministry of
					Education, where he has more than 40 diplomas. In the 'Svetozar Marković' Gymnasium he organized
					workshops for programming 'Kodiak'
					in order to teach elementary students, and
					was also a member of the 'Nauči me' NGO from Nis, where he worked on similar projects. Since
					December
					2017 he has been a FutureForward scholar where he works as a front-end web developer. Besides
					programming and studies he likes to do streetworkout and dance salsa.
				</p>
			</div>

			<div className="content_switch" id="content_bythenumbers">
				<h3 id="sectionTitle_bythenumbers" className="sectionTitle tShadow">// #mihajlo_bythenumbers /</h3>
				<div className="flex-wrapper">
					<div>
						<p className="bythenumber">2</p>
						<p className="gradientTextLite2">Years of WebDev
							experience</p>
					</div>
					<div>
						<p className="bythenumber">316</p>
						<p className="gradientTextLite2">Average working hours
							for 3 months</p>
					</div>
					<div>
						<p className="bythenumber">>40</p>
						<p className="gradientTextLite2">Diplomas +
							Achievements</p>
					</div>
					<div>
						<p className="bythenumber">31</p>
						<p className="gradientTextLite2">Programming classNamees he
							has mentored</p>
					</div>
					<div>
						<p className="bythenumber">>175</p>
						<p className="gradientTextLite2">Students who passed his
							mentoring</p>
					</div>
					<div>
						<p className="bythenumber">3</p>
						<p className="gradientTextLite2">Republic competitions
							won</p>
					</div>
				</div>
			</div>

			<div className="content_switch" id="content_experience"
				style={{textAlign: 'center', marginLeft: 'auto', marginRight: 'auto'}}>
				<h3 id="sectionTitle_experience" id="experienceTitle" className="sectionTitle tShadow" style={{color:'yellow'}}>
					// Experience & Volunteer & Activities /</h3>
				<div className="flex-wrapper-experience">
					<div>
						<p className="gradientTextLite4">Web Developer @ FutureForward</p>
						<p>December 2017 - present</p>
					</div>
					<div>
						<p className="gradientTextLite4">Microsoft Windows Insider</p>
						<p>2015 - present</p>
					</div>
					<div>
						<p className="gradientTextLite4">Photoshoping glasses for Clair Optiek</p>
						<p>Jun 2018 - present</p>
					</div>
					<div>
						<p className="gradientTextLite4">Coordinator & chief presenter @ Project ECHO</p>
						<p>May 2019</p>
					</div>
					<div>
						<p className="gradientTextLite4">Public speaker @ national project #BudućnostZa5</p>
						<p>April 2019</p>
					</div>
					<div>
						<p className="gradientTextLite4">(particip.) IT Konekt</p>
						<p>April 2019</p>
					</div>
					<div>
						<p className="gradientTextLite4">Freelance Web Developer</p>
						<p>August 2018 - November 2018</p>
					</div>
					<div>
						<p className="gradientTextLite4">Founder & Mentor @ //KODIAK/</p>
						<p>November 2017 - April 2018</p>
					</div>
					<div>
						<p className="gradientTextLite4">Member of NGO 'Nauči Me'</p>
						<p>January 2017 - September 2018</p>
					</div>
					<div>
						<p className="gradientTextLite4">Mentor @ CodeRobotic(V. 1.0 & V. 2.0)</p>
						<p>January 2017 - December 2018</p>
					</div>
					<div>
						<p className="gradientTextLite4">PR Assistant & Booth Presenter @ Festival 'Nauk Nije Bauk' (8, 9,
							10)
						</p>
						<p>March - April / 2016, 2017, 2018</p>
					</div>
					<div>
						<p className="gradientTextLite4">Volunteer @ Festival 'Night Of Biology'</p>
						<p>May 2017 / May 2018</p>
					</div>
					<div>
						<p className="gradientTextLite4">(particip.) Best Week seminar</p>
						<p>April 2017</p>
					</div>
					<div>
						<p className="gradientTextLite4">(particip.) Professional orientation seminar</p>
						<p>June 2017</p>
					</div>
					<div>
						<p className="gradientTextLite4">(particip.) Nature conservation & Sports camp</p>
						<p>July 2017</p>
					</div>
					<div>
						<p className="gradientTextLite4">Assistant @ Camp of the physics & science</p>
						<p>January / 2013 - 2014</p>
					</div>
				</div>
			</div>

			<div className="content_switch" id="content_skills">
				<h3 id="sectionTitle_skills" className="sectionTitle tShadow" style={{color:'orange'}}>// Skills /</h3>
				<div className="flex-wrapper-skills">
					<div>
						<p>Languages I speak</p>
						<p>
							<span>JavaScript / ES6</span>
							<span>React.js</span>
							<span>React Native / learning</span>
							<span>Redux.js</span>
							<span>Cypress</span>
							<span>HTML</span>
							<span>CSS</span>
						</p>
					</div>
					<div className="even-skill-group">
						<p>
							<span>Visual Studio Code</span>
							<span>Git</span>
							<span>GitHub</span>
							<span>NPM</span>
							<span>BitBucket</span>
							<span>Bootstrap</span>
							<span>_.lodash</span>
							<span>jQuery</span>
							<span>Sublime Text</span>
						</p>
						<p>Dev Tools</p>
					</div>
					<div>
						<p>Interests & Other</p>
						<p>
							<span>English level B2 / Certified 2018 @ KapitalIn</span>
							<span>Drivers Licence category / B</span>
							<span>StreetWorkout</span>
							<span>Salsa</span>
							<span>Microsoft & Windows - Watcher</span>
							<span>Chess</span>
						</p>
					</div>
					<div className="even-skill-group">
						<p>
							<span>Student of the year 2015.</span>
							<span>A Certificate of Excellence 'Vuk Karadžić'</span>
							<span>(both primary and high school)</span>
						</p>
						<p>Awards of note</p>
					</div>
				</div>
			</div>

			<div className="content_switch" id="content_projects">
				<h3 id="sectionTitle_projects" className="sectionTitle tShadow">/ PERSONAL PROJECTS</h3>
				<table id="personal_tabela">
          <tbody>
					<tr>
          <td>
						<h3 className="gradientTextLite2">Featured</h3>
            </td>
          </tr>
					<tr>
						<td>
							<button className="button_cyan"
								onClick={window.open('https://www.instagram.com/p/BxK2LiyoSUu/?utm_source=ig_web_button_share_sheet', '_blank')}>//
								ECHO /</button>
						</td>
						<td>
							<button className="button_green"
								onClick={window.open('https://www.instagram.com/kodiak_radionice/', '_blank')}>// KODIAK
								/</button>
						</td>
					</tr>
          </tbody>
				</table>
				<table id="neon_tabela">
          <tbody>
					<tr>
          <td>
						<h3 style={{color: 'aqua'}}>Project // NEON /</h3>
            </td>
          </tr>
					<tr>
						<td>
							<button className="button_cyan"
								onClick={window.open('https://mikacinc.github.io/Neon-React/', '_blank')}>NEON
								[react]</button>
						</td>
						<td>
							<button className="button_cyan"
								onClick={window.open('https://mikacinc.github.io/neon/', '_blank')}>NEON
								[old]</button>
						</td>
					</tr>
          </tbody>
				</table>
				<table id="scorpio_tabela">
        <tbody>
					<tr>
          <td>
						<h3>// Project Scorpio /</h3>
            </td>
          </tr>
					<tr>
						<td>
							<button className="button_green"
								onClick={window.open('https://mikacinc.github.io/Mastermind/', '_blank')}>Mastermind</button>
						</td>
						<td>
							<button className="button_green"
								onClick={window.open('https://mikacinc.github.io/MemoryGame/', '_blank')}>Memory
								Game</button>

						</td>
						<td>
							<button className="button_green"
								onClick={window.open('https://mikacinc.github.io/GlavniGradovi/', '_blank')}>Glavni
								Gradovi</button>

						</td>
					</tr>
					<tr>
						<td>
							<button className="button_green"
								onClick={window.open('https://mikacinc.github.io/CustomizeInputTextBox/', '_blank')}>Custom.
								Input</button>
						</td>
						<td>
							<button className="button_green"
								onClick={window.open('https://mikacinc.github.io/Rising-number/', '_blank')}>Rising
								number</button>
						</td>
						<td>
							<button className="button_green"
								onClick={window.open('https://mikacinc.github.io/Izracunaj/', '_blank')}>Saberi ako
								možeš</button>
						</td>
					</tr>
					<tr>
						<td>
							<button className="button_green"
								onClick={window.open('https://mikacinc.github.io/NajveciBroj/', '_blank')}>Najveći
								broj</button>
						</td>
						<td>
							<button className="button_green"
								onClick={window.open('https://mikacinc.github.io/SortableLists/', '_blank')}>Sortable
								Lists</button>
						</td>
						<td>
							<button className="button_green"
								onClick={window.open('https://mikacinc.github.io/Project-GEO/', '_blank')}>Project
								GEO</button>
						</td>
					</tr>
					<tr>
						<td>
							<button className="button_green"
								onClick={window.open('https://mikacinc.github.io/ColorfulTable/', '_blank')}>Colorful
								table</button>
						</td>
						<td>
							<button className="button_green"
								onClick={window.open('https://mikacinc.github.io/10010/', '_blank')}>10010</button>
						</td>
						<td>
							<button className="button_green"
								onClick={window.open('https://mikacinc.github.io/MikacKnowsEverything/', '_blank')}>MikacKnowsEverything</button>
						</td>
					</tr>
          </tbody>
				</table>
				<br/>
				<h3 className="sectionTitle tShadow">/ WAS(or still) WORKING ON</h3>
				<table id="coderobotic_tabela">
        <tbody>
					<tr>
						<td>
							<button className="button_yellow"
								onClick={window.open('https://www.prop-central.com/', '_blank')}>PropCentral</button>
						</td>
						<td>
							<button className="button_yellow"
								onClick={window.open('https://futureforward.nl/en/portfolio/optics-touchscreen-application-3d-try-out/', '_blank')}>Clair</button>
						</td>
						<td>
							<button className="button_yellow"
								onClick={window.open('https://futureforward.nl/en/portfolio/truck-wash/', '_blank')}>Truckwash</button>
						</td>
					</tr>
          </tbody>
				</table>
				<h3 className="sectionTitle tShadow">/ NGO PROJECTS</h3>
				<table id="coderobotic_tabela">
        <tbody>
					<tr>
          <td>
						<h3 style={{color: 'orange'}}>#Coderobotic</h3>
            </td>
					</tr>
					<tr>
						<td>
							<button className="button_orange"
								onClick={window.open('https://www.nauci.me/prve-besplatne-radionice-programiranja-za-osnovce-coderobotic/', '_blank')}>#coderobotic
								1.0</button>
							<button className="button_orange" onClick={window.open('', '_blank')}>#coderobotic 2.0</button>
						</td>
					</tr>
          </tbody>
				</table>
			</div>
		</div>
	</div>
    </div>
  );
}

export default App;
