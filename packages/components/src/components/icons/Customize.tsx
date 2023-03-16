import * as React from 'react';
import { SVGProps } from 'react';
const SvgCustomize = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
    <path d="M6 .479c0-.33-.57-.6-.808-.422C4.697.427 3 1.864 3 4.197a5.014 5.014 0 0 0 3 4.595v5.203C6 15.102 6.895 16 8 16s2-.898 2-2.005V8.792c1.766-.773 3-2.54 3-4.595 0-2.333-1.697-3.77-2.192-4.14C10.57-.121 10 .149 10 .479v3.864L8 5.5 6 4.343V.479Z" />
  </svg>
);
export default SvgCustomize;
