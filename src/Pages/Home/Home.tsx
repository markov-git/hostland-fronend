import * as React from 'react';
import css from './Home.module.sass';
import classNames from 'classnames';

export function Home(): JSX.Element {
	return (
		<>
			<div className="toggle hidden">
				<img src="./images/svgs/burger.svg" alt="=" className="burger"/>
				<img src="./images/svgs/cross.svg" alt="x" className={classNames("cross", css.hide)}/>
			</div>

			<section className={css.banner}>

				<div className={css.imgSidebar}>
					<img src="./images/main.jpg" alt="img"/>
				</div>
				<div className={css.contentBx}>
					<h5 className={css.logoText} data-language="portfolio">My_Portfolio</h5>
					<div>
						<h4 data-language="hello"><span>Hello</span> I'm</h4>
						<h2 data-language="name">Artem Markov</h2>
						<h4 data-language="devF">I'm a JavaScript Frontend Web Developer.</h4>

					</div>
					<ul className={css.sci}>
						<li><a href="https://www.instagram.com/letostk" target="_blank">
							<img src="./images/svgs/instagram.svg" alt="inst"/>
						</a></li>
						<li><a href="https://vk.com/id96125787" target="_blank">
							<img src="./images/svgs/vk.svg" alt="vk"/>
						</a></li>
						<li><a href="https://github.com/markov-git" target="_blank">
							<img src="./images/svgs/github.svg" alt="github"/>
						</a></li>
					</ul>
				</div>
			</section>

			<section className={css.skills} id="skills">
				<div className={css.title}>
					<h2 data-language="mySkills">My Skills</h2>
				</div>
				<div className={css.content}>

					<div className={css.servicesBx}>
						<svg viewBox="0 0 100 100">
							<circle cx="50" cy="50" r="45" fill="#00bcd4"/>
							<path fill="none" stroke-linecap="round" stroke-width="5" stroke="#fff"
								  stroke-dasharray="125.6,125.6"
								  d="M50 10
a 40 40 0 0 1 0 80
a 40 40 0 0 1 0 -80">
							</path>
							<text x="50" y="50" text-anchor="middle" dy="7" font-size="15">Fw</text>
						</svg>
						<h2>JavaScript Frameworks</h2>
						<li>Vue.js</li>
						<li>ReactJS</li>
						<li>Express.js</li>
						<li>Tailwind</li>
						<li>Bootstrap</li>
					</div>

					<div className={css.servicesBx}>
						<svg viewBox="0 0 100 100">
							<circle cx="50" cy="50" r="45" fill="#00bcd4"/>
							<path fill="none" stroke-linecap="round" stroke-width="5" stroke="#fff"
								  stroke-dasharray="150.7,100.5"
								  d="M50 10
a 40 40 0 0 1 0 80
a 40 40 0 0 1 0 -80">
							</path>
							<text x="50" y="50" text-anchor="middle" dy="7" font-size="13">HTML/CSS</text>
						</svg>
						<h2>HTML/CSS</h2>
						<li data-language="semantic">Semantic</li>
						<li>SCSS</li>
						<li>BEM</li>
					</div>

					<div className={css.servicesBx}>
						<svg viewBox="0 0 100 100">
							<circle cx="50" cy="50" r="45" fill="#00bcd4"/>
							<path fill="none" stroke-linecap="round" stroke-width="5" stroke="#fff"
								  stroke-dasharray="175.8,75.4"
								  d="M50 10
a 40 40 0 0 1 0 80
a 40 40 0 0 1 0 -80">
							</path>
							<text x="50" y="50" text-anchor="middle" dy="7" font-size="20">JS</text>
						</svg>
						<h2>JavaScript</h2>
						<li>TypeScript</li>
						<li>ES6 - ES12</li>
						<li>Webpack</li>
						<li>Gulp, Parcel, etc.</li>
					</div>

					<div className={css.servicesBx}>
						<svg viewBox="0 0 100 100">
							<circle cx="50" cy="50" r="45" fill="#00bcd4"/>
							<path fill="none" stroke-linecap="round" stroke-width="5" stroke="#fff"
								  stroke-dasharray="75.4,175.8"
								  d="M50 10
a 40 40 0 0 1 0 80
a 40 40 0 0 1 0 -80">
							</path>
							<text x="50" y="50" text-anchor="middle" dy="7" font-size="15">NodeJS</text>
						</svg>
						<h2>NodeJS</h2>
						<li>`Handlebars` template engine</li>
						<li>`Express`</li>
					</div>

					<div className={css.servicesBx}>
						<svg viewBox="0 0 100 100">
							<circle cx="50" cy="50" r="45" fill="#00bcd4"/>
							<path fill="none" stroke-linecap="round" stroke-width="5" stroke="#fff"
								  stroke-dasharray="100.48,150.72"
								  d="M50 10
a 40 40 0 0 1 0 80
a 40 40 0 0 1 0 -80">
							</path>
							<text x="50" y="50" text-anchor="middle" dy="7" font-size="15">DB</text>
						</svg>
						<h2>Data Bases</h2>
						<li>MySQL</li>
						<li>MongoDB</li>
						<li>NeDB</li>
					</div>

					<div className={css.servicesBx}>
						<svg viewBox="0 0 100 100">
							<circle cx="50" cy="50" r="45" fill="#00bcd4"/>
							<path fill="none" stroke-linecap="round" stroke-width="5" stroke="#fff"
								  stroke-dasharray="75.4,175.8"
								  d="M50 10
a 40 40 0 0 1 0 80
a 40 40 0 0 1 0 -80">
							</path>
							<text x="50" y="50" text-anchor="middle" dy="7" font-size="20">C++</text>
						</svg>
						<h2>C++</h2>
						<li>Knowledge of basics and syntax</li>
						<li>Experience with cross-platform IDE `QT`</li>
					</div>

					<div className={css.servicesBx}>
						<svg viewBox="0 0 100 100">
							<circle cx="50" cy="50" r="45" fill="#00bcd4"/>
							<path fill="none" stroke-linecap="round" stroke-width="5" stroke="#fff"
								  stroke-dasharray="150.7,100.5"
								  d="M50 10
a 40 40 0 0 1 0 80
a 40 40 0 0 1 0 -80">
							</path>
							<text x="50" y="50" text-anchor="middle" dy="7" font-size="13">Graphics</text>
						</svg>
						<h2>Graphics</h2>
						<li>Photoshop</li>
						<li>Illustrator</li>
						<li>Blender</li>
					</div>

					<div className={css.servicesBx}>
						<svg viewBox="0 0 100 100">
							<circle cx="50" cy="50" r="45" fill="#00bcd4"/>
							<path fill="none" stroke-linecap="round" stroke-width="5" stroke="#fff"
								  stroke-dasharray="150.7,100.5"
								  d="M50 10
a 40 40 0 0 1 0 80
a 40 40 0 0 1 0 -80">
							</path>
							<text x="50" y="50" text-anchor="middle" dy="7" font-size="13">Eng</text>
						</svg>
						<h2>English language</h2>
						<p>CEFR: B2. Upper intermediate</p>
					</div>
				</div>
			</section>

			<section className={css.work} id="work">
				<div className={css.title}>
					<h2 data-language="myWorks">Recent Works</h2><br/>
				</div>
				<div className={css.content}>
					// Maze Creeper
					<div className={css.workBx}>
						<div className={css.imgBx}>
							<img src="./images/w/maze.png" alt="img"/>
						</div>
						<div className={css.textBx}>
							<a target="_blank" href="/maze">
								<h3>Maze Creeper</h3><br/>
								<p data-language="mazeDesc">Multiplayer<br/>SSE<br/>Eller's Algorithm<br/>A* Algorithm
								</p>
							</a>
							<a target="_blank" className={css.git} href="https://github.com/markov-git/maze-creeper">
								GitHub
							</a>
						</div>
					</div>
					// Crypto
					<div className="workBx">
						<div className="imgBx">
							<img src="./images/w/crypto.png" alt="img"/>
						</div>
						<div className="textBx">
							<a target="_blank" href="/vue-crypto">
								<h3>Crypto Watcher</h3><br/>
								<p data-language="cryptoDesc">Vue 3<br/>WebSockets<br/>Shared Worker<br/>Tailwind</p>
							</a>
							<a target="_blank" className="git" href="https://github.com/markov-git/vue-crypto">
								GitHub
							</a>
						</div>
					</div>
					// Logitech
					<div className="workBx">
						<div className="imgBx">
							<img src="./images/w/logitech.png" alt="img"/>
						</div>
						<div className="textBx">
							<a href="/geekbrains-logitech" target="_blank">
								<h3>Logitech challenge</h3><br/>
								<p>Adaptive web page</p>
							</a>
							<a target="_blank" className="git" href="https://github.com/markov-git/logitech">
								GitHub
							</a>
						</div>
					</div>
					// Tic Tac
					<div className="workBx">
						<div className="imgBx">
							<img src="./images/w/tictac.png" alt="img"/>
						</div>
						<div className="textBx">
							<a href="/tictac" target="_blank">
								<h3 data-language="tictac">Tic Tac Toe</h3><br/>
								<p data-language="tictacDesc">Minimax algorithm<br/>Mongodb</p>
							</a>
							<a target="_blank" className="git" href="https://github.com/markov-git/tictac-minimax">
								GitHub
							</a>
						</div>
					</div>
					// Web Excel
					<div className="workBx">
						<div className="imgBx">
							<img src="./images/w/excel.png" alt="img"/>
						</div>
						<div className="textBx">
							<a href="/excel">
								<h3 data-language="excel">Web Excel</h3><br/>
								<p data-language="excelDesc">Native JavaScript</p>
							</a>
							<a target="_blank" className="git" href="https://github.com/markov-git/excel">
								GitHub
							</a>
						</div>
					</div>
					// Server
					<div className="workBx">
						<div className="imgBx">
							<img src="./images/w/server.png" alt="img"/>
						</div>
						<div className="textBx">
							<a href="#home">
								<h3>This site&server</h3><br/>
								<p>Express server</p>
							</a>
							<a target="_blank" className="git" href="https://github.com/markov-git/hostland-server">
								GitHub
							</a>
						</div>
					</div>
				</div>
			</section>

			<section className="contact" id="contact">
				<div className="title white">
					<h2 data-language="contactMe">Contact Me</h2>
				</div>
				<div className="contactForm">
					<div className="_sending">
						<div className="loader"></div>
						<div className="ok">
							<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
								 y="0px"
								 viewBox="0 0 229.153 229.153">
								<g>
									<path
										d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737C36.794,165.501,64.017,194.924,92.356,223.549z"/>
								</g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
							</svg>
						</div>
						<div className="wrong">
							<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
								 y="0px"
								 viewBox="0 0 492 492">
								<g>
									<g>
										<path
											d="M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z"/>
									</g>
								</g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
								<g></g>
							</svg>
							<p id="errorMessage"></p>
						</div>
					</div>

					<form id="form" action="#">
						<div className="row">
							<div className="col50" data-language="inpFN">
								<input type="text" name="firstName" placeholder="Name"/>
							</div>
							<div className="col50" data-language="inpC">
								<input type="text" name="company" placeholder="Company*" className="_req"/>
							</div>
						</div>
						<div className="row">
							<div className="col50">
								<input type="text" name="email" placeholder="Email*" className="_req _email"/>
							</div>
							<div className="col50" data-language="phone">
								<input type="text" name="phone" placeholder="Mobile No."/>
							</div>
						</div>
						<div className="row">
							<div className="col100" data-language="message">
								<textarea placeholder="Message" name="message"/>
							</div>
						</div>
						<div className="row">
							<div className="col100" data-language="btnMessage">
								<input type="submit" value="Send"/>
							</div>
						</div>
					</form>
				</div>
			</section>

			<div className="sidebar">
				<ul className="menu">
					<li><a href="#home" id="toggleLink" data-language="home">Home</a></li>
					<li><a href="#skills" id="toggleLink" data-language="skills">Skills</a></li>
					<li><a href="#work" id="toggleLink" data-language="work">Work</a></li>
					<li><a href="#contact" id="toggleLink" data-language="contact">Contact</a></li>
					<li><a href="#" id="login">Admin login</a></li>
				</ul>
			</div>

			<div className="modal">
				<div className="modal__backBlur"></div>
				<div className="modal__card">
					<div className="title white">
						<h2 data-language="contactMe">Log In</h2>
					</div>
					<div className="modal__auth-form">
						<form action="/auth" method="post">
							<input type="password" id="password" name="password" placeholder="Password"/>
							<p/>
							<button className="btn" type="submit" disabled>Log In</button>
						</form>
					</div>
				</div>

			</div>

			<script src="/home/index.js"/>
			<script src="/home/translate.js"/>
			<script src="/home/validation.js"/>
			<script src="/home/auth.js"/>
		</>
	);
}