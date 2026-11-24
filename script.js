/* =========================================================
   URBAN FORM — SCRIPT.JS
   ========================================================= */

/* =========================
   1. PRODUTOS
   ========================= */

const products = [
    {
        id: 1,
        name: "T-shirt Oversized Core",
        category: "Camisetas",
        price: 119.9,
        tag: "BEST SELLER",
        sizes: ["P", "M", "G", "GG"],
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=85"
    },
    {
        id: 2,
        name: "T-shirt Graphic 1998",
        category: "Camisetas",
        price: 139.9,
        tag: "NOVO",
        sizes: ["P", "M", "G", "GG"],
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=85"
    },
    {
        id: 3,
        name: "Calça Cargo Utility",
        category: "Calças",
        price: 229.9,
        tag: "",
        sizes: ["P", "M", "G", "GG"],
        image: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=85"
    },
    {
        id: 4,
        name: "Moletom Essential",
        category: "Moletons",
        price: 249.9,
        tag: "NOVO",
        sizes: ["P", "M", "G", "GG"],
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=85"
    },
      {
    id: 13,
    name: "Moletom Oversized Black",
    category: "Moletons",
    price: 279.90,
    tag: "BEST SELLER",
    sizes: ["P", "M", "G", "GG"],
    image: "https://images.pexels.com/photos/19697348/pexels-photo-19697348.jpeg"
},
{
    id: 14,
    name: "Hoodie Urban Essential",
    category: "Moletons",
    price: 299.90,
    tag: "NOVO",
    sizes: ["P", "M", "G", "GG"],
    image: "https://images.pexels.com/photos/30257619/pexels-photo-30257619.jpeg"
},
{
    id: 15,
    name: "Moletom Street Culture",
    category: "Moletons",
    price: 319.90,
    tag: "",
    sizes: ["P", "M", "G", "GG"],
    image: "https://images.pexels.com/photos/34582210/pexels-photo-34582210.jpeg"
},
{
    id: 16,
    name: "Hoodie Heavy Cotton",
    category: "Moletons",
    price: 329.90,
    tag: "EXCLUSIVO",
    sizes: ["P", "M", "G", "GG"],
    image: "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?auto=format&fit=crop&w=800&q=85"
},
{
    id: 17,
    name: "Moletom Vintage Wash",
    category: "Moletons",
    price: 289.90,
    tag: "NOVO",
    sizes: ["P", "M", "G", "GG"],
    image: "https://images.pexels.com/photos/34848263/pexels-photo-34848263.jpeg"
},
    {
        id: 5,
        name: "Boné 6 Panel Logo",
        category: "Acessórios",
        price: 89.9,
        tag: "",
        sizes: ["M", "G"],
        image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=800&q=85"
    },
    {
        id: 6,
        name: "T-shirt Heavy Cotton",
        category: "Camisetas",
        price: 149.9,
        tag: "LIMITADO",
        sizes: ["P", "M", "G", "GG"],
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=85"
    },
    {
        id: 7,
        name: "Calça Baggy Denim",
        category: "Calças",
        price: 259.9,
        tag: "",
        sizes: ["P", "M", "G", "GG"],
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=85"
        
    },
        
    {
        id: 8,
        name: "Shoulder Bag Urban",
        category: "Acessórios",
        price: 99.9,
        tag: "",
        sizes: ["M"],
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=85"
    },
    {
        id: 9,
        name: "Sneaker Urban Classic",
        category: "Tênis",
        price: 299.9,
        tag: "NOVO",
        sizes: ["38", "39", "40", "41", "42", "43"],
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=85"
    },
    {
        id: 10,
        name: "Street Runner Red",
        category: "Tênis",
        price: 349.9,
        tag: "BEST SELLER",
        sizes: ["38", "39", "40", "41", "42", "43"],
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=85"
    },
    {
        id: 11,
        name: "Sneaker Retro",
        category: "Tênis",
        price: 279.9,
        tag: "",
        sizes: ["38", "39", "40", "41", "42", "43"],
        image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=800&q=85"
    },
    {
        id: 12,
        name: "Urban Sport",
        category: "Tênis",
        price: 389.9,
        tag: "EXCLUSIVO",
        sizes: ["38", "39", "40", "41", "42", "43"],
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=800&q=85"
    }
];


