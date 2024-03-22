import Container from "../Container/Container.jsx";
import SectionTitle from "../SectionTitle/SectionTitle.jsx";
import styles from "../BigProducts/BigProducts.module.less";
import Button from "../Button/Button.jsx";
export default function BigProducts() {
  return (
    <section>
      <Container>
        <SectionTitle>Наші роботи</SectionTitle>
        <div className={styles.content}>
          <div className={styles.cardRight}>
            <div className={styles.imgWrap}>
              <img src="src/assets/images/dwarf.png" alt="" />
            </div>
            <div className={styles.textCol}>
              <div>
                <h3>Костюм дварфа</h3>
                <p>
                  Наш найновіший та найбільш унікальний виріб - костюм дварфа
                  від Padres Craft. Цей захоплюючий костюм виготовлений виключно
                  з натуральної шкіри вручну нашими кваліфікованими майстрами.
                  <br /> Цей костюм не тільки створить неповторний образ для вас
                  у ролевих іграх, але і підкреслить ваш стиль та
                  індивідуальність на будь-якому заході чи фестивалі. <br />
                  Кожен елемент костюму пропитаний магією майстерності, яка
                  відображається у кожному шві, кожному рельєфі і кожній деталі.
                </p>
              </div>

              <Button
                to="/product/35"
                shadow="right"
                style={{ height: "51px" }}
              >
                Переглянути
              </Button>
            </div>
          </div>
          <div className={styles.cardLeft}>
            <div className={styles.imgWrap}>
              <img src="src/assets/images/gorj2.png" alt="" />
            </div>
            <div className={styles.textCol}>
              <div>
                <h3>Горжет & Наплічники</h3>
                <p>
                  Горжет та наплічники від Padres Craft - символ сили та
                  впевненості в собі. Виготовлені з натуральної шкіри товщиною
                  понад 3 мм, вони гарантують надійність та довговічність.
                  <br /> Кожна деталь виробу відзначена величною залізною та
                  латуневою фурнітурою, що додає стилізованого вигляду та
                  забезпечує максимальну міцність.
                  <br />
                  Ці горжети та наплічники не лише виконують свою функціональну
                  роль, а й створюють враження та підкреслюють ваш унікальний
                  стиль.
                </p>
              </div>

              <Button to="product/9" shadow="left" style={{ height: "51px" }}>
                Переглянути
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
