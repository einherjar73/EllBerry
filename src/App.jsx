import { useState } from "react";
import "./App.css";

const translations = {
  ka: {
    home: "მთავარი",
    menu: "ჩვენი მენიუ",
    catering: "ალაფურშეტი",
    aboutNav: "ჩვენ შესახებ",
    contactNav: "კონტაქტი",
    eyebrow: "ახალი • მცენარეული • სიყვარულით მომზადებული",
    title1: "ბუნებრივი გემო.",
    title2: "ნამდვილი სიამოვნება.",
    description:
      "გემრიელი ვეგანური კერძები ყოველდღიური მომენტებისთვის, განსაკუთრებული დღესასწაულებისა და დაუვიწყარი შეხვედრებისთვის.",
    explore: "დაათვალიერე მენიუ ↗",
    plan: "დაგეგმე ღონისძიება",
    note: "ახლად მომზადებული. 100% მცენარეული.",
    sectionEyebrow: "გემრიელი კერძები შენთვის",
    sectionTitle: "ყველა შემთხვევისთვის",
    sectionDescription: "გემრიელი კერძებიდან დაუვიწყარ სუფრამდე.",
    dishes: "ვეგანური კერძები",
    dishesDesc: "ახალი ინგრედიენტებითა და სიყვარულით მომზადებული კერძები.",
    buffets: "ალაფურშეტი და კეტერინგი",
    buffetsDesc:
      "გემრიელი სუფრა წვეულებების, ღონისძიებებისა და შეხვედრებისთვის.",
    custom: "ინდივიდუალური შეკვეთა",
    customDesc:
      "გაქვს განსაკუთრებული სურვილი? ერთად შევქმნათ შენთვის სასურველი მენიუ.",
    discover: "გაიგე მეტი ↗",
    planEvent: "დაგეგმე ღონისძიება ↗",
    talk: "დაგვიკავშირდი ↗",
    aboutEyebrow: "საკვების ახალი გამოცდილება",
    aboutTitle1: "გემრიელი კერძები.",
    aboutTitle2: "შექმნილი სიყვარულით.",
    aboutDesc:
      "EllBerry-ში გვჯერა, რომ მცენარეული საკვები შეიძლება იყოს მრავალფეროვანი, ნოყიერი და ადამიანების გამაერთიანებელი.",
    contactEyebrow: "მოდი, ერთად შევქმნათ რაღაც გემრიელი",
    contactTitle: "გეგმავ განსაკუთრებულ ღონისძიებას?",
    contactDesc:
      "დაგვიკავშირდი შეკვეთის ან ღონისძიების დეტალების შესათანხმებლად.",
    contactButton: "დაგვიკავშირდი ↗",
    footer: "მცენარეული კერძები, სიყვარულით მომზადებული.",
    phone: "ტელეფონი",
    instagram: "Instagram",
    facebook: "Facebook",
    whatsapp: "WhatsApp",
    email: "ელფოსტა",
  },
  en: {
    home: "Home",
    menu: "Our Menu",
    catering: "Catering",
    aboutNav: "About Us",
    contactNav: "Contact",
    eyebrow: "FRESH • PLANT-BASED • MADE WITH LOVE",
    title1: "Naturally good.",
    title2: "Truly delicious.",
    description:
      "Beautifully crafted vegan food for everyday moments, special celebrations, and unforgettable gatherings.",
    explore: "Explore Our Menu ↗",
    plan: "Plan Your Event",
    note: "Freshly prepared. 100% plant-based.",
    sectionEyebrow: "DELICIOUS FOOD, YOUR WAY",
    sectionTitle: "Made for every occasion",
    sectionDescription: "From delicious dishes to unforgettable gatherings.",
    dishes: "Vegan Dishes",
    dishesDesc: "Fresh plant-based dishes prepared with care and love.",
    buffets: "Catering & Buffets",
    buffetsDesc:
      "Beautiful food spreads for parties, events, and celebrations.",
    custom: "Custom Orders",
    customDesc: "Have something special in mind? Let’s create it together.",
    discover: "Discover more ↗",
    planEvent: "Plan your event ↗",
    talk: "Get in touch ↗",
    aboutEyebrow: "A FRESH KIND OF FOOD EXPERIENCE",
    aboutTitle1: "Thoughtful food.",
    aboutTitle2: "Made with heart.",
    aboutDesc:
      "At EllBerry, we believe plant-based food should be colorful, satisfying, and made to bring people together.",
    contactEyebrow: "LET’S MAKE SOMETHING DELICIOUS",
    contactTitle: "Planning something special?",
    contactDesc: "Get in touch to discuss your order or upcoming event.",
    contactButton: "Contact EllBerry ↗",
    footer: "Plant-based food, made with love.",
    phone: "Phone",
    instagram: "Instagram",
    facebook: "Facebook",
    whatsapp: "WhatsApp",
    email: "Email",
  },
};

