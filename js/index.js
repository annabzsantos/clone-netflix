document.addEventListener('DOMContentLoaded', () => {
	const perfilLinks = document.querySelectorAll('.item-perfil a');
	const addProfileButton = document.getElementById('add-profile-button');
	const manageProfilesButton = document.getElementById('manage-profiles-button');

	perfilLinks.forEach((link) => {
		link.addEventListener('click', () => {
			const imagem = link.querySelector('img');
			const nome = link.querySelector('figcaption');

			if (!imagem || !nome) return;

			localStorage.setItem('perfilAtivoNome', nome.textContent.trim());
			localStorage.setItem('perfilAtivoImagem', imagem.getAttribute('src'));
		});
	});

	if (addProfileButton) {
		addProfileButton.addEventListener('click', () => {
			window.alert('Funcionalidade de adicionar perfil em desenvolvimento.');
		});
	}

	if (manageProfilesButton) {
		manageProfilesButton.addEventListener('click', () => {
			const isManaging = document.body.classList.toggle('is-managing-profiles');
			manageProfilesButton.textContent = isManaging ? 'Concluído' : 'Gerenciar perfis';
			manageProfilesButton.setAttribute('aria-pressed', String(isManaging));
		});
	}
});
