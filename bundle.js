/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _router = __webpack_require__(1);

	var _router2 = _interopRequireDefault(_router);

	$(document).ready(function () {
		$('.menu').click(function (ev) {
			$('#nav').toggleClass('active');
		});

		$('.about').click(function () {
			_router2['default'].navigate('about', { trigger: true });
		});

		$('.projects').click(function () {
			_router2['default'].navigate('projects', { trigger: true });
		});

		$('.resume').click(function () {
			_router2['default'].navigate('resume', { trigger: true });
		});

		$('.contact').click(function () {
			_router2['default'].navigate('contact', { trigger: true });
		});

		$('.nav-item').click(function (ev) {
			$('.nav-item').removeClass('selected');
			$(ev.target).closest('.nav-item').addClass('selected');
		});
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _scriptAbout = __webpack_require__(2);

	var _scriptAbout2 = _interopRequireDefault(_scriptAbout);

	var _scriptProjects = __webpack_require__(3);

	var _scriptProjects2 = _interopRequireDefault(_scriptProjects);

	var _scriptContact = __webpack_require__(4);

	var _scriptContact2 = _interopRequireDefault(_scriptContact);

	var SectionRouter = Backbone.Router.extend({
		routes: {
			'about': 'about',
			'projects': 'projects',
			'resume': 'resume',
			'contact': 'contact',
			'*path': 'about'
		},

		about: function about() {
			this.setPageContent(_scriptAbout2["default"], '.about');
		},

		projects: function projects() {
			this.setPageContent(_scriptProjects2["default"], '.projects');
		},

		resume: function resume() {
			window.location.replace('assets/resume-chadfranzen.pdf');
		},

		contact: function contact() {
			this.setPageContent(_scriptContact2["default"], '.contact');
		},

		setPageContent: function setPageContent(Component, navSelector) {
			var container = _.first($('.content')),
			    navItems = $('.nav-item');
			//insert main content
			React.unmountComponentAtNode(container);
			React.render(React.createElement(Component, null), container);

			//update navbar
			navItems.removeClass('selected');
			navItems.filter(navSelector).addClass('selected');
		}
	});

	var router = new SectionRouter();

	Backbone.history.start();

	exports["default"] = router;
	module.exports = exports["default"];

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	var About = React.createClass({
		displayName: 'About',

		render: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement('img', { src: 'assets/photo.jpg', style: { display: 'block', width: '40%', maxWidth: '200px', borderRadius: '100%', margin: 'auto', marginBottom: '2em' } }),
				React.createElement('div', { className: 'underline' }),
				React.createElement(
					'p',
					null,
					'Hi, my name is Chad Franzen. I am currently a Computer Science major at the University of Illinois at Urbana-Champaign but I\'m originally from Algonquin, IL.'
				),
				React.createElement(
					'p',
					null,
					'At UIUC, I\'m a James Scholar and a member of the Campus Honors Program. In high school, I competed in Worldwide Youth in Science and Engineering and won medals at the state finals. In elementary school I once earned a gold star on my multiplication test.'
				),
				React.createElement(
					'p',
					null,
					'I\'ve previously interned as a front-end web engineer at Sprout Social, where I spearheaded the JavaScript development of a new feature projected to generate millions in revenue. I\'ve also worked in the logistics department of an energy management company, and I have lots of volunteer experience in tutoring and other areas.'
				),
				React.createElement(
					'p',
					null,
					'My hobbies include reading, video games, listening to standup comedy, and bugging people about ',
					React.createElement(
						'i',
						null,
						'A Song of Ice and Fire'
					),
					'.'
				)
			);
		}
	});

	exports['default'] = About;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var projectData = [{
		name: "Sprout Social: Facebook Mentions",
		description: "I worked in a team of two to add Facebook page mentions to Sprout's message widget. This involved adding a Backbone view to an existing jQuery UI component, as well as handling several asynchronous API requests to look up Facebook page results and store frequently mentioned pages.",
		link: 'http://sproutsocial.com/insights/tag-facebook-pages-from-sprout/'
	}, {
		name: "Bloodborne Skill Calculator",
		description: "This is a web app to help others plan their characters in the role-playing game Bloodborne. Users can enter their current and planned attributes through Backbone views, which flows into a Backbone model that calculates resulting character statistics and bubbles them back up to the view.",
		link: 'bloodbornecalculator/bloodborne.html',
		github: 'https://github.com/cdfranz2/BloodborneCalculator'
	}, {
		name: "Super Puzzle Ninja",
		description: "This is a Flash game that I made with the help of the Flixel library in May 2014. It's an action-puzzle game that implements a complex gameplay loop, sprite-based graphics, particle effects, saved high scores, and more while also accounting for performance.",
		link: 'superpuzzleninja/SuperPuzzleNinja.html',
		github: 'https://github.com/cdfranz2/SuperPuzzleNinja'
	}, {
		name: "ASoIaF Character Generator",
		description: "This is a simple web tool that creates characters fit to live in the world of Westeros. Users can select gender, region, and house options, and then generate characters based on their specifications. I used JavaScript to handle character generation and jQuery to implement the UI, which involves a collapsible, dynamic bottom drawer.",
		link: 'asoiafgenerator/main.html',
		github: 'https://github.com/cdfranz2/ASOIAFGenerator'
	}, {
		name: "Can One Fake Randomness?",
		description: "This is a poster project, entered into the 2014 UIUC Undergraduate Research Symposium, that I worked on with my classmates Rishbabh Marya and Robert Weber, along with Professor A.J. Hildebrand. The project involved developing statistical tests in Java and JavaScript, along with heavy use of the JExcel API for analyzing our experimental data. The poster won an Outstanding Presentation Award from Akuna Capital LLC.",
		link: 'assets/ursposter.pdf',
		github: 'https://github.com/cdfranz2/FakeRandomness'
	}, {
		name: "EmEssPaint",
		description: "This is a non-copyright-infringing drawing program that I made in my high school Computer Science class. It was written in Java and makes use of the AWT API.",
		link: null,
		github: 'https://github.com/cdfranz2/EmEssPaint'
	}, {
		name: "R. Kelly Saves the World",
		description: "This is a top-down, Robotron-style shooter starring everyone's favorite R&B artist that I wrote in Java during the summer of 2013. I extensively utilized Java's object-oriented capabilities to sensibly develop a wide variety of game entities, including several types of enemies and powerups.",
		link: null,
		github: 'https://github.com/cdfranz2/RKSTW'
	}];

	var Project = React.createClass({
		displayName: "Project",

		getDefaultProps: function getDefaultProps() {
			return {
				// Header
				name: '',

				// Body
				description: '',

				// URL for the project itself (if available)
				link: '',

				// URL for the project's Github repo (if available)
				github: ''
			};
		},

		getLinks: function getLinks() {
			var links = [];
			if (this.props.github) {
				links.push(React.createElement(
					"a",
					{ href: this.props.github, title: "Github", key: "Github" },
					React.createElement(
						"svg",
						{ viewBox: "0 0 1000 1000", "enable-background": "new 0 0 1000 1000", version: "1.1", space: "preserve", xmlns: "http://www.w3.org/2000/svg" },
						React.createElement("path", { d: "M0 499.968q0 -207.018 146.475 -353.493t353.493 -146.475 353.493 146.475 146.475 353.493 -146.475 353.493 -353.493 146.475 -353.493 -146.475 -146.475 -353.493zm54.684 0q0 183.582 130.851 314.433t314.433 130.851 314.433 -130.851 130.851 -314.433 -130.851 -314.433 -314.433 -130.851 -314.433 130.851 -130.851 314.433zm140.616 107.415q-3.906 -3.906 0 -7.812 7.812 -7.812 19.53 -5.859t13.671 3.906q13.671 5.859 30.271 26.366t26.366 28.319q46.872 39.06 95.697 5.859 3.906 -13.671 12.694 -23.436t16.601 -13.671 27.342 -11.718q-64.449 -5.859 -104.486 -22.46t-63.473 -41.989q-31.248 -35.154 -38.084 -91.791t8.789 -103.509q11.718 -29.295 33.201 -52.731 -15.624 -48.825 5.859 -111.321 62.496 3.906 113.274 42.966 97.65 -25.389 203.112 -1.953 13.671 -9.765 41.989 -24.413t71.285 -16.601q7.812 21.483 10.742 50.778t-2.929 54.684q44.919 46.872 46.872 124.992 0 62.496 -21.483 103.509t-76.167 68.355q-37.107 17.577 -97.65 21.483 27.342 13.671 40.037 28.319t16.601 45.895l0 61.52t1.953 59.567q5.859 9.765 13.671 16.601t13.671 9.765 3.906 8.789 -15.624 5.859q-33.201 0 -52.731 -23.436 -5.859 -9.765 -5.859 -23.436l0 -93.744q0 -15.624 -7.812 -22.46t-15.624 -8.789l0 123.039q0 33.201 7.812 42.966t9.765 19.53q1.953 1.953 -2.929 2.929t-16.601 -2.929q-25.389 -5.859 -35.154 -26.366t-9.765 -43.943l0 -121.086l-25.389 0l0 121.086q0 23.436 -9.765 44.919 -13.671 27.342 -50.778 29.295 -5.859 -1.953 -5.859 -3.906 1.953 -1.953 11.718 -19.53 1.953 -3.906 4.883 -15.624t2.929 -27.342l0 -123.039q-7.812 1.953 -14.648 8.789t-6.836 22.46l0 93.744q0 13.671 -5.859 23.436 -17.577 23.436 -52.731 23.436 -13.671 0 -15.624 -5.859 -1.953 -3.906 .977 -6.836t8.789 -6.836 7.812 -5.859q7.812 -5.859 11.718 -15.624 5.859 -7.812 2.929 -41.013t-.977 -42.966q-50.778 17.577 -103.509 -17.577 -15.624 -15.624 -31.248 -44.919 -11.718 -21.483 -46.872 -50.778z" })
					)
				));
			}
			if (this.props.link) {
				links.push(React.createElement(
					"a",
					{ href: this.props.link, title: "Learn More", key: "Link" },
					React.createElement(
						"svg",
						{ version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px",
							width: "512px", height: "512px", viewBox: "0 0 512 512", "enable-background": "new 0 0 512 512", space: "preserve" },
						React.createElement("path", { d: "M512,256C512,114.595,397.404,0,256,0C114.624,0,0,114.596,0,256c0,141.375,114.624,256,256,256 C397.405,512,512,397.376,512,256z M193.062,376.032c-13.283-11.658-14.596-31.907-2.905-45.158l65.811-74.967l-66.313-74.595 c-11.75-13.188-10.56-33.438,2.627-45.188c13.248-11.783,33.498-10.593,45.248,2.624l85.127,95.718 c0.998,1.095,1.312,2.471,2.125,3.626c1.279,1.907,2.531,3.718,3.376,5.782c0.685,1.812,1.03,3.594,1.437,5.438 c0.438,2.188,0.874,4.281,0.842,6.498c0,1.876-0.375,3.69-0.717,5.565c-0.375,2.125-0.752,4.218-1.594,6.281 c-0.752,1.876-1.907,3.469-3.002,5.217c-0.841,1.314-1.248,2.812-2.31,4l-84.532,96.252 C226.592,386.406,206.374,387.719,193.062,376.032z" })
					)
				));
			}

			return links;
		},

		render: function render() {
			return React.createElement(
				"li",
				{ className: "project" },
				React.createElement(
					"div",
					{ className: "section-header" },
					this.props.name
				),
				React.createElement("div", { className: "underline" }),
				React.createElement(
					"div",
					null,
					this.props.description
				),
				React.createElement(
					"div",
					{ style: { float: 'right', marginTop: '1em' } },
					this.getLinks()
				)
			);
		}
	});

	var Projects = React.createClass({
		displayName: "Projects",

		getProjects: function getProjects() {
			return projectData.map(function (project) {
				return React.createElement(Project, { name: project.name, description: project.description, link: project.link, github: project.github, key: project.name });
			});
		},

		render: function render() {
			return React.createElement(
				"ul",
				{ className: "projects" },
				this.getProjects()
			);
		}
	});

	exports["default"] = Projects;
	module.exports = exports["default"];
	/* Github SVG */ /* Arrow SVG */

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	var Contact = React.createClass({
		displayName: 'Contact',

		render: function render() {
			return React.createElement(
				'div',
				{ className: 'contact', style: { textAlign: 'center' } },
				React.createElement(
					'div',
					{ style: { width: '100%' } },
					React.createElement(
						'a',
						{ href: 'https://github.com/cdfranz2' },
						React.createElement(
							'svg',
							{ xmlns: 'http://www.w3.org/2000/svg', version: '1.1', xlink: 'http://www.w3.org/1999/xlink', x: '0px', y: '0px', width: '7em', height: '7em', viewBox: '0 0 512 512', 'enable-background': 'new 0 0 512 512', space: 'preserve' },
							React.createElement(
								'g',
								null,
								React.createElement('g', null),
								React.createElement('path', { display: 'inline', d: 'M6.962 266.753c22.59-5.641 53.305-13.324 107.118-14.753 c-1.487-2.974-2.83-6.053-4.019-9.228c-20.94-0.182-85.43 2.792-107.521 8.25c-0.125 0.039-0.259 0.048-0.393 0 c-0.739 0-1.42-0.508-1.602-1.256c-0.211-0.873 0.326-1.774 1.208-1.995c21.89-5.41 84.825-8.413 107.118-8.355 c-5.017-14.753-7.233-31.655-7.233-50.523c0-33.516 10.437-46.159 24.46-64.02c-10.724-38.197 3.847-64.307 3.847-64.307 s22.533-4.671 65.1 25.832c23.089-9.89 84.647-10.714 113.77-2.196c17.88-11.818 50.571-28.585 63.77-23.895 c3.568 5.8 11.3 22.5 4.7 59.348c4.489 8.1 27.8 25.3 27.9 73.928c-0.384 17.938-2.245 33.084-5.698 45.9 c55.54-0.47 88.2 4.1 110.7 8.259c0.883 0.2 1.5 1 1.3 1.928c-0.153 0.787-0.844 1.353-1.611 1.4 c-0.115 0-0.211-0.009-0.326-0.019c-22.466-4.163-55.194-8.729-111.061-8.221c-0.979 3.252-2.072 6.341-3.262 9.3 c19.013 0.6 71.2 2.7 113.8 15.693c0.883 0.3 1.4 1.2 1.1 2.072c-0.211 0.7-0.863 1.16-1.573 1.2 c-0.153 0-0.326-0.019-0.479-0.076c-43.185-13.199-96.538-15.012-114.283-15.598c-15.444 33.929-47.118 46.59-98.322 51.9 c16.595 10.4 21.4 23.5 21.4 59.003c0 35.453-0.479 40.211-0.364 48.363c0.173 13.4 19.8 19.8 19.1 24.1 c-0.729 4.299-16.403 3.607-23.731 1.047c-20.758-7.232-18.687-24.5-18.687-24.5l-0.69-47.404c0 0 1.42-25.516-8-25.516 c0 5.1 0 59.2 0 77.592c0 16.9 11.8 22 11.8 28.221c0 10.715-21.563-1.016-28.202-7.703 c-10.134-10.168-8.982-31.73-8.733-48.785c0.23-16.471-0.153-52.49-0.153-52.49l-6.877 0.145c0 0 2.8 78.686-3.626 93 c-8.335 18.408-33.477 24.74-33.477 16.355c0-5.641 6.196-3.846 9.621-16.488c2.925-10.754 1.928-90.975 1.928-90.975 s-8.057 4.768-8.057 19.789c0 6.877-0.192 46.158-0.192 57.852c0 14.705-20.883 23.078-30.917 23.1 c-5.084 0-11.405-0.248-11.405-2.943c0-6.801 19.099-10.793 19.099-24.941c0-12.268-0.269-43.826-0.269-43.826 s-9.631 1.648-23.367 1.648c-34.628 0-45.583-22.1-50.792-34.465c-6.782-16.105-15.578-23.673-24.921-29.717 c-5.736-3.712-7.06-8.096-0.422-9.343c30.657-5.774 38.5 34.8 59 41.218c14.609 4.6 33.4 2.6 42.734-3.424 c1.238-12.385 10.159-23.089 17.593-28.729c-52.067-4.998-82.936-23.079-98.936-52.145c-54.466 1.305-85.372 9.036-108.029 14.7 c-1.65 0.413-3.261 0.815-4.815 1.209c-0.134 0.028-0.269 0.038-0.403 0.038c-0.739 0-1.41-0.499-1.602-1.247 c-0.221-0.882 0.326-1.784 1.209-2.005C3.72 267.6 5.3 267.2 7 266.753z' })
							)
						)
					)
				),
				React.createElement(
					'div',
					{ style: { width: '100%' } },
					React.createElement(
						'a',
						{ href: 'mailto:cdfranz2@illinois.edu' },
						React.createElement(
							'svg',
							{ xmlns: 'http://www.w3.org/2000/svg', xlink: 'http://www.w3.org/1999/xlink', version: '1.1', x: '0px', y: '0px', width: '7em', height: '7em', viewBox: '0 0 512 512', 'enable-background': 'new 0 0 512 512', space: 'preserve' },
							React.createElement('path', { d: 'M256.017 273.436L50.847 103.407h410.904L256.017 273.436z M255.983 328.898L50 158.244v250.349h412 V158.653L255.983 328.898z' })
						)
					)
				),
				React.createElement(
					'div',
					{ style: { width: '100%' } },
					React.createElement(
						'a',
						{ href: 'https://www.linkedin.com/pub/chad-franzen/a4/498/443' },
						React.createElement(
							'svg',
							{ version: '1.1', id: 'Layer_1', xmlns: 'http://www.w3.org/2000/svg', xlink: 'http://www.w3.org/1999/xlink', x: '0px', y: '0px', width: '7em', height: '7em', viewBox: '0 0 512 512', space: 'preserve' },
							React.createElement(
								'g',
								null,
								React.createElement(
									'g',
									null,
									React.createElement('path', { d: 'M182.8,384V212.9h-54.9V384H182.8L182.8,384z M157.4,187c18.3,0,29.7-13.1,29.7-29.5c-0.3-16.7-11.4-29.5-29.4-29.5c-18,0-29.7,12.8-29.7,29.5c0,16.4,11.4,29.5,29,29.5H157.4L157.4,187z' }),
									React.createElement('path', { d: 'M320.6,209c-29.1,0-41.6,16.4-49.6,27.8V213h-55v171h55v-97.4c0-5,0.4-10,1.9-13.5c4-10,13-20.3,28.2-20.3c19.9,0,27.9,15.3,27.9,37.7V384h55v-99.9C384,232.8,356.8,209,320.6,209z' })
								),
								React.createElement('path', { d: 'M417.2,64H96.8C79.3,64,64,76.6,64,93.9v321.1c0,17.4,15.3,32.9,32.8,32.9h320.3c17.6,0,30.8-15.6,30.8-32.9V93.9C448,76.6,434.7,64,417.2,64z M414,416c-1.1,0-313.1,0-314.9,0s-3.1-1.4-3.1-3.1S96,99.1,96,98s1-2,2-2s315,0,316,0s2,1,2,2c0,23.3,0,314.9,0,316C416,414.9,415.1,416,414,416z' })
							)
						)
					)
				)
			);
		}
	});

	exports['default'] = Contact;
	module.exports = exports['default'];
	/* Github */ /* Email */ /* LinkedIn */

/***/ }
/******/ ]);