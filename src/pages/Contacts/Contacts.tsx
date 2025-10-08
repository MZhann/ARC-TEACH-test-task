import { useState } from "react";
import styles from "./Contacts.module.css";
import { useTranslation } from "react-i18next";

const ContactsPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(t("contacts.form.success"));
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className={styles.contactsPage}>
      {/* начальная */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>{t("contacts.hero.title")}</h1>
          <p className={styles.heroSubtitle}>
            {t("contacts.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Контактная инфа и форма */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* Контактная инфа */}
            <div className={styles.contactInfo}>
              <h2>{t("contacts.info.title")}</h2>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📍</div>
                <div className={styles.contactDetails}>
                  <h3>{t("contacts.info.address.title")}</h3>
                  <p>
                    {t("contacts.info.address.value")}
                    <br />
                    {t("contacts.info.address.value")}
                  </p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📞</div>
                <div className={styles.contactDetails}>
                  <h3>{t("contacts.info.phone.title")}</h3>
                  <p>
                    <a href="tel:+77473455687">{t("contacts.info.phone.value")}</a>
                  </p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>✉️</div>
                <div className={styles.contactDetails}>
                  <h3>{t("contacts.info.email.title")}</h3>
                  <p>
                    <a href="mailto:coffee@shop.kz">{t("contacts.info.email.value")}</a>
                  </p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>🕘</div>
                <div className={styles.contactDetails}>
                  <h3>{t("contacts.info.hours.title")}</h3>
                  <p>{t("contacts.info.hours.value")}</p>
                </div>
              </div>

              <div className={styles.socialLinks}>
                <h3>{t("contacts.info.social.title")}</h3>
                <div className={styles.socialButtons}>
                  <a
                    href="https://wa.me/77473455687"
                    className={styles.socialButton}
                  >
                    <span>📱</span> {t("contacts.info.social.whatsapp")}
                  </a>
                  <a
                    href="https://instagram.com"
                    className={styles.socialButton}
                  >
                    <span>📷</span> {t("contacts.info.social.instagram")}
                  </a>
                </div>
              </div>
            </div>

            {/* Контакты */}
            <div className={styles.contactForm}>
              <h2>{t("contacts.form.title")}</h2>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">{t("contacts.form.name")} *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">{t("contacts.form.email")} *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">{t("contacts.form.phone")}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">{t("contacts.form.message")} *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitButton}>
                  {t("contacts.form.submit")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Карта */}
      <section className={styles.mapSection}>
        <div className={styles.container}>
          <h2>{t("contacts.map.title")}</h2>
          <div className={styles.map}>
            <div className={styles.mapPlaceholder}>
              <div className={styles.mapIcon}>🗺️</div>
              <p>{t("contacts.map.placeholder")}</p>
              <p>{t("contacts.map.address")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Вопросы */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <h2>{t("contacts.faq.title")}</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>{t("contacts.faq.delivery.question")}</h3>
              <p>
                {t("contacts.faq.delivery.answer")}
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>{t("contacts.faq.return.question")}</h3>
              <p>
                {t("contacts.faq.return.answer")}
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>{t("contacts.faq.discounts.question")}</h3>
              <p>
                {t("contacts.faq.discounts.answer")}
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>{t("contacts.faq.storage.question")}</h3>
              <p>
                {t("contacts.faq.storage.answer")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactsPage;
