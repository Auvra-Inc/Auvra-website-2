import { Link } from 'react-router-dom';
// Internal paths use client-side routing; external and mailto links stay plain anchors.
export default function SmartLink({ href, children, ...rest }) {
  const external = /^(https?:|mailto:|tel:)/.test(href);
  if (external) return <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} {...rest}>{children}</a>;
  return <Link to={href} {...rest}>{children}</Link>;
}
