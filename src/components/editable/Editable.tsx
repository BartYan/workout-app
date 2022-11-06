import { handleClientScriptLoad } from "next/script";
import React, { useRef } from "react";

interface Props {
    children?: JSX.Element | JSX.Element[],
    handleChange: (element: any, value: any) => void;
}

const Editable: React.FC<Props> = ({ handleChange, children }): React.ReactElement => {
  const element = useRef<any>();
  let elements: (string | number | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal)[] = React.Children.toArray(children);
  if (elements.length > 1) {
    throw Error("Can't have more than one child");
  }
  const onBlur = () => {
    const value = element.current?.value || element.current?.innerText;
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (handleChange) {
      handleChange(element, value);
    }
  };
  
  elements = React.cloneElement(elements[0], {
    contentEditable: true,
    suppressContentEditableWarning: true,
    ref: element,
    onBlur: onBlur
  });
  return elements;
};

export default Editable;
