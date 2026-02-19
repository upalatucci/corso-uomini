"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import React from "react";

function Table({ data }) {
  const headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  const rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props) {
  const href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary underline underline-offset-2 hover:text-accent transition-colors"
      {...props}
    />
  );
}

function RoundedImage(props) {
  return <figure className="my-10"><Image alt={props.alt} className="rounded-lg mx-auto" width={500} height={300} {...props} /> <figcaption className="text-sm max-w-2xl mt-4 mx-auto">{props?.title}</figcaption></figure>;
}

function Code({ children, ...props }) {
  const codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

const headingClass = {
  1: "text-2xl md:text-3xl font-bold text-primary mt-10 mb-4 pb-2 border-b-2 border-primary",
  2: "text-xl md:text-2xl font-bold text-primary mt-8 mb-3 pb-2 border-b-2 border-primary",
  3: "text-lg md:text-xl font-semibold text-primary mt-6 mb-2",
  4: "text-base font-semibold text-dark mt-4 mb-2",
  5: "text-base font-semibold text-dark mt-4 mb-2",
  6: "text-sm font-semibold text-dark mt-3 mb-1",
};

function createHeading(level) {
  const cls = headingClass[level] || "text-primary font-bold my-4";
  const Heading = ({ children }) => {
    const slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug, className: cls },
      children
    );
  };
  Heading.displayName = `Heading${level}`;
  return Heading;
}

const Blockquote = ({ children }) => (
  <blockquote className="border-l-4 border-primary bg-gray-light/80 py-4 pl-5 pr-4 not-italic rounded-r-lg my-6 text-body-color">
    {children}
  </blockquote>
);

const List = ({ children }) => (
  <ul className="my-4 list-disc space-y-1 pl-6 [&>li]:pl-1 [&_li]:marker:text-primary">
    {children}
  </ul>
);

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  img: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
  blockquote: Blockquote,
  ul: List
};

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
