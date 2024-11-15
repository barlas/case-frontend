import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const LoaderIcon = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: 'currentcolor' }}
    >
      <g clipPath="url(#clip0_2393_1490)">
        <path d="M8 0V4" stroke="currentColor" strokeWidth="1.5"></path>
        <path
          opacity="0.5"
          d="M8 16V12"
          stroke="currentColor"
          strokeWidth="1.5"
        ></path>
        <path
          opacity="0.9"
          d="M3.29773 1.52783L5.64887 4.7639"
          stroke="currentColor"
          strokeWidth="1.5"
        ></path>
        <path
          opacity="0.1"
          d="M12.7023 1.52783L10.3511 4.7639"
          stroke="currentColor"
          strokeWidth="1.5"
        ></path>
        <path
          opacity="0.4"
          d="M12.7023 14.472L10.3511 11.236"
          stroke="currentColor"
          strokeWidth="1.5"
        ></path>
        <path
          opacity="0.6"
          d="M3.29773 14.472L5.64887 11.236"
          stroke="currentColor"
          strokeWidth="1.5"
        ></path>
        <path
          opacity="0.2"
          d="M15.6085 5.52783L11.8043 6.7639"
          stroke="currentColor"
          strokeWidth="1.5"
        ></path>
        <path
          opacity="0.7"
          d="M0.391602 10.472L4.19583 9.23598"
          stroke="currentColor"
          strokeWidth="1.5"
        ></path>
        <path
          opacity="0.3"
          d="M15.6085 10.4722L11.8043 9.2361"
          stroke="currentColor"
          strokeWidth="1.5"
        ></path>
        <path
          opacity="0.8"
          d="M0.391602 5.52783L4.19583 6.7639"
          stroke="currentColor"
          strokeWidth="1.5"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_2393_1490">
          <rect width="16" height="16" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export const TrashIcon = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: 'currentcolor' }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.75 2.75C6.75 2.05964 7.30964 1.5 8 1.5C8.69036 1.5 9.25 2.05964 9.25 2.75V3H6.75V2.75ZM5.25 3V2.75C5.25 1.23122 6.48122 0 8 0C9.51878 0 10.75 1.23122 10.75 2.75V3H12.9201H14.25H15V4.5H14.25H13.8846L13.1776 13.6917C13.0774 14.9942 11.9913 16 10.6849 16H5.31508C4.00874 16 2.92263 14.9942 2.82244 13.6917L2.11538 4.5H1.75H1V3H1.75H3.07988H5.25ZM4.31802 13.5767L3.61982 4.5H12.3802L11.682 13.5767C11.6419 14.0977 11.2075 14.5 10.6849 14.5H5.31508C4.79254 14.5 4.3581 14.0977 4.31802 13.5767Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export const ArrowUpIcon = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: 'currentcolor' }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.70711 1.39644C8.31659 1.00592 7.68342 1.00592 7.2929 1.39644L2.21968 6.46966L1.68935 6.99999L2.75001 8.06065L3.28034 7.53032L7.25001 3.56065V14.25V15H8.75001V14.25V3.56065L12.7197 7.53032L13.25 8.06065L14.3107 6.99999L13.7803 6.46966L8.70711 1.39644Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export const StopIcon = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      height={size}
      viewBox="0 0 16 16"
      width={size}
      style={{ color: 'currentcolor' }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 3H13V13H3V3Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export const PaperclipIcon = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: 'currentcolor' }}
      className="-rotate-45"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.8591 1.70735C10.3257 1.70735 9.81417 1.91925 9.437 2.29643L3.19455 8.53886C2.56246 9.17095 2.20735 10.0282 2.20735 10.9222C2.20735 11.8161 2.56246 12.6734 3.19455 13.3055C3.82665 13.9376 4.68395 14.2927 5.57786 14.2927C6.47178 14.2927 7.32908 13.9376 7.96117 13.3055L14.2036 7.06304L14.7038 6.56287L15.7041 7.56321L15.204 8.06337L8.96151 14.3058C8.06411 15.2032 6.84698 15.7074 5.57786 15.7074C4.30875 15.7074 3.09162 15.2032 2.19422 14.3058C1.29682 13.4084 0.792664 12.1913 0.792664 10.9222C0.792664 9.65305 1.29682 8.43592 2.19422 7.53852L8.43666 1.29609C9.07914 0.653606 9.95054 0.292664 10.8591 0.292664C11.7678 0.292664 12.6392 0.653606 13.2816 1.29609C13.9241 1.93857 14.2851 2.80997 14.2851 3.71857C14.2851 4.62718 13.9241 5.49858 13.2816 6.14106L13.2814 6.14133L7.0324 12.3835C7.03231 12.3836 7.03222 12.3837 7.03213 12.3838C6.64459 12.7712 6.11905 12.9888 5.57107 12.9888C5.02297 12.9888 4.49731 12.7711 4.10974 12.3835C3.72217 11.9959 3.50444 11.4703 3.50444 10.9222C3.50444 10.3741 3.72217 9.8484 4.10974 9.46084L4.11004 9.46054L9.877 3.70039L10.3775 3.20051L11.3772 4.20144L10.8767 4.70131L5.11008 10.4612C5.11005 10.4612 5.11003 10.4612 5.11 10.4613C4.98779 10.5835 4.91913 10.7493 4.91913 10.9222C4.91913 11.0951 4.98782 11.2609 5.11008 11.3832C5.23234 11.5054 5.39817 11.5741 5.57107 11.5741C5.74398 11.5741 5.9098 11.5054 6.03206 11.3832L6.03233 11.3829L12.2813 5.14072C12.2814 5.14063 12.2815 5.14054 12.2816 5.14045C12.6586 4.7633 12.8704 4.25185 12.8704 3.71857C12.8704 3.18516 12.6585 2.6736 12.2813 2.29643C11.9041 1.91925 11.3926 1.70735 10.8591 1.70735Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export const MoreHorizontalIcon = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: 'currentcolor' }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 8C4 8.82843 3.32843 9.5 2.5 9.5C1.67157 9.5 1 8.82843 1 8C1 7.17157 1.67157 6.5 2.5 6.5C3.32843 6.5 4 7.17157 4 8ZM9.5 8C9.5 8.82843 8.82843 9.5 8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8ZM13.5 9.5C14.3284 9.5 15 8.82843 15 8C15 7.17157 14.3284 6.5 13.5 6.5C12.6716 6.5 12 7.17157 12 8C12 8.82843 12.6716 9.5 13.5 9.5Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export const MessageIcon = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: 'currentcolor' }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.8914 10.4028L2.98327 10.6318C3.22909 11.2445 3.5 12.1045 3.5 13C3.5 13.3588 3.4564 13.7131 3.38773 14.0495C3.69637 13.9446 4.01409 13.8159 4.32918 13.6584C4.87888 13.3835 5.33961 13.0611 5.70994 12.7521L6.22471 12.3226L6.88809 12.4196C7.24851 12.4724 7.61994 12.5 8 12.5C11.7843 12.5 14.5 9.85569 14.5 7C14.5 4.14431 11.7843 1.5 8 1.5C4.21574 1.5 1.5 4.14431 1.5 7C1.5 8.18175 1.94229 9.29322 2.73103 10.2153L2.8914 10.4028ZM2.8135 15.7653C1.76096 16 1 16 1 16C1 16 1.43322 15.3097 1.72937 14.4367C1.88317 13.9834 2 13.4808 2 13C2 12.3826 1.80733 11.7292 1.59114 11.1903C0.591845 10.0221 0 8.57152 0 7C0 3.13401 3.58172 0 8 0C12.4183 0 16 3.13401 16 7C16 10.866 12.4183 14 8 14C7.54721 14 7.10321 13.9671 6.67094 13.9038C6.22579 14.2753 5.66881 14.6656 5 15C4.23366 15.3832 3.46733 15.6195 2.8135 15.7653Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export const SidebarLeftIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    height={size}
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width={size}
    style={{ color: 'currentcolor' }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.245 2.5H14.5V12.5C14.5 13.0523 14.0523 13.5 13.5 13.5H6.245V2.5ZM4.995 2.5H1.5V12.5C1.5 13.0523 1.94772 13.5 2.5 13.5H4.995V2.5ZM0 1H1.5H14.5H16V2.5V12.5C16 13.8807 14.8807 15 13.5 15H2.5C1.11929 15 0 13.8807 0 12.5V2.5V1Z"
      fill="currentColor"
    ></path>
  </svg>
);

