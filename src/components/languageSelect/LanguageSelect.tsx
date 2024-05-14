import { LangSelectArea, LangSelectTag } from "./LanguageSelectStyled";

// TODO 他のやつも全部関数にする。propsの喜びを知りましょう
const LanguageSelect: React.FC<{
  isRustered: boolean;
  setIsRustered: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isRustered, setIsRustered }) => {
  return (
    <LangSelectArea>
      <LangSelectTag
        isSelected={!isRustered}
        onClick={() => setIsRustered(false)}
      >
        🇯🇵
      </LangSelectTag>
      <LangSelectTag
        isSelected={isRustered}
        onClick={() => setIsRustered(true)}
      >
        🇬🇧
      </LangSelectTag>
    </LangSelectArea>
  );
};

export default LanguageSelect;
