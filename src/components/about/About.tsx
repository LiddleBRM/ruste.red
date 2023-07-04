import React from "react";
import {
  AboutArea,
  KomokuColumn,
  // ProfileColumn,
  ProfileTable,
  ProfileTableRow,
  ProfileTableRowKey,
  ProfileTableRowValue,
} from "./AboutStyled";
import { ProfileData } from "./AboutData";
import { TagsData } from "./TagsData";

// 基本情報
function About() {
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
                <ProfileTableRowValue>{row.value}</ProfileTableRowValue>
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
        </KomokuColumn>
      </AboutArea>
    </>
  );
}

export default About;
