import * as React from 'react';

type LinkProps = {
  children?: React.ReactNode;
  url: string;
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
