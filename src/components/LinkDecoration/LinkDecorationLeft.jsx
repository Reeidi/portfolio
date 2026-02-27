import "./LinkDecoration.css";

export default function LinkDecorationLeft() {
  return (
    // <svg
    //     viewBox="0 0 60 98"
    //     className={`w-6 h-6 opening link-decoration`}>
    //     <path d="M51.42,97.72c-2.11,0-4.22-.77-5.88-2.32L2.73,55.35c-1.74-1.63-2.73-3.9-2.73-6.28s.99-4.66,2.73-6.28l21.41-20.03L45.54,2.73c3.47-3.25,8.92-3.06,12.16.41,3.25,3.47,3.06,8.91-.41,12.16L21.2,49.07l36.1,33.77c3.47,3.25,3.65,8.69.41,12.16-1.69,1.81-3.99,2.73-6.29,2.73Z"/>
    // </svg>

    //<svg class="link-decoration tag" viewBox="0 0 24 24" aria-hidden="true" width="36px" height="36px">
    //  {/* <path d="M14 6 8 12 14 18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/> */}
    //  {/* <path d="M14 6 L8 12 L14 18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/> */}
    //  <path d="M14 6 l-6 6 l6 6" stroke="currentColor" />
    //</svg>

    <>
    <svg class="link-decoration tag" viewBox="0 0 12 16" aria-hidden="true" width="16px" height="32px">
      {/* <path d="M14 6 8 12 14 18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/> */}
      {/* <path d="M14 6 L8 12 L14 18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/> */}
      <path d="M8 2 l-6 6 l6 6" stroke="currentColor" />
    </svg>
    </>
  );
}
