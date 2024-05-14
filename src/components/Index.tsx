import React, { useState } from "react";
import About from "./about/About";
import Contact from "./contact/Contact";
import Links from "./links/Links";
import { MainBody, NameHeader, NameheaderDesc } from "./styled/Styled";
import {
  ButtonArea,
  CategoryTab,
  CategoryTabSelected,
} from "./styled/ButtonAreaStyle";
import checkQuery from "./functions/CheckQuery";

function Index() {
  const [checked, setChecked] = useState(1);

  const isRustered = checkQuery();

  return (
    <>
      <NameHeader>Julia "Rustered" Scott</NameHeader>
      <NameheaderDesc>
        {checkQuery() ? '"The Rustered"' : 'Julia "Rustered" Scott'}. Virtual
        Japanese Zombie : 死人憑 and Crossdresser. Merciful. Love the
        Monstergirls and Analog Horror.
      </NameheaderDesc>

      <>
        <ButtonArea>
          <br />
          {/* TODO propsで選択状況を渡すことでもう少しすっきりした記述にする */}
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
          {checked == 1 && <About isRustered={isRustered} />}
          {checked == 2 && <Links />}
          {checked == 3 && <Contact />}
        </MainBody>
      </>
    </>
  );
}

export default Index;
