import "./App.css";
import logo from "./static/logo.jpg";
import React from "react";
import ReactDOM from "react-dom/client";
const body = (
  <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a arcu
    auctor, blandit leo sit amet, auctor purus. Nunc vel ornare est. Maecenas ex
    odio, viverra sed orci quis, bibendum congue ante. Maecenas tincidunt nibh
    quis ullamcorper lobortis. Maecenas in orci ligula. Praesent tempor ligula
    dui. Aliquam efficitur orci ut convallis pellentesque. Donec ut efficitur
    sem. Ut interdum convallis est, et blandit dolor bibendum eget. Pellentesque
    ac massa eget leo mollis lobortis et at sem. Integer pharetra velit et metus
    congue, id tristique orci pretium. Nullam nec est at tellus imperdiet
    maximus. Etiam egestas ex sed nisl consectetur ornare. Aenean aliquam purus
    quis velit pretium vehicula. Nullam maximus lacus at nunc aliquam
    sollicitudin. Cras rutrum nunc urna, ut pharetra velit molestie non. Aliquam
    erat volutpat. Aenean scelerisque ultrices mi, sit amet rhoncus lacus dictum
    sed. Vestibulum accumsan euismod lorem. In hac habitasse platea dictumst.
    Quisque id scelerisque odio, ut vulputate ligula. Donec in imperdiet augue,
    non iaculis diam. Sed sit amet mauris ac risus varius eleifend. Pellentesque
    vel magna vehicula, posuere nisl id, sagittis tellus. Pellentesque sit amet
    egestas lacus. Nulla quis est ut tellus porttitor tristique. Etiam sed justo
    neque. Suspendisse molestie, mi eget blandit varius, nibh risus dignissim
    eros, eu dictum tortor lorem quis ipsum. Vestibulum rhoncus libero vitae
    suscipit hendrerit. Maecenas interdum leo vitae tellus varius congue.
    Vestibulum at vehicula metus, et tempus ante. Nam hendrerit, velit vel
    dignissim tempor, mi urna pharetra elit, in efficitur justo velit id tortor.
    Ut dignissim tempor sem a tincidunt. Nulla sed odio facilisis, imperdiet
    purus non, dapibus ipsum. Pellentesque sed felis sed orci aliquet
    condimentum. Aenean faucibus interdum tortor, non mattis felis dignissim eu.
    Integer iaculis ut nulla sit amet pharetra. Aenean ligula turpis, dignissim
    vitae lobortis id, tincidunt a velit. Nulla luctus risus elit, et sodales
    lacus ultrices vitae. Aliquam aliquam libero ut diam euismod, sit amet
    rutrum neque commodo. Nullam dignissim lobortis neque, eget euismod augue
    commodo ac. Nam tempor, justo sed maximus semper, leo leo suscipit eros, at
    imperdiet magna nunc eu ipsum. Quisque convallis, purus a fermentum
    vehicula, sem enim imperdiet ante, ut ultrices quam magna eget leo. Proin
    sed est lorem. Vivamus finibus eleifend est, in tristique lorem imperdiet
    vitae. Duis vestibulum augue vitae ex tempor dignissim. Vivamus ultrices
    ipsum quis mi imperdiet imperdiet vel sit amet libero. Quisque a tortor
    risus. Etiam feugiat leo a eros scelerisque fringilla. Aenean dapibus tempor
    est a lacinia. Integer commodo accumsan neque, eget elementum ipsum aliquam
    id. Sed euismod justo vitae urna fringilla, eu bibendum ligula feugiat.
    Suspendisse sed ex elit. Proin vitae metus tempor, imperdiet arcu at,
    vulputate nunc.
  </div>
);
//const Body = () => (body)

const Header = function () {
  return (
    <header className="header">
      <div id="logo">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div id="search">
        <input
          type="text"
          className="search"
          placeholder="Search..."
          autofocus="true"
        />
      </div>
      <div id="icon">
        <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M256 112c-48.6 0-88 39.4-88 88C168 248.6 207.4 288 256 288s88-39.4 88-88C344 151.4 304.6 112 256 112zM256 240c-22.06 0-40-17.95-40-40C216 177.9 233.9 160 256 160s40 17.94 40 40C296 222.1 278.1 240 256 240zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-46.73 0-89.76-15.68-124.5-41.79C148.8 389 182.4 368 220.2 368h71.69c37.75 0 71.31 21.01 88.68 54.21C345.8 448.3 302.7 464 256 464zM416.2 388.5C389.2 346.3 343.2 320 291.8 320H220.2c-51.36 0-97.35 26.25-124.4 68.48C65.96 352.5 48 306.3 48 256c0-114.7 93.31-208 208-208s208 93.31 208 208C464 306.3 446 352.5 416.2 388.5z" />
        </svg>
      </div>
    </header>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
