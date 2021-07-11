import React, { useEffect, useState } from "react";
import User from "./Components/User/User";
import Loading from "./Components/Loading/Loading";
import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 10000)
  }, [])

  if (loading) {
    return <Loading />
  }
  return (
  <>
    <User />
    </>
  );
}
