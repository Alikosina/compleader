import InfoBlock from "../InfoBlock";

import styles from "./InfoList.module.scss";

const MOCK_DATA = [
  {
    id: 1,
    title: "Бюджет",
    count: 94,
    text: "Проверка настройки лимитов бюджета, работу со ставками и динамика расходов",
  },
  {
    id: 2,
    title: "Структура аккаунта",
    count: 234,
    text: "Правильность распределения рекламных кампаний по структуре аккаунта",
  },
  {
    id: 3,
    title: "Настройки кампании",
    count: 12,
    text: "Корректность настроек рекламных кампаний",
  },
  {
    id: 4,
    title: "Качество объявлений",
    count: 76,
    text: "Тексты, ссылки, доступность посадочных страниц и модерация",
  },
  {
    id: 5,
    title: "Таргетинг и семантическое ядро",
    count: 321,
    text: "Наличие минус-слов, показы по запросам и черного списка, а также скачки в динамике охвата",
  },
];

const InfoList: React.FC = () => {
  return (
    <div className={styles.root}>
      {MOCK_DATA.map(({ id, ...rest }) => (
        <InfoBlock key={id} {...rest} />
      ))}
    </div>
  );
};

export default InfoList;
