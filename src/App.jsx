import "./App.css";
import img2 from "./assets/london2.jpg";
import img3 from "./assets/london3.jpg";
import img4 from "./assets/london4.jpg";
import face1 from "./assets/face.jpg";
import face2 from "./assets/face2.jpg";
import imgf1 from "./assets/certificate1.jpg";
import imgf2 from "./assets/certificate2.jpg";
import logo from "./assets/logo.png";
import img5 from "./assets/skilled.jpg";
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
function App() {
	const [language, setLanguage] = useState("uz");

	const [isSertifikatOpen, setIsSertifikatOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const slides = [{ img: img4 }, { img: img3 }, { img: img2 }, { img: img5 }];

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
					"Biz sizga chet elning eng nufuzli universitetlarida o'qish imkoniyatini yaratamiz. Professional maslahat, visa yordami va to'liq qo'llab-quvvatlash.",
				buttons: ["Batafsil ma'lumot", "Ro'yxatdan o'tish"],
			},

			aboutSlider: {
				titles: [
					"Dastur haqida",
					"Bizning maqsadimiz",
					"Ta'lim va qo'llab-quvvatlash",
					"Skilled Trade dasturi",
				],
				texts: [
					"Biz 2024-yildan beri O'zbekistonlik talabalarga Buyuk Britaniya (UK), Janubiy Koreyada, Kanada va boshqa davlatlarda o'qish imkoniyatini yaratib kelmoqdamiz. Talabalarimiz dunyoning yetakchi universitetlarida muvaffaqiyatli tahsil olishmoqda.",

					"Bizning asosiy maqsadimiz talabalarni xalqaro ta'lim muhitiga olib chiqish va ularga eng yaxshi universitetlarda, xususan UK, South Korea va Canada davlatlarida o'qish imkoniyatini yaratishdir.",

					"Biz universitet tanlash, hujjat topshirish, visa olish, turar joy topish va yangi davlatga moslashishda to'liq yordam beramiz. Ayniqsa Canada bo'yicha ko'proq ma'lumot va imkoniyatlarni muntazam ravishda ulashib boramiz.",

					`Kanadada malakali ishchi mutaxassisliklari bo‘yicha ta’lim
					Qurilish sohasidagi kasblar 
					Mexanika va avtomobilsozlik kasblari 
					Payvandlash va ishlab chiqarish kasblari
					Elektrotexnika va texnologiya kasblari`,
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
						text: "Chet el madaniyatiga tez moslashish",
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
				title: "Chet elda O'qish Guruhi",
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
				cta: "Зарегистрироваться",
			},

			hero: {
				title: "Надежное агентство для обучения за рубежом из Узбекистана!",
				subtitle:
					"Мы создаем для вас возможность учиться в самых престижных университетах за рубежом. Профессиональные консультации, визовая помощь и полная поддержка.",
				buttons: ["Подробнее", "Зарегистрироваться"],
			},

			aboutSlider: {
				titles: [
					"О программе",
					"Наша цель",
					"Образование и поддержка",
					"Программа Skilled Trade",
				],
				texts: [
					"С 2024 года мы создаем возможности для студентов из Узбекистана обучаться в Великобритании (UK), Южной Корее, Канаде и других странах. Наши студенты успешно учатся в ведущих университетах мира.",

					"Наша основная цель — вывести студентов в международную образовательную среду и предоставить им возможность учиться в лучших университетах, в частности в Великобритании, Южной Корее и Канаде.",

					"Мы полностью помогаем с выбором университета, подачей документов, получением визы, поиском жилья и адаптацией в новой стране. Особенно регулярно делимся более подробной информацией и возможностями по Канаде.",

					`Обучение по квалифицированным рабочим специальностям в Канаде
Строительные специальности
Механические и автомобильные специальности
Сварочные и производственные специальности
Электротехнические и технологические специальности`,
				],
			},

			benefits: {
				title: "Преимущества",
				items: [
					{
						icon: <FaUniversity />,
						title: "Топ университеты",
						text: "Oxford, Cambridge, UCL и другие престижные вузы",
					},
					{
						icon: <FaMoneyBillWave />,
						title: "Финансовая помощь",
						text: "Консультации по грантам, стипендиям и кредитам",
					},
					{
						icon: <FaPassport />,
						title: "Визовая помощь",
						text: "Профессиональная помощь в процессе получения визы",
					},
					{
						icon: <FaHome />,
						title: "Проживание",
						text: "Безопасные и комфортные места проживания для студентов",
					},
					{
						icon: <FaHeadset />,
						title: "Поддержка",
						text: "Круглосуточная помощь и консультации",
					},
					{
						icon: <FaGlobe />,
						title: "Культурная интеграция",
						text: "Быстрая адаптация к зарубежной культуре",
					},
				],
			},

			team: {
				title: "О нас",
				members: [
					{
						img: face1,
						name: "Шамсиддин Тураханов",
						text: "Специалист с 7-летним опытом в сфере образовательного консалтинга.",
					},
					{
						img: face2,
						name: "Муслимбек Муминов",
						text: "Специалист по работе со студентами и визовый консультант.",
					},
				],
				button: "К сертификатам",
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
				title: "Группа обучения за рубежом",
				about:
					"Мы предоставляем профессиональные услуги по отправке студентов на обучение в университеты Великобритании, Канады и других зарубежных стран.",
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
					"We create opportunities for you to study at the most prestigious universities abroad. Professional guidance, visa assistance, and full support.",
				buttons: ["Learn More", "Register"],
			},

			aboutSlider: {
				titles: [
					"About the Program",
					"Our Mission",
					"Education and Support",
					"Skilled Trade Program",
				],
				texts: [
					"Since 2024, we have been creating opportunities for students from Uzbekistan to study in the United Kingdom (UK), South Korea, Canada, and other countries. Our students are successfully studying at leading universities around the world.",

					"Our main goal is to introduce students to the international education environment and provide them with opportunities to study at top universities, especially in the UK, South Korea, and Canada.",

					"We provide full support with choosing a university, submitting documents, obtaining a visa, finding accommodation, and adapting to a new country. We especially share more information and opportunities related to Canada on a regular basis.",

					`Education in Canada for skilled trade professions
Construction trades
Mechanical and automotive trades
Welding and manufacturing trades
Electrical and technology trades`,
				],
			},

			benefits: {
				title: "Benefits",
				items: [
					{
						icon: <FaUniversity />,
						title: "Top Universities",
						text: "Oxford, Cambridge, UCL, and other prestigious universities",
					},
					{
						icon: <FaMoneyBillWave />,
						title: "Financial Support",
						text: "Guidance on grants, scholarships, and student loans",
					},
					{
						icon: <FaPassport />,
						title: "Visa Assistance",
						text: "Professional support during the visa process",
					},
					{
						icon: <FaHome />,
						title: "Accommodation",
						text: "Safe and comfortable living options for students",
					},
					{
						icon: <FaHeadset />,
						title: "Support",
						text: "24/7 assistance and consultation service",
					},
					{
						icon: <FaGlobe />,
						title: "Cultural Integration",
						text: "Quick adaptation to foreign culture",
					},
				],
			},

			team: {
				title: "About Us",
				members: [
					{
						img: face1,
						name: "Shamsiddin Turakhanov",
						text: "A specialist with 7 years of experience in educational consulting.",
					},
					{
						img: face2,
						name: "Muslimbek Muminov",
						text: "A student relations specialist and visa consultant.",
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
				title: "Study Abroad Group",
				about:
					"We provide professional services for helping students study at universities in the UK, Canada, and other foreign countries.",
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

				<section id="about" className="about">
					<div className="container">
						<div className="about-content">
							<div className="about-text">
								<h2>{currentContent.aboutSlider.titles[currentIndex]}</h2>
								<p>{currentContent.aboutSlider.texts[currentIndex]}</p>

								<button className="cta-button">
									{currentContent.header.cta}
								</button>
							</div>

							<div className="about-image">
								<img src={slides[currentIndex].img} alt="" />
								<div className="subtitle">{slides[currentIndex].subtitle}</div>
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

				<section id="courses" className="about">
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
						<p>{currentContent.footer.copyright}</p>
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
