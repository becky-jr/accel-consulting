import "./App.css";
import img2 from "./assets/london2.jpg";
import img3 from "./assets/london3.jpg";
import img4 from "./assets/london4.jpg";
import face1 from "./assets/face.jpg";
import face2 from "./assets/face2.jpg";
import imgf1 from "./assets/certificate1.jpg";
import imgf2 from "./assets/certificate2.jpg";
import logo from "./assets/logo.png";
import {
	FaUniversity,
	FaMoneyBillWave,
	FaPassport,
	FaHome,
	FaHeadset,
	FaGlobe,
} from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { img, title } from "framer-motion/client";
function App() {
	const [language, setLanguage] = useState("uz");

	const [isSertifikatOpen, setIsSertifikatOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const slides = [{ img: img4 }, { img: img3 }, { img: img2 }];

	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
	};

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
	};

	const goToSlide = (index) => {
		setCurrentIndex(index);
	};

	const splitText = (text) => {
		return text.split("").map((char, index) => (
			<motion.span
				key={index}
				className="split-letter"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: index * 0.05, duration: 0.5 }}
			>
				{char === " " ? "\u00A0" : char}
			</motion.span>
		));
	};

	const content = {
		uz: {
			header: {
				logo: "London O'qish Guruhi",
				nav: [
					"Bosh sahifa",
					"Dastur haqida",
					"Afzalliklar",
					"Biz haqimizda",
					"Aloqa",
				],
				cta: "Ro'yxatdan o'tish",
			},

			hero: {
				title: "O'zbekistondan chet elda o'qish uchun ishonchli agentlik!",
				subtitle:
					"Biz sizga Buyuk Britaniyaning eng nufuzli universitetlarida o'qish imkoniyatini yaratamiz. Professional maslahat, visa yordami va to'liq qo'llab-quvvatlash.",
				buttons: ["Batafsil ma'lumot", "Ro'yxatdan o'tish"],
			},

			aboutSlider: {
				titles: [
					"Dastur haqida",
					"Bizning maqsadimiz",
					"Ta'lim va qo'llab-quvvatlash",
				],
				texts: [
					"Biz 2024-yildan beri O'zbekistonlik talabalarga Buyuk Britaniya (UK) va Janubiy Koreyada o'qish imkoniyatini yaratib kelmoqdamiz. Talabalarimiz dunyoning yetakchi universitetlarida muvaffaqiyatli tahsil olishmoqda.",

					"Bizning asosiy maqsadimiz talabalarni xalqaro ta'lim muhitiga olib chiqish va ularga eng yaxshi universitetlarda, xususan UK, South Korea va Canada davlatlarida o'qish imkoniyatini yaratishdir.",

					"Biz universitet tanlash, hujjat topshirish, visa olish, turar joy topish va yangi davlatga moslashishda to'liq yordam beramiz. Ayniqsa Canada bo'yicha ko'proq ma'lumot va imkoniyatlarni muntazam ravishda ulashib boramiz.",
				],
			},

			benefits: {
				title: "Afzalliklar",
				items: [
					{
						icon: <FaUniversity />,
						title: "Top universitetlar",
						text: "Oxford, Cambridge, UCL va boshqa nufuzli OTMlar",
					},
					{
						icon: <FaMoneyBillWave />,
						title: "Moliyaviy yordam",
						text: "Grantlar, stipendiyalar va kreditlar bo'yicha maslahat",
					},
					{
						icon: <FaPassport />,
						title: "Visa yordami",
						text: "Visa olish jarayonida professional yordam",
					},
					{
						icon: <FaHome />,
						title: "Turar joy",
						text: "Talabalar uchun xavfsiz va qulay yashash joylari",
					},
					{
						icon: <FaHeadset />,
						title: "Qo'llab-quvvatlash",
						text: "24/7 yordam va maslahat xizmati",
					},
					{
						icon: <FaGlobe />,
						title: "Madaniy integratsiya",
						text: "Britaniya madaniyatiga tez moslashish",
					},
				],
			},

			team: {
				title: "Biz haqimizda",
				members: [
					{
						img: face1,
						name: "Shamsiddin Turakhanov",
						text: "Ta'lim konsalting sohasida 7 yillik tajribaga ega mutaxassis.",
					},
					{
						img: face2,
						name: "Muslimbek Muminov",
						text: "Talabalar bilan ishlash bo'yicha mutaxassis va visa maslahatchisi.",
					},
				],
				button: "Sertifikatlarga",
			},

			modal: {
				title: "Ro'yxatdan o'tish",
				name: "Ismingiz",
				email: "Email",
				phone: "Telefon",
				send: "Yuborish",
				close: "Yopish",
			},

			footer: {
				title: "London O'qish Guruhi",
				about:
					"Biz talabalarni Buyuk Britaniya, Canada va boshqa chet-el universitetlariga o'qishga yuborish bo'yicha professional xizmat ko'rsatamiz.",
				contact: "Kontaktlar",
				social: "Ijtimoiy tarmoqlar",
				copyright: "© 2026 Barcha huquqlar himoyalangan.",
			},
		},

		ru: {
			header: {
				logo: "London Study Group",
				nav: ["Главная", "О программе", "Преимущества", "О нас", "Контакты"],
				cta: "Регистрация",
			},

			hero: {
				title: "Надежное агентство для обучения за границей из Узбекистана!",
				subtitle:
					"Мы помогаем студентам из Узбекистана поступить в лучшие университеты Великобритании.",
				buttons: ["Подробнее", "Регистрация"],
			},

			aboutSlider: {
				titles: ["О программе", "Наша цель", "Образование и поддержка"],
				texts: [
					"С 2024 года мы предоставляем узбекским студентам возможность учиться в Соединенном Королевстве (Великобритании) и Южной Корее. Наши студенты успешно обучаются в ведущих университетах мира.",

					"Наша основная цель — вывести студентов в международную образовательную среду и предоставить им возможность обучаться в лучших университетах, включая Великобританию, Южную Корею и Канаду.",

					"Мы оказываем полную поддержку на всех этапах: от выбора университета и подачи документов до получения визы, поиска жилья и адаптации в новой стране. Особое внимание мы уделяем Канаде, регулярно делясь актуальной информацией и возможностями обучения в этой стране.",
				],
			},
			benefits: {
				title: "Преимущества",
				items: [
					{
						icon: <FaUniversity />,
						title: "Топ университеты",
						text: "Oxford, Cambridge, UCL и другие",
					},
					{
						icon: <FaMoneyBillWave />,
						title: "Финансовая помощь",
						text: "Консультации по грантам и стипендиям",
					},
					{
						icon: <FaPassport />,
						title: "Визовая поддержка",
						text: "Помощь при получении студенческой визы",
					},
					{
						icon: <FaHome />,
						title: "Проживание",
						text: "Помощь в поиске жилья",
					},
					{
						icon: <FaHeadset />,
						title: "Поддержка",
						text: "Круглосуточная консультация",
					},
					{
						icon: <FaGlobe />,
						title: "Интеграция",
						text: "Помощь в адаптации к культуре",
					},
				],
			},

			team: {
				title: "О нас",
				members: [
					{
						img: face1,
						name: "Шамсиддин Туркханов",
						text: "Специалист с опытом работы в образовательном консалтинге.",
					},
					{
						img: face2,
						name: "Муслимбек Муминов",
						text: "Консультант по визам и обучению.",
					},
				],
				button: "Сертификаты",
			},

			modal: {
				title: "Регистрация",
				name: "Ваше имя",
				email: "Email",
				phone: "Телефон",
				send: "Отправить",
				close: "Закрыть",
			},

			footer: {
				title: "Группа London Study",
				about:
					"Мы предоставляем услуги по поступлению в университеты Великобритании, Канады и других зарубежный стран.",
				contact: "Контакты",
				social: "Социальные сети",
				copyright: "© 2026 Все права защищены.",
			},
		},

		en: {
			header: {
				logo: "London Study Group",
				nav: ["Home", "About Program", "Benefits", "About Us", "Contact"],
				cta: "Register",
			},

			hero: {
				title: "A reliable agency for studying abroad from Uzbekistan!",
				subtitle:
					"We help students from Uzbekistan get admission to top universities in the UK.",
				buttons: ["Learn More", "Register"],
			},

			aboutSlider: {
				titles: ["About the Program", "Our Mission", "Education and Support"],
				texts: [
					"We have been providing opportunities for Uzbek students to study in the United Kingdom (UK) and South Korea since 2024. Our students are successfully studying at leading universities around the world.",

					"Our main goal is to bring students into the international education environment and provide them with opportunities to study at top universities, including the UK, South Korea, and Canada.",

					"We provide full support at every stage: from choosing a university and submitting applications to obtaining a visa, finding accommodation, and adapting to a new country. We place special focus on Canada, regularly sharing updated information and study opportunities.",
				],
			},
			benefits: {
				title: "Benefits",
				items: [
					{
						icon: <FaUniversity />,
						title: "Top Universities",
						text: "Oxford, Cambridge, UCL and more",
					},
					{
						icon: <FaMoneyBillWave />,
						title: "Financial Aid",
						text: "Guidance on scholarships and grants",
					},
					{
						icon: <FaPassport />,
						title: "Visa Assistance",
						text: "Support during visa process",
					},
					{
						icon: <FaHome />,
						title: "Accommodation",
						text: "Safe housing for students",
					},
					{
						icon: <FaHeadset />,
						title: "Support",
						text: "24/7 student support service",
					},
					{
						icon: <FaGlobe />,
						title: "Cultural Integration",
						text: "Help adapting to UK culture",
					},
				],
			},

			team: {
				title: "About Us",
				members: [
					{
						img: face1,
						name: "Shamsitdin Tyurakhanov",
						text: "MBA York University Education consultant with 7 years of experience.",
					},
					{
						img: face2,
						name: "Muslimbek  Muminov",
						text: " South Bank University London Student advisor specializing in visas and university admissions.",
					},
				],
				button: "Certificates",
			},

			modal: {
				title: "Registration",
				name: "Your Name",
				email: "Email",
				phone: "Phone",
				send: "Submit",
				close: "Close",
			},

			footer: {
				title: "London Study Group",
				about:
					"We provide consulting services for students who want to study in the UK, Canada and other foreign countries.",
				contact: "Contacts",
				social: "Social Networks",
				copyright: "© 2026 All rights reserved.",
			},
		},
	};

	const currentContent = content[language];

	return (
		<>
			<div className="App">
				<div className="language-switcher">
					<button
						onClick={() => setLanguage("uz")}
						className={language === "uz" ? "active" : ""}
					>
						UZ
					</button>
					<button
						onClick={() => setLanguage("ru")}
						className={language === "ru" ? "active" : ""}
					>
						RU
					</button>
					<button
						onClick={() => setLanguage("en")}
						className={language === "en" ? "active" : ""}
					>
						EN
					</button>
				</div>

				<header className="header">
					<div className="container">
						<div className="logo">
							<img src={logo} alt="" />
						</div>
						<nav className="nav">
							<a href="#home">{currentContent.header.nav[0]}</a>
							<a href="#about">{currentContent.header.nav[1]}</a>
							<a href="#benefits">{currentContent.header.nav[2]}</a>
							<a href="#courses">{currentContent.header.nav[3]}</a>
							<a href="#contact">{currentContent.header.nav[4]}</a>
						</nav>
						<button className="cta-button" onClick={() => setIsModalOpen(true)}>
							{currentContent.header.cta}
						</button>
					</div>
				</header>

				<motion.section
					id="home"
					className="hero"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
				>
					<div className="container">
						<motion.div
							className="hero-content"
							initial={{ x: -100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 1, delay: 0.2 }}
						>
							<h1 className="hero-title">{currentContent.hero.title}</h1>
							<motion.p
								className="hero-subtitle"
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.8, delay: 0.5 }}
							>
								{currentContent.hero.subtitle}
							</motion.p>
							<motion.div
								className="hero-buttons"
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.8, delay: 0.7 }}
							>
								<motion.button
									className="cta-button primary"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									{currentContent.hero.buttons[0]}
								</motion.button>
								<motion.button
									className="cta-button secondary"
									onClick={() => setIsModalOpen(true)}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									{currentContent.hero.buttons[1]}
								</motion.button>
							</motion.div>
						</motion.div>
					</div>
				</motion.section>

				{/* <section id="home" className="hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">{currentContent.hero.title}</h1>
              <p className="hero-subtitle">{currentContent.hero.subtitle}</p>
              <div className="hero-buttons">
                <button className="cta-button primary">{currentContent.hero.buttons[0]}</button>
                <button className="cta-button secondary">{currentContent.hero.buttons[1]}</button>
              </div>
            </div>
          </div>
        </section> */}

				<section id="about" className="about">
					<div className="container">
						<div className="about-content">
							<div className="about-text">
								<h2>{currentContent.aboutSlider.titles[currentIndex]}</h2>

								{currentIndex === 0 ? (
									<p>{currentContent.aboutSlider.texts[0]}</p>
								) : currentIndex === 1 ? (
									<p>{currentContent.aboutSlider.texts[1]}</p>
								) : (
									<p>{currentContent.aboutSlider.texts[2]}</p>
								)}

								<button className="cta-button">
									{currentContent.header.cta}
								</button>
							</div>

							<div className="about-image">
								<img
									src={
										currentIndex === 0
											? slides[0].img
											: currentIndex === 1
												? slides[1].img
												: currentIndex === 2
													? slides[2].img
													: slides[3].img
									}
									alt=""
								/>
								<div className="subtitle">
									{currentIndex === 0
										? slides[0].subtitle
										: currentIndex === 1
											? slides[1].subtitle
											: currentIndex === 2
												? slides[2].subtitle
												: slides[3].subtitle}
								</div>
							</div>

							<div className="swiper">
								<button className="prev" onClick={prevSlide}>
									&#10094;
								</button>
								<button className="next" onClick={nextSlide}>
									&#10095;
								</button>
							</div>

							<div className="radio">
								{slides.map((_, index) => (
									<input
										key={index}
										type="radio"
										checked={currentIndex === index}
										onChange={() => goToSlide(index)}
									/>
								))}
							</div>
						</div>
					</div>
				</section>

				<section id="benefits" className="benefits">
					<div className="container">
						<h2 className="section-title">{currentContent.benefits.title}</h2>
						<div className="benefits-grid">
							{currentContent.benefits.items.map((benefit, index) => (
								<div key={index} className="benefit-card">
									<div className="benefit-icon">{benefit.icon}</div>
									<h3>{benefit.title}</h3>
									<p>{benefit.text}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section id="about" className="about">
					<div className="container">
						<div className="sarlavha">
							<h1>{currentContent.team.title}</h1>
						</div>
						<div className="biz">
							{currentContent.team.members.map((member, index) => (
								<div className="card-d" key={index}>
									<img src={member.img} alt="" />
									<h1>{member.name}</h1>
									<p>{member.text}</p>
								</div>
							))}
						</div>
						<div className="biz2">
							<div className="sertificate">
								<button onClick={() => setIsSertifikatOpen(true)}>
									{" "}
									{currentContent.team.button} &#10095;{" "}
								</button>
							</div>
						</div>
					</div>
				</section>

				<footer className="footer">
					<div className="footer-container">
						<div className="footer-section">
							<h3>{currentContent.footer.title}</h3>
							<p>{currentContent.footer.about}</p>
						</div>
						<div className="footer-section">
							<h3>{currentContent.footer.contact}</h3>
							<ul>
								<li>
									<a href="mailto:accelconsultinguz@gmail.com">
										accelconsultinguz@gmail.com
									</a>
								</li>
								<li>
									<a href="tel:+998901540033">+998 90 154 00 33</a>
								</li>
							</ul>
						</div>
						<div className="footer-section">
							<h3>{currentContent.footer.social}</h3>
							<ul>
								<li>
									<a href="https://www.instagram.com/accel_consultancy/">
										Instagram
									</a>
								</li>
								<li>
									<a href="https://t.me/+998911839779">Telegram</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="footer-bottom">
						<p>&copy; {currentContent.footer.copyright}</p>
					</div>
				</footer>
				{isSertifikatOpen && (
					<div
						className="sertifikat-overlay"
						onClick={() => setIsSertifikatOpen(false)}
					>
						<div
							className="sertifikat-box"
							onClick={(e) => e.stopPropagation()}
						>
							<div className="imgbox">
								<div className="img1">
									<img src={imgf1} alt="" />
								</div>

								<div className="img1">
									<img src={imgf2} alt="" />
								</div>
							</div>

							<button
								className="x-button"
								onClick={() => setIsSertifikatOpen(false)}
							>
								x
							</button>
						</div>
					</div>
				)}
				{isModalOpen && (
					<div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
						<div className="modal-box" onClick={(e) => e.stopPropagation()}>
							<h2>{currentContent.modal.title}</h2>

							<input type="text" placeholder={currentContent.modal.name} />
							<input type="email" placeholder={currentContent.modal.email} />
							<input type="tel" placeholder={currentContent.modal.phone} />

							<button className="cta-button">
								{currentContent.modal.send}
							</button>

							<button
								className="modal-close"
								onClick={() => setIsModalOpen(false)}
							>
								{currentContent.modal.close}
							</button>
						</div>
					</div>
				)}
			</div>
		</>
	);
}

export default App;
