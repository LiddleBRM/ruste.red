import React from "react";
import {
  AboutArea,
  DescriptionArea,
  DescriptionRow,
  KomokuColumn,
  // ProfileColumn,
  ProfileTable,
  ProfileTableRow,
  ProfileTableRowKey,
  ProfileTableRowLink,
  ProfileTableRowValue,
} from "./AboutStyled";
import { ProfileData } from "./AboutData";
import { TagsData } from "./TagsData";
import {
  CensoredText,
  IntrodoctionText,
} from "./IntroducctionText/IntroductionText";

const About: React.FC<{
  isRustered: boolean;
}> = ({ isRustered }) => {
  return (
    <>
      <AboutArea>
        <KomokuColumn>
          {/* ここに自己紹介動画 */}
          <a style={{ fontSize: "50px" }}>Profile</a>
          <ProfileTable>
            {ProfileData.map((row) => (
              <ProfileTableRow>
                <ProfileTableRowKey>{row.key}</ProfileTableRowKey>
                <ProfileTableRowValue>
                  <ProfileTableRowLink href={row?.link}>
                    {row.value}
                  </ProfileTableRowLink>
                </ProfileTableRowValue>
              </ProfileTableRow>
            ))}
          </ProfileTable>
          {/* TODO こんなやる気のない改行ではなくスペース用のdivタグを入れる */}
          <br />
          <a style={{ fontSize: "50px" }}>Tags</a>
          <ProfileTable>
            {TagsData.map((row) => (
              <ProfileTableRow>
                <ProfileTableRowKey>{row.key}</ProfileTableRowKey>
                <ProfileTableRowValue>{row.value}</ProfileTableRowValue>
              </ProfileTableRow>
            ))}
          </ProfileTable>
          {/* TODO こんなやる気のない改行ではなくちゃんとProfileTableにgapを設定する */}
          <br />
          <a style={{ fontSize: "50px" }}>Introduction</a>
          <ProfileTable>
            <DescriptionArea>
              {IntrodoctionText.map((desc) => (
                <DescriptionRow>{desc}</DescriptionRow>
              ))}
            </DescriptionArea>
            {isRustered && (
              <DescriptionArea>
                {CensoredText.map((desc) => (
                  <DescriptionRow>{desc}</DescriptionRow>
                ))}
              </DescriptionArea>
            )}
          </ProfileTable>
        </KomokuColumn>
      </AboutArea>
    </>
  );
};

export default About;