export const PlusIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    height={size}
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width={size}
    style={{ color: 'currentcolor' }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.75 1.75V1H7.25V1.75V6.75H2.25H1.5V8.25H2.25H7.25V13.25V14H8.75V13.25V8.25H13.75H14.5V6.75H13.75H8.75V1.75Z"
      fill="currentColor"
    ></path>
  </svg>
);

export const CopyIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    height={size}
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width={size}
    style={{ color: 'currentcolor' }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.75 0.5C1.7835 0.5 1 1.2835 1 2.25V9.75C1 10.7165 1.7835 11.5 2.75 11.5H3.75H4.5V10H3.75H2.75C2.61193 10 2.5 9.88807 2.5 9.75V2.25C2.5 2.11193 2.61193 2 2.75 2H8.25C8.38807 2 8.5 2.11193 8.5 2.25V3H10V2.25C10 1.2835 9.2165 0.5 8.25 0.5H2.75ZM7.75 4.5C6.7835 4.5 6 5.2835 6 6.25V13.75C6 14.7165 6.7835 15.5 7.75 15.5H13.25C14.2165 15.5 15 14.7165 15 13.75V6.25C15 5.2835 14.2165 4.5 13.25 4.5H7.75ZM7.5 6.25C7.5 6.11193 7.61193 6 7.75 6H13.25C13.3881 6 13.5 6.11193 13.5 6.25V13.75C13.5 13.8881 13.3881 14 13.25 14H7.75C7.61193 14 7.5 13.8881 7.5 13.75V6.25Z"
      fill="currentColor"
    ></path>
  </svg>
);

