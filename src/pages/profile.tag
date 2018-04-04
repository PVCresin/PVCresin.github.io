profile
	section
		.container
			h2.section-title Profile
			about
			like
			skills
			education
	footer

	style(type='scss').
		:scope {
			display: block;
			background: #2b2b2b;
			color: #efefef;
		}

	script.
		import about from '../components/about'
		import education from '../components/education'
		import skills from '../components/skills'
		import like from '../components/like'
		import scroll from '../js/scroll'

		this.on('route', () => {
			scroll.move()
		})