/* =========================
   2. ESTADO E UTILITÁRIOS
   ========================= */

const state = {
    category: "Todos",
    size: "Todos",
    search: "",
    cart: [],
    favorites: new Set()
};

const $ = (selector, root = document) =>
    root.querySelector(selector);

const $$ = (selector, root = document) =>
    [...root.querySelectorAll(selector)];

const money = value =>
    Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

function getProduct(id) {
    return products.find(product => product.id === Number(id));
}

function showToast(message) {
    const toast = $("#toast");

    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(showToast.timer);

    showToast.timer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2200);
}


/* =========================
   3. CATÁLOGO E FILTROS
   ========================= */

function getVisibleProducts() {

    const searchTerm = state.search
        .trim()
        .toLocaleLowerCase("pt-BR");

    const visible = products.filter(product => {

        const matchesCategory =
            state.category === "Todos" ||
            product.category === state.category;

        const matchesSize =
            state.size === "Todos" ||
            product.sizes.includes(state.size);

        const matchesSearch =
            !searchTerm ||
            product.name.toLocaleLowerCase("pt-BR").includes(searchTerm) ||
            product.category.toLocaleLowerCase("pt-BR").includes(searchTerm);

        return matchesCategory && matchesSize && matchesSearch;
    });

    const sortSelect = $("#sortSelect");
    const sort = sortSelect ? sortSelect.value : "default";

    if (sort === "low") {
        visible.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
        visible.sort((a, b) => b.price - a.price);
    }

    return visible;
}


function renderProducts() {

    const grid = $("#productGrid");
    const emptyState = $("#emptyState");

    if (!grid) return;

    const visible = getVisibleProducts();

    grid.innerHTML = visible.map(product => `
        <article class="product-card">

            <div class="product-image-wrap">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

                ${product.tag
                    ? `<span class="product-tag">${product.tag}</span>`
                    : ""
                }

                <button
                    class="favorite ${state.favorites.has(product.id) ? "active" : ""}"
                    aria-label="Favoritar ${product.name}"
                    data-favorite="${product.id}"
                    type="button"
                >
                    ${state.favorites.has(product.id) ? "♥" : "♡"}
                </button>

                <button
                    class="quick-add"
                    data-add="${product.id}"
                    type="button"
                >
                    ADICIONAR À SACOLA +
                </button>

            </div>

            <div class="product-info">

                <p class="product-category">
                    ${product.category.toUpperCase()}
                </p>

                <h3 class="product-name">
                    ${product.name}
                </h3>

                <div class="product-bottom">

                    <strong class="product-price">
                        ${money(product.price)}
                    </strong>

                    <span class="product-sizes">
                        ${product.sizes.join(" · ")}
                    </span>

                </div>

            </div>

        </article>
    `).join("");

    if (emptyState) {
        emptyState.hidden = visible.length > 0;
    }
}


function setCategory(category) {

    state.category = category;

    $$(".filter-btn").forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.filter === category
        );
    });

    renderProducts();
}


function resetFilters() {

    state.category = "Todos";
    state.size = "Todos";
    state.search = "";

    $$(".size-btn").forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.size === "Todos"
        );
    });

    $$("#searchPanel input, #searchOverlay input, #searchInput")
        .forEach(input => {
            input.value = "";
        });

    setCategory("Todos");
}


/* =========================
   4. SACOLA
   ========================= */

function addToCart(id) {

    const product = getProduct(id);

    if (!product) return;

    const existingItem = state.cart.find(
        item => item.id === product.id
    );

    if (existingItem) {
        existingItem.quantity++;
    } else {
        state.cart.push({
            id: product.id,
            quantity: 1
        });
    }

    renderCart();

    showToast("Peça adicionada à sua sacola.");
}


