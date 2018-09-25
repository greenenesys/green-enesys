import React from "react";

const IllustrationJumboBackground = props => (
  <svg width={4000} height={600} {...props}>
    <defs>
      <linearGradient x1="0%" y1="0%" y2="83.362%" id="a">
        <stop stopColor="#82B86A" offset="0%" />
        <stop stopColor="#21956E" offset="100%" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="#FFF" d="M0 0h4000v600H0z" />
      <path
        d="M0 0h4000v524.567C3827.594 574.856 3655.76 600 3484.5 600c-170.073 0-339.573-25.144-508.5-75.433-207.333-50.292-370.167-75.438-488.5-75.438C2155.386 449.13 1848.408 600 1537 600c-183.873 0-354.873-25.144-513-75.433C634.667 374.856 293.333 368.833 0 506.5V0z"
        fill="url(#a)"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default IllustrationJumboBackground;
