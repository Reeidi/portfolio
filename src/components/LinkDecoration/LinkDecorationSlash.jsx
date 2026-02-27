import "./LinkDecoration.css";

export default function LinkDecorationSlash() {
  return (
    // <svg
    //     viewBox="0 0 50 98"
    //     className={`w-[14px] h-6 link-decoration`}>
    //     <line x1="2" y1="24.21" x2="12.13" y2="2"/>

    //     {/* <path class="cls-1" d="M7.12,97.72c-.82,0-1.66-.14-2.48-.45-3.68-1.37-5.56-5.45-4.19-9.12L31.51,5.03c1.37-3.67,5.47-5.54,9.15-4.17,3.68,1.37,5.56,5.45,4.19,9.12L13.79,93.1c-1.07,2.85-3.78,4.62-6.67,4.62Z"/> */}
    // </svg>

    <svg class="link-decoration tag" viewBox="0 0 24 24" aria-hidden="true" width="20px" height="28px">
      <path d="M18 0 7 23" stroke="currentColor" stroke-width="4px" />
    </svg>
  );
}
