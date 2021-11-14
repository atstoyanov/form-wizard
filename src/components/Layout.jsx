import './Layout.css'

export const Layout = ({ header, content }) => {
  return (
    <div className="layout">
      <div className="header">{header}</div>
      <div className="content">{content}</div>
    </div>
  );
};
