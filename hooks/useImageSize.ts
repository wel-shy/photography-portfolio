export const useImageSize = ({
  ratio,
  orientation,
  maxSize,
}: {
  orientation: string;
  ratio: string;
  maxSize: number;
}) => {
  const longEdge = Math.max(...ratio.split("x").map((s) => parseInt(s, 10)));
  const shortEdge = Math.min(...ratio.split("x").map((s) => parseInt(s, 10)));
  const isLandscape = orientation === "landscape";

  const shortestEdge = (maxSize / longEdge) * shortEdge;

  const width = isLandscape ? maxSize : shortestEdge;
  const height = isLandscape ? shortestEdge : maxSize;

  return [height, width];
};

export default useImageSize;
