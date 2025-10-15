const projects = [
    {
        id: 1,
        title: "Tourlis",
        semester: "1º Semestre",
        shortDescription: "Site sobre turismo sustentável com métricas avançadas",
        fullDescription: "Apoiado na disciplina de Desenvolvimento Web, e para iniciar meus conhecimentos em análise de dados, decidi criar uma plataforma informativa sobre turismo sustentável litorâneo, com mapa interativo sobre o comércio familiar litorâneo. Como requisito da disciplina o projeto inclui gamificação sobre o turismo sustentável e a agenda 2030.",
        technologies: ["HTML", "CSS", "JavaScript", "PowerBI"],
        features: [
            "Integração com PowerBI",
            "Gamificado (quiz)",
            "Responsivo",
            "Metodologia Ágil",
            "Mapa interativo do litoral"
        ],
        images: [
            "assets/img/projetos/tourlis.png",
            "assets/img/projetos/tourlis1.png",
            "assets/img/projetos/tourlis2.png",
            "assets/img/projetos/tourlis3.png"

        ],
        github: "https://github.com/gxbizz/fatecpi",
        demo: "https://gxbizz.github.io/fatecpi/"
    },
    {
        id: 2,
        title: "Michele Cortinas",
        semester: "2º Semestre",
        shortDescription: "E-commerce para atender clientes de uma loja de cortinas",
        fullDescription: "E-commerce completo desenvolvido para atender os clientes da loja Michele Cortinas. O projeto inclui sistema de cadastro, carrinho de compras, visualização de produtos com variações de cores e funcionalidade especial para solicitação de orçamentos personalizados de cortinas e persianas. Desenvolvido com foco em usabilidade e experiência do usuário.",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
        features: [
            "CRUD completo de produtos",
            "Função de recuperação de senha",
            "Carrinho de compras funcional",
            "Visualização de produto com cores variadas",
            "Solicitação de orçamento de cortinas e persianas",
            "Área administrativa"
        ],
        images: [
            "assets/img/projetos/michele-cortinas.png",
            "assets/img/projetos/michele-cortinas1.png",
            "assets/img/projetos/michele-cortinas2.png",
            "assets/img/projetos/michele-cortinas3.png"

        ],
        github: "https://github.com/Gabriel-barbos/Michele-Cortinas",
        demo: "assets/docs/MicheleCortinas.pdf"
    },
    {
        id: 3,
        title: "Dev-Hub",
        semester: "3º Semestre",
        shortDescription: "Rede social voltada para as pessoas da área de tecnologia",
        fullDescription: "Rede social desenvolvida especificamente para profissionais e estudantes da área de tecnologia. O projeto é focado na interação de desenvolvedores em um fórum online, permitindo que os usuários compartilhem seus projetos pessoais, façam postagens técnicas, comentem e participem de threads de discussão. Desenvolvido com arquitetura moderna utilizando Next.js no frontend e FastAPI no backend.",
        technologies: ["Next.js", "Python", "FastAPI", "MongoDB", "TypeScript"],
        features: [
            "Desenvolvido com FastAPI",
            "Lógica completa de postagens, comentários e threads",
            "Troca de tema (claro/escuro)",
            "Design responsivo",
            "Banco de dados MongoDB (não relacional)",
            "Perfis de usuário personalizáveis",
            "Feed de atividades"
        ],
        images: [
            "assets/img/projetos/devhub.png",
            "assets/img/projetos/devhub1.png",
            "assets/img/projetos/devhub2.png",
            "assets/img/projetos/devhub3.png"

        ],
        github: "https://github.com/Gabriel-barbos/Devhub",
        demo: "#"
    },
    {
        id: 4,
        title: "FateColeta",
        semester: "4º Semestre",
        shortDescription: "Plataforma Web para cadastro de pontos de coleta de reciclagem, conforme objetivos da agenda 2030 da ONU",
        fullDescription: "A proposta do projeto FateColeta é o desenvolvimento de uma plataforma web que possibilita a visualização e o cadastro de pontos de coleta de recicláveis, alinhado aos Objetivos de Desenvolvimento Sustentável da Agenda 2030 da ONU. A plataforma utiliza integração com Google Maps para localização dos pontos de coleta e Firebase para autenticação e armazenamento de dados em tempo real.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Google Maps API"],
        features: [
            "Integração com Firebase",
            "Integração com Google Maps API",
            "Cadastro e visualização de pontos de coleta",
            "Troca de temas e responsividade",
            "Sistema de autenticação",
            "Filtros por tipo de material reciclável",
            "Geolocalização"
        ],
        images: [
            "assets/img/projetos/fatecoleta.png",
            "assets/img/projetos/fatecoleta1.png",
            "assets/img/projetos/fatecoleta2.png",
            "assets/img/projetos/fatecoleta3.png"

        ],
        github: "https://github.com/gabrielmeiradev/fatecoleta",
        demo: "https://fatecoleta.vercel.app/"
    },
    {
        id: 5,
        title: "CampusFace",
        semester: "5º Semestre",
        shortDescription: "Aplicação mobile para controle de acessos com reconhecimento facial e QR code",
        fullDescription: "Com um olhar direcionado para as universidades, pensando nos sistemas tradicionais de entrada por catracas, surgiu o CampusFace. Uma aplicação mobile desenvolvida em React Native que permite o controle de acesso de pessoas em locais através da validação via QR Code e reconhecimento facial. O sistema inclui área administrativa com histórico completo de acessos e dashboard de monitoramento em tempo real.",
        technologies: ["React Native", "JavaScript", "Node.js", "MongoDB", "Face Recognition API"],
        features: [
            "Aplicação totalmente mobile",
            "Reconhecimento facial integrado",
            "Validação via QR Code",
            "Histórico de acessos para administradores",
            "Dashboard administrativo",
            "Tela de hub bem elaborada",
            "Notificações em tempo real",
            "Sistema de permissões de acesso"
        ],
        images: [
            "assets/img/projetos/campusface.png",
            "assets/img/projetos/campusface1.png",
            "assets/img/projetos/campusface2.png",
            "assets/img/projetos/campusface3.png"
        ],
        github: "https://github.com/Gabriel-barbos/CampusFace",
        demo: "#"
    }
];

