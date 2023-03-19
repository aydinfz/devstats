import { IconProps } from "@/views/@dsvgui/types";

export const IssueIcon: React.FC<IconProps> = (props) => (
  <svg
    aria-hidden="true"
    height="16"
    viewBox="0 0 16 16"
    version="1.1"
    width="16"
    className="icon"
    {...props}
  >
    <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
    <path
      fillRule="evenodd"
      d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
    ></path>
  </svg>
);

export const PullRequestIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 16 16" width="16" height="16" className="icon" {...props}>
    <path d="M12.7 10.1V5.3C12.7 4.3 12 2.7 10 2.7V1.3l-2.7 2 2.7 2V4c1.2 0 1.3 1 1.3 1.3v4.8c-1 0.3-1.7 1.2-1.6 2.2 0 1.3 1 2.3 2.3 2.4s2.3-1 2.3-2.4c0-1.1-0.7-1.9-1.6-2.2z m-0.7 3.2c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1-0.4 1-1 1zM6.3 3.7C6.3 2.4 5.3 1.3 4 1.3S1.7 2.4 1.7 3.7c0 1.1 0.7 1.9 1.6 2.2v4.2c-1 0.3-1.7 1.2-1.6 2.2C1.7 13.6 2.7 14.7 4 14.7s2.3-1 2.3-2.4c0-1.1-0.7-1.9-1.6-2.2V5.9C5.6 5.6 6.3 4.7 6.3 3.7z m-3.3 0C3 3.1 3.4 2.7 4 2.7s1 0.4 1 1S4.6 4.7 4 4.7s-1-0.4-1-1z m2 8.6c0 0.6-0.4 1-1 1s-1-0.4-1-1S3.4 11.3 4 11.3s1 0.4 1 1z" />
  </svg>
);

export const MergeIcon: React.FC<IconProps> = (props) => (
  <svg
    viewBox="0 0 16 16"
    width="16"
    height="16"
    fill="currentColor"
    className="icon"
    {...props}
  >
    <path d="M1.7 12.3C1.7 13.6 2.7 14.7 4 14.7s2.3-1 2.3-2.4c0-1.1-0.7-1.9-1.6-2.2v-2.3c0.2 0.2 0.3 0.4 0.5 0.5 0.8 0.6 1.7 0.7 2.6 0.7 0.6 0 1.2-0.1 1.7-0.2a2.3 2.3 0 0 0 2.2 1.5c1.3 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3a2.3 2.3 0 0 0-2.3 1.8c-0.9 0.2-2.4 0.4-3.4-0.3-0.4-0.3-0.7-0.8-0.9-1.5C5.8 5.3 6.3 4.5 6.3 3.7 6.3 2.4 5.3 1.3 4 1.3S1.7 2.4 1.7 3.7c0 1.1 0.7 1.9 1.6 2.2v4.2c-1 0.3-1.7 1.2-1.6 2.2z m10-5.3c0.6 0 1 0.4 1 1s-0.4 1-1 1S10.7 8.6 10.7 8s0.4-1 1-1z m-6.7 5.3c0 0.6-0.4 1-1 1s-1-0.4-1-1S3.4 11.3 4 11.3s1 0.4 1 1z m-2-8.6C3 3.1 3.4 2.7 4 2.7s1 0.4 1 1S4.6 4.7 4 4.7s-1-0.4-1-1z" />
  </svg>
);

export const CommitIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 16 16" width="16" height="16" className="icon" {...props}>
    <path d="M11.3 7.3a3.3 3.3 0 0 0-6.6 0H1.3v1.4h3.4a3.3 3.3 0 0 0 6.6 0H14.7v-1.4h-3.4zM8 10c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2z" />
  </svg>
);

export const RepositoryIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 16 16" width="16" height="16" className="icon" {...props}>
    <path d="M12.3 2C13.3 2 14 2.7 14 3.7L14 12.3C14 13.3 13.3 14 12.3 14L3.7 14C2.7 14 2 13.3 2 12.3L2 3.7C2 2.8 2.7 2 3.6 2 3.6 2 6.5 2 12.3 2ZM3.7 2.7C3.1 2.7 2.7 3.1 2.7 3.7L2.7 12.3C2.7 12.9 3.1 13.3 3.7 13.3L12.3 13.3C12.9 13.3 13.3 12.9 13.3 12.3L13.3 3.7C13.3 3.1 12.9 2.7 12.3 2.7L3.7 2.7ZM6.6 9.5C6.7 9.6 6.7 9.8 6.5 9.9 6.4 10 6.2 10 6.1 9.9L4.7 8.2C4.6 8.1 4.6 7.9 4.7 7.8L6.1 6.1C6.2 6 6.4 6 6.5 6.1 6.7 6.2 6.7 6.4 6.6 6.5L5.4 8 6.6 9.5ZM9.4 6.5C9.3 6.4 9.3 6.2 9.5 6.1 9.6 6 9.8 6 9.9 6.1L11.3 7.8C11.4 7.9 11.4 8.1 11.3 8.2L9.9 9.9C9.8 10 9.6 10 9.5 9.9 9.3 9.8 9.3 9.6 9.4 9.5L10.6 8 9.4 6.5Z" />
  </svg>
);

