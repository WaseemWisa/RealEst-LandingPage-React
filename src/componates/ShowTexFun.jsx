import React, { useState } from "react";


const ShowTexFun = ({childern}) => {
  const [showText, setshowText] = useState(false);
  const toggleBtn = () => { setshowText(!showText) }

  console.log(childern.length);
  return (
    <p className="box-desc text-slate-800	 text-lg">
      {showText ? childern : childern.substring(childern.length - 80, childern)}
      <button className="pl-1" onClick={toggleBtn}>{showText ? 'less' :'more'}</button>
    </p>
  )
}

export default ShowTexFun