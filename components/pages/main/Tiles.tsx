import * as React from "react";
import cn from "classnames";
import Styles from "@components/pages/main/Tiles.module.scss";

interface IProps {
  catalog: Record<any, any>[];
}

export const Tiles: React.FC<IProps> = function (props) {
  const { catalog } = props;
  const items = [];

  for (let i = 0; i < catalog.length; i++) {
    const item = catalog[i];

    items.push(
      <div
        className={cn([Styles.categoryTile, Styles[`categoryTile${i + 1}`]])}
        key={`category-tile-${i}`}
      >
        {item.name}
      </div>
    );
  }

  return <div className={Styles.categoryTiles}>{items}</div>;
};

export default Tiles;
