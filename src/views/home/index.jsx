import React, { useState, useEffect } from "react";
import Splash from "../splash";
import Main from "../../components/main-wrapper";

function Home() {
    const [loading, setLoading] = useState(false);
     useEffect(() => {
       setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <> {loading ? <Splash/> : <Main/>} </>
  )
}

export default Home