function removeFromCart(id) {

    state.cart = state.cart.filter(
        item => item.id !== Number(id)
    );

    renderCart();
}


function renderCart() {

    const count = state.cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    const total = state.cart.reduce((sum, item) => {

        const product = getProduct(item.id);

        return sum + (
            product
                ? product.price * item.quantity
                : 0
        );

    }, 0);

    const cartCount = $("#cartCount");
    const drawerCount = $("#drawerCount");
    const cartTotal = $("#cartTotal");
    const cartItems = $("#cartItems");

    if (cartCount) cartCount.textContent = count;

    if (drawerCount) {
        drawerCount.textContent = `(${count})`;
    }

    if (cartTotal) {
        cartTotal.textContent = money(total);
    }

    if (!cartItems) return;

    if (count === 0) {

        cartItems.innerHTML = `
            <p class="cart-empty">
                Sua sacola está vazia.
            </p>
        `;

        return;
    }

    cartItems.innerHTML = state.cart.map(item => {

        const product = getProduct(item.id);

        if (!product) return "";

        return `
            <div class="cart-item">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div>

                    <h3>${product.name}</h3>

                    <p>
                        Quantidade: ${item.quantity}
                    </p>

                    <strong>
                        ${money(product.price * item.quantity)}
                    </strong>

                    <br>

                    <button
                        class="remove-item"
                        data-remove="${product.id}"
                        type="button"
                    >
                        REMOVER
                    </button>

                </div>

            </div>
        `;

    }).join("");
}


function toggleCart(open) {

    const drawer = $("#cartDrawer");
    const backdrop = $("#cartBackdrop");

    if (!drawer || !backdrop) return;

    drawer.classList.toggle("open", open);
    backdrop.classList.toggle("open", open);

    drawer.setAttribute(
        "aria-hidden",
        String(!open)
    );

    document.body.style.overflow =
        open ? "hidden" : "";
}


/* =========================
   5. FAVORITOS
   ========================= */

function toggleFavorite(id) {

    const productId = Number(id);

    if (!getProduct(productId)) return;

    if (state.favorites.has(productId)) {
        state.favorites.delete(productId);
    } else {
        state.favorites.add(productId);
    }

    const isFavorite = state.favorites.has(productId);

    $$(
        `[data-favorite="${productId}"],
         [data-feature-favorite="${productId}"]`
    ).forEach(button => {

        button.classList.toggle("active", isFavorite);

        button.textContent = isFavorite
            ? "♥"
            : "♡";

    });
}


/* =========================
   6. PESQUISA
   ========================= */

function openSearch() {

    const overlay = $("#searchOverlay");
    const panel = $("#searchPanel");

    if (overlay) {
        overlay.classList.add("open");
    } else if (panel) {
        panel.classList.add("open");
    }

    const input =
        $("#searchOverlay input") ||
        $("#searchPanel input") ||
        $("#searchInput");

    if (input) {
        setTimeout(() => input.focus(), 50);
    }
}


function closeSearch() {

    const overlay = $("#searchOverlay");
    const panel = $("#searchPanel");

    if (overlay) {
        overlay.classList.remove("open");
    }

    if (panel) {
        panel.classList.remove("open");
    }
}


function renderSearchResults(query) {

    const resultsContainer = $("#searchResults");

    if (!resultsContainer) return;

    const term = query
        .trim()
        .toLocaleLowerCase("pt-BR");

    if (!term) {
        resultsContainer.innerHTML = "";
        return;
    }

    const results = products.filter(product =>

        product.name.toLocaleLowerCase("pt-BR").includes(term) ||
        product.category.toLocaleLowerCase("pt-BR").includes(term)

    );

    if (results.length === 0) {

        resultsContainer.innerHTML = `
            <p>Nenhum produto encontrado.</p>
        `;

        return;
    }

    resultsContainer.innerHTML = results.map(product => `

        <button
            class="search-result"
            type="button"
            data-search-product="${product.id}"
        >

            <img src="${product.image}" alt="">

            <span>

                <strong>${product.name}</strong>

                <small>
                    ${product.category} · ${money(product.price)}
                </small>

            </span>

        </button>

    `).join("");
}


