/**
 * TAVARES & MACEDO ADVOCACIA
 * Scripts da Landing Page
 * Vanilla JavaScript (ES6+)
 */

document.addEventListener('DOMContentLoaded', () => {
  // ========================================
  // ELEMENTOS DO DOM
  // ========================================
  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const faqItems = document.querySelectorAll('.faq-item');
  const contactForm = document.getElementById('contactForm');
  const phoneInput = document.getElementById('phone');

  // ========================================
  // HEADER COM CLASSE SCROLLED E OCULTAR/MOSTRAR NO SCROLL
  // ========================================
  let lastScrollY = window.scrollY;
  const scrollThreshold = 100; // Distância mínima para começar a esconder

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Classe scrolled para mudar fundo
    if (currentScrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Lógica para esconder/mostrar (Auto-hide logic)
    const isMenuOpen = menuToggle.getAttribute('aria-expanded') === 'true';

    if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold && !isMenuOpen) {
      // Rolando para baixo, passou do limite e menu fechado
      if (!header.classList.contains('hidden')) {
        header.classList.add('hidden');
      }
    } else {
      // Rolando para cima, no topo ou menu aberto
      if (header.classList.contains('hidden')) {
        header.classList.remove('hidden');
      }
    }

    lastScrollY = currentScrollY;
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // ========================================
  // MENU MOBILE TOGGLE
  // ========================================
  const toggleMenu = () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.setAttribute('aria-hidden', isExpanded);
    document.body.style.overflow = isExpanded ? '' : 'hidden';
  };

  const closeMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  menuToggle.addEventListener('click', toggleMenu);

  // Fechar menu ao clicar em links de navegação
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Fechar menu ao clicar fora
  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
      closeMenu();
    }
  });

  // Fechar menu com tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.getAttribute('aria-hidden') === 'false') {
      closeMenu();
    }
  });

  // ========================================
  // ROLAGEM SUAVE (SMOOTH SCROLL)
  // ========================================
  const smoothScroll = (targetId) => {
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    const headerHeight = header.offsetHeight;
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  // Adicionar rolagem suave em todos os links com href começando com #
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href');
      if (targetId !== '#') {
        smoothScroll(targetId);
      }
    });
  });

  // ========================================
  // ACORDEÃO DE FAQ (ACCORDION)
  // ========================================
  const toggleFaq = (faqItem) => {
    const question = faqItem.querySelector('.faq-question');
    const answer = faqItem.querySelector('.faq-answer');
    const isExpanded = question.getAttribute('aria-expanded') === 'true';

    // Fechar todos os outros itens (accordion single)
    faqItems.forEach(item => {
      if (item !== faqItem) {
        const otherQuestion = item.querySelector('.faq-question');
        const otherAnswer = item.querySelector('.faq-answer');
        otherQuestion.setAttribute('aria-expanded', 'false');
        otherAnswer.setAttribute('aria-hidden', 'true');
      }
    });

    // Toggle do item atual
    question.setAttribute('aria-expanded', !isExpanded);
    answer.setAttribute('aria-hidden', isExpanded);
  };

  faqItems.forEach(faqItem => {
    const question = faqItem.querySelector('.faq-question');
    question.addEventListener('click', () => toggleFaq(faqItem));
  });

  // ========================================
  // REVELAÇÃO NO SCROLL (INTERSECTION OBSERVER)
  // ========================================
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  });

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });

  // ========================================
  // CARREGAMENTO PREGUIÇOSO (LAZY LOADING) DE IMAGENS
  // ========================================
  const lazyImages = document.querySelectorAll('img[data-src]');

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');

        // Remover o data-src após carregar
        img.addEventListener('load', () => {
          img.removeAttribute('data-src');
        });

        imageObserver.unobserve(img);
      }
    });
  }, {
    root: null,
    rootMargin: '50px',
    threshold: 0.01
  });

  lazyImages.forEach(img => {
    imageObserver.observe(img);
  });

  // ========================================
  // FORMATAÇÃO DE TELEFONE
  // ========================================
  const formatPhone = (value) => {
    // Remove tudo que não é dígito
    let cleaned = value.replace(/\D/g, '');

    // Limita a 11 dígitos
    cleaned = cleaned.substring(0, 11);

    // Aplica a máscara
    if (cleaned.length > 10) {
      // Com 9º dígito: (XX) XXXXX-XXXX
      cleaned = cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (cleaned.length > 6) {
      // Sem 9º dígito: (XX) XXXX-XXXX
      cleaned = cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else if (cleaned.length > 2) {
      // Parcial: (XX) XXXX
      cleaned = cleaned.replace(/(\d{2})(\d+)/, '($1) $2');
    } else if (cleaned.length > 0) {
      // Apenas DDD: (XX
      cleaned = cleaned.replace(/(\d+)/, '($1');
    }

    return cleaned;
  };

  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      e.target.value = formatPhone(e.target.value);
    });
  }

  // ========================================
  // VALIDAÇÃO DE FORMULÁRIO
  // ========================================
  const validators = {
    name: (value) => {
      if (!value.trim()) return 'Nome é obrigatório';
      if (value.trim().length < 3) return 'Nome deve ter pelo menos 3 caracteres';
      return '';
    },
    email: (value) => {
      if (!value.trim()) return 'E-mail é obrigatório';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return 'E-mail inválido';
      return '';
    },
    phone: (value) => {
      if (!value.trim()) return 'Telefone é obrigatório';
      const cleaned = value.replace(/\D/g, '');
      if (cleaned.length < 10) return 'Telefone deve ter pelo menos 10 dígitos';
      return '';
    },
    interest: (value) => {
      if (!value) return 'Selecione uma área de interesse';
      return '';
    }
  };

  const showFieldError = (fieldId, message) => {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(`${fieldId}-error`);

    if (field) {
      field.classList.add('error');
    }
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.classList.add('visible');
    }
  };

  const clearFieldError = (fieldId) => {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(`${fieldId}-error`);

    if (field) {
      field.classList.remove('error');
    }
    if (errorElement) {
      errorElement.textContent = '';
      errorElement.classList.remove('visible');
    }
  };

  const clearAllErrors = () => {
    ['name', 'email', 'phone', 'interest'].forEach(clearFieldError);
  };

  const showFormFeedback = (type, message) => {
    const feedback = document.getElementById('form-feedback');
    feedback.className = 'form-feedback';
    feedback.classList.add(type);
    feedback.textContent = message;
  };

  const hideFormFeedback = () => {
    const feedback = document.getElementById('form-feedback');
    feedback.className = 'form-feedback';
    feedback.textContent = '';
  };

  const setSubmitLoading = (isLoading) => {
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoader = submitBtn.querySelector('.btn-loader');

    submitBtn.disabled = isLoading;
    btnText.hidden = isLoading;
    btnLoader.hidden = !isLoading;
  };

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      hideFormFeedback();
      clearAllErrors();

      // Validação dos campos
      const formData = new FormData(contactForm);
      let hasErrors = false;

      for (const [fieldName, validator] of Object.entries(validators)) {
        const value = formData.get(fieldName);
        const error = validator(value);

        if (error) {
          showFieldError(fieldName, error);
          hasErrors = true;
        }
      }

      if (hasErrors) {
        showFormFeedback('error', 'Por favor, corrija os campos destacados.');
        return;
      }

      // Preparar dados para envio
      const data = {
        name: formData.get('name').trim(),
        email: formData.get('email').trim(),
        phone: formData.get('phone').trim(),
        interest: formData.get('interest'),
        message: formData.get('message')?.trim() || ''
      };

      setSubmitLoading(true);

      try {
        // ========================================
        // CONFIGURAÇÃO DO ENVIO
        // ========================================
        // Substitua a URL abaixo pelo endpoint real do seu backend
        // Exemplos: Formspree, Netlify Forms, ou seu próprio servidor

        const ENDPOINT_URL = '/api/contato'; // Configure aqui o endpoint real

        // Descomente e ajuste conforme sua necessidade:

        // Opção 1: Envio para endpoint customizado
        // const response = await fetch(ENDPOINT_URL, {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(data)
        // });

        // Opção 2: Envio via Formspree
        // const response = await fetch('https://formspree.io/f/SEU_FORM_ID', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(data)
        // });

        // Opção 3: Envio via EmailJS (requer SDK instalado)
        // await emailjs.send('service_id', 'template_id', data);

        // Simulação de envio bem-sucedido (remova em produção)
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Se o envio for bem-sucedido, redireciona para o WhatsApp
        const whatsappMsg = `Olá, me chamo ${data.name}, vim através do site e gostaria de uma informação.

- E-mail: ${data.email}
- Telefone: ${data.phone}
- Assunto/Serviço: ${data.interest}
- Mensagem/Situação: ${data.message}`;
        const whatsappUrl = `https://wa.me/552132814724?text=${encodeURIComponent(whatsappMsg)}`;

        showFormFeedback('success', 'Formulário validado! Redirecionando para o WhatsApp...');

        setTimeout(() => {
          window.open(whatsappUrl, '_blank');
          contactForm.reset();
        }, 1000);

      } catch (error) {
        console.error('Erro ao processar formulário:', error);
        showFormFeedback('error', 'Erro ao processar mensagem. Por favor, tente novamente ou entre em contato pelo telefone.');
      } finally {
        setSubmitLoading(false);
      }
    });

    // Limpar erros ao digitar
    ['name', 'email', 'phone', 'interest'].forEach(fieldId => {
      const field = document.getElementById(fieldId);
      if (field) {
        field.addEventListener('input', () => clearFieldError(fieldId));
        field.addEventListener('change', () => clearFieldError(fieldId));
      }
    });
  }

  // ========================================
  // ANIMAÇÃO DE CONTADOR (OPCIONAL)
  // ========================================
  const animateCounters = () => {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
      const target = parseInt(counter.textContent, 10);
      if (isNaN(target)) return;

      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;

      const updateCounter = () => {
        current += step;
        if (current < target) {
          counter.textContent = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };

      updateCounter();
    });
  };

  // ========================================
  // INICIALIZAÇÃO
  // ========================================
  // Executar animações e verificações iniciais
  handleScroll();

  // Observar seção "Sobre" para animar contadores
  const sobreSection = document.getElementById('sobre');
  if (sobreSection) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counterObserver.observe(sobreSection);
  }

  console.log('Tavares & Macedo Advocacia - Landing Page carregada com sucesso!');
});

// ========================================
// FUNÇÕES UTILITÁRIAS GLOBAIS
// ========================================

/**
 * Função Debounce para otimizar eventos de scroll/resize
 * @param {Function} func - Função a ser executada
 * @param {number} wait - Tempo de espera em ms
 * @returns {Function}
 */
function debounce(func, wait = 100) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Função Throttle para limitar a frequência de execução
 * @param {Function} func - Função a ser executada
 * @param {number} limit - Limite de tempo em ms
 * @returns {Function}
 */
function throttle(func, limit = 100) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Exportar funções para uso global, se necessário
window.TavaresMacedo = {
  debounce,
  throttle,
  smoothScroll: (targetId) => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
