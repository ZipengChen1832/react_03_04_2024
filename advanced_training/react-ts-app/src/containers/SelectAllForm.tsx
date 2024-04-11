import { useEffect, useState } from "react";
import { Item, ItemAPIResponse, getItems } from "../api/selectFormMock";
import Checkbox from "../components/Checkbox";

interface SelectFormItem extends Item {
  isChecked: boolean;
}

export default function SelectAllForm() {
  const [items, setItems] = useState<SelectFormItem[]>([]);

  const isAllChecked = items.every((item: SelectFormItem) => item.isChecked);

  useEffect(() => {
    getItems().then((data: ItemAPIResponse) => {
      setItems(data.map((item: Item) => ({ ...item, isChecked: false })));
    });
  }, []);

  const handleCheck = (id: number) => {
    setItems((prev) =>
      prev.map((_item: SelectFormItem) => {
        if (_item.id === id) {
          return { ..._item, isChecked: !_item.isChecked };
        } else {
          return _item;
        }
      })
    );
  };

  const handleSelectAll = () => {
    setItems((prev) =>
      prev.map((_item) => {
        return { ..._item, isChecked: !isAllChecked };
      })
    );
  };

  return (
    <div>
      <h1>Select All Form</h1>
      <DisplayBox items={items.filter((item) => item.isChecked)} />
      <div>
        <Checkbox
          label="Select All"
          isChecked={isAllChecked}
          onChange={handleSelectAll}
        />
        {items.map((item) => {
          const { id, itemName, isChecked } = item;
          return (
            <div key={id}>
              <Checkbox
                label={itemName}
                isChecked={isChecked}
                onChange={() => {
                  handleCheck(id);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface DisplayBoxProps {
  items: SelectFormItem[];
}

function DisplayBox({ items }: DisplayBoxProps) {
  return (
    <div className="display">
      <h3>Selected Value:</h3>
      {items.map(({ itemName, id }) => {
        return <span key={id}>{itemName}</span>;
      })}
    </div>
  );
}
