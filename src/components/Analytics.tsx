import Script from "next/script";
import { ADS_ID, GA_ID, PIXEL_ID } from "@/lib/track";
import { CONSENT_KEY } from "@/lib/consent";
import TrackingListeners from "./TrackingListeners";

/**
 * Google tag (GA4 + Google Ads) and Meta Pixel. Consent defaults come first,
 * read from the visitor's saved choice so a returning visitor's first page
 * view isn't lost.
 */
export default function Analytics() {
  const readConsent = `var c=null;try{c=localStorage.getItem(${JSON.stringify(CONSENT_KEY)})}catch(e){}var g=c==="granted"?"granted":"denied";`;

  const google = `${readConsent}
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;
gtag("consent","default",{ad_storage:g,ad_user_data:g,ad_personalization:g,analytics_storage:g,wait_for_update:500});
gtag("set","ads_data_redaction",g==="denied");
gtag("set","url_passthrough",true);
gtag("js",new Date());
gtag("config",${JSON.stringify(GA_ID)});
${ADS_ID ? `gtag("config",${JSON.stringify(ADS_ID)},{allow_enhanced_conversions:true});` : ""}`;

  const meta = `${readConsent}
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version="2.0";n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");
fbq("consent",g==="granted"?"grant":"revoke");
fbq("init",${JSON.stringify(PIXEL_ID)});
fbq("track","PageView");`;

  return (
    <>
      <Script id="google-tag-init">{google}</Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
      {PIXEL_ID ? <Script id="meta-pixel">{meta}</Script> : null}
      <TrackingListeners />
    </>
  );
}
