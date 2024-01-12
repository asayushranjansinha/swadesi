import React from "react";

interface WithTitleProps {
  title: string;
}

function SectionWithHeadingHOC<P>(
  WrappedComponent: React.ComponentType<P>,
  defaultTitle: string
) {
  return function WithTitleWrapper(props: P & WithTitleProps) {
    return (
      <div className="w-full mt-4">
        <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold mb-4">
          {props.title || defaultTitle}
        </h2>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default SectionWithHeadingHOC;
