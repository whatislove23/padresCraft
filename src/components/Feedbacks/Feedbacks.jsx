import Container from "../Container/Container.jsx";
import SectionTitle from "../SectionTitle/SectionTitle.jsx";
import styles from "../Feedbacks/Feedbacks.module.less";
const items = [
  {
    id: 1,
    name: "Андрій",
    feedback:
      "Шкіряна маска чумного доктора від Padres Craft - просто вражає! Це ідеальний аксесуар для ролевих ігор або тематичних вечірок. Вражений якістю та дизайном!",
    img: "src/assets/images/mask.png",
  },
  {
    id: 2,
    name: "Марія",
    feedback:
      "Фляга від Padres Craft - ідеальний спутник для подорожей та пригод. Вражаюча якість і дизайн!",
    img: "src/assets/images/flask.png",
  },
  {
    id: 3,
    name: "Наталія",
    feedback:
      "Ця червона поясна сумка від Padres Craft - просто крута! Практична та стильна, вона точно прикрасить мій образ.",
    img: "src/assets/images/bag4.png",
  },
];
export default function Feedbacks() {
  return (
    <section>
      <Container>
        <SectionTitle>Відгуки наших клієнтів</SectionTitle>
        <div className={styles.content}>
          {items.map(({ id, name, feedback, img }) => (
            <div className={styles.item} key={id}>
              <div>
                <img src={img} alt={feedback} />
              </div>
              <h3>{name}</h3>
              <p>{feedback}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
