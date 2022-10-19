import React, { useRef, useEffect } from "react";

interface Props {
    children?: JSX.Element | JSX.Element[],
    handleChange: (value: any) => void;
}

const Editable: React.FC<Props> = ({ handleChange, children }): React.ReactElement => {
  const element = useRef<any>();
  let elements = React.Children.toArray(children);
  if (elements.length > 1) {
    throw Error("Can't have more than one child");
  }
  const onMouseUp = () => {
    const value = element.current?.value || element.current?.innerText;
    if (handleChange) {
      handleChange(value);
    }
  };
  useEffect(() => {
    const value = element.current?.value || element.current?.innerText;
    if (handleChange) {
      handleChange(value);
    }
  }, []);
  elements = React.cloneElement(elements[0], {
    contentEditable: true,
    suppressContentEditableWarning: true,
    ref: element,
    onKeyUp: onMouseUp
  });
  return elements;
};

export default Editable;
