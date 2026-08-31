import { ASSETS } from "../../data/siteConfig";

/** Compact SkillOrbit watermark for course banners. Size is driven by `.course-banner` CSS. */
export default function CourseBannerMark() {
  return (
    <span className="course-banner-mark" aria-hidden="true">
      <img
        src={ASSETS.logo}
        alt=""
        className="course-banner-mark__logo"
        decoding="async"
      />
    </span>
  );
}