function createProjectCards() {
    const container = document.getElementById('projectsContainer');


    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.onclick = () => openModal(project.id);

        card.innerHTML = `
            <div class="project-header">
                <h3>${project.title}</h3>
                <span class="semester-tag">${project.semester}</span>
            </div>
            <p class="project-description">${project.shortDescription}</p>
            <div class="tech-used">
                ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.github}" target="_blank" onclick="event.stopPropagation()">
                    <i class="fab fa-github"></i> Ver Código
                </a>
            </div>
        `;

        container.appendChild(card);
    });

    console.log(`✅ ${projects.length} projetos carregados com sucesso!`);
}

function openModal(projectId) {

    const project = projects.find(p => p.id === projectId);

    const modal = document.getElementById('projectModal');

    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalSemester').textContent = project.semester;
    document.getElementById('modalDescription').textContent = project.fullDescription;

    const demoBtn = document.getElementById('modalDemo');


    const techContainer = document.getElementById('modalTechnologies');
    techContainer.innerHTML = project.technologies.map(tech =>
        `<span>${tech}</span>`
    ).join('');

    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = project.features.map(feature =>
        `<li>${feature}</li>`
    ).join('');

    const imagesContainer = document.querySelector('.modal-images');
    imagesContainer.innerHTML = project.images.map((img, index) =>
        `<img src="${img}" alt="${project.title} - Screenshot ${index + 1}" 
              onerror="this.src='https://via.placeholder.com/800x450/c29595/ffffff?text=${encodeURIComponent(project.title)}'">`
    ).join('');

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

document.addEventListener('DOMContentLoaded', function () {

    createProjectCards();

    const closeBtn = document.querySelector('.modal-close');
    if (closeBtn) {
        closeBtn.onclick = closeModal;
        console.log('✅ Botão fechar modal configurado');
    }

    const modal = document.getElementById('projectModal');
    if (modal) {
        window.onclick = function (event) {
            if (event.target === modal) {
                closeModal();
            }
        }
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            const modal = document.getElementById('projectModal');
            if (modal && modal.style.display === 'block') {
                closeModal();
            }
        }
    });

    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         const href = this.getAttribute('href');
    //         if (href === '#' || href === '') return;

    //         e.preventDefault();
    //         const target = document.querySelector(href);
    //         if (target) {
    //             target.scrollIntoView({
    //                 behavior: 'smooth',
    //                 block: 'start'
    //             });
    //         }
    //     });
    // });

    const header = document.querySelector('header');

    if (header) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 100) {
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
            } else {
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
            }
        });
    }

});