function updateSearch(value) {

    state.search = value
        .trim()
        .toLocaleLowerCase("pt-BR");

    renderProducts();
    renderSearchResults(value);
}


/* =========================
   7. CARROSSEL DE DESTAQUES
   ========================= */

let featuredCategory = "Todos";


function updateCarouselButtons() {

    const track = $("#featuredTrack");
    const prevButton = $("#carouselPrev");
    const nextButton = $("#carouselNext");

    if (!track) return;

    if (prevButton) {
        prevButton.disabled = track.scrollLeft <= 2;
    }

    if (nextButton) {

        nextButton.disabled =
            track.scrollLeft + track.clientWidth >=
            track.scrollWidth - 2;

    }
}


function renderFeatured() {

    const featuredTrack = $("#featuredTrack");

    if (!featuredTrack) return;

    const featuredProducts = products.filter(product =>

        featuredCategory === "Todos" ||
        product.category === featuredCategory

    );

    featuredTrack.innerHTML = featuredProducts.map(product => `

        <article class="featured-card">

            <div class="featured-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

                <button
                    class="featured-heart ${state.favorites.has(product.id) ? "active" : ""}"
                    data-feature-favorite="${product.id}"
                    aria-label="Favoritar ${product.name}"
                    type="button"
                >
                    ${state.favorites.has(product.id) ? "♥" : "♡"}
                </button>

            </div>

            <div class="featured-info">

                <p>
                    ${product.category.toUpperCase()}
                </p>

                <h3>
                    ${product.name}
                </h3>

                <strong>
                    ${money(product.price)}
                </strong>

            </div>

        </article>

    `).join("");

    requestAnimationFrame(updateCarouselButtons);
}


/* =========================
   8. IDIOMAS
   ========================= */

const translations = {

    pt: {
        new: "NOVIDADES",
        clothes: "ROUPAS",
        collections: "COLEÇÕES",
        brand: "A MARCA",
        featured: "DESTAQUES DA URBAN FORM.",
        seeMore: "VER MAIS",
        explore: "EXPLORE NOSSO UNIVERSO.",
        brandDescription: "Vista sua atitude. Faça seu próprio caminho."
    },

    en: {
        new: "NEW ARRIVALS",
        clothes: "CLOTHING",
        collections: "COLLECTIONS",
        brand: "ABOUT US",
        featured: "URBAN FORM HIGHLIGHTS.",
        seeMore: "SEE MORE",
        explore: "EXPLORE OUR UNIVERSE.",
        brandDescription: "Wear your attitude. Make your own way."
    }

};


let currentLanguage = "pt";


function changeLanguage(language) {

    if (!translations[language]) return;

    currentLanguage = language;

    $$("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        if (translations[language][key]) {

            element.textContent =
                translations[language][key];

        }

    });

    const currentLanguageLabel = $("#currentLanguage");

    if (currentLanguageLabel) {
        currentLanguageLabel.textContent =
            language.toUpperCase();
    }

    document.documentElement.lang =
        language === "pt" ? "pt-BR" : "en";

    try {
        localStorage.setItem("urbanLanguage", language);
    } catch (error) {
        // O site continua funcionando sem armazenamento local.
    }
}


/* =========================
   9. INICIALIZAÇÃO
   ========================= */

