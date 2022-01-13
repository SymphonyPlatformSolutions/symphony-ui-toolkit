import * as React from 'react';

type LinkProps = {
  /** Required; Denotes the target URL */
  url: string;
  /** Content of the link*/
  children?: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({
  children,
  url,
}: LinkProps) => {
  return (
    <a className="tk-link" rel="noreferrer" href={url} target="_blank">{children || url}</a>
  )
}

export default Link;
