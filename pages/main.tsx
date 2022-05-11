import Head from "next/head";
import styles from "../styles/Home.module.css";
import cn from "classnames";
import axios from "axios";
import Tiles from "@components/pages/main/Tiles";
import Select from "@components/common/ui/select/Select";

export async function getServerSideProps() {
  const catalog = await axios
    .get("http://localhost:3001/api/get-catalog")
    .then((res) => {
      return res.data.catalog;
    });

  return {
    props: {
      catalog,
    },
  };
}

export default function Main(props: any) {
  const { catalog } = props;

  return (
    <div className={styles.container}>
      <Head>
        <title>Box Dust</title>
      </Head>

      <div className="container">
        {/*<hat />*/}

        <section className="events mt-4 row">
          <div className="col-9 lg:text-right pl-0 d-none d-lg-block">
            {/*<skew-slider/>*/}
          </div>

          <div className="col col-lg-3 pr-0">
            {/*Коробка не указана в этой карточке*/}
            <div className="events-panel">
              {/*<LastTopPrize :lastTopPrizes="lastTopPrizes" />*/}
            </div>
          </div>

          <div className="col-12 mt-4 pl-0 pr-0">
            {/*<HistoryLine :prizesHistory="prizesHistory" />*/}
          </div>
        </section>

        <section className="row mt-4 categories">
          <div className="col">
            <Select
              options={[
                { label: "one", value: 1 },
                { label: "two", value: 2 },
                { label: "three", value: 3 },
                { label: "four", value: 4 },
              ]}
              name={"foo"}
              value={{ label: "one", value: 1 }}
            />
          </div>

          <div className="col-12 pl-0 pr-0 d-none d-sm-block">
            <Tiles catalog={catalog} />
          </div>
        </section>
      </div>

      <section className="row">
        <div className="col-12">
          <h2 className="text-center mt-10 mb-10 text-5xl">
            {/*<span className="neon" data-text={menu[selectedMenuItemId].name}>{menu[selectedMenuItemId].name}</span>*/}
          </h2>

          {/*<Catalog :category="menu[selectedMenuItemId]" />*/}
        </div>
      </section>

      <section className="row mt-5">
        <div className="col-12">{/*<delivery />*/}</div>
      </section>

      <section className="row mt-5">
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-start">
          {/*<Reviews :reviews="reviews" />*/}
        </div>

        <div className="col-12 col-md-6 d-flex justify-content-center align-items-start">
          {/*<FAQ />*/}
        </div>
      </section>
    </div>
  );
}
