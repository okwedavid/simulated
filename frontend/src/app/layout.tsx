import "./globals.css";

export const metadata={title:"LedgerLab",description:"Explore how simulated digital money transfers work"};

const themeInit = `try { if (localStorage.getItem("ledgerlab_theme") === "light") document.documentElement.classList.add("light"); } catch {}`;

export default function Root({children}:{children:React.ReactNode}){
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:themeInit}} /></head><body>{children}</body></html>
}
