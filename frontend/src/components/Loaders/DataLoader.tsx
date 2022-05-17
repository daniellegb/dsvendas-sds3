import ContentLoader from "react-content-loader";

const DataLoader = () => (
  <ContentLoader
    speed={2}
    width={100}
    height={200}
    viewBox="0 0 100 200"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="0" y="10" rx="0" ry="0" width="10" height="10" />
    <rect x="15" y="10" rx="0" ry="0" width="10" height="10" />
    <rect x="30" y="10" rx="0" ry="0" width="10" height="10" />
  </ContentLoader>
);

export default DataLoader;
