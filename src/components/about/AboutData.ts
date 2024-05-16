type ProfileDataType = { key: string; value: string; link?: string };

export const ProfileData: Array<ProfileDataType> = [
  { key: "Name", value: "Julia Rustered Scott" },
  { key: "Gender", value: "he/him crossdresser" },
  {
    key: "Species",
    value: "死人憑(a type of Japanese undead)",
    link: "https://ja.wikipedia.org/wiki/%E6%AD%BB%E4%BA%BA%E6%86%91",
  },
  { key: "Birthday", value: "■■■■/■■/■■" }, // 誰の誕生日を書く？
  { key: "Language", value: "🇯🇵(Native) / 🇺🇸🇬🇧(Learner)" },
  {
    key: "Fan Mark",
    value: "💚💭😶‍🌫️(Green Heart / Thought Balloon / Face in Clouds)",
  },
  { key: "Mom", value: "へれおれお", link: "https://misskey.io/@hereoreo" },
];

// NOTE 最終的にはソースではなくyamlとかで管理するようにしたい
