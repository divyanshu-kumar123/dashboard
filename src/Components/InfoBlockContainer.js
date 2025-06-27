import React from "react";
import InfoBlock from "./InfoBlock";

function InfoBlockContainer() {
  const infoData = [
    {
      title: "NIFTY 50",
      tag: "INDEX",
      pricing: "-12.45",
      pricingPercent: "-0.70",
      absolutePrice: "1963.5",
    },
    {
      title: "BANK NIFTY",
      tag: "INDEX",
      pricing: "210.10",
      pricingPercent: "0.85",
      absolutePrice: "41200.30",
    },
    {
      title: "RELIANCE",
      tag: "STOCK",
      pricing: "8.65",
      pricingPercent: "1.15",
      absolutePrice: "758.40",
    },
    {
      title: "TCS",
      tag: "STOCK",
      pricing: "-12.30",
      pricingPercent: "-0.90",
      absolutePrice: "1342.70",
    },
    {
      title: "INFY",
      tag: "STOCK",
      pricing: "5.75",
      pricingPercent: "0.45",
      absolutePrice: "1289.25",
    },
    {
      title: "HDFC BANK",
      tag: "BANKING",
      pricing: "-3.20",
      pricingPercent: "-0.25",
      absolutePrice: "1234.90",
    },
    {
      title: "ICICI BANK",
      tag: "BANKING",
      pricing: "4.10",
      pricingPercent: "0.33",
      absolutePrice: "1250.55",
    },
    {
      title: "ONGC",
      tag: "ENERGY",
      pricing: "-2.75",
      pricingPercent: "-1.20",
      absolutePrice: "223.40",
    },
    {
      title: "ADANI ENT",
      tag: "STOCK",
      pricing: "15.30",
      pricingPercent: "2.05",
      absolutePrice: "762.10",
    },
    {
      title: "ITC",
      tag: "STOCK",
      pricing: "-1.05",
      pricingPercent: "-0.75",
      absolutePrice: "220.85",
    },
    {
      title: "NIFTY 50",
      tag: "INDEX",
      pricing: "-125.45",
      pricingPercent: "-0.70",
      absolutePrice: "19634.50",
    },
    {
      title: "BANK NIFTY",
      tag: "INDEX",
      pricing: "210.10",
      pricingPercent: "0.85",
      absolutePrice: "41200.30",
    },
    {
      title: "RELIANCE",
      tag: "STOCK",
      pricing: "8.65",
      pricingPercent: "1.15",
      absolutePrice: "758.40",
    },
  ];

  return (
    <div style={{ overflowY: "auto" }}>
      {infoData.map((item, index) => (
        <InfoBlock
          key={index}
          title={item.title}
          tag={item.tag}
          pricing={item.pricing}
          pricingPercent={item.pricingPercent}
          absolutePrice={item.absolutePrice}
        />
      ))}
    </div>
  );
}

export default InfoBlockContainer;
