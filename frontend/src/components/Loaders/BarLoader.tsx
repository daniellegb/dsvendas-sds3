import ContentLoader from "react-content-loader";

const BarLoader = () => (
  <ContentLoader
    speed={2}
    width={530}
    height={215}
    viewBox="0 0 530 215"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="0" y="0" rx="0" ry="0" width="530" height="215" />
  </ContentLoader>
);

export default BarLoader;