export const JavaScriptIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 16 16" width="16" height="16" className="icon" {...props}>
    <path d="M2 2h12v12H2V2z m11 9.1c-0.1-0.5-0.4-1-1.5-1.4-0.4-0.2-0.8-0.3-0.9-0.6 0-0.2-0.1-0.3 0-0.3 0.1-0.3 0.5-0.4 0.8-0.4 0.2 0.1 0.4 0.2 0.4 0.5 0.5-0.3 0.5-0.3 0.9-0.6-0.1-0.2-0.2-0.3-0.3-0.4-0.3-0.4-0.7-0.5-1.4-0.5l-0.3 0.1c-0.3 0.1-0.7 0.3-0.9 0.5-0.6 0.6-0.4 1.8 0.3 2.2 0.7 0.5 1.7 0.6 1.8 1.1 0.1 0.6-0.4 0.8-1 0.7-0.4-0.1-0.6-0.3-0.9-0.6l-0.9 0.5c0.1 0.2 0.2 0.3 0.4 0.5 0.9 0.9 3 0.8 3.5-0.5 0 0 0.1-0.4 0-0.8l0 0z m-4.5-3.6h-1.1c0 1 0 1.9 0 2.9 0 0.6 0 1.2-0.1 1.4-0.2 0.3-0.6 0.3-0.8 0.2-0.2-0.1-0.3-0.2-0.4-0.4 0-0.1-0.1-0.1 0-0.1l-0.9 0.5c0.2 0.3 0.4 0.6 0.6 0.8 0.4 0.3 1 0.3 1.6 0.2 0.4-0.1 0.7-0.3 0.9-0.7 0.3-0.5 0.2-1 0.2-1.7 0-1 0-2.1 0-3.1l0 0z" />
  </svg>
);

export const PythonIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 16 16" width="16" height="16" className="icon" {...props}>
    <path d="M6.4 7.8h2.9s1.6 0 1.6-1.6V3.6S11.1 2 8 2C4.9 2 5.1 3.3 5.1 3.3l0 1.4h2.9v0.4H3.9s-2-0.2-1.9 2.9 1.7 3 1.7 2.9h1v-1.4s-0.1-1.7 1.7-1.7z m0-3.8a0.5 0.5 0 1 1 0-1.1 0.5 0.5 0 1 1 0 1.1z" />
    <path d="M12.3 5h-1v1.4s0.1 1.7-1.7 1.8h-2.9s-1.6 0-1.6 1.5v2.7s-0.2 1.6 2.9 1.5c3 0 2.9-1.3 2.9-1.3l0-1.3h-2.9v-0.5h4.1s2 0.2 1.9-2.8-1.7-3-1.7-3z m-2.7 7a0.5 0.5 0 1 1 0 1 0.5 0.5 0 1 1 0-1z" />
  </svg>
);

export const TypeScriptIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 16 16" width="16" height="16" className="icon" {...props}>
    <path d="M0 0v16h16V0H0z m9.2 6.9H6.9v7.1h-1.2V6.9h-2.3v-1.1h5.8v1.1z m4.7 6.4c-0.8 1-3 1.1-4.3 0.3v-1.6c0.7 0.8 1.4 0.9 2 1 1.7 0.1 1.8-1.3 1.1-2-1-0.8-3.1-1.3-3.1-3.1 0-1.3 1-2.2 2.5-2.2 0.6 0 1.4 0 1.9 0.3v1.5c-1.2-1.1-3.7-0.8-3.1 0.8 0.5 1 2.4 1.1 3.3 2.7 0.3 0.9 0.1 1.7-0.3 2.3z" />
  </svg>
);

export const ScoreIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 16 16" width="16" height="16" className="icon" {...props}>
    <path d="M7.2 2.1a0.4 0.4 0 0 0-0.8-0.2l-0.7 3.7H2.8a0.4 0.4 0 1 0 0 0.8h2.7l-0.6 3.2H2a0.4 0.4 0 0 0 0 0.8h2.7l-0.7 3.5a0.4 0.4 0 1 0 0.8 0.2l0.7-3.7h4L8.8 13.9a0.4 0.4 0 0 0 0.8 0.2l0.7-3.7h2.9a0.4 0.4 0 0 0 0-0.8H10.5l0.7-3.2h2.8a0.4 0.4 0 1 0 0-0.8h-2.7l0.8-3.5a0.4 0.4 0 1 0-0.8-0.2l-0.8 3.7H6.5l0.7-3.5ZM6.3 6.4h4.1l-0.7 3.2H5.7l0.6-3.2Z" />
  </svg>
);

export const StarIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 16 16" width="16" height="16" className="icon" {...props}>
    <path d="M8 1l-2.3 4.6-5.1 0.7 3.7 3.6L3.5 15l4.5-2.4L12.6 15l-0.9-5.1 3.7-3.6-5.1-0.7Z" />
  </svg>
);

export const CodeIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 16 16" width="16" height="16" className="icon" {...props}>
    <path d="M5.1 12.4L0 8l5.1-4.4 0.8 1L2 8l3.9 3.4-0.8 1z m5.8 0l-0.8-1L14 8 10.1 4.6l0.8-1L16 8 10.9 12.4zM6.9 13.8L5.7 13.4 9.1 2.2 10.3 2.6 6.9 13.8z" />
  </svg>
);

export const TimeIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 16 16" width="16" height="16" className="icon" {...props}>
    <path d="M8.2 1.3c-3.7 0-6.7 3-6.7 6.7s3 6.7 6.7 6.7 6.7-3 6.6-6.7-3-6.7-6.6-6.7zM12 8.7h-4.5V4h1.3v3.3H12v1.4z" />
  </svg>
);

export const StackOverflowIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 32 32" width="32" height="32" fill="#EC7C22" {...props}>
    <path d="M24.5 27.5V20h2.5v10H4V20h2.5v7.5Z" />
    <path d="M9.3 19.3l12.4 2.6 0.6-2.5-12.5-2.6Zm1.7-5.8L22.4 18.8 23.5 16.5l-11.5-5.3Zm3.1-5.6l9.8 8 1.6-1.9-9.7-8ZM20.5 2l-2.1 1.5 7.6 10L28 12ZM9 25h12.8v-2.5H9Z" />
  </svg>
);

