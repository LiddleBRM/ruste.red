import React, { useState } from "react";
import {
  ContactArea,
  ContactMeansColumn,
  ContactMeansRow,
  ContactMeansRowSelected,
  DetailColumn,
  DetailColumnSP,
  DetailRow,
} from "./ContactStyled";
import { ContactData } from "./ContactData";

//連絡先
function Contact() {
  const [linkDetail, setLinkDetail] = useState(0);
  const clickCategory = (dataIndex: number) => {
    setLinkDetail(dataIndex);
  };

  const levelColor = (level: string) => {
    if (level == "info") {
      return '"#00793D"';
    } else if ("warning") {
      return "#FF0000";
    }
  };

  return (
    <ContactArea>
      <ContactMeansColumn>
        {ContactData.map((row, index) => (
          <>
            {linkDetail != index && (
              <ContactMeansRow onClick={() => clickCategory(index)}>
                {row.key}
                {row.notice.text && (
                  <a style={{ color: levelColor(row.notice.level) }}>
                    {row.notice.text}
                  </a>
                )}
              </ContactMeansRow>
            )}
            {linkDetail == index && (
              <>
                <ContactMeansRowSelected onClick={() => clickCategory(index)}>
                  {row.key}
                  {row.notice.text && (
                    <a style={{ color: levelColor(row.notice.level) }}>
                      {row.notice.text}
                    </a>
                  )}
                </ContactMeansRowSelected>

                <DetailColumnSP>
                  {ContactData[linkDetail].detail.map((row) => (
                    <DetailRow
                      onClick={() => (window.location.href = row.link)}
                    >
                      {row.a}
                    </DetailRow>
                  ))}
                </DetailColumnSP>
              </>
            )}
          </>
        ))}
      </ContactMeansColumn>
      <DetailColumn>
        {ContactData[linkDetail].detail.map((row) => (
          <DetailRow onClick={() => (window.location.href = row.link)}>
            {row.a}
          </DetailRow>
        ))}
      </DetailColumn>
    </ContactArea>
  );
}

export default Contact;
