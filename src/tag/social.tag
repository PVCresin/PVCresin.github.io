social
	ul.social
		li
			a(href='https://www.facebook.com/raika.toriyama')
				i.fab.fa-facebook-f.fa-2x
		li
			a(href='https://twitter.com/pvcresin/')
				i.fab.fa-twitter.fa-2x
		li
			a(href='https://github.com/pvcresin/')
				i.fab.fa-github.fa-2x
		li
			a(href='https://www.instagram.com/pvcresin/')
				i.fab.fa-instagram.fa-2x
		li
			a(href='http://pvcresin.hatenablog.com/')
				.icon-box.hatena
		li
			a(href='https://www.wantedly.com/users/18220619')
				.icon-box.wantedly

	style(scoped).
		a {
			color: #525252;
			vertical-align: sub;
			display: inline-block;
			width: 3rem;
		}
		a:hover {
			color: white;
		}
		.icon-box {
			margin: auto;
			width: 2rem;
			height: 2rem;
			background: #525252;
		}
		.icon-box:hover {
			background: white;
		}
		.hatena {
			mask-image: url(resources/hatena.svg);
			-webkit-mask-image: url(resources/hatena.svg);
		}
		.wantedly {
			mask-image: url(resources/wantedly.svg);
			-webkit-mask-image: url(resources/wantedly.svg);
		}