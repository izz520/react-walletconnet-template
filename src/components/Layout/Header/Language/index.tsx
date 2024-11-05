
import { useTranslation } from "react-i18next";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { useMemo, useState } from "react";

const languages = [
  { label: 'English', value: 'en' },
  { label: 'French', value: 'fr' },
]
const Language = () => {
  const { i18n } = useTranslation()
  const [selectedKeys, setSelectedKeys] = useState(new Set([i18n.language]));
  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replace(/_/g, " "),
    [selectedKeys]
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeLanguageSelect = (keys: any) => {
    setSelectedKeys(keys)
    const selectedValue = Array.from(keys).join(', ')
    i18n.changeLanguage(selectedValue)
    localStorage.setItem("i18nextLng", selectedValue)
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="bordered"
          className="capitalize"
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={changeLanguageSelect}
      >
        {
          languages.map((language) => (
            <DropdownItem key={language.value}>{language.label}</DropdownItem>
          ))
        }
      </DropdownMenu>
    </Dropdown>
  )
}

export default Language