export const GithubIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 32 32" width="32" height="32" fill="#000" {...props}>
    <path d="M16 0C7.2 0 0 7.2 0 16c0 7.1 4.6 13.1 10.9 15.2 0.8 0.1 1.1-0.3 1.1-0.8 0-0.4 0-1.6 0-3-4 0.7-5.1-1-5.4-1.8-0.2-0.5-1-1.9-1.6-2.3-0.6-0.3-1.4-1 0-1.1 1.3 0 2.2 1.2 2.4 1.7 1.4 2.4 3.7 1.7 4.7 1.3 0.1-1 0.6-1.7 1-2.1-3.6-0.4-7.3-1.8-7.3-7.9 0-1.7 0.6-3.2 1.7-4.3-0.2-0.4-0.7-2 0.1-4.3 0 0 1.3-0.4 4.4 1.7 1.3-0.4 2.6-0.5 4-0.6 1.4 0 2.7 0.2 4 0.6 3.1-2.1 4.4-1.6 4.4-1.7 0.9 2.2 0.3 3.8 0.2 4.3 1 1.1 1.6 2.5 1.6 4.3 0 6.1-3.7 7.5-7.3 7.9 0.6 0.5 1.1 1.5 1.1 2.9 0 2.1 0 3.9 0 4.4 0 0.4 0.3 0.9 1.1 0.8A16 16 0 0 0 32 16c0-8.8-7.2-16-16-16z" />
  </svg>
);

export const WakatimeIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 340 340" width="32" height="32" fill="none" {...props}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M170 20C87.156 20 20 87.156 20 170C20 252.844 87.156 320 170 320C252.844 320 320 252.844 320 170C320 87.156 252.844 20 170 20V20V20Z"
      stroke="#29333a"
      strokeWidth="40"
    />
    <path
      d="M190.183 213.541C188.74 215.443 186.576 216.667 184.151 216.667C183.913 216.667 183.677 216.651 183.443 216.627C183.042 216.579 182.823 216.545 182.606 216.497C182.337 216.434 182.137 216.375 181.94 216.308C181.561 216.176 181.392 216.109 181.228 216.035C180.843 215.849 180.707 215.778 180.572 215.701C180.205 215.478 180.109 215.412 180.014 215.345C179.856 215.233 179.698 215.117 179.547 214.992C179.251 214.746 179.147 214.65 179.044 214.552C178.731 214.241 178.531 214.018 178.341 213.785C177.982 213.331 177.69 212.888 177.438 212.415L168.6 198.214L159.766 212.415C158.38 214.939 155.874 216.667 152.995 216.667C150.106 216.667 147.588 214.926 146.243 212.346L107.607 156.061C106.337 154.529 105.556 152.499 105.556 150.258C105.556 145.514 109.043 141.665 113.344 141.665C116.127 141.665 118.564 143.282 119.942 145.708L152.555 193.9L161.735 178.952C163.058 176.288 165.626 174.478 168.575 174.478C171.273 174.478 173.652 175.996 175.049 178.298L184.517 193.839L235.684 120.583C237.075 118.226 239.475 116.667 242.213 116.667C246.514 116.667 250 120.514 250 125.258C250 127.332 249.337 129.232 248.23 130.715L190.183 213.541Z"
      fill="#29333a"
      stroke="#29333a"
      strokeWidth="10"
    />
  </svg>
);

