projectDetail
	.container
		section
			.video-frame(if='{project.video.length !== 0}')
				iframe(src="https://www.youtube.com/embed/{project.video}?rel=0"
						frameborder="0"
						allow="encrypted-media"
						allowfullscreen)
			.img-frame(if='{project.video.length === 0}')
				img(src='../resources/{project.img}')
			h1 {project.name}: {project.sub}
			tags(tags='{project.keywords}')
			.chapter
				h2 Abstract
				hr
			p {project.text}
			.chapter
				h2 Implementation
				hr
			p {project.implement}

	style(type='scss').
		:scope {
			min-height: 100vh;
			display: block;
			background: #2b2b2b;
			color: #efefef;
			padding: 0.75rem;
			> div > section {
				padding: 0.75rem;
				.video-frame {
					position: relative;
					width: 100%;
					padding-top: 56.25%;
					> iframe {
						position: absolute;
						top: 0;
						right: 0;
						width: 100%;
						height: 100%;
						background: black;
					}
				}
				.img-frame {
					width: 100%;
					> img {
						width: 100%;
						height: 100%;
						background: black;
					}
				}
				h1 {
					color: white;
					margin: 1rem 0;
					text-align: justify;
				}
				.chapter {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin: 1.5rem 0 1rem 0;
					> h2 {
						font-size: 1.5rem;
						margin-right: 0.5rem;
						color: white;
					}
					> hr {
						flex-grow: 1;
						border: 1.5px solid gray;
						border-radius: 1rem;
						min-width: 1rem;
						background: gray;
					}
				}
				p {
					margin: 0.6rem 0;
					text-align: justify;
				}
			}
		}
		@media (max-width: 768px) {
			h1 {
				font-size: 1.5rem;
			}
			h2 {
				font-size: 1.3rem;
			}
		}

	script.
		import tags from '../components/tags'
		import projectsArray from '../data'

		this.project = {
			name: '',
			sub: '',
			img: '',
			video: '',
			text: '',
			implement: '',
			keywords: []
		}

		this.on('route', projectName => {
			this.update({
				project: projectsArray.filter(d => d.name === projectName)[0]
			})

			const path = window.location.hash
			if (window.scrolls[`${path}`] === undefined) {
				window.scroll(0, 0)
			} else {
				window.scroll(0, window.scrolls[`${path}`])
			}
		})