const EmailIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="email_icon"
      className="icon icon_email"
      fill="currentColor"
      stroke="currentColor"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <rect x={3} y={5} width={18} height={14} rx={2} />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
};
export default EmailIcon;