function initUrbanForm() {

    /* FILTROS DO CATÁLOGO */

    const filterTabs = $("#filterTabs");

    if (filterTabs) {

        filterTabs.addEventListener("click", event => {

            const button = event.target.closest("[data-filter]");

            if (button) {
                setCategory(button.dataset.filter);
            }

        });

    }


/* CATEGORIAS DO SITE E MEGA MENU */

document.addEventListener("click", event => {

    const categoryLink = event.target.closest("[data-category-link]");

    if (!categoryLink) return;

    event.preventDefault();

    const category = categoryLink.dataset.categoryLink;

    // Aplica o filtro correspondente
    setCategory(category);

    // Fecha os menus abertos
    $$(".has-mega").forEach(menu => {
        menu.classList.remove("is-open");
    });

    // Leva o usuário até o catálogo
    const productSection = document.querySelector("#produtos");

    if (productSection) {

        productSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

});


    /* TAMANHOS */

    $$(".size-btn").forEach(button => {

        button.addEventListener("click", () => {

            state.size = button.dataset.size || "Todos";

            $$(".size-btn").forEach(item => {

                item.classList.toggle(
                    "active",
                    item === button
                );

            });

            renderProducts();

        });

    });


    /* ORDENAÇÃO */

    const sortSelect = $("#sortSelect");

    if (sortSelect) {
        sortSelect.addEventListener("change", renderProducts);
    }


    /* LIMPAR FILTROS */

    const clearFilters = $("#clearFilters");

    if (clearFilters) {
        clearFilters.addEventListener("click", resetFilters);
    }


    /* CLIQUES NOS PRODUTOS */

    const productGrid = $("#productGrid");

    if (productGrid) {

        productGrid.addEventListener("click", event => {

            const addButton = event.target.closest("[data-add]");

            const favoriteButton =
                event.target.closest("[data-favorite]");

            if (addButton) {
                addToCart(addButton.dataset.add);
            }

            if (favoriteButton) {
                toggleFavorite(favoriteButton.dataset.favorite);
            }

        });

    }


    /* SACOLA */

    const cartToggle = $("#cartToggle");
    const cartClose = $("#cartClose");
    const cartBackdrop = $("#cartBackdrop");
    const cartItems = $("#cartItems");
    const checkoutButton = $("#checkoutBtn");

    if (cartToggle) {
        cartToggle.addEventListener("click", () => toggleCart(true));
    }

    if (cartClose) {
        cartClose.addEventListener("click", () => toggleCart(false));
    }

    if (cartBackdrop) {
        cartBackdrop.addEventListener("click", () => toggleCart(false));
    }

    if (cartItems) {

        cartItems.addEventListener("click", event => {

            const removeButton = event.target.closest("[data-remove]");

            if (removeButton) {
                removeFromCart(removeButton.dataset.remove);
            }

        });

    }

    if (checkoutButton) {

        checkoutButton.addEventListener("click", () => {

            if (state.cart.length === 0) {

                showToast("Sua sacola ainda está vazia.");

                return;
            }

            showToast(
                "Demonstração: conecte um sistema de pagamento para vender."
            );

        });

    }


    /* PESQUISA */

    const searchToggle = $("#searchToggle");

    const closeSearchButton =
        $("#closeSearch") || $("#searchClose");

    const clearSearchButton = $("#clearSearch");

    if (searchToggle) {
        searchToggle.addEventListener("click", openSearch);
    }

    if (closeSearchButton) {
        closeSearchButton.addEventListener("click", closeSearch);
    }

    const searchFields = new Set([

        ...$$("[data-search-field]"),

        ...($("#searchOverlay")
            ? $$("#searchOverlay input")
            : []),

        ...($("#searchPanel")
            ? $$("#searchPanel input")
            : []),

        ...($("#searchInput")
            ? [$("#searchInput")]
            : [])

    ]);

    searchFields.forEach(input => {

        input.addEventListener("input", () => {

            updateSearch(input.value);

        });

    });

    if (clearSearchButton) {

        clearSearchButton.addEventListener("click", () => {

            searchFields.forEach(input => {
                input.value = "";
            });

            updateSearch("");

        });

    }


    /* RESULTADOS DA PESQUISA */

    const searchResults = $("#searchResults");

    if (searchResults) {

        searchResults.addEventListener("click", event => {

            const resultButton =
                event.target.closest("[data-search-product]");

            if (!resultButton) return;

            const product = getProduct(
                resultButton.dataset.searchProduct
            );

            if (!product) return;

            closeSearch();

            setCategory("Todos");

            const productSection = $("#produtos");

            if (productSection) {

                productSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    }


    /* FECHAR PESQUISA CLICANDO NO FUNDO */

    const searchOverlay = $("#searchOverlay");

    if (searchOverlay) {

        searchOverlay.addEventListener("click", event => {

            if (event.target === searchOverlay) {
                closeSearch();
            }

        });

    }


    /* TECLA ESC */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            closeSearch();

            toggleCart(false);

        }

    });


    /* FILTROS DO CARROSSEL */

    $$(".featured-filter").forEach(button => {

        button.addEventListener("click", () => {

            featuredCategory =
                button.dataset.featureFilter || "Todos";

            $$(".featured-filter").forEach(item => {

                item.classList.toggle(
                    "active",
                    item === button
                );

            });

            const track = $("#featuredTrack");

            if (track) {

                track.scrollTo({
                    left: 0,
                    behavior: "smooth"
                });

            }

            renderFeatured();

        });

    });


    /* FAVORITOS DO CARROSSEL */

    const featuredTrack = $("#featuredTrack");

    if (featuredTrack) {

        featuredTrack.addEventListener("click", event => {

            const favoriteButton =
                event.target.closest("[data-feature-favorite]");

            if (favoriteButton) {

                toggleFavorite(
                    favoriteButton.dataset.featureFavorite
                );

            }

        });

        featuredTrack.addEventListener(
            "scroll",
            updateCarouselButtons
        );

    }


    /* SETAS DO CARROSSEL */

    const prevButton = $("#carouselPrev");
    const nextButton = $("#carouselNext");

    if (prevButton && featuredTrack) {

        prevButton.addEventListener("click", () => {

            featuredTrack.scrollBy({
                left: -featuredTrack.clientWidth * 0.8,
                behavior: "smooth"
            });

        });

    }

    if (nextButton && featuredTrack) {

        nextButton.addEventListener("click", () => {

            featuredTrack.scrollBy({
                left: featuredTrack.clientWidth * 0.8,
                behavior: "smooth"
            });

        });

    }

    window.addEventListener("resize", updateCarouselButtons);


    /* MENU MOBILE */

    const menuToggle = $("#menuToggle");
    const nav = $("#mainNav");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", () => {

            const isOpen = nav.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        });

        $$("a", nav).forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* NEWSLETTER */

    const newsletterForm = $("#newsletterForm");

    if (newsletterForm) {

        newsletterForm.addEventListener("submit", event => {

            event.preventDefault();

            showToast("Obrigado por se inscrever!");

            newsletterForm.reset();

        });

    }


    /* IDIOMA */

    const languageToggle = $("#languageToggle");

    if (languageToggle) {

        languageToggle.addEventListener("click", () => {

            const newLanguage =
                currentLanguage === "pt" ? "en" : "pt";

            changeLanguage(newLanguage);

        });

    }


    /* RENDERIZAÇÃO INICIAL */

    renderProducts();

    renderCart();

    renderFeatured();

    updateCarouselButtons();


    /* RECUPERAR IDIOMA SALVO */

    try {

        const savedLanguage =
            localStorage.getItem("urbanLanguage") || "pt";

        changeLanguage(savedLanguage);

    } catch (error) {

        changeLanguage("pt");

    }
    /* MEGA MENU */

const megaMenuItems = $$(".has-mega");

megaMenuItems.forEach(item => {

    const button = $(".nav-link", item);

    if (!button) return;

    button.addEventListener("click", () => {

        const isOpen = item.classList.contains("is-open");

        megaMenuItems.forEach(menu => {
            menu.classList.remove("is-open");
        });

        if (!isOpen) {
            item.classList.add("is-open");
        }

    });

});

document.addEventListener("click", event => {

    if (!event.target.closest(".has-mega")) {

        megaMenuItems.forEach(item => {
            item.classList.remove("is-open");
        });

    }

});

}


/* =========================
   10. EXECUTAR SCRIPT
   ========================= */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        initUrbanForm
    );

} else {

    initUrbanForm(
      
    );

}