export const ThumbUpIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    height={size}
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width={size}
    style={{ color: 'currentcolor' }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.89531 2.23972C6.72984 2.12153 6.5 2.23981 6.5 2.44315V5.25001C6.5 6.21651 5.7165 7.00001 4.75 7.00001H2.5V13.5H12.1884C12.762 13.5 13.262 13.1096 13.4011 12.5532L14.4011 8.55318C14.5984 7.76425 14.0017 7.00001 13.1884 7.00001H9.25H8.5V6.25001V3.51458C8.5 3.43384 8.46101 3.35807 8.39531 3.31114L6.89531 2.23972ZM5 2.44315C5 1.01975 6.6089 0.191779 7.76717 1.01912L9.26717 2.09054C9.72706 2.41904 10 2.94941 10 3.51458V5.50001H13.1884C14.9775 5.50001 16.2903 7.18133 15.8563 8.91698L14.8563 12.917C14.5503 14.1412 13.4503 15 12.1884 15H1.75H1V14.25V6.25001V5.50001H1.75H4.75C4.88807 5.50001 5 5.38808 5 5.25001V2.44315Z"
      fill="currentColor"
    ></path>
  </svg>
);

export const ThumbDownIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    height={size}
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width={size}
    style={{ color: 'currentcolor' }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.89531 13.7603C6.72984 13.8785 6.5 13.7602 6.5 13.5569V10.75C6.5 9.7835 5.7165 9 4.75 9H2.5V2.5H12.1884C12.762 2.5 13.262 2.89037 13.4011 3.44683L14.4011 7.44683C14.5984 8.23576 14.0017 9 13.1884 9H9.25H8.5V9.75V12.4854C8.5 12.5662 8.46101 12.6419 8.39531 12.6889L6.89531 13.7603ZM5 13.5569C5 14.9803 6.6089 15.8082 7.76717 14.9809L9.26717 13.9095C9.72706 13.581 10 13.0506 10 12.4854V10.5H13.1884C14.9775 10.5 16.2903 8.81868 15.8563 7.08303L14.8563 3.08303C14.5503 1.85882 13.4503 1 12.1884 1H1.75H1V1.75V9.75V10.5H1.75H4.75C4.88807 10.5 5 10.6119 5 10.75V13.5569Z"
      fill="currentColor"
    ></path>
  </svg>
);

export const ChevronDownIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    height={size}
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width={size}
    style={{ color: 'currentcolor' }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.0607 6.74999L11.5303 7.28032L8.7071 10.1035C8.31657 10.4941 7.68341 10.4941 7.29288 10.1035L4.46966 7.28032L3.93933 6.74999L4.99999 5.68933L5.53032 6.21966L7.99999 8.68933L10.4697 6.21966L11 5.68933L12.0607 6.74999Z"
      fill="currentColor"
    ></path>
  </svg>
);

