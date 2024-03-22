import Container from "../Container/Container.jsx";
import SectionTitle from "../SectionTitle/SectionTitle.jsx";
import styles from "../WhyUsSection/WhyUsSection.module.less";
import { ReactComponent as Hand } from "../../assets/svg/hand.svg";
import { ReactComponent as User } from "../../assets/svg/user.svg";
import { ReactComponent as Diamond } from "../../assets/svg/diamond.svg";
import { ReactComponent as List } from "../../assets/svg/list.svg";
const items = [
  {
    id: 1,
    title: "Ручна робота",
    Icon: Hand,
    text: "Кожен виріб від Padres Craft створюється вручну з використанням натуральної шкіри. Без застосування машинних швів, кожна деталь виробу отримуємаксимальну увагу і створює неповторний образ.",
  },
  {
    id: 2,
    title: "Індивідуальний підхід",
    Icon: User,
    text: "Ми відносимося до кожного замовлення з особливою увагою і готові допомогти Вам втілити ваші уявлення в реальність і створити унікальний виріб, що відповідає вашому стилю та смаку.",
  },
  {
    id: 3,
    title: "Унікальність кожного виробу",
    Icon: Diamond,
    text: "Ми прагнемо до того, щоб кожен виріб був по-справжньому неповторним. Кожен шов, кожна деталь, кожен відтінок шкіри - усе це створює унікальний характер кожного виробу. ",
  },
  {
    id: 4,
    title: "Широкий вибір",
    Icon: List,
    text: "У нас ви знайдете широкий асортимент продукції з натуральної шкіри, яка включає гаманці, картхолдери, портмоне, ремені, сумки, елементи кольчуг та аксесуари для фантастичних костюмів. ",
  },
];
export default function WhyUsSection() {
  return (
    <section>
      <Container>
        <SectionTitle>Чому нас обирають</SectionTitle>
        <div className={styles.content}>
          {items.map(({ Icon, title, text, id }) => {
            return (
              <div className={styles.card} key={id}>
                <div>
                  <Icon />
                  <h3>{title}</h3>
                </div>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
