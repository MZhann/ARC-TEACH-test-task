import styles from "./AboutUs.module.css";
import { useTranslation } from "react-i18next";

const AboutUsPage = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.aboutPage}>
      {/* Начальная  */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>{t("about.hero.title")}</h1>
          <p className={styles.heroSubtitle}>
            {t("about.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* История */}
      <section className={styles.story}>
        <div className={styles.container}>
          <div className={styles.storyContent}>
            <div className={styles.storyText}>
              <h2>{t("about.story.title")}</h2>
              <p>
                {t("about.story.paragraph1")}
              </p>
              <p>
                {t("about.story.paragraph2")}
              </p>
            </div>
            <div className={styles.storyImage}>
              <div className={styles.coffeeBeans}>☕🌍☕</div>
            </div>
          </div>
        </div>
      </section>

      {/* Значимость */}
      <section className={styles.values}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{t("about.values.title")}</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.value}>
              <div className={styles.valueIcon}>🎯</div>
              <h3>{t("about.values.quality.title")}</h3>
              <p>
                {t("about.values.quality.description")}
              </p>
            </div>
            <div className={styles.value}>
              <div className={styles.valueIcon}>🤝</div>
              <h3>{t("about.values.honesty.title")}</h3>
              <p>
                {t("about.values.honesty.description")}
              </p>
            </div>
            <div className={styles.value}>
              <div className={styles.valueIcon}>🌱</div>
              <h3>{t("about.values.sustainability.title")}</h3>
              <p>
                {t("about.values.sustainability.description")}
              </p>
            </div>
            <div className={styles.value}>
              <div className={styles.valueIcon}>❤️</div>
              <h3>{t("about.values.passion.title")}</h3>
              <p>
                {t("about.values.passion.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Тима */}
      <section className={styles.team}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{t("about.team.title")}</h2>
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <div className={styles.memberAvatar}>👨‍💼</div>
              <h3>{t("about.team.alexey.name")}</h3>
              <p className={styles.memberRole}>{t("about.team.alexey.role")}</p>
              <p>
                {t("about.team.alexey.description")}
              </p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberAvatar}>👩‍🔬</div>
              <h3>{t("about.team.maria.name")}</h3>
              <p className={styles.memberRole}>{t("about.team.maria.role")}</p>
              <p>
                {t("about.team.maria.description")}
              </p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberAvatar}>👨‍💻</div>
              <h3>{t("about.team.dmitry.name")}</h3>
              <p className={styles.memberRole}>{t("about.team.dmitry.role")}</p>
              <p>
                {t("about.team.dmitry.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Статы */}
      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>{t("about.stats.varieties")}</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>15</div>
                <div className={styles.statLabel}>{t("about.stats.countries")}</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>10,000+</div>
              <div className={styles.statLabel}>{t("about.stats.customers")}</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>8</div>
              <div className={styles.statLabel}>{t("about.stats.years")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA  */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>{t("about.cta.title")}</h2>
          <p>{t("about.cta.subtitle")}</p>
          <a href="/" className={styles.primaryButton}>
            {t("about.cta.button")}
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
