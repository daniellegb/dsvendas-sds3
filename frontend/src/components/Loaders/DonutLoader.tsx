import ContentLoader from "react-content-loader";

const DonutLoader = () => (
  <ContentLoader
    speed={2}
    width={240}
    height={240}
    viewBox="0 0 240 240"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <circle cx="110" cy="110" r="110" />
  </ContentLoader>
);

export default DonutLoader;
