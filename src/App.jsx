
import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Solutions from "./pages/Solutions";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function usePath() {
 const [path,setPath]=useState(window.location.pathname.replace(/\/+$/,"") || "/");
 useEffect(()=>{
   const onPop=()=>setPath(window.location.pathname.replace(/\/+$/,"")||"/");
   window.addEventListener("popstate",onPop);
   const onClick=e=>{
     const a=e.target.closest("a"); if(!a) return;
     const url=new URL(a.href);
     if(url.origin===window.location.origin && !a.target && !a.hasAttribute("download")){
       e.preventDefault(); history.pushState({}, "", url.pathname); setPath(url.pathname.replace(/\/+$/,"")||"/");
     }
   };
   document.addEventListener("click",onClick);
   return()=>{window.removeEventListener("popstate",onPop);document.removeEventListener("click",onClick);}
 },[]);
 return path;
}

export default function App(){
 const path=usePath();
 let page=<NotFound/>;
 if(path==="/") page=<Home/>;
 else if(path==="/about") page=<About/>;
 else if(path==="/services") page=<Services/>;
 else if(path==="/solutions") page=<Solutions/>;
 else if(path==="/contact") page=<Contact/>;
 else if(path.startsWith("/services/")) page=<ServiceDetail slug={path.split("/").pop()}/>;
 useEffect(()=>{ const titles={"/":"Silicon Systems & Securities | IT & Security Solutions","/about":"About Us | Silicon Systems & Securities","/services":"IT & Security Services | Silicon Systems & Securities","/solutions":"Business Technology Solutions | Silicon Systems & Securities","/contact":"Contact Us | Silicon Systems & Securities"}; document.title=titles[path]||"Silicon Systems & Securities"; },[path]);
 return <><ScrollToTop path={path}/><Layout>{page}</Layout></>;
}
