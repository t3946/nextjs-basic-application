import * as React from "react";
import Tiles from "@components/pages/main/Tiles";
import Select from "@components/common/ui/select/Select";

interface IProps {
  catalog: Record<any, any>[];
  category: any;
  setCategory: any;
}

export const SelectCategory: React.FC<IProps> = function (props) {
  const { catalog, category, setCategory } = props;
  const selectOptions = catalog.map((category) => {
    return {
      label: category.name,
      value: category,
    };
  });
  const selectedOption = {
    label: category.name,
    value: category,
  };

  return (
    <div>
      <div className="col">
        <Select
          options={selectOptions}
          name={"foo"}
          value={selectedOption}
          onChange={(e) => {
            setCategory(e.target.value.value);
          }}
          instanceId={"select-category"}
          classes={{
            select: "d-sm-none",
          }}
        />
      </div>

      <div className="col-12 pl-0 pr-0 d-none d-sm-block">
        <Tiles
          catalog={catalog}
          selectedCategory={category}
          setCategory={setCategory}
        />
      </div>
    </div>
  );
};

export default SelectCategory;
