footer
	.container
		social
		p © 2018 pvcresin

	style(type='scss').
		:scope {
			display: block;
			background: #0f0f0f;
			color: white;
			> .container {
				text-align: center;
				padding: 1rem 0;
				> p {
					color: #525252;
					padding-bottom: 1rem;
				}
			}
		}

	script.
		import social from './social'