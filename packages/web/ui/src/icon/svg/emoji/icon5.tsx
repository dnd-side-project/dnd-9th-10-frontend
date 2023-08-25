import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={56}
      height={56}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M55.926 28.009l-.2.587v.592l.109.599-.137.58.21.616-.393.547.012.599-.114.58-.091.582.045.616-.194.564-.177.564-.08.593-.085.592-.399.496-.32.513-.05.61-.234.541-.12.593-.194.564-.388.473-.068.627-.422.45-.148.592-.542.377-.416.433-.165.592-.143.61-.638.285-.314.496-.388.444-.28.525-.181.62-.52.331-.256.57-.616.228-.399.439-.359.473-.365.473-.37.478-.61.206-.371.478-.382.473-.713.046-.405.439-.387.473-.679.045-.325.599-.633.09-.53.257-.536.245-.365.576-.627.057-.45.444-.57.171-.52.29-.524.303-.701-.211-.445.524-.576.154-.558.194-.588.102-.621-.05-.519.387-.621-.08-.53.382-.605-.017-.593.057-.593.028-.61-.182-.576.176-.587-.045-.587.108-.593.017-.593.154-.599.057-.57-.405-.616.308-.593-.028-.547-.428-.633.274-.582-.148-.593-.057-.524-.388-.627.086-.508-.394-.604-.028-.547-.24-.639.058-.576-.154-.507-.337-.445-.49-.644.023-.622-.063-.513-.307-.49-.36-.507-.301-.525-.274-.479-.353-.604-.148-.32-.599-.695-.022-.274-.644-.456-.37-.456-.365-.479-.342-.439-.394-.724-.062-.262-.593-.628-.2-.268-.57-.461-.381-.297-.53-.273-.541-.45-.388-.525-.33-.394-.445-.21-.581-.61-.29-.223-.565-.2-.575-.273-.525-.365-.467-.285-.519-.53-.381-.07-.633-.467-.433-.17-.576-.075-.615-.427-.462-.206-.558-.205-.553.148-.678-.507-.456-.034-.61-.149-.57.04-.615-.25-.547-.069-.587-.456-.519.29-.644-.358-.546.216-.622-.24-.57.024-.592L0 29.2l.274-.599-.057-.592.09-.587-.187-.599.205-.581-.148-.604.074-.587.051-.587.188-.575-.045-.605.188-.57.29-.54.137-.57.189-.56-.12-.643.28-.536.033-.61.417-.484-.103-.66.422-.48.085-.604.314-.507.348-.49.342-.49.336-.49.069-.633.467-.41.006-.684.65-.29.142-.61.502-.365.023-.718.405-.439.581-.29.348-.479.49-.348.143-.666.422-.422.627-.21.28-.554.364-.473.342-.512.502-.325.639-.16.502-.313.273-.616.587-.193.44-.405.501-.308.513-.296.428-.433.553-.228.65-.04.365-.576.547-.239.667.04.474-.388.478-.381.622-.035.49-.381.519-.314.684.2.559-.2.479-.49.616.023.615.057.576-.125.52-.456.643.285.536-.468.593-.022.622.267.587.023.582-.21.587-.046.593.023.593-.217.581.433.593-.148.605-.125.581.136.576.183.57.16.622-.143.53.404.593.006.638-.125.548.239.547.25.536.263.576.131.621.011.542.24.507.33.633.017.434.49.655-.011.37.587.696-.057.542.25.37.548.44.416.592.154.605.165.257.667.524.273.41.433.668.109.444.387.354.496.57.25.194.662.678.148.33.507.326.501.325.502.507.336.514.348.29.524.177.604.542.342.228.558.28.525.244.535.422.433.183.576.598.348.131.598.017.65.411.456.365.484.125.587.394.484.16.57-.052.644.519.456-.16.66.069.594.262.535.348.53-.137.633.16.57.154.57.245.564-.2.62.103.582.319.57-.234.604.2.587-.04.593z"
        fill="#E27F76"
      />
      <g clipPath="url(#clip0_553_7156)">
        <path
          d="M33.117 22.35c.23 0 .511.122.715.36.091.11.288.24.367.387.065.116-.125.252-.066.394.052.122.387.251.433.386.039.123-.19.258-.151.394.033.122.131.251.164.386.026.123-.157.258-.131.387.026.13.472.252.491.387.02.129 0 .258.02.387s-.04.258-.026.387c.013.129-.177.257-.17.386.006.13.255.258.262.387 0 .13-.256.258-.25.387 0 .129-.006.258-.006.387s.197.258.197.387c0 .128.124.264.118.386-.007.13-.354.258-.367.387-.014.129.085.264.072.387-.014.129-.086.264-.105.387-.02.129.033.264.013.386-.02.136-.046.265-.072.387-.026.136-.164.265-.19.387-.033.135.242.264.21.387-.04.135-.394.264-.433.387-.046.135-.151.264-.204.386-.059.142-.013.271-.078.387-.085.148-.203.277-.295.387-.197.238-.289.374-.518.374-.23 0-.65-.13-.846-.368-.092-.11-.105-.238-.19-.386-.065-.117-.013-.252-.072-.387-.052-.123.079-.252.033-.387-.04-.123-.256-.251-.289-.387-.032-.122-.157-.251-.19-.387-.026-.122.19-.257.164-.386-.026-.13-.157-.258-.177-.387-.02-.13.013-.258 0-.387s-.033-.258-.046-.387c-.013-.129.033-.258.02-.386-.007-.13-.348-.258-.354-.387 0-.13.026-.258.02-.387 0-.129.163-.258.163-.387s-.013-.258-.013-.387-.052-.258-.046-.386c0-.13-.111-.265-.104-.387.013-.13.157-.264.17-.387.013-.129.033-.264.053-.387.02-.135.17-.264.19-.387.02-.135-.236-.264-.21-.393.026-.135.052-.264.085-.387.033-.135.17-.264.21-.386.04-.136.177-.265.216-.387.046-.136-.072-.27-.02-.393.06-.142.27-.271.335-.387.085-.148.006-.284.098-.387.203-.238.564-.36.793-.36l.007-.007zM22.32 22.35c.23 0 .511.122.715.36.091.11.288.24.367.387.065.116-.125.252-.066.394.053.122.387.251.433.386.04.123-.19.258-.15.394.032.122.13.251.163.386.026.123-.157.258-.131.387.026.13.472.252.491.387.02.129 0 .258.02.387s-.04.258-.026.387c.013.129-.177.257-.17.386.006.13.255.258.262.387 0 .13-.256.258-.25.387 0 .129-.006.258-.006.387s.197.258.197.387c0 .128.124.264.124.386-.006.13-.354.258-.367.387-.013.129.085.264.072.387-.013.129-.085.264-.105.387-.02.129.033.264.014.386-.02.136-.046.265-.073.387-.026.136-.163.265-.196.387-.033.135.242.264.21.387-.04.135-.394.264-.433.387-.046.135-.15.264-.203.386-.06.142-.014.271-.08.387-.084.148-.202.277-.294.387-.197.238-.289.374-.518.374-.23 0-.649-.13-.846-.368-.091-.11-.105-.238-.19-.386-.065-.117-.013-.252-.072-.387-.052-.123.079-.252.033-.387-.04-.123-.256-.251-.289-.387-.032-.122-.157-.251-.19-.387-.026-.122.19-.257.164-.386-.026-.13-.157-.258-.177-.387-.02-.13.013-.258 0-.387s-.032-.258-.046-.387c-.013-.129.033-.258.02-.386-.006-.13-.347-.258-.354-.387 0-.13.026-.258.02-.387 0-.129.164-.258.164-.387s-.013-.258-.013-.387-.053-.258-.046-.386c0-.13-.112-.265-.105-.387.013-.13.157-.264.17-.387.013-.129.033-.264.053-.387.02-.135.17-.264.19-.387.02-.135-.236-.264-.21-.393a5.73 5.73 0 01.085-.387c.033-.135.17-.264.21-.386.04-.136.177-.265.216-.387.046-.136-.072-.27-.02-.393.06-.142.27-.271.335-.387.085-.148.006-.284.098-.387.204-.238.564-.36.794-.36l.006-.007z"
          fill="#2F2F2F"
        />
        <path
          d="M20.176 39.918l.686-.347.673-.248.471-.46.532-.414.538-.421.552-.46.78.113.653-.16.512-.668.673-.154.713.047.673.173.31-.434.733.007.686.44.687.188.747-.054.754.027.504.688.74.1.552.468.673.273.646.34.323.695.727.454-.565-.287M18 16l.485.588.767.04.43.694.734.1.653.26.565.442.754.06.585.394.458.647.733.107.666.24.68.221.592.374.579.42.552.481.713.127.673-.247.485-.587.774-.1.652-.321.485-.601.666-.287.552-.494.78-.087.525-.534.781-.094.491-.6.808-.054.558-.488.693-.26"
          stroke="#2F2F2F"
          strokeWidth={2}
          strokeMiterlimit={10}
        />
      </g>
      <defs>
        <clipPath id="clip0_553_7156">
          <path fill="#fff" transform="translate(16 10)" d="M0 0H24V30H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgComponent;