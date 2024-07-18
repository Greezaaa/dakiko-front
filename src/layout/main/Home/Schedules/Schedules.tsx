import { useTranslation } from "react-i18next";

const SchedulesComponent: React.FC = () => {
  const [t] = useTranslation("global");

  const schedule = [
    { day: t("global.days.Monday"), hours: "12:00PM - 08:00AM" },
    { day: t("global.days.Tuesday"), hours: "12:00PM - 08:00AM" },
    { day: t("global.days.Wednesday"), hours: "12:00PM - 08:00AM" },
    { day: t("global.days.Thursday"), hours: "12:00PM - 08:00AM" },
    { day: t("global.days.Friday"), hours: "12:00PM - 08:00AM" },
    { day: t("global.days.Saturday"), hours: "12:00PM - 08:00AM" },
    { day: t("global.days.Sunday"), hours: "12:00PM - 08:00AM" },
    // { day: t("global.days.Sunday"), hours: t("schedules.close") },
  ];

  return (
    <section id="schedules" className="schedules">
      <div className="schedules__container">
        <div className="schedules__card">
          <div className="schedules__column">
            <header className="schedules__header">
              <span className="subtitle">{t(`home.schedules.subtitle`)}</span>
              <h2 className="title">{t(`home.schedules.title`)}</h2>
            </header>
            <div className="schedules__content">
              <p> {t(`home.schedules.desc`)}</p>
              <p> {t(`home.schedules.desc_2`)}</p>
              <p> {t(`home.schedules.desc_3`)}</p>
            </div>
          </div>
          <div className="schedules__column">
            {schedule.map((item, index) => (
              <div key={index} className="schedules__item">
                <span className="day">{item.day}</span>
                <div className="line"></div>
                <span className="hours">{item.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchedulesComponent;
