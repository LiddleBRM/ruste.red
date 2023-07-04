import React, { useState } from "react";
import About from "./about/About";
import Contact from "./contact/Contact";
import Links from "./links/Links";
import Profile from "./profile/Profile";
import { MainBody, NameHeader } from "./styled/Styled";
import {
  ButtonArea,
  CategoryTab,
  CategoryTabSelected,
} from "./styled/ButtonAreaStyle";
import { ContactMeansRow, DetailColumnSP } from "./contact/ContactStyled";

function Index() {
  const [checked, setChecked] = useState(1);
  const [acceptSpSite, setAcceptSpSite] = useState(false);

  const clickExit = () => {
    alert(
      "いい感じになったらSNSで告知します。それまではSNSをご覧ください。misskey : @liddle@misskey.ruste.red twitter: @LiddleBRM"
    );
    window.location.replace("https://misskey.ruste.red/@liddle");
  };

  return (
    <>
      <NameHeader>Julia "Rustered" Scott</NameHeader>
      <br />
      <br />
      {window.innerWidth < 820 && !acceptSpSite && (
        <>
          ⚠️CAUTION!!
          <br />
          スマートフォン用サイトは現在調整中です。
          <br />
          だいぶ見づらいですが閲覧しますか？
          <br />
          <br />
          <br />
          <DetailColumnSP onClick={() => setAcceptSpSite(true)}>
            ENTER
          </DetailColumnSP>
          <br />
          <ContactMeansRow onClick={() => clickExit()}>EXIT</ContactMeansRow>
        </>
      )}
      {(window.innerWidth > 820 || acceptSpSite) && (
        <>
          <ButtonArea>
            <br />
            {/* TODO styled-componentsの引数機能を用いてすっきりとした記述にする */}
            {checked == 1 && (
              <CategoryTabSelected onClick={() => setChecked(1)}>
                About
              </CategoryTabSelected>
            )}
            {checked != 1 && (
              <CategoryTab onClick={() => setChecked(1)}>About</CategoryTab>
            )}
            {checked == 2 && (
              <CategoryTabSelected onClick={() => setChecked(2)}>
                Links
              </CategoryTabSelected>
            )}
            {checked != 2 && (
              <CategoryTab onClick={() => setChecked(2)}>Links</CategoryTab>
            )}
            {checked == 3 && (
              <CategoryTabSelected onClick={() => setChecked(3)}>
                Contact
              </CategoryTabSelected>
            )}
            {checked != 3 && (
              <CategoryTab onClick={() => setChecked(3)}>Contact</CategoryTab>
            )}
          </ButtonArea>
          <MainBody>
            <br />
            {checked == 1 && <About />}
            {/*checked == 2 && <Profile /> */}
            {checked == 2 && <Links />}
            {checked == 3 && <Contact />}
          </MainBody>
        </>
      )}
    </>
  );
}

export default Index;