export const CodewarsIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 32 32" width="32" height="32" fill="#b1361e" {...props}>
    <path d="M1.016 16.266l-0.109-0.052c-0.24-0.135-0.427-0.333-0.557-0.589-0.188-0.344-0.271-0.667-0.271-1l0.026-0.172c0-0.266 0.068-0.505 0.188-0.734l0.109-0.198c0.052-0.109 0.13-0.203 0.198-0.292 0.083-0.094 0.094-0.214 0.068-0.323l-0.068-0.214c-0.078-0.266-0.13-0.531-0.13-0.797l-0.042-0.161c0-0.297 0.078-0.589 0.266-0.802l0.135-0.172c0.094-0.135 0.24-0.214 0.401-0.266 0.13-0.042 0.224-0.177 0.24-0.333l0.026-0.453c0-0.359 0.172-0.693 0.438-0.938l0.323-0.24c0.063-0.063 0.13-0.13 0.182-0.24 0.068-0.078 0.083-0.188 0.068-0.266-0.026-0.13 0-0.172 0.068-0.188 0.214 0.083 0.349 0.057 0.443-0.052l0.172-0.224 0.479-0.536c0.135-0.13 0.188-0.375 0.104-0.557l-0.156-0.349c-0.026-0.078 0-0.172 0.068-0.198 0.172 0 0.292 0.063 0.344 0.172l0.052 0.094c0.083 0.161 0.271 0.24 0.401 0.172 0.292-0.104 0.536-0.13 0.76-0.13h0.427c0.292 0 0.531-0.203 0.589-0.51 0.052-0.37 0.182-0.667 0.37-0.865 0.203-0.229 0.427-0.401 0.693-0.536 0.349-0.182 0.563-0.453 0.63-0.797 0.094-0.427 0.318-0.734 0.625-0.932l1.016-0.573 0.292-0.177c0.172-0.104 0.333-0.24 0.469-0.401l0.266-0.318c0.13-0.135 0.266-0.224 0.427-0.266 0.13-0.042 0.318-0.068 0.479-0.052l0.531 0.036c0.266 0 0.479 0.068 0.693 0.161l0.135 0.068c0.135 0.052 0.266 0.026 0.333-0.068l0.12-0.068 0.573-0.599c0.135-0.135 0.292-0.188 0.469-0.161 0.172 0.026 0.344 0.094 0.505 0.177 0.24 0.13 0.438 0.182 0.667 0.182h0.135c0.292 0 0.583 0.042 0.88 0.109l0.198 0.052c0.198 0.052 0.401-0.026 0.531-0.188 0.042-0.068 0.135-0.078 0.188-0.026 0.042 0.026 0.052 0.052 0.068 0.094 0.026 0.266 0.188 0.469 0.401 0.531l0.214 0.068c0.224 0.068 0.427 0.214 0.557 0.401 0.135 0.198 0.297 0.401 0.479 0.531l0.135 0.135c0.135 0.135 0.318 0.188 0.505 0.172h0.786c0.323 0 0.63 0.057 0.938 0.188 0.292 0.135 0.599 0.161 0.875 0.052 0.297-0.089 0.604-0.13 0.911-0.089l0.573 0.089c0.266 0.031 0.531 0.161 0.693 0.365l0.068 0.063c0.13 0.135 0.266 0.307 0.396 0.495 0.083 0.172 0.271 0.266 0.453 0.266h0.828c0.203 0 0.401 0.042 0.563 0.135 0.172 0.13 0.318 0.266 0.453 0.401l0.13 0.172c0.161 0.188 0.24 0.438 0.229 0.708 0 0.214 0.161 0.396 0.37 0.396l0.271 0.031c0.188 0 0.344 0.13 0.438 0.302l0.135 0.271 0.344 0.771c0.057 0.135 0.068 0.266 0.057 0.375 0 0.13 0.036 0.24 0.13 0.292l0.135 0.094c0.172 0.135 0.266 0.333 0.24 0.563l-0.094 0.625-0.026 0.266c-0.026 0.135 0.036 0.307 0.161 0.401 0.198 0.13 0.292 0.307 0.302 0.505v0.266c0 0.135-0.026 0.297-0.13 0.401-0.083 0.109-0.135 0.24-0.135 0.401l0.042 0.307c0 0.214 0.13 0.401 0.266 0.531 0.188 0.135 0.292 0.349 0.323 0.563 0.052 0.333 0.063 0.599 0.063 0.865v0.307c0 0.109 0 0.214 0.042 0.318 0.026 0.094 0.094 0.188 0.172 0.245l0.266 0.198c0.271 0.172 0.458 0.401 0.563 0.708 0.135 0.292 0.172 0.599 0.172 0.906v0.104c0 0.24-0.026 0.495-0.104 0.719-0.068 0.245-0.052 0.469 0.036 0.667 0.109 0.188 0.177 0.401 0.203 0.63 0.052 0.266 0.026 0.531-0.068 0.745l-0.026 0.094c-0.068 0.161-0.172 0.307-0.307 0.427-0.135 0.135-0.266 0.214-0.344 0.307-0.083 0.078-0.135 0.214-0.094 0.333l0.036 0.188c0.068 0.266 0.068 0.531 0 0.771v0.109c-0.052 0.198-0.13 0.37-0.214 0.531-0.094 0.172-0.224 0.307-0.396 0.401l-0.203 0.13c-0.094 0.057-0.161 0.177-0.161 0.297 0 0.13-0.052 0.266-0.13 0.344l-0.203 0.271c-0.13 0.172-0.302 0.318-0.49 0.396-0.188 0.135-0.349 0.271-0.469 0.401-0.135 0.161-0.24 0.349-0.292 0.536-0.052 0.24-0.24 0.37-0.443 0.37h-0.719c-0.188 0-0.359 0.135-0.438 0.297-0.094 0.208-0.188 0.359-0.307 0.49-0.135 0.135-0.214 0.297-0.271 0.479-0.026 0.161-0.156 0.271-0.292 0.214-0.172-0.078-0.344 0-0.427 0.135-0.156 0.266-0.318 0.469-0.49 0.641l-0.094 0.078c-0.177 0.135-0.401 0.24-0.604 0.24-0.24 0-0.359 0.109-0.396 0.266-0.042 0.135-0.068 0.307-0.083 0.458-0.026 0.156-0.078 0.302-0.13 0.438l-0.068 0.078c-0.135 0.203-0.24 0.401-0.375 0.573l-0.052 0.083c-0.172 0.224-0.401 0.401-0.667 0.464-0.323 0.109-0.599 0.135-0.88 0.135h-0.188c-0.13 0-0.266 0.078-0.359 0.214l-0.078 0.135-0.083 0.156-0.172 0.297c-0.135 0.24-0.333 0.396-0.599 0.479-0.266 0.068-0.573 0.094-0.854 0.078l-0.214-0.026c-0.188 0-0.359-0.052-0.531-0.135-0.135-0.052-0.323 0-0.401 0.135-0.135 0.188-0.297 0.292-0.469 0.349l-0.401 0.13c-0.266 0.068-0.557 0.068-0.839 0l-0.214-0.068c-0.13 0-0.266-0.063-0.375-0.13-0.13-0.068-0.266-0.094-0.396-0.083l-0.177 0.031c-0.266 0.026-0.505 0-0.745-0.068l-0.359-0.083c-0.161-0.052-0.307-0.156-0.401-0.307-0.068-0.13-0.214-0.24-0.401-0.266h-0.427c-0.266-0.036-0.505-0.13-0.667-0.333l-0.531-0.505-0.188-0.161-0.292-0.214-0.172-0.13c-0.203-0.135-0.443-0.24-0.698-0.266l-0.797-0.135c-0.083 0-0.135-0.026-0.214-0.042l-0.307-0.068c-0.135-0.026-0.266-0.13-0.359-0.266-0.078-0.13-0.229-0.188-0.359-0.13-0.266 0.104-0.479 0.13-0.693 0.172h-0.188c-0.349 0.026-0.667-0.026-0.99-0.172-0.318-0.135-0.531-0.333-0.729-0.589-0.161-0.229-0.401-0.401-0.698-0.453l-0.37-0.078c-0.266-0.057-0.536-0.161-0.776-0.323-0.266-0.188-0.401-0.359-0.505-0.573-0.104-0.198-0.172-0.427-0.188-0.667v-0.104c-0.026-0.271-0.214-0.51-0.464-0.573-0.307-0.094-0.536-0.229-0.734-0.401-0.188-0.177-0.297-0.427-0.297-0.693l0.031-0.589c0-0.229-0.068-0.427-0.229-0.573-0.161-0.161-0.266-0.359-0.266-0.573l-0.042-0.479c-0.026-0.349-0.094-0.693-0.172-1.042-0.078-0.307 0.042-0.615 0.292-0.76l0.094-0.068c0.135-0.094 0.188-0.266 0.109-0.427l-0.109-0.13c-0.13-0.135-0.266-0.229-0.401-0.266-0.104-0.031-0.13-0.135-0.13-0.203l0.13-0.161c0.083-0.094 0.068-0.24 0-0.318-0.104-0.109-0.156-0.24-0.172-0.375l-0.026-0.932c0-0.188 0.026-0.375 0.078-0.557 0.057-0.161 0-0.349-0.156-0.427zM14.214 14.505c0.094-0.094 0.078-0.266 0-0.333-0.135-0.104-0.229-0.224-0.307-0.359l-0.135-0.214c-0.089-0.172-0.208-0.318-0.344-0.453l-0.026-0.026c-0.135-0.104-0.229-0.24-0.307-0.401-0.068-0.13-0.068-0.266 0-0.401l0.078-0.13c0.083-0.135 0.135-0.323 0.135-0.479v-0.057c0-0.13-0.052-0.266-0.135-0.396-0.052-0.109-0.104-0.24-0.13-0.375v-0.078c-0.042-0.161 0-0.333 0.104-0.469 0.109-0.172 0.188-0.333 0.229-0.531v-0.031c0.052-0.13 0.026-0.302-0.057-0.438-0.078-0.135-0.104-0.266-0.052-0.427l0.094-0.266c0.078-0.24 0.203-0.453 0.359-0.641l0.188-0.198 0.135-0.161 0.078-0.078c0.078-0.083 0.094-0.214 0.026-0.323-0.068-0.135-0.104-0.266-0.078-0.401l0.026-0.188c0.042-0.266 0.135-0.531 0.307-0.745l0.052-0.052c0.198-0.266 0.453-0.443 0.745-0.536l0.365-0.13c0.156-0.052 0.266-0.229 0.266-0.401 0-0.214 0.068-0.401 0.187-0.573l0.063-0.068c0.135-0.224 0.297-0.453 0.401-0.693l0.094-0.172c0.026-0.042 0.042-0.094 0.042-0.135 0-0.224-0.135-0.427-0.349-0.438l-0.583-0.042c-0.333-0.026-0.667 0-0.99 0l-1.13 0.135c-0.177 0-0.307 0.13-0.323 0.318 0 0.188-0.135 0.349-0.292 0.401l-0.479 0.13-0.135 0.042-0.401 0.135c-0.292 0.094-0.531 0.307-0.667 0.599l-0.104 0.172c-0.135 0.297-0.359 0.536-0.641 0.708-0.266 0.172-0.401 0.453-0.427 0.771v0.135c-0.026 0.266-0.109 0.531-0.266 0.719l-0.068 0.109c-0.109 0.13-0.135 0.307-0.068 0.453 0.068 0.156 0.109 0.333 0.094 0.505v0.708c0 0.188-0.135 0.344-0.266 0.396-0.188 0.068-0.307 0.214-0.359 0.401l-0.068 0.266c-0.052 0.271 0.042 0.536 0.266 0.698 0.214 0.156 0.349 0.396 0.401 0.693v0.24c0.042 0.266 0.188 0.531 0.427 0.667 0.24 0.161 0.427 0.401 0.531 0.667l0.068 0.214c0.109 0.292 0.349 0.464 0.615 0.49h0.078c0.24 0 0.453 0.135 0.589 0.349 0.13 0.214 0.344 0.359 0.583 0.401l0.375 0.104c0.229 0.068 0.443 0.188 0.615 0.359l0.026 0.031c0.135 0.104 0.349 0.089 0.469-0.057l0.094-0.104zM15.734 13.281c0.13 0.078 0.266 0.036 0.318-0.083l0.042-0.063c0.094-0.188 0.214-0.375 0.344-0.536l0.271-0.401c0.036 0 0.052-0.026 0.063-0.052l0.323-0.427c0.135-0.13 0.292-0.224 0.479-0.224 0.172 0 0.323-0.094 0.401-0.266 0.052-0.188 0.13-0.365 0.292-0.51l0.068-0.078c0.135-0.135 0.266-0.203 0.401-0.266 0.172-0.026 0.333-0.057 0.495-0.057h0.396c0.161 0 0.297-0.063 0.375-0.198s0.198-0.224 0.333-0.292l0.135-0.057c0.214-0.089 0.453-0.156 0.693-0.182l0.266-0.026c0.161 0 0.333 0 0.495 0.089 0.13 0.094 0.307 0.083 0.438-0.026l0.094-0.052c0.198-0.135 0.427-0.24 0.667-0.266h0.026c0.266-0.052 0.505-0.052 0.776-0.042h0.13c0.266 0.042 0.495 0.135 0.667 0.333l0.042 0.052c0.135 0.135 0.344 0.245 0.531 0.245h0.229c0.068 0 0.13-0.031 0.172-0.094 0.042-0.042 0.109-0.083 0.172-0.083h0.135c0.188 0 0.359 0.052 0.531 0.109l0.229 0.094c0.214 0.063 0.438 0.13 0.667 0.156h0.161c0.104 0 0.172-0.063 0.172-0.156 0-0.135-0.026-0.271-0.094-0.375l-0.094-0.214c-0.104-0.172-0.188-0.359-0.266-0.531l-0.026-0.068c-0.068-0.135-0.068-0.266 0-0.401v-0.068c0.026-0.104-0.026-0.224-0.135-0.266h-0.104c-0.214-0.068-0.401-0.188-0.536-0.359l-0.13-0.135c-0.135-0.13-0.214-0.333-0.271-0.531-0.063-0.172-0.208-0.307-0.396-0.307h-0.563c-0.198-0.026-0.375-0.135-0.495-0.292l-0.052-0.068c-0.094-0.135-0.172-0.292-0.224-0.453-0.068-0.135-0.214-0.214-0.349-0.172l-0.161 0.052c-0.266 0.094-0.531 0.13-0.797 0.104l-0.214-0.026c-0.229 0-0.443-0.094-0.615-0.224l-0.135-0.094c-0.104-0.083-0.208-0.135-0.333-0.188-0.13-0.052-0.24-0.026-0.318 0.068l-0.068 0.078c-0.13 0.135-0.318 0.24-0.505 0.266l-0.719 0.042c-0.135 0-0.266 0.068-0.359 0.161-0.109 0.094-0.229 0.156-0.365 0.182h-0.026c-0.13 0-0.266 0.094-0.396 0.188v0.026c-0.135 0.135-0.307 0.203-0.484 0.203l-0.052 0.026c-0.161 0-0.318 0-0.479 0.042h-0.161c-0.224 0.036-0.401 0.224-0.453 0.464l-0.052 0.307c-0.042 0.214-0.135 0.401-0.266 0.573-0.135 0.161-0.297 0.266-0.495 0.266h-0.224c-0.135 0.031-0.271 0.177-0.245 0.333 0.031 0.229 0 0.427-0.036 0.63l-0.052 0.224c-0.057 0.203-0.188 0.359-0.365 0.427l-0.078 0.042h-0.026c-0.078 0.052-0.135 0.172-0.068 0.266 0.083 0.135 0.109 0.266 0.094 0.401l-0.042 0.427c0 0.156-0.063 0.307-0.13 0.438-0.083 0.135-0.083 0.266-0.026 0.401l0.13 0.292c0.068 0.135 0.083 0.271 0.042 0.427-0.042 0.135-0.068 0.266-0.052 0.401 0 0.135 0.078 0.266 0.188 0.323zM26.266 22.922c0.135 0.13 0.333 0.182 0.495 0.078l0.266-0.172c0.135-0.094 0.24-0.229 0.292-0.401v-0.026l0.135-0.401 0.078-0.135 0.057-0.13 0.052-0.094c0.052-0.109 0.13-0.188 0.266-0.229l0.052-0.026c0.109-0.026 0.177-0.13 0.177-0.24 0-0.13 0.063-0.24 0.13-0.333l0.109-0.094 0.266-0.344v-0.026c0.078-0.109 0.13-0.229 0.161-0.365 0.026-0.13 0-0.266-0.057-0.396l-0.026-0.057c-0.052-0.13-0.078-0.224-0.094-0.344l-0.036-0.375-0.042-0.401c0-0.13 0.052-0.266 0.135-0.396 0.089-0.109 0.156-0.245 0.214-0.375v-0.052l0.026-0.026c0.026-0.135-0.042-0.271-0.161-0.271-0.135-0.063-0.266-0.172-0.307-0.333l-0.042-0.078c-0.063-0.24-0.104-0.479-0.104-0.719l0.026-0.667v-0.042c0-0.224-0.188-0.401-0.401-0.401h-0.026c-0.266 0-0.479-0.078-0.667-0.266l-0.104-0.135-0.271-0.302-0.344-0.401c-0.135-0.188-0.266-0.349-0.443-0.51-0.13-0.13-0.333-0.266-0.531-0.292l-0.266-0.042c-0.135-0.026-0.307-0.089-0.453-0.182-0.109-0.083-0.266-0.057-0.375 0.052l-0.172 0.188-0.083 0.052c-0.094 0.026-0.182-0.026-0.224-0.135-0.052-0.156-0.052-0.344 0.026-0.505v-0.078c0-0.094-0.078-0.161-0.161-0.135h-0.214c-0.24 0-0.479-0.026-0.703-0.13l-0.135-0.057c-0.135-0.068-0.292-0.104-0.438-0.104-0.135 0-0.271 0.026-0.401 0.104l-0.052 0.042c-0.161 0.104-0.349 0.161-0.536 0.172h-0.438c-0.203 0-0.401 0.068-0.536 0.177-0.172 0.104-0.359 0.172-0.557 0.208l-0.359 0.057c-0.161 0.036-0.333 0.104-0.484 0.224-0.13 0.135-0.318 0.214-0.49 0.266l-0.068 0.031c-0.214 0.063-0.401 0.198-0.531 0.396l-0.161 0.161c-0.094 0.135-0.094 0.292 0 0.427 0.078 0.135 0.24 0.172 0.401 0.135l0.198-0.083c0.104-0.036 0.229 0 0.318 0.052 0.083 0.068 0.203 0.109 0.323 0.094l0.333-0.036c0.188 0 0.375 0 0.557 0.052 0.203 0.068 0.375 0.135 0.536 0.266 0.161 0.135 0.333 0.188 0.531 0.214 0.203 0.026 0.401 0.068 0.589 0.135l0.13 0.026c0.135 0.042 0.245 0.13 0.323 0.266 0.068 0.109 0.13 0.266 0.13 0.401v0.042c0 0.156 0.135 0.266 0.271 0.266h0.078c0.214 0 0.443 0.026 0.667 0.094l0.094 0.036c0.135 0.057 0.266 0.135 0.359 0.271 0.109 0.13 0.172 0.266 0.214 0.396l0.042 0.188c0.036 0.203 0.052 0.401 0.052 0.615v0.068c0 0.13 0.094 0.266 0.24 0.318 0.135 0.026 0.292 0.083 0.443 0.161l0.063 0.026c0.177 0.104 0.349 0.24 0.479 0.401l0.068 0.094c0.177 0.198 0.266 0.453 0.266 0.703v0.094c0 0.203-0.036 0.401-0.104 0.589-0.052 0.161 0 0.349 0.172 0.401l0.094 0.068c0.203 0.078 0.375 0.224 0.505 0.396 0.135 0.203 0.188 0.427 0.188 0.667v0.401c-0.026 0.135-0.063 0.24-0.13 0.333s-0.068 0.229 0 0.323l0.078 0.13zM17.734 16.094h-0.026c-0.057 0-0.083 0.068-0.068 0.135l0.052 0.266c0.052 0.214 0.078 0.427 0.109 0.641 0.026 0.214 0.13 0.396 0.292 0.531h0.052c0.203 0.161 0.323 0.401 0.333 0.641v0.667c-0.026 0.13 0 0.266 0.083 0.375l0.063 0.063c0.135 0.161 0.188 0.349 0.203 0.536l0.036 0.734c0 0.172-0.104 0.318-0.266 0.344l-0.13 0.026c-0.094 0-0.135 0.109-0.135 0.203 0 0.104 0.042 0.224 0.078 0.333v0.026c0.042 0.13 0.057 0.266 0.042 0.401l-0.052 0.359c-0.052 0.266-0.135 0.505-0.266 0.745l-0.094 0.161c-0.068 0.13-0.161 0.214-0.271 0.266-0.13 0.052-0.224 0.161-0.266 0.292l-0.104 0.479c-0.068 0.271-0.188 0.536-0.349 0.802h-0.026c-0.161 0.214-0.359 0.401-0.599 0.531l-0.161 0.109-0.401 0.198c-0.13 0.057-0.214 0.177-0.24 0.323l-0.063 0.438c-0.042 0.266-0.135 0.495-0.323 0.667l-0.172 0.203-0.203 0.198-0.198 0.214c-0.161 0.188-0.401 0.266-0.667 0.229l-0.479-0.094-0.443-0.057h-0.12c-0.052 0.057-0.063 0.135-0.026 0.214 0.094 0.161 0.24 0.271 0.401 0.271l0.292 0.052c0.135 0 0.297 0.068 0.427 0.13 0.135 0.094 0.266 0.161 0.427 0.203h0.026c0.177 0.068 0.359 0.078 0.536 0.068l0.198-0.031c0.229-0.026 0.443 0 0.625 0.083l0.161 0.052c0.068 0.026 0.172 0 0.24-0.068 0.083-0.078 0.161-0.13 0.266-0.172l0.109-0.026c0.172-0.052 0.344-0.083 0.531-0.083h0.109c0.156 0 0.307 0.031 0.438 0.109l0.052 0.026c0.094 0.042 0.203 0 0.271-0.078 0.036-0.094 0.13-0.188 0.224-0.266l0.333-0.229 0.214-0.135 0.109-0.063c0.13-0.094 0.318-0.135 0.479-0.135l0.479-0.042c0.188-0.026 0.349-0.156 0.401-0.344 0.052-0.203 0.13-0.401 0.266-0.573 0.135-0.177 0.266-0.323 0.401-0.453 0.172-0.135 0.344-0.203 0.531-0.214h0.109c0.214-0.042 0.37-0.24 0.359-0.453v-0.896c0.026-0.13 0.078-0.307 0.156-0.438l0.271-0.401 0.104-0.135c0.083-0.068 0.135-0.156 0.229-0.266l0.13-0.172c0.083-0.135 0.083-0.307-0.026-0.427-0.13-0.135-0.198-0.323-0.224-0.505v-0.057c-0.026-0.214-0.026-0.438 0.036-0.667v-0.063c0.068-0.177 0.161-0.349 0.271-0.51 0.104-0.13 0.089-0.318-0.042-0.427l-0.229-0.198c-0.188-0.161-0.292-0.401-0.318-0.641l-0.026-0.266c0-0.083 0-0.172-0.026-0.266l-0.026-0.203c-0.031-0.224-0.161-0.401-0.349-0.531l-0.094-0.026c-0.135-0.083-0.266-0.203-0.375-0.359-0.104-0.135-0.156-0.323-0.198-0.51l-0.042-0.224c0-0.083-0.052-0.135-0.13-0.172l-0.641-0.203c-0.135-0.026-0.266-0.13-0.359-0.224h-0.026c-0.083-0.109-0.214-0.109-0.297-0.031l-0.13 0.135c-0.026 0.042-0.057 0.052-0.094 0.042-0.083 0-0.135-0.068-0.109-0.135 0.026-0.214-0.052-0.427-0.224-0.557l-0.177-0.135-0.396-0.266c-0.109-0.042-0.271 0-0.323 0.13l-0.052 0.083c0 0.026-0.042 0.036-0.052 0.052-0.057 0-0.135 0-0.135-0.068l-0.042-0.068c-0.036-0.078-0.13-0.13-0.214-0.156zM16.135 17.427l-0.068-0.068c-0.068-0.052-0.135-0.042-0.203 0.026-0.094 0.161-0.172 0.333-0.214 0.51v0.026c-0.036 0.172-0.198 0.292-0.359 0.266h-0.156c-0.188 0-0.333 0.161-0.333 0.344 0 0.24-0.083 0.484-0.229 0.667l-0.078 0.083c-0.135 0.172-0.333 0.292-0.536 0.359l-0.104 0.026c-0.135 0.042-0.24 0.135-0.266 0.292 0 0.135-0.083 0.271-0.188 0.375l-0.135 0.104c-0.161 0.177-0.401 0.271-0.641 0.297l-0.667 0.068c-0.214 0-0.396 0.13-0.531 0.333-0.135 0.198-0.333 0.333-0.531 0.359l-0.297 0.026c-0.214 0.026-0.438 0.026-0.667-0.026l-0.13-0.026-0.365-0.094c-0.13-0.042-0.24 0-0.318 0.094l-0.135 0.172c-0.172 0.198-0.422 0.292-0.667 0.266l-0.865-0.104c-0.135 0-0.24-0.068-0.359-0.135-0.135-0.078-0.229-0.172-0.323-0.266l-0.333-0.401c-0.036-0.026-0.104-0.042-0.172-0.026l-0.188 0.078-0.745 0.188c-0.135 0.042-0.307 0-0.438-0.078-0.135-0.109-0.297-0.135-0.458-0.135h-0.172c-0.161 0.042-0.266 0.214-0.214 0.375l0.052 0.266c0.042 0.135 0.031 0.292-0.036 0.427s-0.052 0.266 0.036 0.401l0.083 0.104c0.104 0.161 0.266 0.297 0.401 0.427 0.13 0.135 0.266 0.266 0.37 0.443l0.203 0.359c0.104 0.188 0.266 0.292 0.479 0.292 0.198 0 0.401 0.068 0.557 0.198l0.401 0.375c0.109 0.094 0.266 0.109 0.375 0.026l0.068-0.026c0.078 0 0.13 0.052 0.13 0.135v0.068c0 0.172 0.135 0.333 0.307 0.396l0.599 0.135c0.214 0.068 0.427 0.135 0.63 0.266h0.104c0.109 0 0.203-0.094 0.188-0.214v-0.464c0-0.135 0.052-0.271 0.161-0.323l0.068-0.026c0.063 0.026 0.13 0.078 0.104 0.135v0.224c0 0.172 0.052 0.333 0.172 0.453 0.135 0.135 0.307 0.161 0.453 0.109 0.161-0.068 0.323-0.083 0.495-0.068l0.495 0.026c0.24 0.026 0.464 0 0.667-0.094 0.24-0.078 0.438-0.188 0.625-0.333l0.078-0.052 0.401-0.359c0.135-0.135 0.307-0.203 0.469-0.203h0.531c0.266-0.026 0.51-0.266 0.536-0.531l0.052-0.266c0-0.177 0.078-0.333 0.198-0.469 0.135-0.135 0.266-0.214 0.401-0.266l0.161-0.068c0.224-0.094 0.401-0.292 0.479-0.531l0.078-0.323c0.068-0.266 0.203-0.531 0.401-0.703l0.026-0.031c0.161-0.13 0.188-0.396 0.083-0.583l-0.042-0.094c-0.094-0.135-0.109-0.333-0.042-0.505 0.068-0.188 0.135-0.349 0.24-0.51l0.135-0.188c0.052-0.104 0.052-0.266-0.026-0.359-0.083-0.104-0.135-0.24-0.135-0.37l-0.026-0.188v-0.453c0.026-0.135 0-0.307-0.042-0.443l-0.052-0.156zM14.229 16.411v-0.036c0-0.135-0.083-0.214-0.188-0.214h-0.349c-0.13 0.026-0.266 0.026-0.375 0h-0.599c-0.307 0-0.599-0.057-0.891-0.135l-0.323-0.078-0.266-0.083-0.599-0.198c-0.323-0.094-0.563-0.307-0.708-0.599l-0.068-0.135c-0.094-0.198-0.292-0.307-0.49-0.266-0.229 0-0.453 0-0.667-0.104l-0.161-0.068c-0.307-0.135-0.531-0.401-0.531-0.76l-0.057-0.359c-0.036-0.188-0.156-0.359-0.318-0.427-0.188-0.083-0.359-0.188-0.536-0.307l-0.063-0.042c-0.203-0.161-0.375-0.37-0.469-0.625l-0.026-0.078c-0.068-0.214-0.078-0.443-0.026-0.667l0.026-0.083c0.052-0.172 0.068-0.344 0.068-0.531 0-0.161-0.068-0.323-0.188-0.443l-0.188-0.172c-0.214-0.172-0.344-0.427-0.359-0.708-0.026-0.292-0.026-0.573 0.026-0.854v-0.078c0-0.161-0.135-0.266-0.266-0.266h-0.042c-0.172 0-0.318 0.104-0.401 0.266-0.063 0.188-0.172 0.333-0.292 0.479l-0.052 0.068-0.401 0.401c-0.135 0.13-0.214 0.333-0.24 0.531-0.026 0.203-0.078 0.401-0.161 0.589l-0.026 0.068c-0.068 0.156-0.172 0.307-0.307 0.401-0.13 0.104-0.224 0.266-0.224 0.422l-0.026 0.615c0 0.266-0.042 0.536-0.135 0.802l-0.026 0.104c-0.068 0.177 0 0.359 0.161 0.443l0.557 0.24 0.052 0.026c0.042 0 0.057 0.026 0.068 0.068 0.042 0.052 0 0.13-0.042 0.13l-0.13 0.068c-0.078 0.026-0.135 0.109-0.161 0.203l-0.026 0.13v0.026l-0.135 0.75c-0.026 0.104-0.026 0.224-0.026 0.344 0 0.109 0.068 0.203 0.161 0.24l0.292 0.135c0.135 0.078 0.297 0.172 0.401 0.266l0.135 0.109c0.036 0.052 0.104 0.104 0.156 0.13l0.057 0.052c0.094 0.083 0.156 0.188 0.188 0.307l0.13 0.599c0 0.161 0.135 0.297 0.266 0.333l0.214 0.068c0 0 0.042 0 0.068 0.026l0.266 0.083c0.214 0.068 0.401 0.188 0.563 0.344 0.161 0.135 0.318 0.307 0.453 0.495l0.052 0.052c0.109 0.135 0.266 0.203 0.427 0.161s0.333-0.052 0.505-0.052h0.203c0.13 0 0.307 0.036 0.453 0.13 0.13 0.083 0.307 0.135 0.464 0.203h0.042c0.161 0.068 0.333 0.036 0.469-0.052 0.13-0.109 0.307-0.161 0.479-0.161l0.625 0.036c0.135 0 0.266-0.026 0.333-0.13h0.026l0.229-0.214 0.068-0.068c0.104-0.13 0.266-0.188 0.422-0.198h0.604c0.156 0 0.307-0.135 0.37-0.266 0.068-0.135 0.203-0.245 0.359-0.271l0.271-0.052c0.104 0 0.198-0.094 0.24-0.214 0.036-0.13 0.104-0.24 0.198-0.318l0.214-0.214c0.135-0.135 0.203-0.266 0.229-0.427z" />
  </svg>
);
