import Alert from "react-bootstrap/Alert";
import { useEffect, useState } from "react";
import { LoadingStatus } from "../../../commons/constants";

interface BannerProps {
  text: string;
  type: LoadingStatus;
}

//Impemented, but not used yet
export const Banner = ({ text, type }: BannerProps) => {
  const [show, setShow] = useState(true);
  const delay = 2000; // 2 seconds

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, delay);
    return () => clearTimeout(timer);
  }, []);

  const transformedVariant =
    type === LoadingStatus.Loading
      ? "info"
      : type === LoadingStatus.Loaded
      ? "success"
      : "danger";

  return (
    show && (
      <Alert key={transformedVariant} variant={transformedVariant}>
        {text}
      </Alert>
    )
  );
};