export const SparklesIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    height={size}
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width={size}
    style={{ color: 'currentcolor' }}
  >
    <path
      d="M2.5 0.5V0H3.5V0.5C3.5 1.60457 4.39543 2.5 5.5 2.5H6V3V3.5H5.5C4.39543 3.5 3.5 4.39543 3.5 5.5V6H3H2.5V5.5C2.5 4.39543 1.60457 3.5 0.5 3.5H0V3V2.5H0.5C1.60457 2.5 2.5 1.60457 2.5 0.5Z"
      fill="currentColor"
    ></path>
    <path
      d="M14.5 4.5V5H13.5V4.5C13.5 3.94772 13.0523 3.5 12.5 3.5H12V3V2.5H12.5C13.0523 2.5 13.5 2.05228 13.5 1.5V1H14H14.5V1.5C14.5 2.05228 14.9477 2.5 15.5 2.5H16V3V3.5H15.5C14.9477 3.5 14.5 3.94772 14.5 4.5Z"
      fill="currentColor"
    ></path>
    <path
      d="M8.40706 4.92939L8.5 4H9.5L9.59294 4.92939C9.82973 7.29734 11.7027 9.17027 14.0706 9.40706L15 9.5V10.5L14.0706 10.5929C11.7027 10.8297 9.82973 12.7027 9.59294 15.0706L9.5 16H8.5L8.40706 15.0706C8.17027 12.7027 6.29734 10.8297 3.92939 10.5929L3 10.5V9.5L3.92939 9.40706C6.29734 9.17027 8.17027 7.29734 8.40706 4.92939Z"
      fill="currentColor"
    ></path>
  </svg>
);

