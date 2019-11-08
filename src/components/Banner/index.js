import React from "react";
import { BannerSection, BannerImage } from "./styles";
import BannerImg from '../../assets/banner.jpg';

export const Banner = () => {
  return (
      <BannerSection>
        <BannerImage src={BannerImg} />
      </BannerSection>
  );
};
