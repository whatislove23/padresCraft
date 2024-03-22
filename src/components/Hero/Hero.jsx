import style from "./Hero.module.less";
import Container from "../Container/Container";
import Button from "../Button/Button";
export default function Hero() {
  return (
    <div className={style.bg}>
      <div className={style.blur}>
        <Container>
          <div className={style.content}>
            <div>
              <h1>
                <span>Шкіряні вироби</span> на замовлення, <br />
                виготовлені вручну <span>для вашої унікальності.</span>
              </h1>
              <p>
                “Від ролевих ігор до повсякденного використання” -
                <span> Padres Craft </span>
              </p>
            </div>
            <Button to="/products" style={{ width: "352px" }}>
              Переглянути товари
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}
