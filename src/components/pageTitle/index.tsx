import React from "react";

interface PageTitleProps {
  title: string,
  description?: string
}

const PageTitle: React.FC<PageTitleProps> = ({title, description}) => {
  return <>
    <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-3xl">
      <span className={"underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600"}>
        {title}
      </span>
    </h2>
    <p className="mb-8 font-light text-gray-500 sm:text-l dark:text-gray-400">{description}</p>
  </>
}

export default React.memo(PageTitle);
