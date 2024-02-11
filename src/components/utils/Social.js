import { PORTFOLIO_DATA } from "../../data/Data";

export default function Social({ color_class }) {
  const tabItems = PORTFOLIO_DATA.profile.socialMedia.map((data, key) => (
    <a href={data.link} target="_blank" className={key === 0 ? "" : "pl-4"}>
      <i className={`${data.class} ${color_class} hover:text-yellow`}></i>
    </a>
  ));

  return tabItems;
}
