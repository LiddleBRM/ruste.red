import React, { useState } from "react";
import {
  DetailColumn,
  DetailColumnSP,
  DetailRow,
  LinksArea,
  LinksColumn,
  LinksRow,
  LinksRowSelected,
} from "./LinksStyled";
import { LinksData } from "./LinksData";

function Links() {
  const [linkDetail, setLinkDetail] = useState(0);
  const clickCategory = (dataIndex: number) => {
    setLinkDetail(dataIndex);
  };

  return (
    <LinksArea>
      <LinksColumn>
        {LinksData.map((row, index) => (
          <>
            {linkDetail == index && (
              <>
                <LinksRowSelected onClick={() => clickCategory(index)}>
                  {row.key}
                </LinksRowSelected>
                <DetailColumnSP>
                  {LinksData[linkDetail].detail.map((row) => (
                    <DetailRow
                      onClick={() => (window.location.href = row.link)}
                    >
                      {row.a}
                    </DetailRow>
                  ))}
                </DetailColumnSP>
              </>
            )}
            {linkDetail != index && (
              <>
                <LinksRow onClick={() => clickCategory(index)}>
                  {row.key}
                </LinksRow>
              </>
            )}
          </>
        ))}
      </LinksColumn>
      <DetailColumn>
        {LinksData[linkDetail].detail.map((row) => (
          <DetailRow onClick={() => (window.location.href = row.link)}>
            {row.a}
          </DetailRow>
        ))}
      </DetailColumn>
    </LinksArea>
  );
}

export default Links;
