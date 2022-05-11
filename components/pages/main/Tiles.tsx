import * as React from "react";
import cn from "classnames";
import Styles from "@components/pages/main/Tiles.module.scss";

interface IProps {
  catalog: Record<any, any>[];
  setCategory: any;
  selectedCategory: Record<any, any>;
}

export const Tiles: React.FC<IProps> = function (props) {
  const { catalog, selectedCategory, setCategory } = props;
  const items = [];

  for (let i = 0; i < catalog.length; i++) {
    const item = catalog[i];

    items.push(
      <label
        className={cn([
          Styles.categoryTile,
          Styles[`categoryTile${i + 1}`],
          {
            [Styles.categoryTile_select]:
              item.category_id === selectedCategory.category_id,
          },
        ])}
        key={`categoryTile${i + 1}`}
      >
        <input
          type="radio"
          name={"select-category"}
          onChange={() => setCategory(item)}
          className={"d-none"}
        />

        <div key={`category-tile-${i}`}>{item.name}</div>
      </label>
    );
  }

  return <div className={Styles.categoryTiles}>{items}</div>;
};

export default Tiles;
