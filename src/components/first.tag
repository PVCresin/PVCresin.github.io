first
	nav
		//- ul
		//- 	li
		//- 		a(href='/') HOME
		//- 	li
		//- 		a(href='#about') ABOUT
		//- 	li
		//- 		a(href='#projects') PROJECTS
	.container
		h1 Raika Toriyama
		p Android / Web Developer
		social
	.container
		.arrow
			i.fas.fa-chevron-down.fa-3x

	style(type='scss').
		:scope {
			text-align: center;
			background: #1a1819;
			color: white;
			min-height: 100vh;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			> nav {
				margin: 0 auto;
				width: 100%;
				max-width: calc(1200px * 0.8);
				line-height: 3rem;
				> ul {
					display: flex;
					justify-content: space-around;
					> li {
						display: inline-block;
					}
				}
			}
			> .container {
				> h1 {
					font-size: calc(1.0rem + 250%);
					margin: 0;
				}
				> p {
					font-size: 1.5rem;
					font-family: serif;
					margin-top: 1rem;
				}
				.arrow {
					display: inline-block;
				}
			}
		}
		@media (max-width: 768px) {
			.container {
				> h1 {
					font-size: 2.5rem;
				}
				> p {
					font-size: 1.2rem;
					margin-top: 0.5rem;
				}
			}
		}

	script.
		import social from './social'