import LoadingIcon from "./loading.svg?react";

const Loading = ({ size, stroke = "#76f" }) => {
  if (size) return <LoadingIcon width={size} height={size} stroke={stroke} />;
  return <LoadingIcon width="100%" height="100%" stroke={stroke} />;
};

export default Loading;