export const CheckCirclFillIcon = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width={size}
      style={{ color: 'currentcolor' }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM11.5303 6.53033L12.0607 6L11 4.93934L10.4697 5.46967L6.5 9.43934L5.53033 8.46967L5 7.93934L3.93934 9L4.46967 9.53033L5.96967 11.0303C6.26256 11.3232 6.73744 11.3232 7.03033 11.0303L11.5303 6.53033Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export const TurkishAirlinesLogo = () => {
  const [fillColor, setFillColor] = useState('#fff');
  const { theme } = useTheme();
  useEffect(() => {
    setFillColor(theme === 'dark' ? '#fff' : '#000');
  }, [theme]);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 306 48"
      width="196"
      height="36"
      aria-label="Turkish Airlines"
    >
      <g clipPath="url(#tk-brand-text_svg__a)">
        <path fill="#fff" d="M26.524.128c12.07 1.256 21.502 11.456 21.502 23.86C48.026 37.236 37.288 48 24.038 48S0 37.262 0 24.013C0 10.763 10.738 0 23.987 0c.846 0 1.692.051 2.512.128zm1.23 46.206c12.327-2.076 20.656-13.736 18.58-26.088C44.617 9.995 36.237 2.51 26.37 1.46a22.4 22.4 0 0 0-6.124.205 22 22 0 0 0-6.843 2.332c10.866 3.69 16.71 9.303 17.12 15.043.204 3.537-1.462 6.1-3.614 8.2l15.376-1.075c.436-.026.564.486.051.615L5.664 37.288c3.741 5.15 9.533 8.56 15.966 9.226a22.4 22.4 0 0 0 6.124-.205zM17.657 24.525c2-7.56-.282-15.479-5.766-19.656A22.68 22.68 0 0 0 1.666 27.754a22.6 22.6 0 0 0 3.178 8.355c5.843-1.615 10.968-4.716 12.813-11.584"></path>
        <path fill="#C90019" d="M46.334 20.245c2.076 12.327-6.253 24.013-18.58 26.089-2.075.359-4.126.41-6.124.205-6.433-.666-12.225-4.1-15.966-9.226l36.672-10.507c.539-.154.385-.666-.05-.615l-15.377 1.076c2.178-2.101 3.818-4.664 3.613-8.2-.41-5.741-6.253-11.353-17.119-15.044a23.5 23.5 0 0 1 6.843-2.332 22.4 22.4 0 0 1 6.125-.205c9.866 1.025 18.22 8.508 19.963 18.785zm-44.668 7.51a22.6 22.6 0 0 0 3.178 8.354c5.843-1.615 10.968-4.716 12.813-11.584 2-7.56-.282-15.479-5.766-19.656A22.68 22.68 0 0 0 1.666 27.754"></path>
        <path fill={fillColor} fillRule="evenodd" d="M143.923 29.01v3.613c1.461.615 3.357 1.051 5.766 1.051 3.895 0 6.817-1.999 6.817-5.664 0-3.61-2.111-4.549-4.275-5.511-.371-.165-.743-.331-1.107-.511l-.076-.029c-1.874-.699-2.922-1.09-2.922-2.354 0-1.205.897-1.897 2.793-1.897 1.743 0 3.511.538 4.485 1v-3.511a14.4 14.4 0 0 0-4.792-.846c-3.87 0-6.664 1.717-6.664 5.382 0 3.152 1.871 4.51 3.844 5.382.551.234 1.05.43 1.495.605 1.896.746 2.837 1.116 2.837 2.444 0 1.41-1.077 2.127-3.204 2.127-1.845 0-3.613-.64-4.997-1.281M78.727 14.607V26.37c0 1.307.18 2.435.564 3.332s.922 1.666 1.614 2.255a6.6 6.6 0 0 0 2.537 1.282c.974.281 2.102.41 3.306.41s2.307-.129 3.28-.41c.949-.257 1.769-.692 2.41-1.282.64-.59 1.153-1.332 1.512-2.255.358-.923.538-2.05.538-3.357V14.582h-4.075v11.635c0 1.178-.282 2.152-.871 2.844-.59.718-1.538 1.077-2.794 1.077-1.255 0-2.178-.36-2.793-1.077-.59-.692-.897-1.666-.897-2.844V14.582h-4.357zm93.617 18.81v-7.893h-7.919v7.894h-4.331v-18.81h4.331v7.508h7.919v-7.509h4.382v18.81zM66.195 18.119v15.3h4.357v-15.3h3.306c1 0 1.82-.82 1.82-1.82v-1.69H61.095v3.51zm74.166-3.51h-4.357v18.81h4.357zm-18.785 10.075.128.15 5.561 7.15a3.65 3.65 0 0 0 2.922 1.435h3.459l-7.944-10.123-.128-.154.128-.153 6.535-8.406h-4.511l-5.996 8.098-.154.205v-8.303h-4.357v18.81h4.357zm-10.046 8.735a3.75 3.75 0 0 1-3.178-1.794l-3.383-5.587h-2.152v7.355h-4.331V14.607h7.739c1.999 0 3.537.513 4.639 1.538q1.614 1.538 1.614 4.151c0 .872-.23 1.769-.692 2.666-.461.87-1.256 1.563-2.409 2.101l-.256.128 5.279 8.227zm-8.662-10.2h2.511c.923 0 1.615-.256 2.076-.743s.692-1.128.692-1.871-.231-1.41-.666-1.922c-.436-.487-1.153-.743-2.076-.743h-2.537zm175.24 10.2v-18.81h11.763v1.716c0 1-.82 1.794-1.794 1.794h-5.613v4.05h6.305v3.126h-6.305v4.587h7.432v3.51h-11.763zm-42.952-18.81v18.784h11.276v-3.383h-6.945V16.837c0-1.23-.999-2.23-2.23-2.23zm-22.526.025h-4.357v18.785h4.357zm13.813 16.99a3.75 3.75 0 0 0 3.178 1.795h2.87l-5.279-8.227.256-.128c1.153-.538 1.948-1.23 2.409-2.101.462-.897.692-1.794.692-2.666q0-2.613-1.614-4.151c-1.102-1.025-2.64-1.538-4.639-1.538h-7.739v18.785h4.331v-7.355h2.152zm-2.973-8.405h-2.511v-5.28h2.537c.923 0 1.64.257 2.076.744.435.512.666 1.179.666 1.922s-.231 1.384-.692 1.87c-.461.488-1.153.744-2.076.744m-24.756-8.61h-4.997l-7.099 18.81h3.127a1.85 1.85 0 0 0 1.743-1.256l.717-2.204h7.637l1.128 3.46h4.715zm-5.356 11.941 1.717-4.74c.385-1.077.769-2.205 1-3.025h.051c.231.872.59 1.922.974 3.024l1.64 4.741zm100.024 2.46v3.614c1.46.615 3.357 1.051 5.766 1.051 3.895 0 6.817-1.999 6.817-5.664 0-3.61-2.111-4.549-4.275-5.511-.371-.165-.743-.331-1.107-.511l-.076-.029c-1.875-.699-2.922-1.09-2.922-2.354 0-1.205.897-1.897 2.793-1.897 1.743 0 3.511.538 4.485 1v-3.511a14.4 14.4 0 0 0-4.793-.846c-3.869 0-6.663 1.717-6.663 5.382 0 3.152 1.871 4.51 3.844 5.382.551.234 1.049.43 1.494.605h.001c1.895.746 2.836 1.116 2.836 2.444 0 1.41-1.076 2.127-3.203 2.127-1.845 0-3.613-.64-4.997-1.281M257.58 14.608h2.666c1.281 0 2.46.666 3.152 1.743l5.253 8.431c.59.948 1.282 2.178 1.692 3.05h.102a54 54 0 0 1-.102-2.87V14.607h3.818v18.81h-4.766l-6.382-10.173c-.589-.923-1.204-2.05-1.665-2.895v-.001h-.052c.01.304.026.627.044.959.028.562.059 1.152.059 1.732v10.379h-3.819zm-8.329.026h4.357v18.785h-4.357z" clipRule="evenodd"></path>
      </g>
      <defs>
        <clipPath id="tk-brand-text_svg__a">
          <path fill="#fff" d="M0 0h305.965v48H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

export const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);