function App() {
  const [language, setLanguage] = useState("ka");
  const [darkMode, setDarkMode] = useState(false);
  const t = translations[language];

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`} lang={language}>
      <header className="navbar">
        <a href="#" className="logo">
          Ell<span>Berry</span>.
        </a>

        <nav>
          <a href="#">{t.home}</a>
          <a href="#menu">{t.menu}</a>
          <a href="#catering">{t.catering}</a>
          <a href="#about">{t.aboutNav}</a>
        </nav>

        <div className="nav-actions">
          <div className="language-switch" aria-label="აირჩიეთ ენა">
            <button
              type="button"
              className={language === "ka" ? "active" : ""}
              onClick={() => setLanguage("ka")}
              aria-pressed={language === "ka"}
              aria-label="ქართული ენა"
            >
              <img
                className="language-flag"
                src="https://flagcdn.com/w40/ge.png"
                alt="ქართული"
              />
              <span>ქარ</span>
            </button>

            <button
              type="button"
              className={language === "en" ? "active" : ""}
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
              aria-label="English language"
            >
              <img
                className="language-flag"
                src="https://flagcdn.com/w40/gb.png"
                alt="English"
              />
              <span>ENG</span>
            </button>
          </div>
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? "Light mode" : "Dark mode"}
            title={darkMode ? "Light mode" : "Dark mode"}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <a href="#contact" className="contact-button">
            {t.contactNav} ↗
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">{t.eyebrow}</p>

            <h1>
              {t.title1}
              <br />
              <span>{t.title2}</span>
            </h1>

            <p className="hero-description">{t.description}</p>

            <div className="hero-actions">
              <a href="#menu" className="primary-button">
                {t.explore}
              </a>
              <a href="#catering" className="secondary-button">
                {t.plan}
              </a>
            </div>

            <div className="hero-note">
              <span>✳</span> {t.note}
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=85"
              alt={
                language === "ka"
                  ? "ახალი მცენარეული კერძი ფერადი ბოსტნეულით"
                  : "Fresh plant-based meal with colorful vegetables"
              }
            />
            <div className="image-badge">
              <span>100%</span>
              <small>
                {language === "ka" ? <>მცენარეული</> : <>Plant-based</>}
              </small>
            </div>
          </div>
        </section>

        <section className="services" id="catering">
          <div className="section-heading">
            <p className="eyebrow">{t.sectionEyebrow}</p>
            <h2>{t.sectionTitle}</h2>
            <p>{t.sectionDescription}</p>
          </div>

          <div className="service-grid">
            <article className="service-card" id="menu">
              <span className="service-icon">🥗</span>
              <h3>{t.dishes}</h3>
              <p>{t.dishesDesc}</p>
              <a href="#contact">{t.discover}</a>
            </article>

            <article className="service-card">
              <span className="service-icon">🍓</span>
              <h3>{t.buffets}</h3>
              <p>{t.buffetsDesc}</p>
              <a href="#contact">{t.planEvent}</a>
            </article>

            <article className="service-card">
              <span className="service-icon">🌿</span>
              <h3>{t.custom}</h3>
              <p>{t.customDesc}</p>
              <a href="#contact">{t.talk}</a>
            </article>
          </div>
        </section>

        <section className="about" id="about">
          <p className="eyebrow">{t.aboutEyebrow}</p>
          <h2>
            {t.aboutTitle1}
            <br />
            <span>{t.aboutTitle2}</span>
          </h2>
          <p>{t.aboutDesc}</p>
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow">{t.contactEyebrow}</p>

          <h2>{t.contactTitle}</h2>

          <p>{t.contactDesc}</p>

          <div className="contact-grid">
            <a href="#" className="contact-card phone-card">
              <span className="contact-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.06 8.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.35 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z" />
                </svg>
              </span>
              <span className="contact-label">{t.phone}</span>
            </a>

            <a
              href="#"
              className="contact-card instagram-card"
              aria-label="Instagram"
            >
              <span className="contact-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" className="icon-dot" />
                </svg>
              </span>
              <span className="contact-label">{t.instagram}</span>
            </a>

            <a
              href="#"
              className="contact-card facebook-card"
              aria-label="Facebook"
            >
              <span className="contact-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14 21v-8h3l.5-4H14V7c0-1.2.4-2 2-2h2V1.5C17.3 1.4 16.2 1.3 15 1.3c-3.5 0-5.8 2.1-5.8 6V9H6v4h3.2v8Z" />
                </svg>
              </span>
              <span className="contact-label">{t.facebook}</span>
            </a>

            <a
              href="#"
              className="contact-card whatsapp-card"
              aria-label="WhatsApp"
            >
              <span className="contact-icon">
                <svg viewBox="0 0 32 32" aria-hidden="true">
                  <path
                    fill="#25D366"
                    d="M16 2a14 14 0 0 0-12 21.2L2 30l7-1.8A14 14 0 1 0 16 2Z"
                  />
                  <path
                    fill="white"
                    d="M23.2 19.6c-.4-.2-2.2-1.1-2.6-1.2-.4-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.5-.2.3-.4.3-.8.1-.4-.2-1.6-.6-3-1.8-1.1-1-1.8-2.2-2-2.6-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.6.1-.2 0-.4 0-.6l-1.2-2.7c-.3-.7-.6-.6-.9-.6h-.8c-.3 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.2s1.4 3.7 1.6 4c.2.3 2.8 4.3 6.8 6 1 .4 1.7.6 2.3.8 1 .3 1.8.2 2.5.1.8-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.8-.5Z"
                  />
                </svg>
              </span>
              <span className="contact-label">{t.whatsapp}</span>
            </a>

            <a
              href="#"
              className="contact-card email-card"
              aria-label="ელფოსტა"
            >
              <span className="contact-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="3" />
                  <path d="m3 6 9 7 9-7" />
                </svg>
              </span>
              <span className="contact-label">{t.email}</span>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <a href="#" className="logo">
          Ell<span>Berry</span>.
        </a>
        <p>
          {t.footer} © {new Date().getFullYear()} EllBerry
        </p>
      </footer>
    </div>
  );
}

export default App;
